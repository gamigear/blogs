import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions) as { userId?: number } | null;
    const { userId } = await params;
    const targetUserId = parseInt(userId);

    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.userId === targetUserId) {
      return NextResponse.json({ error: 'Cannot follow yourself' }, { status: 400 });
    }

    // Check if target user exists
    const targetUser = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE id = $1',
      [targetUserId]
    );

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if already following (table name is user_followers)
    const existingFollow = await queryOne<{ id: number }>(
      'SELECT id FROM user_followers WHERE follower_id = $1 AND following_id = $2',
      [session.userId, targetUserId]
    );

    if (existingFollow) {
      // Unfollow - trigger will update counts automatically
      await query(
        'DELETE FROM user_followers WHERE follower_id = $1 AND following_id = $2',
        [session.userId, targetUserId]
      );

      return NextResponse.json({ success: true, isFollowing: false });
    } else {
      // Follow - trigger will update counts automatically
      await query(
        'INSERT INTO user_followers (follower_id, following_id) VALUES ($1, $2)',
        [session.userId, targetUserId]
      );

      return NextResponse.json({ success: true, isFollowing: true });
    }
  } catch (error) {
    console.error('Error toggling follow:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
