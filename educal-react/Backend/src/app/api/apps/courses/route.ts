import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

// GET - Lấy danh sách courses
export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        category: true,
        author: { select: { id: true, name: true, email: true, avatar: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}

// POST - Thêm course mới
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const course = await prisma.course.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        categoryId: body.categoryId ? parseInt(body.categoryId) : null,
        lesson: body.lesson || 0,
        price: body.price || 0,
        oldPrice: body.oldPrice || 0,
        videoUrl: body.videoUrl,
        authorId: body.authorId ? parseInt(body.authorId) : null,
        status: body.status || 'active',
        featured: body.featured || false
      },
      include: { category: true, author: true }
    })
    return NextResponse.json(course, { status: 201 })
  } catch (error) {
    console.error('Error creating course:', error)
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
}

// PUT - Cập nhật course
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const course = await prisma.course.update({
      where: { id: parseInt(body.id) },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        categoryId: body.categoryId ? parseInt(body.categoryId) : null,
        lesson: body.lesson,
        price: body.price,
        oldPrice: body.oldPrice,
        videoUrl: body.videoUrl,
        status: body.status,
        featured: body.featured
      },
      include: { category: true, author: true }
    })
    return NextResponse.json(course)
  } catch (error) {
    console.error('Error updating course:', error)
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 })
  }
}

// DELETE - Xóa course
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    
    await prisma.course.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting course:', error)
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 })
  }
}
