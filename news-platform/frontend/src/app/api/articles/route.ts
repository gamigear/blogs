import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { getArticles, getArticleCount } from '@/lib/strapi';
import { createArticle, ArticleInput } from '@/lib/articles';
import { sanitizeInput, sanitizeHtml, withRateLimit, addSecurityHeaders } from '@/lib/security';
import { createAuditLog } from '@/lib/moderation';

export const dynamic = 'force-dynamic';

/**
 * GET /api/articles - List published articles
 * Requirements: 2.1
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '10'), 50);

    const [articles, total] = await Promise.all([
      getArticles(page, pageSize),
      getArticleCount(),
    ]);

    const response = NextResponse.json({
      data: articles,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/articles - Create new article (editor+ only)
 * Requirements: 2.1, 10.1
 */
export async function POST(req: NextRequest) {
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

    // Parse and validate request body
    const body = await req.json();
    
    if (!body.title || typeof body.title !== 'string') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    
    if (!body.content || typeof body.content !== 'string') {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }
    
    if (!body.categoryId || typeof body.categoryId !== 'number') {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    // Sanitize inputs
    const articleInput: ArticleInput = {
      title: sanitizeInput(body.title),
      content: body.content, // Content may contain HTML, sanitize on render
      excerpt: body.excerpt ? sanitizeInput(body.excerpt) : undefined,
      categoryId: body.categoryId,
      authorId: body.authorId,
      featuredImage: body.featuredImage ? sanitizeInput(body.featuredImage) : undefined,
      tags: body.tags,
      seo: body.seo,
      readingTime: body.readingTime,
      isFeatured: body.isFeatured,
      isSticky: body.isSticky,
    };

    // Create article
    const article = await createArticle(articleInput, (session as any).userId);

    // Create audit log
    await createAuditLog({
      userId: (session as any).userId,
      action: 'article.create',
      resourceType: 'article',
      resourceId: article.id,
      details: { title: article.title, status: article.status },
      ipAddress: req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || undefined,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    const response = NextResponse.json({ data: article }, { status: 201 });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error creating article:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Category not found') {
        return NextResponse.json({ error: 'Category not found' }, { status: 400 });
      }
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
