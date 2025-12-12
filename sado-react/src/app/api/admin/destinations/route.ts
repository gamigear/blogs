import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all destinations
export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    })
    return NextResponse.json(destinations)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 })
  }
}

// POST create destination
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const destination = await prisma.destination.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        thumbnail: body.thumbnail,
        images: body.images || [],
        region: body.region,
        country: body.country || 'Việt Nam',
        isFeatured: body.isFeatured || false,
        isPopular: body.isPopular || false,
        order: body.order || 0,
        status: body.status || 'ACTIVE'
      }
    })
    return NextResponse.json(destination, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create destination' }, { status: 500 })
  }
}
