import { NextResponse } from 'next/server'
import { initAuthTables } from '@/lib/db-auth'

export async function POST() {
  try {
    await initAuthTables()
    return NextResponse.json({ success: true, message: 'Auth tables initialized' })
  } catch (error) {
    console.error('Init auth tables error:', error)
    return NextResponse.json({ success: false, error: 'Failed to initialize auth tables' }, { status: 500 })
  }
}
