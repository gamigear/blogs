import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        status: true,
        createdAt: true,
      }
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

// POST create user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        phone: body.phone,
        password: body.password, // Should be hashed in production
        role: body.role || 'USER',
        status: body.status || 'ACTIVE',
      }
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
