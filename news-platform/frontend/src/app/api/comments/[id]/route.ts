import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * DELETE /api/comments/[id] - Xóa comment của chính mình
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const userId = session.user?.id ? parseInt(session.user.id) : 0;

    // Kiểm tra comment có thuộc về user không
    const comment = await queryOne<{ user_id: number }>(
      'SELECT user_id FROM comments WHERE id = $1',
      [parseInt(id)]
    );

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    if (comment.user_id !== userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await query('DELETE FROM comments WHERE id = $1', [parseInt(id)]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/comments/[id] - Sửa comment của chính mình
 */
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const body = await req.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    // Kiểm tra comment có thuộc về user không
    const comment = await queryOne<{ user_id: number }>(
      'SELECT user_id FROM comments WHERE id = $1',
      [parseInt(id)]
    );

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    if (comment.user_id !== userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updated = await queryOne(
      `UPDATE comments SET content = $1, is_edited = TRUE, edited_at = NOW()
      WHERE id = $2 RETURNING *`,
      [content, parseInt(id)]
    );

    const response = NextResponse.json({ data: updated });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
