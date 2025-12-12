import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all categories
export async function GET() {
  try {
    const categories = await prisma.postCategory.findMany({
      include: {
        _count: { select: { posts: true } },
        parent: { select: { id: true, name: true } },
        children: { select: { id: true, name: true, slug: true } }
      },
      orderBy: [{ order: 'asc' }, { name: 'asc' }]
    })
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

// POST create category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, thumbnail, parentId, order } = body
    
    // Generate slug
    const slug = name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    const category = await prisma.postCategory.create({
      data: {
        name,
        slug,
        description,
        thumbnail,
        parentId: parentId || null,
        order: order || 0
      }
    })
    
    return NextResponse.json(category)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Slug đã tồn tại' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
}
