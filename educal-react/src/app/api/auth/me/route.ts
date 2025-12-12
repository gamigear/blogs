import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Chưa đăng nhập' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }
    
    const sql = getDb()
    const users = await sql`
      SELECT id, name, email, role, avatar, status 
      FROM "User" 
      WHERE id = ${decoded.userId} 
      LIMIT 1
    `
    const user = users[0]

    if (!user || user.status !== 'active') {
      return NextResponse.json({ error: 'Tài khoản không hợp lệ' }, { status: 401 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error: 'Token không hợp lệ' }, { status: 401 })
  }
}
