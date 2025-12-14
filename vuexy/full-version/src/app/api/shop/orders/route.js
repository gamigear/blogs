import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET all orders
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const status = searchParams.get('status')
    const customerId = searchParams.get('customerId')
    const search = searchParams.get('search')

    const where = {
      ...(status && { status }),
      ...(customerId && { customerId: parseInt(customerId) }),
      ...(search && {
        OR: [
          { orderNumber: { contains: search, mode: 'insensitive' } },
          { customer: { email: { contains: search, mode: 'insensitive' } } }
        ]
      })
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: {
          customer: true,
          items: {
            include: { product: { include: { images: { where: { isPrimary: true } } } } }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.order.count({ where })
    ])

    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

// POST create new order
export async function POST(request) {
  try {
    const data = await request.json()
    const { customerId, items, shippingAddress, billingAddress, paymentMethod, notes } = data

    // Calculate totals
    let subtotal = 0
    const orderItems = []

    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.productId } })
      if (!product) continue

      const price = product.salePrice || product.price
      const total = parseFloat(price) * item.quantity
      subtotal += total

      orderItems.push({
        productId: item.productId,
        name: product.name,
        sku: product.sku,
        price,
        quantity: item.quantity,
        total
      })

      // Update stock
      await prisma.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } }
      })
    }

    const shipping = subtotal >= 500000 ? 0 : 30000
    const total = subtotal + shipping

    // Generate order number
    const orderCount = await prisma.order.count()
    const orderNumber = `ORD-${new Date().getFullYear()}-${String(orderCount + 1).padStart(4, '0')}`

    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerId,
        subtotal,
        shipping,
        total,
        shippingAddress,
        billingAddress,
        paymentMethod,
        notes,
        items: { create: orderItems }
      },
      include: {
        customer: true,
        items: true
      }
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
