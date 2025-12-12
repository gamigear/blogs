import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// PUT update menu item
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const menuItem = await prisma.menuItem.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        url: body.url,
        target: body.target,
        icon: body.icon,
        isActive: body.isActive,
        order: body.order,
        parentId: body.parentId,
      }
    })
    return NextResponse.json(menuItem)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update menu item' }, { status: 500 })
  }
}

// DELETE menu item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.menuItem.delete({
      where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: 'Menu item deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete menu item' }, { status: 500 })
  }
}
