import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

// GET - Lấy danh sách categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: { select: { courses: true, blogs: true, products: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

// POST - Thêm category mới
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const category = await prisma.category.create({
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        status: body.status || 'active'
      }
    })
    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
}

// PUT - Cập nhật category
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const category = await prisma.category.update({
      where: { id: parseInt(body.id) },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        status: body.status
      }
    })
    return NextResponse.json(category)
  } catch (error) {
    console.error('Error updating category:', error)
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 })
  }
}

// DELETE - Xóa category
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    
    await prisma.category.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting category:', error)
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
