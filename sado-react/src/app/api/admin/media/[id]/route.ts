import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { deleteFromR2 } from '@/lib/r2'

// GET - Get single media
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    const media = await prisma.media.findUnique({
      where: { id },
    })

    if (!media) {
      return NextResponse.json(
        { error: 'Không tìm thấy file' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: media })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json(
      { error: 'Không thể tải thông tin file' },
      { status: 500 }
    )
  }
}

// PATCH - Update media info
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { name, folder } = body

    const media = await prisma.media.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(folder && { folder }),
      },
    })

    return NextResponse.json({
      message: 'Cập nhật thành công',
      data: media,
    })
  } catch (error) {
    console.error('Error updating media:', error)
    return NextResponse.json(
      { error: 'Không thể cập nhật file' },
      { status: 500 }
    )
  }
}

// DELETE - Delete single media
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    const media = await prisma.media.findUnique({
      where: { id },
    })

    if (!media) {
      return NextResponse.json(
        { error: 'Không tìm thấy file' },
        { status: 404 }
      )
    }

    // Delete from R2
    await deleteFromR2(media.key)

    // Delete from database
    await prisma.media.delete({
      where: { id },
    })

    return NextResponse.json({
      message: 'Đã xóa file thành công',
    })
  } catch (error) {
    console.error('Error deleting media:', error)
    return NextResponse.json(
      { error: 'Không thể xóa file' },
      { status: 500 }
    )
  }
}
