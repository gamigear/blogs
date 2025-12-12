import { NextRequest, NextResponse } from 'next/server'
import { requestPasswordReset, resetPassword } from '@/lib/db-auth'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, error: 'Vui lòng nhập email' }, { status: 400 })
    }

    const result = await requestPasswordReset(email)

    // Always return success to prevent email enumeration
    return NextResponse.json({
      success: true,
      message: 'Nếu email tồn tại, bạn sẽ nhận được link đặt lại mật khẩu.',
      // In production, send email instead of returning token
      ...(process.env.NODE_ENV === 'development' && result.token ? { token: result.token } : {}),
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ success: false, error: 'Yêu cầu thất bại' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json({ success: false, error: 'Thiếu thông tin' }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ success: false, error: 'Mật khẩu phải có ít nhất 6 ký tự' }, { status: 400 })
    }

    const result = await resetPassword(token, password)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ success: false, error: 'Đặt lại mật khẩu thất bại' }, { status: 500 })
  }
}
