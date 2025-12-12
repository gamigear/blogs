import { NextResponse } from 'next/server'
import { initSettingsTables, seedSettings } from '@/lib/db-settings'

export async function POST() {
  try {
    await initSettingsTables()
    await seedSettings()
    return NextResponse.json({ success: true, message: 'Settings initialized' })
  } catch (error) {
    console.error('Settings init error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
