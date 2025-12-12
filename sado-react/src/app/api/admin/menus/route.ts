import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all menus
export async function GET() {
  try {
    const menus = await prisma.menu.findMany({
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
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(menus)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch menus' }, { status: 500 })
  }
}

// POST create menu
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const menu = await prisma.menu.create({
      data: {
        name: body.name,
        location: body.location || 'main',
      }
    })
    return NextResponse.json(menu, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create menu' }, { status: 500 })
  }
}
