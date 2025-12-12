import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { submitVerificationRequest } from '@/lib/db-auth'
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

    const requests = await sql`
      SELECT * FROM verification_requests 
      WHERE user_id = ${payload.userId}
      ORDER BY created_at DESC
    `

    return NextResponse.json(requests)
  } catch (error) {
    console.error('Get verification requests error:', error)
    return NextResponse.json({ error: 'Failed to get requests' }, { status: 500 })
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

    const { type, documentUrl } = await request.json()

    if (!type) {
      return NextResponse.json({ error: 'Type is required' }, { status: 400 })
    }

    const result = await submitVerificationRequest(payload.userId, type, documentUrl)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Submit verification error:', error)
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }
}
