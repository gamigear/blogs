import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) }
    })
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        salePrice: body.salePrice,
        category: body.category,
        thumbnail: body.thumbnail,
        images: body.images,
        stock: body.stock,
        status: body.status,
        duration: body.duration,
        location: body.location,
      }
    })
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.product.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Product deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
