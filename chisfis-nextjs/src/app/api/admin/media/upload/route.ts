import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { uploadToR2 } from '@/lib/r2'

function getMediaType(mimeType: string): 'image' | 'video' | 'document' | 'other' {
  if (mimeType.startsWith('image/')) return 'image'
  if (mimeType.startsWith('video/')) return 'video'
  if (mimeType.includes('pdf') || mimeType.includes('document') || mimeType.includes('text')) return 'document'
  return 'other'
}

function generateFilename(originalName: string): string {
  const ext = originalName.split('.').pop() || ''
  const name = originalName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '-')
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `${name}-${timestamp}-${random}.${ext}`
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const folder = (formData.get('folder') as string) || 'general'
    const altText = (formData.get('alt_text') as string) || ''

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
      'video/mp4', 'video/webm',
      'application/pdf', 'text/plain'
    ]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'File type not allowed' }, { status: 400 })
    }

    const filename = generateFilename(file.name)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudflare R2
    const { url, key } = await uploadToR2(buffer, filename, file.type, folder)

    const type = getMediaType(file.type)

    // Save to database
    const result = await sql`
      INSERT INTO media (filename, original_name, url, type, mime_type, size, alt_text, folder)
      VALUES (${key}, ${file.name}, ${url}, ${type}, ${file.type}, ${file.size}, ${altText}, ${folder})
      RETURNING *
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
  }
}
