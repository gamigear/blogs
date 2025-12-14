import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET single blog post
export async function GET(request, { params }) {
  try {
    const { id } = await params
    const isSlug = isNaN(parseInt(id))

    const post = await prisma.blogPost.findFirst({
      where: isSlug ? { slug: id } : { id: parseInt(id) },
      include: {
        category: true,
        tags: { include: { tag: true } },
        comments: {
          where: { status: 'approved' },
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

// PUT update blog post
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const data = await request.json()
    const { title, slug, excerpt, content, featuredImage, categoryId, status, tags } = data

    // Delete existing tags
    await prisma.blogPostTag.deleteMany({ where: { postId: parseInt(id) } })

    const post = await prisma.blogPost.update({
      where: { id: parseInt(id) },
      data: {
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        categoryId,
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

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

// DELETE blog post
export async function DELETE(request, { params }) {
  try {
    const { id } = await params

    await prisma.blogPost.delete({ where: { id: parseInt(id) } })

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
