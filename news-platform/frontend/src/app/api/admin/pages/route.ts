import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug, generateSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * GET /api/admin/pages - List all pages
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pages = await query(`
      SELECT p.*, u.display_name as created_by_name
      FROM pages p
      LEFT JOIN users u ON p.created_by = u.id
      ORDER BY p.sort_order ASC, p.title ASC
    `);

    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
  }
}

/**
 * POST /api/admin/pages - Create new page
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, content, excerpt, featured_image, status, seo, template, show_in_menu } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const baseSlug = slug || generateSlug(title);
    const uniqueSlug = await generateUniqueSlug('pages', baseSlug);

    const result = await query<{ id: number }>(`
      INSERT INTO pages (title, slug, content, excerpt, featured_image, status, seo, template, show_in_menu, created_by, published_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CASE WHEN $6 = 'published' THEN NOW() ELSE NULL END)
      RETURNING id
    `, [
      title,
      uniqueSlug,
      content || '',
      excerpt || null,
      featured_image || null,
      status || 'draft',
      JSON.stringify(seo || {}),
      template || 'default',
      show_in_menu || false,
      userId
    ]);

    const pageId = result[0]?.id;
    await logAuditAction(userId, 'create_page', 'page', pageId, { title });

    return NextResponse.json({ success: true, id: pageId, slug: uniqueSlug });
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 });
  }
}
