import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, queryOne, generateUniqueSlug, generateSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * POST /api/admin/articles - Create new article
 * - Admin/Editor: Can publish directly, choose author
 * - Regular users: Article goes to pending_review, author is themselves
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session as any)?.userId;
    const userDisplayName = session?.user?.name || 'Unknown';
    
    // All logged-in users can create articles
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const isAdminOrEditor = ['admin', 'editor', 'superadmin'].includes(userRole);

    const body = await request.json();
    const { title, slug, excerpt, content, category_id, author_id, status, featured_image, seo, tag_ids } = body;

    // Validate required fields
    if (!title || !content || !category_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Generate unique slug
    const baseSlug = slug || generateSlug(title);
    const uniqueSlug = await generateUniqueSlug('articles', baseSlug);

    // Calculate reading time (approx 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Determine final status and author
    let finalStatus: string;
    let finalAuthorId: number | null = null;

    if (isAdminOrEditor) {
      // Admin/Editor can choose status and author
      finalStatus = status || 'draft';
      
      if (author_id) {
        finalAuthorId = author_id;
      } else {
        // Get or create author for admin/editor
        const existingAuthor = await queryOne<{ id: number }>(
          'SELECT id FROM authors WHERE email = $1',
          [session.user.email]
        );
        
        if (existingAuthor) {
          finalAuthorId = existingAuthor.id;
        } else {
          // Create author for admin/editor
          const newAuthor = await query<{ id: number }>(
            'INSERT INTO authors (name, email, slug) VALUES ($1, $2, $3) RETURNING id',
            [userDisplayName, session.user.email, generateSlug(userDisplayName)]
          );
          finalAuthorId = newAuthor[0]?.id || null;
        }
      }
    } else {
      // Regular users: always pending_review
      finalStatus = 'pending_review';
      
      // Get or create author for regular user
      const existingAuthor = await queryOne<{ id: number }>(
        'SELECT id FROM authors WHERE email = $1',
        [session.user.email]
      );
      
      if (existingAuthor) {
        finalAuthorId = existingAuthor.id;
      } else {
        // Create author for user
        const newAuthor = await query<{ id: number }>(
          'INSERT INTO authors (name, email, slug) VALUES ($1, $2, $3) RETURNING id',
          [userDisplayName, session.user.email, generateSlug(userDisplayName)]
        );
        finalAuthorId = newAuthor[0]?.id || null;
      }
    }

    // Insert article
    const result = await query<{ id: number }>(`
      INSERT INTO articles (
        title, slug, excerpt, content, category_id, author_id, 
        status, featured_image, reading_time, seo,
        published_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        CASE WHEN $7 = 'published' THEN NOW() ELSE NULL END
      )
      RETURNING id
    `, [
      title,
      uniqueSlug,
      excerpt || null,
      content,
      category_id,
      finalAuthorId,
      finalStatus,
      featured_image || null,
      readingTime,
      JSON.stringify(seo || {}),
    ]);

    const articleId = result[0]?.id;

    // Save tags
    if (tag_ids && Array.isArray(tag_ids) && tag_ids.length > 0) {
      for (const tagId of tag_ids) {
        await execute(`INSERT INTO article_tags (article_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`, [articleId, tagId]);
      }
    }

    // Log audit
    await logAuditAction(
      userId,
      'create_article',
      'article',
      articleId,
      { title, status: finalStatus, isAdminOrEditor }
    );

    return NextResponse.json({ 
      success: true, 
      id: articleId,
      slug: uniqueSlug,
      status: finalStatus,
      message: isAdminOrEditor 
        ? (finalStatus === 'published' ? 'Bài viết đã được xuất bản!' : 'Bài viết đã được lưu!')
        : 'Bài viết đã được gửi và đang chờ duyệt!'
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

/**
 * GET /api/admin/articles - List articles for admin
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor', 'moderator'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    let whereClause = '';
    const params: any[] = [limit, offset];

    if (status) {
      whereClause = 'WHERE a.status = $3';
      params.push(status);
    }

    const articles = await query(`
      SELECT 
        a.id, a.title, a.slug, a.status, a.published_at, a.created_at,
        a.view_count, u.display_name as author_name, c.name as category_name
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.id
      LEFT JOIN categories c ON a.category_id = c.id
      ${whereClause}
      ORDER BY a.created_at DESC
      LIMIT $1 OFFSET $2
    `, params);

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
