import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

// GET single order
export async function GET(request, { params }) {
  try {
    const { id } = await params

    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { id: parseInt(id) || 0 },
          { orderNumber: id }
        ]
      },
      include: {
        customer: true,
        items: {
          include: {
            product: {
              include: { images: { where: { isPrimary: true } } }
            }
          }
        }
      }
    })

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error fetching order:', error)
    return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 })
  }
}

// PUT update order status
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const data = await request.json()
    const { status, paymentStatus } = data

    const order = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        ...(status && { status }),
        ...(paymentStatus && { paymentStatus })
      },
      include: {
        customer: true,
        items: true
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error updating order:', error)
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}

// DELETE order (cancel)
export async function DELETE(request, { params }) {
  try {
    const { id } = await params

    // Restore stock
    const order = await prisma.order.findUnique({
      where: { id: parseInt(id) },
      include: { items: true }
    })

    if (order) {
      for (const item of order.items) {
        await prisma.product.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity } }
        })
      }
    }

    await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status: 'cancelled' }
    })

    return NextResponse.json({ message: 'Order cancelled successfully' })
  } catch (error) {
    console.error('Error cancelling order:', error)
    return NextResponse.json({ error: 'Failed to cancel order' }, { status: 500 })
  }
}
