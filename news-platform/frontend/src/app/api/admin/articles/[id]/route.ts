import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: { id: string };
}

/**
 * GET /api/admin/articles/[id] - Get article details
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !['admin', 'editor'].includes(session.user.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(params.id);
    const articles = await query(`
      SELECT * FROM articles WHERE id = $1
    `, [articleId]);

    if (articles.length === 0) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ article: articles[0] });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}


/**
 * PATCH /api/admin/articles/[id] - Update article
 */
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !['admin', 'editor'].includes(session.user.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(params.id);
    const body = await request.json();
    const { title, slug, excerpt, content, category_id, status, featured_image, seo } = body;

    // Build update query dynamically
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (title) { updates.push(`title = $${paramIndex++}`); values.push(title); }
    if (slug) {
      const uniqueSlug = await generateUniqueSlug('articles', slug, articleId);
      updates.push(`slug = $${paramIndex++}`);
      values.push(uniqueSlug);
    }
    if (excerpt !== undefined) { updates.push(`excerpt = $${paramIndex++}`); values.push(excerpt); }
    if (content) {
      updates.push(`content = $${paramIndex++}`);
      values.push(content);
      const readingTime = Math.ceil(content.split(/\s+/).length / 200);
      updates.push(`reading_time = $${paramIndex++}`);
      values.push(readingTime);
    }
    if (category_id) { updates.push(`category_id = $${paramIndex++}`); values.push(category_id); }
    if (status) {
      updates.push(`status = $${paramIndex++}`);
      values.push(status);
      if (status === 'published') {
        updates.push(`published_at = COALESCE(published_at, NOW())`);
      }
    }
    if (featured_image !== undefined) { updates.push(`featured_image = $${paramIndex++}`); values.push(featured_image); }
    if (seo) { updates.push(`seo = $${paramIndex++}`); values.push(JSON.stringify(seo)); }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(articleId);
    await execute(`UPDATE articles SET ${updates.join(', ')} WHERE id = $${paramIndex}`, values);

    await logAuditAction(session.user.id!, 'update_article', 'article', articleId, { changes: Object.keys(body) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/articles/[id] - Delete article
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !['admin', 'editor'].includes(session.user.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(params.id);
    await execute(`UPDATE articles SET status = 'archived' WHERE id = $1`, [articleId]);
    await logAuditAction(session.user.id!, 'delete_article', 'article', articleId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
