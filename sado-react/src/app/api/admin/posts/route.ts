import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all posts with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status')
    const categoryId = searchParams.get('categoryId')
    const search = searchParams.get('search')
    const tagId = searchParams.get('tagId')

    const where: any = {}
    
    if (status) where.status = status
    if (categoryId) where.categoryId = parseInt(categoryId)
    if (tagId) where.tags = { some: { id: parseInt(tagId) } }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } }
      ]
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          author: { select: { id: true, name: true } },
          category: { select: { id: true, name: true, slug: true } },
          tags: { select: { id: true, name: true, slug: true } }
        }
      }),
      prisma.post.count({ where })
    ])

    return NextResponse.json({
      data: posts,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST create post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, thumbnail, categoryId, tagIds, status, isFeatured } = body
    
    // Generate slug
    const slug = title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    // Check unique slug
    const existing = await prisma.post.findUnique({ where: { slug } })
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug
    
    const post = await prisma.post.create({
      data: {
        title,
        slug: finalSlug,
        excerpt,
        content,
        thumbnail,
        categoryId: categoryId || null,
        status: status || 'DRAFT',
        isFeatured: isFeatured || false,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
        tags: tagIds?.length ? { connect: tagIds.map((id: number) => ({ id })) } : undefined
      },
      include: {
        category: true,
        tags: true
      }
    })
    
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Create post error:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
