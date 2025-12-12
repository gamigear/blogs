import { NextRequest, NextResponse } from 'next/server'
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

    const reviews = await sql`
      SELECT id, listing_name, rating, comment, status, created_at
      FROM reviews
      WHERE user_id = ${payload.userId}
      ORDER BY created_at DESC
    `

    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Get user reviews error:', error)
    return NextResponse.json({ error: 'Failed to get reviews' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
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

    const { listingId, rating, comment } = await request.json()

    if (!listingId || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get user info
    const users = await sql`SELECT name, avatar FROM users WHERE id = ${payload.userId}`
    if (users.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get listing info
    const listings = await sql`SELECT name FROM listings WHERE id = ${listingId}`
    if (listings.length === 0) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    }

    const user = users[0]
    const listing = listings[0]

    await sql`
      INSERT INTO reviews (user_id, user_name, user_avatar, listing_id, listing_name, rating, comment, status)
      VALUES (${payload.userId}, ${user.name}, ${user.avatar}, ${listingId}, ${listing.name}, ${rating}, ${comment}, 'Pending')
    `

    return NextResponse.json({ success: true, message: 'Đánh giá đã được gửi và đang chờ duyệt' })
  } catch (error) {
    console.error('Create review error:', error)
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}
