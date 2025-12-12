import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const rating = searchParams.get('rating')
    const status = searchParams.get('status')

    let reviews
    if (rating && rating !== 'all' && status && status !== 'all') {
      reviews = await sql`SELECT * FROM reviews WHERE rating = ${parseInt(rating)} AND status = ${status} ORDER BY created_at DESC`
    } else if (rating && rating !== 'all') {
      reviews = await sql`SELECT * FROM reviews WHERE rating = ${parseInt(rating)} ORDER BY created_at DESC`
    } else if (status && status !== 'all') {
      reviews = await sql`SELECT * FROM reviews WHERE status = ${status} ORDER BY created_at DESC`
    } else {
      reviews = await sql`SELECT * FROM reviews ORDER BY created_at DESC`
    }

    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}
