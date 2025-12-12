import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Get user email
    const users = await sql`SELECT email FROM users WHERE id = ${id}`
    if (users.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const bookings = await sql`
      SELECT id, listing_name, check_in, check_out, total, status
      FROM bookings
      WHERE guest_email = ${users[0].email}
      ORDER BY created_at DESC
    `

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Get user bookings error:', error)
    return NextResponse.json({ error: 'Failed to get bookings' }, { status: 500 })
  }
}
