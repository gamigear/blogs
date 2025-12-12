import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all settings or by group
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const group = searchParams.get('group')
    
    const settings = await prisma.setting.findMany({
      where: group ? { group } : undefined,
      orderBy: { key: 'asc' }
    })
    
    // Convert to key-value object
    const settingsObj = settings.reduce((acc, s) => {
      acc[s.key] = s.value
      return acc
    }, {} as Record<string, string>)
    
    return NextResponse.json(settingsObj)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

// POST/PUT update settings
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { group = 'general', settings } = body
    
    // Upsert each setting
    const updates = Object.entries(settings).map(([key, value]) =>
      prisma.setting.upsert({
        where: { key },
        update: { value: String(value), group },
        create: { key, value: String(value), group }
      })
    )
    
    await Promise.all(updates)
    return NextResponse.json({ message: 'Settings updated' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}
