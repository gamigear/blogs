import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET all products
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 12
    const category = searchParams.get('category')
    const status = searchParams.get('status') || 'published'
    const featured = searchParams.get('featured')
    const search = searchParams.get('search')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') || 'desc'

    const where = {
      ...(status && { status }),
      ...(category && { category: { slug: category } }),
      ...(featured === 'true' && { featured: true }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } }
        ]
      }),
      ...((minPrice || maxPrice) && {
        price: {
          ...(minPrice && { gte: parseFloat(minPrice) }),
          ...(maxPrice && { lte: parseFloat(maxPrice) })
        }
      })
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          category: true,
          images: { orderBy: { sortOrder: 'asc' } },
          _count: { select: { reviews: true } }
        },
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.product.count({ where })
    ])

    // Calculate average rating for each product
    const productsWithRating = await Promise.all(
      products.map(async product => {
        const avgRating = await prisma.productReview.aggregate({
          where: { productId: product.id, status: 'approved' },
          _avg: { rating: true }
        })
        return {
          ...product,
          avgRating: avgRating._avg.rating || 0
        }
      })
    )

    return NextResponse.json({
      products: productsWithRating,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

// POST create new product
export async function POST(request) {
  try {
    const data = await request.json()
    const { name, slug, sku, description, shortDesc, price, salePrice, costPrice, stock, categoryId, brand, status, featured, images } = data

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        sku,
        description,
        shortDesc,
        price,
        salePrice,
        costPrice,
        stock,
        categoryId,
        brand,
        status,
        featured,
        ...(images && {
          images: {
            create: images.map((img, index) => ({
              url: img.url,
              alt: img.alt,
              isPrimary: index === 0,
              sortOrder: index
            }))
          }
        })
      },
      include: {
        category: true,
        images: true
      }
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
