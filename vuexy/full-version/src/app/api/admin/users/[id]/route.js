import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma'
import { hashPassword } from '@/libs/password'
import { authOptions } from '@/libs/auth'

// GET - Get single user
export async function GET(req, { params }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    if (!['ADMIN', 'SUPER_ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }

    const { id } = await params

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        status: true,
        phone: true,
        lastLoginAt: true,
        lastLoginIp: true,
        failedLoginAttempts: true,
        lockedUntil: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { activityLogs: true }
        }
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ user })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}

// PUT - Update user
export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    if (!['ADMIN', 'SUPER_ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }

    const { id } = await params
    const { name, email, password, role, status, phone, image } = await req.json()

    const existingUser = await prisma.user.findUnique({ where: { id } })

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    // Only SUPER_ADMIN can modify ADMIN or SUPER_ADMIN accounts
    if (['ADMIN', 'SUPER_ADMIN'].includes(existingUser.role) && session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { message: 'Không có quyền chỉnh sửa tài khoản admin' },
        { status: 403 }
      )
    }

    // Only SUPER_ADMIN can assign ADMIN or SUPER_ADMIN role
    if (['ADMIN', 'SUPER_ADMIN'].includes(role) && session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { message: 'Không có quyền gán quyền admin' },
        { status: 403 }
      )
    }

    // Prevent self-demotion for SUPER_ADMIN
    if (id === session.user.id && session.user.role === 'SUPER_ADMIN' && role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { message: 'Không thể tự hạ quyền SUPER_ADMIN' },
        { status: 400 }
      )
    }

    // Check email uniqueness if changed
    if (email && email.toLowerCase() !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: email.toLowerCase() }
      })

      if (emailExists) {
        return NextResponse.json(
          { message: 'Email đã được sử dụng' },
          { status: 409 }
        )
      }
    }

    const updateData = {}
    if (name !== undefined) updateData.name = name
    if (email !== undefined) updateData.email = email.toLowerCase()
    if (role !== undefined) updateData.role = role
    if (status !== undefined) updateData.status = status
    if (phone !== undefined) updateData.phone = phone
    if (image !== undefined) updateData.image = image

    if (password) {
      updateData.password = await hashPassword(password)
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        phone: true,
        image: true,
        updatedAt: true
      }
    })

    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'USER_UPDATE',
        details: `Cập nhật tài khoản: ${existingUser.email}`
      }
    })

    return NextResponse.json({ user })

  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}

// DELETE - Delete user
export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    if (session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }

    const { id } = await params

    // Prevent self-deletion
    if (id === session.user.id) {
      return NextResponse.json(
        { message: 'Không thể xóa tài khoản của chính mình' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    await prisma.user.delete({ where: { id } })

    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'USER_DELETE',
        details: `Xóa tài khoản: ${user.email}`
      }
    })

    return NextResponse.json({ message: 'User deleted' })

  } catch (error) {
    console.error('Delete user error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
