import { NextRequest, NextResponse } from 'next/server';
import { searchArticles as algoliaSearch, isAlgoliaConfigured } from '@/lib/algolia';
import { searchArticles as dbSearch } from '@/lib/strapi';
import { addSecurityHeaders, checkRateLimit } from '@/lib/security';

/**
 * GET /api/search - Search articles
 * Requirements: 5.1, 5.2
 */
export async function GET(req: NextRequest) {
  try {
    // Rate limit search requests
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = checkRateLimit(`search:${ip}`, { maxRequests: 30, windowMs: 60000 });
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many search requests. Please wait.' },
        { status: 429 }
      );
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '0');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50);
    const category = searchParams.get('category') || undefined;

    if (!query || query.length < 2) {
      return NextResponse.json({
        data: [],
        meta: { query, total: 0, page: 0, totalPages: 0 },
      });
    }

    // Use Algolia if configured, otherwise fallback to database search
    if (isAlgoliaConfigured()) {
      const filters = category ? `category:"${category}"` : undefined;
      const result = await algoliaSearch(query, { page, hitsPerPage: limit, filters });

      const response = NextResponse.json({
        data: result.hits.map((hit) => ({
          id: hit.objectID,
          title: hit.title,
          excerpt: hit.excerpt,
          slug: hit.slug,
          category: hit.category,
          author: hit.author,
          publishedAt: hit.publishedAt,
          featuredImage: hit.featuredImage,
          highlight: hit._highlightResult,
        })),
        meta: {
          query: result.query,
          total: result.nbHits,
          page: result.page,
          totalPages: result.nbPages,
          source: 'algolia',
        },
      });

      return addSecurityHeaders(response);
    }

    // Fallback to PostgreSQL full-text search
    const articles = await dbSearch(query, limit);

    const response = NextResponse.json({
      data: articles.map((article) => ({
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        slug: article.slug,
        category: article.category?.name,
        author: article.author?.name,
        publishedAt: article.publishedAt,
        featuredImage: article.featuredImage?.url,
      })),
      meta: {
        query,
        total: articles.length,
        page: 0,
        totalPages: 1,
        source: 'database',
      },
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
