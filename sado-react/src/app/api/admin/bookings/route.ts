import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        customer: {
          select: { name: true, email: true }
        },
        product: {
          select: { name: true }
        }
      }
    })
    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

// POST create booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const booking = await prisma.booking.create({
      data: {
        customerName: body.customerName,
        customerPhone: body.customerPhone,
        customerEmail: body.customerEmail,
        customerId: body.customerId,
        productId: body.productId,
        destination: body.destination,
        travelDate: new Date(body.travelDate),
        guests: body.guests || 1,
        totalAmount: body.totalAmount,
        status: body.status || 'PENDING',
        paymentStatus: body.paymentStatus || 'UNPAID',
        notes: body.notes,
      }
    })
    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}
