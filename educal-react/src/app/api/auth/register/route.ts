import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 })
    }

    const sql = getDb()

    // Check if user exists
    const existingUsers = await sql`SELECT id FROM "User" WHERE email = ${email} LIMIT 1`
    if (existingUsers.length > 0) {
      return NextResponse.json({ error: 'Email đã được sử dụng' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const result = await sql`
      INSERT INTO "User" (email, name, password, role, status, "createdAt", "updatedAt") 
      VALUES (${email}, ${name}, ${hashedPassword}, 'user', 'active', NOW(), NOW())
      RETURNING id, name, email
    `

    return NextResponse.json({
      message: 'Đăng ký thành công!',
      user: result[0]
    })
  } catch (error: any) {
    console.error('Register error:', error)
    return NextResponse.json({ error: 'Đã có lỗi xảy ra: ' + error.message }, { status: 500 })
  }
}
