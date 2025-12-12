import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const [links, social] = await Promise.all([
      sql`SELECT * FROM footer_links ORDER BY section, sort_order`,
      sql`SELECT * FROM social_links ORDER BY sort_order`
    ])

    // Group links by section
    const grouped: Record<string, typeof links> = {}
    links.forEach((link: { section: string }) => {
      if (!grouped[link.section]) grouped[link.section] = []
      grouped[link.section].push(link)
    })

    return NextResponse.json({ links: grouped, social })
  } catch (error) {
    console.error('Error fetching footer:', error)
    return NextResponse.json({ error: 'Failed to fetch footer' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    if (type === 'link') {
      const result = await sql`
        INSERT INTO footer_links (section, title, url, sort_order)
        VALUES (${data.section}, ${data.title}, ${data.url}, ${data.sort_order || 0})
        RETURNING *
      `
      return NextResponse.json(result[0])
    } else if (type === 'social') {
      const result = await sql`
        INSERT INTO social_links (platform, url, icon, sort_order)
        VALUES (${data.platform}, ${data.url}, ${data.icon}, ${data.sort_order || 0})
        RETURNING *
      `
      return NextResponse.json(result[0])
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  } catch (error) {
    console.error('Error creating footer item:', error)
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const type = searchParams.get('type')

    if (type === 'link') {
      await sql`DELETE FROM footer_links WHERE id = ${parseInt(id!)}`
    } else if (type === 'social') {
      await sql`DELETE FROM social_links WHERE id = ${parseInt(id!)}`
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting:', error)
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}
