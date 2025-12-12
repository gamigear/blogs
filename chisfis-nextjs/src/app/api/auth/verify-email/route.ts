import { NextRequest, NextResponse } from 'next/server'
import { verifyEmail } from '@/lib/db-auth'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ success: false, error: 'Token không hợp lệ' }, { status: 400 })
    }

    const result = await verifyEmail(token)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Verify email error:', error)
    return NextResponse.json({ success: false, error: 'Xác minh thất bại' }, { status: 500 })
  }
}
