import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma'
import { hashPassword, verifyPassword } from '@/libs/password'
import { authOptions } from '@/libs/auth'

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: ['Vui lòng đăng nhập'] },
        { status: 401 }
      )
    }

    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: ['Vui lòng nhập đầy đủ thông tin'] },
        { status: 400 }
      )
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { message: ['Mật khẩu mới phải có ít nhất 8 ký tự'] },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user || !user.password) {
      return NextResponse.json(
        { message: ['Không tìm thấy tài khoản'] },
        { status: 404 }
      )
    }

    // Verify current password
    const isValidPassword = await verifyPassword(currentPassword, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { message: ['Mật khẩu hiện tại không đúng'] },
        { status: 400 }
      )
    }

    // Hash and update new password
    const hashedPassword = await hashPassword(newPassword)

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'PASSWORD_CHANGE',
        details: 'Đổi mật khẩu thành công'
      }
    })

    return NextResponse.json({
      message: 'Đổi mật khẩu thành công'
    })

  } catch (error) {
    console.error('Change password error:', error)
    return NextResponse.json(
      { message: ['Đã xảy ra lỗi, vui lòng thử lại'] },
      { status: 500 }
    )
  }
}
