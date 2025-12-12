import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all tags
export async function GET() {
  try {
    const tags = await prisma.postTag.findMany({
      include: {
        _count: { select: { posts: true } }
      },
      orderBy: { name: 'asc' }
    })
    return NextResponse.json(tags)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 })
  }
}

// POST create tag
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name } = body
    
    const slug = name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    const tag = await prisma.postTag.create({
      data: { name, slug }
    })
    
    return NextResponse.json(tag)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Tag đã tồn tại' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create tag' }, { status: 500 })
  }
}

// DELETE multiple tags
export async function DELETE(request: NextRequest) {
  try {
    const { ids } = await request.json()
    
    await prisma.postTag.deleteMany({
      where: { id: { in: ids } }
    })
    
    return NextResponse.json({ message: 'Đã xóa tags' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete tags' }, { status: 500 })
  }
}
