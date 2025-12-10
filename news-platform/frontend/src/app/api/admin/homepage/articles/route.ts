import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * GET /api/admin/homepage/articles - Search articles for selection
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const categoryId = searchParams.get('category_id');
    const tagId = searchParams.get('tag_id');
    const limit = parseInt(searchParams.get('limit') || '20');

    let whereClause = "WHERE a.status = 'published'";
    const params: any[] = [];
    let paramIndex = 1;

    if (search) {
      whereClause += ` AND (a.title ILIKE $${paramIndex} OR a.excerpt ILIKE $${paramIndex})`;
      params.push(`%${search}%`);
      paramIndex++;
    }

    if (categoryId) {
      whereClause += ` AND a.category_id = $${paramIndex}`;
      params.push(parseInt(categoryId));
      paramIndex++;
    }

    if (tagId) {
      whereClause += ` AND EXISTS (SELECT 1 FROM article_tags at WHERE at.article_id = a.id AND at.tag_id = $${paramIndex})`;
      params.push(parseInt(tagId));
      paramIndex++;
    }

    params.push(limit);

    const articles = await query(`
      SELECT 
        a.id, a.title, a.slug, a.excerpt, a.featured_image, 
        a.published_at, a.view_count, a.is_featured,
        c.name as category_name
      FROM articles a
      LEFT JOIN categories c ON a.category_id = c.id
      ${whereClause}
      ORDER BY a.published_at DESC
      LIMIT $${paramIndex}
    `, params);

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error searching articles:', error);
    return NextResponse.json({ error: 'Failed to search articles' }, { status: 500 });
  }
}
