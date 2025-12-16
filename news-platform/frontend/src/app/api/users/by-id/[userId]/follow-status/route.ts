import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions) as { userId?: number } | null;
    const { userId } = await params;
    const targetUserId = parseInt(userId);

    if (!session?.userId) {
      return NextResponse.json({ isFollowing: false });
    }

    if (session.userId === targetUserId) {
      return NextResponse.json({ isFollowing: false, isOwnProfile: true });
    }

    const followRecord = await queryOne<{ id: number }>(
      'SELECT id FROM user_followers WHERE follower_id = $1 AND following_id = $2',
      [session.userId, targetUserId]
    );

    return NextResponse.json({ isFollowing: !!followRecord });
  } catch (error) {
    console.error('Error checking follow status:', error);
    return NextResponse.json({ isFollowing: false });
  }
}
