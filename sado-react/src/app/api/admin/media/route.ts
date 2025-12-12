import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadToR2, deleteFromR2, generateFileKey, PUBLIC_URL } from '@/lib/r2'
import { convertToWebP, isConvertibleImage, getImageMetadata } from '@/lib/image-converter'

// GET - List all media
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const type = searchParams.get('type') // image, video, document
    const folder = searchParams.get('folder')
    const search = searchParams.get('search')

    const where: any = {}
    
    if (type) {
      where.type = type
    }
    if (folder) {
      where.folder = folder
    }
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { originalName: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [media, total] = await Promise.all([
      prisma.media.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.media.count({ where }),
    ])

    return NextResponse.json({
      data: media,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json(
      { error: 'Không thể tải danh sách media' },
      { status: 500 }
    )
  }
}

// POST - Upload new media
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const folder = (formData.get('folder') as string) || 'uploads'
    const convertToWebp = formData.get('convertToWebp') !== 'false' // Default true

    if (!file) {
      return NextResponse.json(
        { error: 'Không có file được tải lên' },
        { status: 400 }
      )
    }

    // Get file buffer
    const bytes = await file.arrayBuffer()
    let buffer = Buffer.from(bytes)
    
    const originalName = file.name
    const mimeType = file.type
    let finalMimeType = mimeType
    let finalName = originalName
    let width: number | null = null
    let height: number | null = null
    let isConverted = false

    // Determine file type
    let type = 'document'
    if (mimeType.startsWith('image/')) {
      type = 'image'
    } else if (mimeType.startsWith('video/')) {
      type = 'video'
    } else if (mimeType.startsWith('audio/')) {
      type = 'audio'
    }

    // Convert image to WebP if applicable
    if (type === 'image' && convertToWebp && isConvertibleImage(mimeType)) {
      const converted = await convertToWebP(buffer, 85)
      buffer = converted.buffer
      width = converted.width
      height = converted.height
      finalMimeType = 'image/webp'
      finalName = originalName.replace(/\.[^/.]+$/, '.webp')
      isConverted = true
    } else if (type === 'image') {
      // Get metadata for non-converted images
      const metadata = await getImageMetadata(buffer)
      width = metadata.width
      height = metadata.height
    }

    // Generate unique key and upload to R2
    const key = generateFileKey(folder, finalName)
    const url = await uploadToR2(buffer, key, finalMimeType)

    // Save to database
    const media = await prisma.media.create({
      data: {
        name: finalName,
        originalName,
        url,
        key,
        type,
        mimeType: finalMimeType,
        size: buffer.length,
        width,
        height,
        isConverted,
        folder,
      },
    })

    return NextResponse.json({
      message: 'Upload thành công',
      data: media,
    })
  } catch (error) {
    console.error('Error uploading media:', error)
    return NextResponse.json(
      { error: 'Không thể upload file' },
      { status: 500 }
    )
  }
}

// DELETE - Delete multiple media
export async function DELETE(request: NextRequest) {
  try {
    const { ids } = await request.json()

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: 'Vui lòng chọn file cần xóa' },
        { status: 400 }
      )
    }

    // Get media records
    const mediaList = await prisma.media.findMany({
      where: { id: { in: ids } },
    })

    // Delete from R2
    await Promise.all(
      mediaList.map(media => deleteFromR2(media.key))
    )

    // Delete from database
    await prisma.media.deleteMany({
      where: { id: { in: ids } },
    })

    return NextResponse.json({
      message: `Đã xóa ${mediaList.length} file`,
    })
  } catch (error) {
    console.error('Error deleting media:', error)
    return NextResponse.json(
      { error: 'Không thể xóa file' },
      { status: 500 }
    )
  }
}
