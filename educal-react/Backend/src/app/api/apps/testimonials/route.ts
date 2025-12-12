// Next Imports
import { NextResponse } from 'next/server'

// Data Imports
import { db } from '@/fake-db/apps/testimonials'

export async function GET() {
  return NextResponse.json(db)
}

export async function POST(request: Request) {
  const body = await request.json()

  const newTestimonial = {
    id: db.length + 1,
    ...body,
    createdAt: new Date().toISOString().split('T')[0]
  }

  db.push(newTestimonial)

  return NextResponse.json(newTestimonial, { status: 201 })
}
