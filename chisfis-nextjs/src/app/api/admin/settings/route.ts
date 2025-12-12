import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    let settings
    if (category) {
      settings = await sql`SELECT * FROM site_settings WHERE category = ${category} ORDER BY key`
    } else {
      settings = await sql`SELECT * FROM site_settings ORDER BY category, key`
    }

    // Convert to key-value object
    const settingsObj: Record<string, string> = {}
    settings.forEach((s: { key: string; value: string }) => {
      settingsObj[s.key] = s.value
    })

    return NextResponse.json({ settings: settingsObj, raw: settings })
  } catch (error) {
    console.error('Error fetching settings:', error)
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { settings } = body

    for (const [key, value] of Object.entries(settings)) {
      // Upsert: update if exists, insert if not
      const existing = await sql`SELECT id FROM site_settings WHERE key = ${key}`
      if (existing.length > 0) {
        await sql`
          UPDATE site_settings SET value = ${value as string}, updated_at = NOW() WHERE key = ${key}
        `
      } else {
        // Determine category from key prefix
        let category = 'general'
        if (key.includes('logo') || key.includes('favicon') || key.includes('icon')) {
          category = 'branding'
        } else if (key.includes('footer')) {
          category = 'footer'
        } else if (key.includes('header') || key.includes('menu')) {
          category = 'header'
        }
        await sql`
          INSERT INTO site_settings (key, value, type, category) VALUES (${key}, ${value as string}, 'text', ${category})
        `
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating settings:', error)
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}
