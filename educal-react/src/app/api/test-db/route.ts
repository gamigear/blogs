import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  try {
    const sql = getDb()
    const users = await sql`SELECT id, email, role FROM "User"`
    return NextResponse.json({ success: true, users })
  } catch (error: any) {
    console.error('DB Test error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      dbUrl: process.env.DATABASE_URL ? 'SET' : 'NOT SET'
    }, { status: 500 })
  }
}
