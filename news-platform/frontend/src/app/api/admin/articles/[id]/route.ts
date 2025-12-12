import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/admin/articles/[id] - Get article details with tags
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(id);
    const articles = await query(`SELECT * FROM articles WHERE id = $1`, [articleId]);

    if (articles.length === 0) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Get article tags
    const tags = await query(`
      SELECT t.id FROM tags t
      INNER JOIN article_tags at ON t.id = at.tag_id
      WHERE at.article_id = $1
    `, [articleId]);
    const tagIds = tags.map((t: any) => t.id);

    return NextResponse.json({ article: articles[0], tag_ids: tagIds });
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
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(id);
    const body = await request.json();
    const { title, slug, excerpt, content, category_id, status, featured_image, seo, tag_ids } = body;

    // Build update query dynamically
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (title) { updates.push('title = $' + paramIndex++); values.push(title); }
    if (slug) {
      const uniqueSlug = await generateUniqueSlug('articles', slug, articleId);
      updates.push('slug = $' + paramIndex++);
      values.push(uniqueSlug);
    }
    if (excerpt !== undefined) { updates.push('excerpt = $' + paramIndex++); values.push(excerpt); }
    if (content) {
      updates.push('content = $' + paramIndex++);
      values.push(content);
      const readingTime = Math.ceil(content.split(/\s+/).length / 200);
      updates.push('reading_time = $' + paramIndex++);
      values.push(readingTime);
    }
    if (category_id) { updates.push('category_id = $' + paramIndex++); values.push(category_id); }
    if (status) {
      updates.push('status = $' + paramIndex++);
      values.push(status);
      if (status === 'published') {
        updates.push('published_at = COALESCE(published_at, NOW())');
      }
    }
    if (featured_image !== undefined) { updates.push('featured_image = $' + paramIndex++); values.push(featured_image); }
    if (seo) { updates.push('seo = $' + paramIndex++); values.push(JSON.stringify(seo)); }

    if (updates.length > 0) {
      values.push(articleId);
      await execute('UPDATE articles SET ' + updates.join(', ') + ' WHERE id = $' + paramIndex, values);
    }

    // Update tags
    if (tag_ids !== undefined && Array.isArray(tag_ids)) {
      await execute('DELETE FROM article_tags WHERE article_id = $1', [articleId]);
      for (const tagId of tag_ids) {
        await execute('INSERT INTO article_tags (article_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [articleId, tagId]);
      }
    }

    const userId = (session?.user as any)?.id;
    await logAuditAction(userId, 'update_article', 'article', articleId, { changes: Object.keys(body) });

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
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(id);
    
    // Remove tags first
    await execute('DELETE FROM article_tags WHERE article_id = $1', [articleId]);
    // Archive article (soft delete)
    await execute("UPDATE articles SET status = 'archived' WHERE id = $1", [articleId]);
    
    const userId = (session?.user as any)?.id;
    await logAuditAction(userId, 'delete_article', 'article', articleId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
