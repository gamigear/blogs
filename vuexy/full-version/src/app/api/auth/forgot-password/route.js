import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { generateToken } from '@/libs/password'

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { message: ['Vui lòng nhập email'] },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json({
        message: 'Nếu email tồn tại, bạn sẽ nhận được link đặt lại mật khẩu'
      })
    }

    // Delete any existing reset tokens for this user
    await prisma.passwordReset.deleteMany({
      where: { userId: user.id }
    })

    // Generate reset token
    const token = generateToken(32)
    const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    await prisma.passwordReset.create({
      data: {
        userId: user.id,
        token,
        expires
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'PASSWORD_RESET_REQUEST',
        details: 'Yêu cầu đặt lại mật khẩu'
      }
    })

    // TODO: Send email with reset link
    // const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`
    // await sendEmail(user.email, 'Reset Password', resetUrl)

    console.log(`Password reset token for ${email}: ${token}`)

    return NextResponse.json({
      message: 'Nếu email tồn tại, bạn sẽ nhận được link đặt lại mật khẩu'
    })

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
