import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    // Get user email
    const users = await sql`SELECT email FROM users WHERE id = ${payload.userId}`
    if (users.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userEmail = users[0].email

    // Get bookings by user email
    const bookings = await sql`
      SELECT id, listing_name, listing_type, check_in, check_out, total, status, created_at
      FROM bookings
      WHERE guest_email = ${userEmail}
      ORDER BY created_at DESC
    `

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Get user bookings error:', error)
    return NextResponse.json({ error: 'Failed to get bookings' }, { status: 500 })
  }
}
