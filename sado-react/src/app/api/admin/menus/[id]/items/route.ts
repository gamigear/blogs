import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// POST create menu item
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    // Get max order
    const maxOrder = await prisma.menuItem.findFirst({
      where: { menuId: parseInt(id), parentId: body.parentId || null },
      orderBy: { order: 'desc' },
      select: { order: true }
    })
    
    const menuItem = await prisma.menuItem.create({
      data: {
        menuId: parseInt(id),
        parentId: body.parentId || null,
        title: body.title,
        url: body.url,
        target: body.target || '_self',
        icon: body.icon,
        order: (maxOrder?.order || 0) + 1,
        isActive: body.isActive ?? true,
      }
    })
    return NextResponse.json(menuItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create menu item' }, { status: 500 })
  }
}

// PUT update menu items order
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { items } = body // Array of { id, order, parentId }
    
    await Promise.all(
      items.map((item: { id: number; order: number; parentId?: number }) =>
        prisma.menuItem.update({
          where: { id: item.id },
          data: { order: item.order, parentId: item.parentId || null }
        })
      )
    )
    
    return NextResponse.json({ message: 'Menu items updated' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update menu items' }, { status: 500 })
  }
}
