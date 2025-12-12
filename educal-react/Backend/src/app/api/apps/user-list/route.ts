import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import bcrypt from 'bcryptjs'

// GET - Lấy danh sách users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        _count: { select: { blogs: true, courses: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

// POST - Thêm user mới
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Check if email exists
    const existingUser = await prisma.user.findUnique({ where: { email: body.email } })
    if (existingUser) {
      return NextResponse.json({ error: 'Email đã tồn tại' }, { status: 400 })
    }
    
    const hashedPassword = body.password ? await bcrypt.hash(body.password, 10) : null
    
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: hashedPassword,
        role: body.role || 'user',
        avatar: body.avatar,
        status: body.status || 'active'
      },
      select: { id: true, email: true, name: true, role: true, avatar: true, status: true, createdAt: true }
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}

// PUT - Cập nhật user
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    
    const updateData: any = {
      email: body.email,
      name: body.name,
      role: body.role,
      avatar: body.avatar,
      status: body.status
    }
    
    // Only update password if provided
    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10)
    }
    
    const user = await prisma.user.update({
      where: { id: parseInt(body.id) },
      data: updateData,
      select: { id: true, email: true, name: true, role: true, avatar: true, status: true, createdAt: true }
    })
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

// DELETE - Xóa user
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    
    await prisma.user.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
