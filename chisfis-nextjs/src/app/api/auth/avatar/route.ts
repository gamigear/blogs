import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { sql } from '@/lib/db'
import { uploadToR2 } from '@/lib/r2'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('avatar') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 })
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    // Upload to R2
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `${payload.userId}-${Date.now()}.${file.name.split('.').pop()}`
    
    const result = await uploadToR2(buffer, filename, file.type, 'avatars')

    // Update user avatar in database
    await sql`UPDATE users SET avatar = ${result.url}, updated_at = NOW() WHERE id = ${payload.userId}`

    return NextResponse.json({ success: true, url: result.url })
  } catch (error) {
    console.error('Upload avatar error:', error)
    return NextResponse.json({ error: 'Failed to upload avatar' }, { status: 500 })
  }
}
