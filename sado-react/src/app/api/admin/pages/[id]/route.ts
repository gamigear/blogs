import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single page
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const page = await prisma.page.findUnique({
      where: { id: parseInt(id) }
    })
    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }
    return NextResponse.json(page)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch page' }, { status: 500 })
  }
}

// PUT update page
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const page = await prisma.page.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        template: body.template,
        status: body.status,
      }
    })
    return NextResponse.json(page)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update page' }, { status: 500 })
  }
}

// DELETE page
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.page.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Page deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 })
  }
}
