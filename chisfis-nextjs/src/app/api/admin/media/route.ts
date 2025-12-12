import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { deleteFromR2 } from '@/lib/r2'

// GET - Fetch all media with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const type = searchParams.get('type') || ''
    const folder = searchParams.get('folder') || ''
    const search = searchParams.get('search') || ''
    const offset = (page - 1) * limit

    let media
    let countResult

    // Build query based on filters
    if (type && folder && search) {
      media = await sql`
        SELECT * FROM media 
        WHERE type = ${type} AND folder = ${folder} 
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`
        SELECT COUNT(*) as count FROM media 
        WHERE type = ${type} AND folder = ${folder}
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
      `
    } else if (type && folder) {
      media = await sql`
        SELECT * FROM media WHERE type = ${type} AND folder = ${folder}
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`SELECT COUNT(*) as count FROM media WHERE type = ${type} AND folder = ${folder}`
    } else if (type && search) {
      media = await sql`
        SELECT * FROM media WHERE type = ${type}
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`
        SELECT COUNT(*) as count FROM media WHERE type = ${type}
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
      `
    } else if (folder && search) {
      media = await sql`
        SELECT * FROM media WHERE folder = ${folder}
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`
        SELECT COUNT(*) as count FROM media WHERE folder = ${folder}
        AND (original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'})
      `
    } else if (type) {
      media = await sql`
        SELECT * FROM media WHERE type = ${type}
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`SELECT COUNT(*) as count FROM media WHERE type = ${type}`
    } else if (folder) {
      media = await sql`
        SELECT * FROM media WHERE folder = ${folder}
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`SELECT COUNT(*) as count FROM media WHERE folder = ${folder}`
    } else if (search) {
      media = await sql`
        SELECT * FROM media 
        WHERE original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'}
        ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`
        SELECT COUNT(*) as count FROM media 
        WHERE original_name ILIKE ${'%' + search + '%'} OR alt_text ILIKE ${'%' + search + '%'}
      `
    } else {
      media = await sql`
        SELECT * FROM media ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
      `
      countResult = await sql`SELECT COUNT(*) as count FROM media`
    }

    const total = Number(countResult[0].count)

    // Get folders
    const foldersResult = await sql`SELECT DISTINCT folder FROM media ORDER BY folder`
    const folders = foldersResult.map((f) => f.folder as string)

    return NextResponse.json({
      media,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      },
      folders
    })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 })
  }
}

// POST - Upload new media (metadata only, actual upload handled separately)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { filename, original_name, url, type, mime_type, size, width, height, alt_text, folder } = body

    const result = await sql`
      INSERT INTO media (filename, original_name, url, type, mime_type, size, width, height, alt_text, folder)
      VALUES (${filename}, ${original_name}, ${url}, ${type}, ${mime_type}, ${size}, ${width || null}, ${height || null}, ${alt_text || ''}, ${folder || 'general'})
      RETURNING *
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating media:', error)
    return NextResponse.json({ error: 'Failed to create media' }, { status: 500 })
  }
}

// DELETE - Bulk delete media
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { ids } = body

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No media IDs provided' }, { status: 400 })
    }

    // Get media info to delete from R2
    const mediaList = await sql`SELECT * FROM media WHERE id = ANY(${ids})`

    // Delete from R2
    for (const media of mediaList) {
      try {
        await deleteFromR2(media.filename as string)
      } catch (r2Error) {
        console.error('Error deleting from R2:', r2Error)
      }
    }

    // Delete from database
    await sql`DELETE FROM media WHERE id = ANY(${ids})`

    return NextResponse.json({ message: 'Media deleted successfully' })
  } catch (error) {
    console.error('Error deleting media:', error)
    return NextResponse.json({ error: 'Failed to delete media' }, { status: 500 })
  }
}
