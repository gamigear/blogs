import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: {
        author: { select: { id: true, name: true } },
        category: true,
        tags: true
      }
    })
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

// PUT update post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { title, excerpt, content, thumbnail, categoryId, tagIds, status, isFeatured } = body
    
    const postId = parseInt(id)
    
    // Update tags - disconnect all then connect new ones
    if (tagIds !== undefined) {
      await prisma.post.update({
        where: { id: postId },
        data: { tags: { set: [] } }
      })
    }
    
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        excerpt,
        content,
        thumbnail,
        categoryId: categoryId || null,
        status,
        isFeatured,
        publishedAt: status === 'PUBLISHED' ? new Date() : undefined,
        tags: tagIds?.length ? { connect: tagIds.map((tid: number) => ({ id: tid })) } : undefined
      },
      include: { category: true, tags: true }
    })
    
    return NextResponse.json(post)
  } catch (error) {
    console.error('Update post error:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}


// DELETE post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.post.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Post deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
