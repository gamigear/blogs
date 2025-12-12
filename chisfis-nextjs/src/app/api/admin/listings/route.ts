import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    let listings
    if (type && type !== 'all' && status && status !== 'all') {
      listings = await sql`SELECT * FROM listings WHERE type = ${type} AND status = ${status} ORDER BY created_at DESC`
    } else if (type && type !== 'all') {
      listings = await sql`SELECT * FROM listings WHERE type = ${type} ORDER BY created_at DESC`
    } else if (status && status !== 'all') {
      listings = await sql`SELECT * FROM listings WHERE status = ${status} ORDER BY created_at DESC`
    } else if (search) {
      listings = await sql`SELECT * FROM listings WHERE name ILIKE ${'%' + search + '%'} OR location ILIKE ${'%' + search + '%'} ORDER BY created_at DESC`
    } else {
      listings = await sql`SELECT * FROM listings ORDER BY created_at DESC`
    }

    return NextResponse.json(listings)
  } catch (error) {
    console.error('Error fetching listings:', error)
    return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, type, location, price, status, image, description } = body

    const result = await sql`
      INSERT INTO listings (name, type, location, price, status, image, description)
      VALUES (${name}, ${type}, ${location}, ${price}, ${status || 'Active'}, ${image}, ${description})
      RETURNING *
    `
    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error creating listing:', error)
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 })
  }
}
