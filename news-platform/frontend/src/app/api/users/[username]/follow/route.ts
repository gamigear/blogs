import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

/**
 * POST /api/users/[username]/follow - Follow a user
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { username } = await params;

    // Get target user
    const targetUser = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE username = $1',
      [username]
    );

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (targetUser.id === session.userId) {
      return NextResponse.json({ error: 'Cannot follow yourself' }, { status: 400 });
    }

    // Check if already following
    const existing = await queryOne<{ id: number }>(
      'SELECT id FROM user_followers WHERE follower_id = $1 AND following_id = $2',
      [session.userId, targetUser.id]
    );

    if (existing) {
      return NextResponse.json({ error: 'Already following' }, { status: 400 });
    }

    // Create follow relationship
    await query(
      'INSERT INTO user_followers (follower_id, following_id) VALUES ($1, $2)',
      [session.userId, targetUser.id]
    );

    // Get updated follower count
    const user = await queryOne<{ followers_count: number }>(
      'SELECT followers_count FROM users WHERE id = $1',
      [targetUser.id]
    );

    return NextResponse.json({
      success: true,
      isFollowing: true,
      followersCount: user?.followers_count || 0,
    });
  } catch (error) {
    console.error('Error following user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/users/[username]/follow - Unfollow a user
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { username } = await params;

    // Get target user
    const targetUser = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE username = $1',
      [username]
    );

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Remove follow relationship
    await query(
      'DELETE FROM user_followers WHERE follower_id = $1 AND following_id = $2',
      [session.userId, targetUser.id]
    );

    // Get updated follower count
    const user = await queryOne<{ followers_count: number }>(
      'SELECT followers_count FROM users WHERE id = $1',
      [targetUser.id]
    );

    return NextResponse.json({
      success: true,
      isFollowing: false,
      followersCount: user?.followers_count || 0,
    });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
