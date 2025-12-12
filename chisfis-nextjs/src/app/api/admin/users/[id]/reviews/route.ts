import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const reviews = await sql`
      SELECT id, listing_name, rating, comment, status, created_at
      FROM reviews
      WHERE user_id = ${id}
      ORDER BY created_at DESC
    `

    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Get user reviews error:', error)
    return NextResponse.json({ error: 'Failed to get reviews' }, { status: 500 })
  }
}
