import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    let bookings
    if (status && status !== 'all' && type && type !== 'all') {
      bookings = await sql`SELECT * FROM bookings WHERE status = ${status} AND listing_type = ${type} ORDER BY created_at DESC`
    } else if (status && status !== 'all') {
      bookings = await sql`SELECT * FROM bookings WHERE status = ${status} ORDER BY created_at DESC`
    } else if (type && type !== 'all') {
      bookings = await sql`SELECT * FROM bookings WHERE listing_type = ${type} ORDER BY created_at DESC`
    } else {
      bookings = await sql`SELECT * FROM bookings ORDER BY created_at DESC`
    }

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}
