import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { deleteFromR2 } from '@/lib/r2'

// GET - Fetch single media
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await sql`SELECT * FROM media WHERE id = ${id}`

    if (result.length === 0) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 })
  }
}

// PUT - Update media
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { alt_text, folder } = body

    const result = await sql`
      UPDATE media 
      SET alt_text = ${alt_text || ''}, 
          folder = ${folder || 'general'},
          updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error updating media:', error)
    return NextResponse.json({ error: 'Failed to update media' }, { status: 500 })
  }
}

// DELETE - Delete single media
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Get media info first
    const media = await sql`SELECT * FROM media WHERE id = ${id}`
    if (media.length === 0) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 })
    }

    // Delete from R2
    try {
      await deleteFromR2(media[0].filename)
    } catch (r2Error) {
      console.error('Error deleting from R2:', r2Error)
      // Continue to delete from database even if R2 deletion fails
    }

    // Delete from database
    await sql`DELETE FROM media WHERE id = ${id}`

    return NextResponse.json({ message: 'Media deleted successfully' })
  } catch (error) {
    console.error('Error deleting media:', error)
    return NextResponse.json({ error: 'Failed to delete media' }, { status: 500 })
  }
}
