import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single booking
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const booking = await prisma.booking.findUnique({
      where: { id: parseInt(id) },
      include: {
        customer: true,
        product: true
      }
    })
    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }
    return NextResponse.json(booking)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch booking' }, { status: 500 })
  }
}

// PUT update booking
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const booking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: {
        customerName: body.customerName,
        customerPhone: body.customerPhone,
        customerEmail: body.customerEmail,
        destination: body.destination,
        travelDate: body.travelDate ? new Date(body.travelDate) : undefined,
        guests: body.guests,
        totalAmount: body.totalAmount,
        status: body.status,
        paymentStatus: body.paymentStatus,
        notes: body.notes,
      }
    })
    return NextResponse.json(booking)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 })
  }
}

// DELETE booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.booking.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Booking deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 })
  }
}
