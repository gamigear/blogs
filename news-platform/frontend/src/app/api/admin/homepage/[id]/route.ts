import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne, execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * GET /api/admin/homepage/[id] - Get section details with articles
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const sectionId = parseInt(id);

    const section = await queryOne(`SELECT * FROM homepage_sections WHERE id = $1`, [sectionId]);
    if (!section) {
      return NextResponse.json({ error: 'Section not found' }, { status: 404 });
    }

    // Get manually selected articles if any
    const selectedArticles = await query(`
      SELECT a.id, a.title, a.slug, a.featured_image, a.published_at, hsa.sort_order
      FROM homepage_section_articles hsa
      JOIN articles a ON hsa.article_id = a.id
      WHERE hsa.section_id = $1
      ORDER BY hsa.sort_order ASC
    `, [sectionId]);

    return NextResponse.json({ section, selectedArticles });
  } catch (error) {
    console.error('Error fetching section:', error);
    return NextResponse.json({ error: 'Failed to fetch section' }, { status: 500 });
  }
}

/**
 * PUT /api/admin/homepage/[id] - Update section
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const sectionId = parseInt(id);
    const body = await request.json();

    const {
      name,
      title,
      section_type,
      selection_type,
      selection_data,
      display_limit,
      display_layout,
      display_settings,
      is_visible,
      position,
      article_ids // For manual selection
    } = body;

    // Update section
    await execute(`
      UPDATE homepage_sections SET
        name = COALESCE($1, name),
        title = $2,
        section_type = COALESCE($3, section_type),
        selection_type = COALESCE($4, selection_type),
        selection_data = COALESCE($5, selection_data),
        display_limit = COALESCE($6, display_limit),
        display_layout = COALESCE($7, display_layout),
        display_settings = COALESCE($8, display_settings),
        is_visible = COALESCE($9, is_visible),
        position = COALESCE($10, position),
        updated_by = $11
      WHERE id = $12
    `, [
      name,
      title,
      section_type,
      selection_type,
      selection_data ? JSON.stringify(selection_data) : null,
      display_limit,
      display_layout,
      display_settings ? JSON.stringify(display_settings) : null,
      is_visible,
      position,
      userId,
      sectionId
    ]);

    // Update manual article selection if provided
    if (Array.isArray(article_ids)) {
      // Clear existing
      await execute(`DELETE FROM homepage_section_articles WHERE section_id = $1`, [sectionId]);
      
      // Insert new
      for (let i = 0; i < article_ids.length; i++) {
        await execute(`
          INSERT INTO homepage_section_articles (section_id, article_id, sort_order)
          VALUES ($1, $2, $3)
          ON CONFLICT (section_id, article_id) DO UPDATE SET sort_order = $3
        `, [sectionId, article_ids[i], i]);
      }
    }

    await logAuditAction(userId, 'update_homepage_section', 'homepage_section', sectionId, { name });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating section:', error);
    return NextResponse.json({ error: 'Failed to update section' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/homepage/[id] - Delete section
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const sectionId = parseInt(id);

    const section = await queryOne<{ name: string }>(`SELECT name FROM homepage_sections WHERE id = $1`, [sectionId]);
    if (!section) {
      return NextResponse.json({ error: 'Section not found' }, { status: 404 });
    }

    await execute(`DELETE FROM homepage_sections WHERE id = $1`, [sectionId]);
    await logAuditAction(userId, 'delete_homepage_section', 'homepage_section', sectionId, { name: section.name });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting section:', error);
    return NextResponse.json({ error: 'Failed to delete section' }, { status: 500 });
  }
}
