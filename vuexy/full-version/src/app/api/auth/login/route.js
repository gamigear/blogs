import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { verifyPassword } from '@/libs/password'

const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME_MINUTES = 15

export async function POST(req) {
  try {
    const { email, password } = await req.json()
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'

    if (!email || !password) {
      return NextResponse.json(
        { message: ['Vui lòng nhập email và mật khẩu'] },
        { status: 400 }
      )
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { message: ['Email hoặc mật khẩu không đúng'] },
        { status: 401 }
      )
    }

    // Check if account is locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      const remainingMinutes = Math.ceil((user.lockedUntil - new Date()) / 60000)
      return NextResponse.json(
        { message: [`Tài khoản bị khóa. Vui lòng thử lại sau ${remainingMinutes} phút`] },
        { status: 423 }
      )
    }

    // Check account status
    if (user.status === 'SUSPENDED') {
      return NextResponse.json(
        { message: ['Tài khoản đã bị đình chỉ'] },
        { status: 403 }
      )
    }

    if (user.status === 'INACTIVE') {
      return NextResponse.json(
        { message: ['Tài khoản chưa được kích hoạt'] },
        { status: 403 }
      )
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password)

    if (!isValidPassword) {
      // Increment failed attempts
      const failedAttempts = user.failedLoginAttempts + 1
      const updateData = { failedLoginAttempts: failedAttempts }

      if (failedAttempts >= MAX_LOGIN_ATTEMPTS) {
        updateData.lockedUntil = new Date(Date.now() + LOCK_TIME_MINUTES * 60 * 1000)
      }

      await prisma.user.update({
        where: { id: user.id },
        data: updateData
      })

      // Log failed attempt
      await prisma.activityLog.create({
        data: {
          userId: user.id,
          action: 'LOGIN_FAILED',
          details: `Đăng nhập thất bại (lần ${failedAttempts})`,
          ipAddress,
          userAgent
        }
      })

      const remainingAttempts = MAX_LOGIN_ATTEMPTS - failedAttempts
      if (remainingAttempts > 0) {
        return NextResponse.json(
          { message: [`Email hoặc mật khẩu không đúng. Còn ${remainingAttempts} lần thử`] },
          { status: 401 }
        )
      } else {
        return NextResponse.json(
          { message: [`Tài khoản bị khóa ${LOCK_TIME_MINUTES} phút do đăng nhập sai quá nhiều lần`] },
          { status: 423 }
        )
      }
    }

    // Reset failed attempts and update last login
    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
        lastLoginAt: new Date(),
        lastLoginIp: ipAddress
      }
    })

    // Log successful login
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'LOGIN',
        details: 'Đăng nhập thành công',
        ipAddress,
        userAgent
      }
    })

    // Return user data (without password)
    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
      status: user.status
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
