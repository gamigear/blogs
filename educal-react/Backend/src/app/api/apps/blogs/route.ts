import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

// GET - Lấy danh sách blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        category: true,
        author: { select: { id: true, name: true, email: true, avatar: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(blogs)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

// POST - Thêm blog mới
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        excerpt: body.excerpt,
        image: body.image,
        categoryId: body.categoryId ? parseInt(body.categoryId) : null,
        tag: body.tag,
        authorId: body.authorId ? parseInt(body.authorId) : null,
        status: body.status || 'draft',
        featured: body.featured || false,
        publishedAt: body.status === 'published' ? new Date() : null
      },
      include: { category: true, author: true }
    })
    return NextResponse.json(blog, { status: 201 })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}

// PUT - Cập nhật blog
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const blog = await prisma.blog.update({
      where: { id: parseInt(body.id) },
      data: {
        title: body.title,
        content: body.content,
        excerpt: body.excerpt,
        image: body.image,
        categoryId: body.categoryId ? parseInt(body.categoryId) : null,
        tag: body.tag,
        status: body.status,
        featured: body.featured,
        publishedAt: body.status === 'published' && !body.publishedAt ? new Date() : body.publishedAt
      },
      include: { category: true, author: true }
    })
    return NextResponse.json(blog)
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

// DELETE - Xóa blog
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    
    await prisma.blog.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}
