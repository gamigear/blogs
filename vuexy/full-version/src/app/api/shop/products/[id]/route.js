import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET single product
export async function GET(request, { params }) {
  try {
    const { id } = await params
    const isSlug = isNaN(parseInt(id))

    const product = await prisma.product.findFirst({
      where: isSlug ? { slug: id } : { id: parseInt(id) },
      include: {
        category: true,
        images: { orderBy: { sortOrder: 'asc' } },
        reviews: {
          where: { status: 'approved' },
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Get average rating
    const avgRating = await prisma.productReview.aggregate({
      where: { productId: product.id, status: 'approved' },
      _avg: { rating: true },
      _count: { rating: true }
    })

    // Get related products
    const relatedProducts = await prisma.product.findMany({
      where: {
        categoryId: product.categoryId,
        id: { not: product.id },
        status: 'published'
      },
      include: {
        images: { where: { isPrimary: true } }
      },
      take: 4
    })

    return NextResponse.json({
      ...product,
      avgRating: avgRating._avg.rating || 0,
      reviewCount: avgRating._count.rating,
      relatedProducts
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

// PUT update product
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const data = await request.json()

    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data,
      include: {
        category: true,
        images: true
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

// DELETE product
export async function DELETE(request, { params }) {
  try {
    const { id } = await params

    await prisma.product.delete({ where: { id: parseInt(id) } })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
