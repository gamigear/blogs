import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { hashPassword } from '@/libs/password'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: ['Vui lòng điền đầy đủ thông tin'] },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: ['Mật khẩu phải có ít nhất 8 ký tự'] },
        { status: 400 }
      )
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: ['Email không hợp lệ'] },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: ['Email đã được sử dụng'] },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: 'USER',
        status: 'ACTIVE'
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'REGISTER',
        details: 'Đăng ký tài khoản mới'
      }
    })

    return NextResponse.json({
      message: 'Đăng ký thành công',
      user
    }, { status: 201 })

  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
