import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { updateUserRole, updateUserStatus } from '@/lib/db-auth'

// Check if user is admin
async function isAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value
  if (!token) return false
  const payload = await verifyToken(token)
  return payload?.role === 'Admin'
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const role = searchParams.get('role')
    const status = searchParams.get('status')

    let users
    if (role && role !== 'all' && status && status !== 'all') {
      users = await sql`SELECT id, name, email, role, status, joined, bookings_count, avatar, phone, email_verified, phone_verified, identity_verified FROM users WHERE role = ${role} AND status = ${status} ORDER BY created_at DESC`
    } else if (role && role !== 'all') {
      users = await sql`SELECT id, name, email, role, status, joined, bookings_count, avatar, phone, email_verified, phone_verified, identity_verified FROM users WHERE role = ${role} ORDER BY created_at DESC`
    } else if (status && status !== 'all') {
      users = await sql`SELECT id, name, email, role, status, joined, bookings_count, avatar, phone, email_verified, phone_verified, identity_verified FROM users WHERE status = ${status} ORDER BY created_at DESC`
    } else {
      users = await sql`SELECT id, name, email, role, status, joined, bookings_count, avatar, phone, email_verified, phone_verified, identity_verified FROM users ORDER BY created_at DESC`
    }

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { userId, role, status } = await request.json()

    if (role) {
      const result = await updateUserRole(userId, role)
      if (!result.success) return NextResponse.json(result, { status: 400 })
    }

    if (status) {
      const result = await updateUserStatus(userId, status)
      if (!result.success) return NextResponse.json(result, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('id')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    await sql`DELETE FROM users WHERE id = ${userId}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
