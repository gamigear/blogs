import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { updateUserProfile, changePassword } from '@/lib/db-auth'

export async function PUT(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Chưa đăng nhập' }, { status: 401 })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.json({ success: false, error: 'Token không hợp lệ' }, { status: 401 })
    }

    const data = await request.json()
    const result = await updateUserProfile(payload.userId, data)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Update profile error:', error)
    return NextResponse.json({ success: false, error: 'Cập nhật thất bại' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Chưa đăng nhập' }, { status: 401 })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.json({ success: false, error: 'Token không hợp lệ' }, { status: 401 })
    }

    const { oldPassword, newPassword } = await request.json()
    const result = await changePassword(payload.userId, oldPassword, newPassword)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Change password error:', error)
    return NextResponse.json({ success: false, error: 'Đổi mật khẩu thất bại' }, { status: 500 })
  }
}
