import { NextRequest, NextResponse } from 'next/server';
import { searchArticles as algoliaSearch, isAlgoliaConfigured } from '@/lib/algolia';
import { searchArticles as dbSearch, advancedSearchArticles } from '@/lib/strapi';
import { addSecurityHeaders, checkRateLimit } from '@/lib/security';

export const dynamic = 'force-dynamic';

/**
 * GET /api/search - Search articles with advanced filters
 * Requirements: 5.1, 5.2
 * 
 * Query params:
 * - q: keyword search
 * - category: category slug filter
 * - from: date from (YYYY-MM-DD)
 * - to: date to (YYYY-MM-DD)
 * - sort: newest | oldest | popular | views
 * - page: page number (1-based)
 * - limit: results per page (max 50)
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
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50);
    const category = searchParams.get('category') || undefined;
    const dateFrom = searchParams.get('from') || undefined;
    const dateTo = searchParams.get('to') || undefined;
    const sortBy = (searchParams.get('sort') as 'newest' | 'oldest' | 'popular' | 'views') || 'newest';

    // Check if advanced filters are used
    const hasAdvancedFilters = category || dateFrom || dateTo || sortBy !== 'newest';

    // If no query and no filters, return empty
    if (!query && !hasAdvancedFilters) {
      return NextResponse.json({
        data: [],
        meta: { query, total: 0, page: 1, totalPages: 0 },
      });
    }

    // Use advanced search if filters are present or Algolia is not configured
    if (hasAdvancedFilters || !isAlgoliaConfigured()) {
      const result = await advancedSearchArticles({
        keyword: query,
        categorySlug: category,
        dateFrom,
        dateTo,
        sortBy,
        page,
        pageSize: limit,
      });

      const response = NextResponse.json({
        data: result.articles.map((article) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          slug: article.slug,
          category: article.category?.name,
          categorySlug: article.category?.slug,
          author: article.author?.name,
          publishedAt: article.publishedAt,
          featuredImage: article.featuredImage?.url,
          viewCount: article.viewCount,
        })),
        meta: {
          query,
          total: result.total,
          page: result.page,
          totalPages: result.totalPages,
          pageSize: result.pageSize,
          source: 'database',
          filters: {
            category,
            dateFrom,
            dateTo,
            sortBy,
          },
        },
      });

      return addSecurityHeaders(response);
    }

    // Use Algolia for simple keyword search
    const filters = category ? `category:"${category}"` : undefined;
    const result = await algoliaSearch(query, { page: page - 1, hitsPerPage: limit, filters });

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
        page: result.page + 1,
        totalPages: result.nbPages,
        source: 'algolia',
      },
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
