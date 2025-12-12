import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single destination
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const destination = await prisma.destination.findUnique({
      where: { id: parseInt(params.id) }
    })
    if (!destination) {
      return NextResponse.json({ error: 'Destination not found' }, { status: 404 })
    }
    return NextResponse.json(destination)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch destination' }, { status: 500 })
  }
}

// PUT update destination
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const destination = await prisma.destination.update({
      where: { id: parseInt(params.id) },
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        thumbnail: body.thumbnail,
        images: body.images,
        region: body.region,
        country: body.country,
        isFeatured: body.isFeatured,
        isPopular: body.isPopular,
        order: body.order,
        status: body.status
      }
    })
    return NextResponse.json(destination)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 })
  }
}

// DELETE destination
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.destination.delete({
      where: { id: parseInt(params.id) }
    })
    return NextResponse.json({ message: 'Destination deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 })
  }
}
