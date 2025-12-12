import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// PUT update tag
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name } = body
    
    const slug = name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    const tag = await prisma.postTag.update({
      where: { id: parseInt(params.id) },
      data: { name, slug }
    })
    
    return NextResponse.json(tag)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update tag' }, { status: 500 })
  }
}

// DELETE single tag
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.postTag.delete({
      where: { id: parseInt(params.id) }
    })
    return NextResponse.json({ message: 'Đã xóa tag' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete tag' }, { status: 500 })
  }
}
