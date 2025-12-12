import { NextRequest, NextResponse } from 'next/server'
import { loginUser, initAuthTables } from '@/lib/db-auth'
import { generateToken } from '@/lib/auth'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    await initAuthTables()

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 })
    }

    const result = await loginUser(email, password)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 401 })
    }

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
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return NextResponse.json({ success: true, user: result.user })
  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json({ success: false, error: 'Đăng nhập thất bại' }, { status: 500 })
  }
}
