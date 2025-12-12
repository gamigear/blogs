import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location')

    let menus
    if (location) {
      menus = await sql`SELECT * FROM menu_items WHERE menu_location = ${location} ORDER BY sort_order`
    } else {
      menus = await sql`SELECT * FROM menu_items ORDER BY menu_location, sort_order`
    }

    return NextResponse.json(menus)
  } catch (error) {
    console.error('Error fetching menus:', error)
    return NextResponse.json({ error: 'Failed to fetch menus' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { menu_location, title, url, icon, parent_id, sort_order } = body

    const result = await sql`
      INSERT INTO menu_items (menu_location, title, url, icon, parent_id, sort_order)
      VALUES (${menu_location}, ${title}, ${url}, ${icon || null}, ${parent_id || null}, ${sort_order || 0})
      RETURNING *
    `
    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error creating menu:', error)
    return NextResponse.json({ error: 'Failed to create menu' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, title, url, icon, sort_order, is_active } = body

    await sql`
      UPDATE menu_items SET title = ${title}, url = ${url}, icon = ${icon}, sort_order = ${sort_order}, is_active = ${is_active}
      WHERE id = ${id}
    `
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating menu:', error)
    return NextResponse.json({ error: 'Failed to update menu' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    await sql`DELETE FROM menu_items WHERE id = ${parseInt(id!)}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting menu:', error)
    return NextResponse.json({ error: 'Failed to delete menu' }, { status: 500 })
  }
}
