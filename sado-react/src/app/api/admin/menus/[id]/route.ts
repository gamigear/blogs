import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single menu with items
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const menu = await prisma.menu.findUnique({
      where: { id: parseInt(id) },
      include: {
        items: {
          where: { parentId: null },
          orderBy: { order: 'asc' },
          include: {
            children: {
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    })
    if (!menu) {
      return NextResponse.json({ error: 'Menu not found' }, { status: 404 })
    }
    return NextResponse.json(menu)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch menu' }, { status: 500 })
  }
}

// PUT update menu
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const menu = await prisma.menu.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name,
        location: body.location,
      }
    })
    return NextResponse.json(menu)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update menu' }, { status: 500 })
  }
}

// DELETE menu
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.menu.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Menu deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete menu' }, { status: 500 })
  }
}
