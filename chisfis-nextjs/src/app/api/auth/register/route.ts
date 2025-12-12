import { NextRequest, NextResponse } from 'next/server'
import { registerUser, initAuthTables } from '@/lib/db-auth'
import { generateToken } from '@/lib/auth'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    // Initialize auth tables if needed
    await initAuthTables()

    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, error: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ success: false, error: 'Mật khẩu phải có ít nhất 6 ký tự' }, { status: 400 })
    }

    const result = await registerUser({ name, email, password })

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 })
    }

    // Generate token and set cookie
    const token = await generateToken({
      userId: result.user!.id,
      email: result.user!.email,
      role: result.user!.role,
    })

    const cookieStore = await cookies()
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return NextResponse.json({
      success: true,
      user: result.user,
      message: 'Đăng ký thành công! Vui lòng kiểm tra email để xác minh tài khoản.',
    })
  } catch (error) {
    console.error('Register API error:', error)
    return NextResponse.json({ success: false, error: 'Đăng ký thất bại' }, { status: 500 })
  }
}
