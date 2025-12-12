// Next Imports
import { NextResponse } from 'next/server'

// Data Imports
import { db } from '@/fake-db/apps/contacts'

export async function GET() {
  return NextResponse.json(db)
}

export async function POST(request: Request) {
  const body = await request.json()

  const newContact = {
    id: db.length + 1,
    ...body,
    status: 'new',
    createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16)
  }

  db.push(newContact)

  return NextResponse.json(newContact, { status: 201 })
}
