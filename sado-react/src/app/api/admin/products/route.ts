import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

// POST create product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const slug = body.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: slug,
        description: body.description,
        price: body.price,
        salePrice: body.salePrice,
        category: body.category,
        thumbnail: body.thumbnail,
        images: body.images || [],
        stock: body.stock || 0,
        status: body.status || 'ACTIVE',
        duration: body.duration,
        location: body.location,
      }
    })
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
