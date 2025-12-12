import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET menu by location (public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location') || 'main'

    const menu = await prisma.menu.findFirst({
      where: { location },
      include: {
        items: {
          where: { parentId: null, isActive: true },
          orderBy: { order: 'asc' },
          include: {
            children: {
              where: { isActive: true },
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    })

    if (!menu) {
      return NextResponse.json({ items: [] })
    }

    return NextResponse.json(menu)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch menu' }, { status: 500 })
  }
}
