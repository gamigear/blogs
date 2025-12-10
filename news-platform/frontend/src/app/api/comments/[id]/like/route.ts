import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * POST /api/comments/[id]/like - Like comment
 */
export async function POST(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const commentId = parseInt(id);

    // Kiểm tra comment tồn tại
    const comment = await queryOne<{ id: number }>(
      'SELECT id FROM comments WHERE id = $1',
      [commentId]
    );

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Kiểm tra đã like chưa
    const existingLike = await queryOne<{ id: number }>(
      'SELECT id FROM comment_likes WHERE comment_id = $1 AND user_id = $2',
      [commentId, userId]
    );

    if (existingLike) {
      return NextResponse.json({ error: 'Already liked' }, { status: 400 });
    }

    // Thêm like
    await query(
      'INSERT INTO comment_likes (comment_id, user_id) VALUES ($1, $2)',
      [commentId, userId]
    );

    // Lấy số like mới
    const result = await queryOne<{ likes_count: number }>(
      'SELECT likes_count FROM comments WHERE id = $1',
      [commentId]
    );

    const response = NextResponse.json({ 
      success: true, 
      likes_count: result?.likes_count || 0 
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error liking comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/comments/[id]/like - Unlike comment
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const commentId = parseInt(id);

    // Xóa like
    await query(
      'DELETE FROM comment_likes WHERE comment_id = $1 AND user_id = $2',
      [commentId, userId]
    );

    // Lấy số like mới
    const result = await queryOne<{ likes_count: number }>(
      'SELECT likes_count FROM comments WHERE id = $1',
      [commentId]
    );

    const response = NextResponse.json({ 
      success: true, 
      likes_count: result?.likes_count || 0 
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error unliking comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
