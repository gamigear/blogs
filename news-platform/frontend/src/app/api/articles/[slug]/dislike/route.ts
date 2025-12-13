import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * GET /api/articles/[slug]/dislike - Check if user disliked article
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const { slug } = await params;
    const userId = (session as any)?.userId || null;

    const article = await queryOne<{ id: number; dislikes_count: number }>(
      'SELECT id, dislikes_count FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    let isDisliked = false;
    if (userId) {
      const dislike = await queryOne<{ id: number }>(
        'SELECT id FROM article_dislikes WHERE article_id = $1 AND user_id = $2',
        [article.id, userId]
      );
      isDisliked = !!dislike;
    }

    const response = NextResponse.json({
      dislikes_count: article.dislikes_count || 0,
      is_disliked: isDisliked,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error checking article dislike:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/articles/[slug]/dislike - Dislike article
 */
export async function POST(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session as any)?.userId || null;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    const article = await queryOne<{ id: number }>(
      'SELECT id FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Check if already disliked
    const existingDislike = await queryOne<{ id: number }>(
      'SELECT id FROM article_dislikes WHERE article_id = $1 AND user_id = $2',
      [article.id, userId]
    );

    if (existingDislike) {
      return NextResponse.json({ error: 'Already disliked' }, { status: 400 });
    }

    // Add dislike (trigger will remove like if exists)
    await query(
      'INSERT INTO article_dislikes (article_id, user_id) VALUES ($1, $2)',
      [article.id, userId]
    );

    // Get new counts
    const result = await queryOne<{ likes_count: number; dislikes_count: number }>(
      'SELECT likes_count, dislikes_count FROM articles WHERE id = $1',
      [article.id]
    );

    const response = NextResponse.json({
      success: true,
      likes_count: result?.likes_count || 0,
      dislikes_count: result?.dislikes_count || 0,
      is_liked: false,
      is_disliked: true,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error disliking article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/articles/[slug]/dislike - Remove dislike
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session as any)?.userId || null;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    const article = await queryOne<{ id: number }>(
      'SELECT id FROM articles WHERE slug = $1',
      [slug]
    );

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    await query(
      'DELETE FROM article_dislikes WHERE article_id = $1 AND user_id = $2',
      [article.id, userId]
    );

    const result = await queryOne<{ dislikes_count: number }>(
      'SELECT dislikes_count FROM articles WHERE id = $1',
      [article.id]
    );

    const response = NextResponse.json({
      success: true,
      dislikes_count: result?.dislikes_count || 0,
      is_disliked: false,
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error removing dislike:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
