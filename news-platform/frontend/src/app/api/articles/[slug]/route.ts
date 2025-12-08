import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { getArticleBySlug } from '@/lib/strapi';
import { 
  getArticleById, 
  updateArticle, 
  submitForReview, 
  approveArticle, 
  rejectArticle,
  archiveArticle,
  ArticleUpdateInput 
} from '@/lib/articles';
import { query, queryOne } from '@/lib/db';
import { sanitizeInput, addSecurityHeaders } from '@/lib/security';
import { createAuditLog } from '@/lib/moderation';

/**
 * GET /api/articles/[slug] - Get article by slug
 * Requirements: 2.1
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Increment view count asynchronously
    query('UPDATE articles SET view_count = view_count + 1 WHERE slug = $1', [params.slug])
      .catch(err => console.error('Failed to increment view count:', err));

    const response = NextResponse.json({ data: article });
    
    // Add cache headers
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/articles/[slug] - Update article (editor+ only)
 * Requirements: 2.2, 2.3, 2.5
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check editor permission
    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden: Editor role required' }, { status: 403 });
    }

    // Find article by slug
    const existingArticle = await queryOne<{ id: number; status: string }>(
      'SELECT id, status FROM articles WHERE slug = $1',
      [params.slug]
    );

    if (!existingArticle) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const body = await req.json();
    const userId = (session as any).userId;

    // Handle status transitions
    if (body.action) {
      let updatedArticle;
      
      switch (body.action) {
        case 'submit_for_review':
          updatedArticle = await submitForReview(existingArticle.id, userId);
          break;
        case 'approve':
          updatedArticle = await approveArticle(existingArticle.id, userId);
          break;
        case 'reject':
          updatedArticle = await rejectArticle(existingArticle.id, userId, body.reason);
          break;
        case 'archive':
          updatedArticle = await archiveArticle(existingArticle.id, userId);
          break;
        default:
          return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
      }

      // Create audit log for status change
      await createAuditLog({
        userId,
        action: `article.${body.action}`,
        resourceType: 'article',
        resourceId: existingArticle.id,
        details: { 
          previousStatus: existingArticle.status, 
          newStatus: updatedArticle.status,
          reason: body.reason 
        },
        ipAddress: req.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
        userAgent: req.headers.get('user-agent') || undefined,
      });

      const response = NextResponse.json({ data: updatedArticle });
      return addSecurityHeaders(response);
    }

    // Regular update
    const updateInput: ArticleUpdateInput = {};
    
    if (body.title !== undefined) {
      updateInput.title = sanitizeInput(body.title);
    }
    if (body.content !== undefined) {
      updateInput.content = body.content;
    }
    if (body.excerpt !== undefined) {
      updateInput.excerpt = sanitizeInput(body.excerpt);
    }
    if (body.categoryId !== undefined) {
      updateInput.categoryId = body.categoryId;
    }
    if (body.authorId !== undefined) {
      updateInput.authorId = body.authorId;
    }
    if (body.featuredImage !== undefined) {
      updateInput.featuredImage = body.featuredImage ? sanitizeInput(body.featuredImage) : undefined;
    }
    if (body.seo !== undefined) {
      updateInput.seo = body.seo;
    }
    if (body.readingTime !== undefined) {
      updateInput.readingTime = body.readingTime;
    }
    if (body.isFeatured !== undefined) {
      updateInput.isFeatured = body.isFeatured;
    }
    if (body.isSticky !== undefined) {
      updateInput.isSticky = body.isSticky;
    }
    if (body.tags !== undefined) {
      updateInput.tags = body.tags;
    }

    const updatedArticle = await updateArticle(
      existingArticle.id,
      updateInput,
      userId,
      body.changeSummary || 'Updated via API'
    );

    // Create audit log
    await createAuditLog({
      userId,
      action: 'article.update',
      resourceType: 'article',
      resourceId: existingArticle.id,
      details: { changes: Object.keys(updateInput) },
      ipAddress: req.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    const response = NextResponse.json({ data: updatedArticle });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error updating article:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return NextResponse.json({ error: error.message }, { status: 404 });
      }
      if (error.message.includes('Only')) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/articles/[slug] - Delete article (admin only)
 * Requirements: 2.1
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check admin permission
    const roles = session.roles || [];
    if (!roles.includes('admin')) {
      return NextResponse.json({ error: 'Forbidden: Admin role required' }, { status: 403 });
    }

    // Find article by slug
    const existingArticle = await queryOne<{ id: number; title: string }>(
      'SELECT id, title FROM articles WHERE slug = $1',
      [params.slug]
    );

    if (!existingArticle) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const userId = (session as any).userId;

    // Create audit log before deletion
    await createAuditLog({
      userId,
      action: 'article.delete',
      resourceType: 'article',
      resourceId: existingArticle.id,
      details: { title: existingArticle.title },
      ipAddress: req.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    // Delete article
    await query('DELETE FROM articles WHERE id = $1', [existingArticle.id]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
