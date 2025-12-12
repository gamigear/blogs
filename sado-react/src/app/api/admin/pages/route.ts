import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all pages
export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(pages)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 })
  }
}

// POST create page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const page = await prisma.page.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        template: body.template || 'default',
        status: body.status || 'DRAFT',
      }
    })
    return NextResponse.json(page, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 })
  }
}
