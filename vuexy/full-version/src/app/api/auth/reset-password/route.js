import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { hashPassword } from '@/libs/password'

export async function POST(req) {
  try {
    const { token, password } = await req.json()

    if (!token || !password) {
      return NextResponse.json(
        { message: ['Thiếu thông tin bắt buộc'] },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: ['Mật khẩu phải có ít nhất 8 ký tự'] },
        { status: 400 }
      )
    }

    // Find valid reset token
    const resetRecord = await prisma.passwordReset.findUnique({
      where: { token },
      include: { user: true }
    })

    if (!resetRecord) {
      return NextResponse.json(
        { message: ['Link đặt lại mật khẩu không hợp lệ'] },
        { status: 400 }
      )
    }

    if (resetRecord.used) {
      return NextResponse.json(
        { message: ['Link đặt lại mật khẩu đã được sử dụng'] },
        { status: 400 }
      )
    }

    if (resetRecord.expires < new Date()) {
      return NextResponse.json(
        { message: ['Link đặt lại mật khẩu đã hết hạn'] },
        { status: 400 }
      )
    }

    // Hash new password
    const hashedPassword = await hashPassword(password)

    // Update password and mark token as used
    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetRecord.userId },
        data: {
          password: hashedPassword,
          failedLoginAttempts: 0,
          lockedUntil: null
        }
      }),
      prisma.passwordReset.update({
        where: { id: resetRecord.id },
        data: { used: true }
      }),
      prisma.activityLog.create({
        data: {
          userId: resetRecord.userId,
          action: 'PASSWORD_RESET',
          details: 'Đặt lại mật khẩu thành công'
        }
      })
    ])

    return NextResponse.json({
      message: 'Đặt lại mật khẩu thành công'
    })

  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
