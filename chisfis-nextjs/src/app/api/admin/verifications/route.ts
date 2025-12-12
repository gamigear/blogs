import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { getVerificationRequests, reviewVerificationRequest } from '@/lib/db-auth'

async function getAdminUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value
  if (!token) return null
  const payload = await verifyToken(token)
  if (payload?.role !== 'Admin') return null
  return payload
}

export async function GET(request: NextRequest) {
  try {
    const admin = await getAdminUser()
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || undefined

    const requests = await getVerificationRequests(status)
    return NextResponse.json(requests)
  } catch (error) {
    console.error('Get verifications error:', error)
    return NextResponse.json({ error: 'Failed to get requests' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = await getAdminUser()
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { requestId, approved, notes } = await request.json()

    if (requestId === undefined || approved === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const result = await reviewVerificationRequest(requestId, admin.userId, approved, notes)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Review verification error:', error)
    return NextResponse.json({ error: 'Failed to review request' }, { status: 500 })
  }
}
