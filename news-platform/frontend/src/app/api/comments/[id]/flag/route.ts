import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { getCommentSettings } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * POST /api/comments/[id]/flag - Báo cáo comment
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
    const body = await req.json();
    const { reason, description } = body;

    // Validate reason
    const validReasons = ['spam', 'offensive', 'harassment', 'misinformation', 'other'];
    if (!reason || !validReasons.includes(reason)) {
      return NextResponse.json({ error: 'Invalid reason' }, { status: 400 });
    }

    // Kiểm tra comment tồn tại
    const comment = await queryOne<{ id: number; flagged_count: number }>(
      'SELECT id, flagged_count FROM comments WHERE id = $1',
      [commentId]
    );

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Kiểm tra đã báo cáo chưa
    const existingFlag = await queryOne<{ id: number }>(
      'SELECT id FROM comment_flags WHERE comment_id = $1 AND user_id = $2',
      [commentId, userId]
    );

    if (existingFlag) {
      return NextResponse.json({ error: 'Already flagged' }, { status: 400 });
    }

    // Thêm báo cáo
    await query(
      'INSERT INTO comment_flags (comment_id, user_id, reason, description) VALUES ($1, $2, $3, $4)',
      [commentId, userId, reason, description || null]
    );

    // Cập nhật flagged_count
    const newFlaggedCount = comment.flagged_count + 1;
    await query(
      'UPDATE comments SET flagged_count = $1 WHERE id = $2',
      [newFlaggedCount, commentId]
    );

    // Kiểm tra ngưỡng để tự động ẩn
    const settings = await getCommentSettings();
    if (newFlaggedCount >= settings.moderation.flag_threshold_for_hide) {
      await query(
        "UPDATE comments SET status = 'pending' WHERE id = $1",
        [commentId]
      );
    } else if (newFlaggedCount >= settings.moderation.flag_threshold_for_review) {
      // Thêm vào moderation queue
      await query(
        `INSERT INTO moderation_queue (resource_type, resource_id, reason, reported_by, priority)
        VALUES ('comment', $1, $2, $3, 'high')
        ON CONFLICT DO NOTHING`,
        [commentId, `Flagged ${newFlaggedCount} times. Latest: ${reason}`, userId]
      );
    }

    const response = NextResponse.json({ 
      success: true, 
      message: 'Comment flagged successfully' 
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error flagging comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
