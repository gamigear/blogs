import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.password) {
      return NextResponse.json(
        { message: ['Email hoặc mật khẩu không đúng'] },
        { status: 401, statusText: 'Unauthorized Access' }
      )
    }

    // Check if user is admin
    if (user.role !== 'admin') {
      return NextResponse.json(
        { message: ['Bạn không có quyền truy cập trang quản trị'] },
        { status: 401, statusText: 'Unauthorized Access' }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { message: ['Email hoặc mật khẩu không đúng'] },
        { status: 401, statusText: 'Unauthorized Access' }
      )
    }

    // Return user data without password
    const { password: _, ...userData } = user

    return NextResponse.json({
      ...userData,
      image: user.avatar || '/images/avatars/1.png'
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
