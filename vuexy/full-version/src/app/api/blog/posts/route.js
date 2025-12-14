import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET all blog posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const status = searchParams.get('status') || 'published'
    const search = searchParams.get('search')

    const where = {
      ...(status && { status }),
      ...(category && { category: { slug: category } }),
      ...(tag && { tags: { some: { tag: { slug: tag } } } }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { excerpt: { contains: search, mode: 'insensitive' } }
        ]
      })
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          category: true,
          tags: { include: { tag: true } },
          _count: { select: { comments: true } }
        },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.blogPost.count({ where })
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST create new blog post
export async function POST(request) {
  try {
    const data = await request.json()
    const { title, slug, excerpt, content, featuredImage, categoryId, authorName, authorAvatar, status, tags } = data

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        categoryId,
        authorName,
        authorAvatar,
        status,
        publishedAt: status === 'published' ? new Date() : null,
        ...(tags && {
          tags: {
            create: tags.map(tagId => ({ tagId }))
          }
        })
      },
      include: {
        category: true,
        tags: { include: { tag: true } }
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
