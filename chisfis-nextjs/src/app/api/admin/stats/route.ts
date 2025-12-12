import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const [listings, bookings, users, reviews] = await Promise.all([
      sql`SELECT COUNT(*) as total, SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) as active FROM listings`,
      sql`SELECT COUNT(*) as total, SUM(CASE WHEN status = 'Confirmed' THEN 1 ELSE 0 END) as confirmed FROM bookings`,
      sql`SELECT COUNT(*) as total FROM users`,
      sql`SELECT COUNT(*) as total, AVG(rating) as avg_rating FROM reviews WHERE status = 'Published'`
    ])

    return NextResponse.json({
      listings: { total: Number(listings[0].total), active: Number(listings[0].active) },
      bookings: { total: Number(bookings[0].total), confirmed: Number(bookings[0].confirmed) },
      users: { total: Number(users[0].total) },
      reviews: { total: Number(reviews[0].total), avgRating: Number(reviews[0].avg_rating || 0).toFixed(1) }
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
