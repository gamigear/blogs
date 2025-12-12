import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

// GET - Lấy danh sách events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'desc' }
    })
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

// POST - Thêm event mới
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const event = await prisma.event.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        date: new Date(body.date),
        startTime: body.startTime,
        endTime: body.endTime,
        location: body.location,
        status: body.status || 'upcoming',
        featured: body.featured || false
      }
    })
    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}

// PUT - Cập nhật event
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const event = await prisma.event.update({
      where: { id: parseInt(body.id) },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        date: new Date(body.date),
        startTime: body.startTime,
        endTime: body.endTime,
        location: body.location,
        status: body.status,
        featured: body.featured
      }
    })
    return NextResponse.json(event)
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
  }
}

// DELETE - Xóa event
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    
    await prisma.event.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}
