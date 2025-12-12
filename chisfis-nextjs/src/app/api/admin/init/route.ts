import { NextResponse } from 'next/server'
import { initDatabase, seedDatabase } from '@/lib/db-init'

export async function POST() {
  try {
    await initDatabase()
    await seedDatabase()
    return NextResponse.json({ success: true, message: 'Database initialized and seeded' })
  } catch (error) {
    console.error('Database init error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
