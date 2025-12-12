import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const users = await sql`
      SELECT id, name, email, role, status, avatar, phone, address, bio, gender, date_of_birth,
             email_verified, phone_verified, identity_verified, joined, bookings_count, last_login
      FROM users WHERE id = ${id}
    `

    if (users.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(users[0])
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({ error: 'Failed to get user' }, { status: 500 })
  }
}
