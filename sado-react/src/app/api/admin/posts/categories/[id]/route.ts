import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single category
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = await prisma.postCategory.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        parent: true,
        children: true,
        _count: { select: { posts: true } }
      }
    })
    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }
    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch category' }, { status: 500 })
  }
}

// PUT update category
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, description, thumbnail, parentId, order } = body
    
    const updateData: any = { description, thumbnail, order }
    
    if (name) {
      updateData.name = name
      updateData.slug = name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }
    
    if (parentId !== undefined) {
      updateData.parentId = parentId || null
    }
    
    const category = await prisma.postCategory.update({
      where: { id: parseInt(params.id) },
      data: updateData
    })
    
    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 })
  }
}


// DELETE category
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if category has posts
    const category = await prisma.postCategory.findUnique({
      where: { id: parseInt(params.id) },
      include: { _count: { select: { posts: true, children: true } } }
    })
    
    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }
    
    if (category._count.posts > 0) {
      return NextResponse.json(
        { error: 'Không thể xóa danh mục có bài viết. Vui lòng chuyển bài viết sang danh mục khác.' },
        { status: 400 }
      )
    }
    
    if (category._count.children > 0) {
      return NextResponse.json(
        { error: 'Không thể xóa danh mục có danh mục con.' },
        { status: 400 }
      )
    }
    
    await prisma.postCategory.delete({
      where: { id: parseInt(params.id) }
    })
    
    return NextResponse.json({ message: 'Đã xóa danh mục' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
