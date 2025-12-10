import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: { id: string };
}

/**
 * GET /api/admin/pages/[id] - Get page details
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pageId = parseInt(params.id);
    const pages = await query('SELECT * FROM pages WHERE id = $1', [pageId]);

    if (pages.length === 0) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json({ page: pages[0] });
  } catch (error) {
    console.error('Error fetching page:', error);
    return NextResponse.json({ error: 'Failed to fetch page' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/pages/[id] - Update page
 */
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pageId = parseInt(params.id);
    const body = await request.json();
    const { title, slug, content, excerpt, featured_image, status, seo, template, show_in_menu, sort_order } = body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (title) { updates.push('title = $' + paramIndex++); values.push(title); }
    if (slug) {
      const uniqueSlug = await generateUniqueSlug('pages', slug, pageId);
      updates.push('slug = $' + paramIndex++);
      values.push(uniqueSlug);
    }
    if (content !== undefined) { updates.push('content = $' + paramIndex++); values.push(content); }
    if (excerpt !== undefined) { updates.push('excerpt = $' + paramIndex++); values.push(excerpt); }
    if (featured_image !== undefined) { updates.push('featured_image = $' + paramIndex++); values.push(featured_image); }
    if (status) {
      updates.push('status = $' + paramIndex++);
      values.push(status);
      if (status === 'published') {
        updates.push('published_at = COALESCE(published_at, NOW())');
      }
    }
    if (seo) { updates.push('seo = $' + paramIndex++); values.push(JSON.stringify(seo)); }
    if (template) { updates.push('template = $' + paramIndex++); values.push(template); }
    if (show_in_menu !== undefined) { updates.push('show_in_menu = $' + paramIndex++); values.push(show_in_menu); }
    if (sort_order !== undefined) { updates.push('sort_order = $' + paramIndex++); values.push(sort_order); }

    updates.push('updated_by = $' + paramIndex++);
    values.push(userId);

    if (updates.length > 1) {
      values.push(pageId);
      await execute('UPDATE pages SET ' + updates.join(', ') + ' WHERE id = $' + paramIndex, values);
    }

    await logAuditAction(userId, 'update_page', 'page', pageId, { changes: Object.keys(body) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating page:', error);
    return NextResponse.json({ error: 'Failed to update page' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/pages/[id] - Delete page
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pageId = parseInt(params.id);
    await execute('DELETE FROM pages WHERE id = $1', [pageId]);
    await logAuditAction(userId, 'delete_page', 'page', pageId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting page:', error);
    return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 });
  }
}
