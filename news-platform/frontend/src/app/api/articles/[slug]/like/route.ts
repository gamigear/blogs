import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * GET /api/articles/[slug]/like - Check if user liked article
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const { slug } = await params;
    const userId = (session as any)?.userId || null;

    // Get article
    const article = await queryOne<{ id: number; likes_count: number }>(
      'SELECT id, likes_count FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    let isLiked = false;
    if (userId) {
      const like = await queryOne<{ id: number }>(
        'SELECT id FROM article_likes WHERE article_id = $1 AND user_id = $2',
        [article.id, userId]
      );
      isLiked = !!like;
    }

    const response = NextResponse.json({
      likes_count: article.likes_count || 0,
      is_liked: isLiked,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error checking article like:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/articles/[slug]/like - Like article
 */
export async function POST(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session as any)?.userId || null;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    // Get article
    const article = await queryOne<{ id: number }>(
      'SELECT id FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Check if already liked
    const existingLike = await queryOne<{ id: number }>(
      'SELECT id FROM article_likes WHERE article_id = $1 AND user_id = $2',
      [article.id, userId]
    );

    if (existingLike) {
      return NextResponse.json({ error: 'Already liked' }, { status: 400 });
    }

    // Add like
    await query(
      'INSERT INTO article_likes (article_id, user_id) VALUES ($1, $2)',
      [article.id, userId]
    );

    // Get new count
    const result = await queryOne<{ likes_count: number }>(
      'SELECT likes_count FROM articles WHERE id = $1',
      [article.id]
    );

    const response = NextResponse.json({
      success: true,
      likes_count: result?.likes_count || 0,
      is_liked: true,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error liking article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/articles/[slug]/like - Unlike article
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session as any)?.userId || null;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    // Get article
    const article = await queryOne<{ id: number }>(
      'SELECT id FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Remove like
    await query(
      'DELETE FROM article_likes WHERE article_id = $1 AND user_id = $2',
      [article.id, userId]
    );

    // Get new count
    const result = await queryOne<{ likes_count: number }>(
      'SELECT likes_count FROM articles WHERE id = $1',
      [article.id]
    );

    const response = NextResponse.json({
      success: true,
      likes_count: result?.likes_count || 0,
      is_liked: false,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error unliking article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
