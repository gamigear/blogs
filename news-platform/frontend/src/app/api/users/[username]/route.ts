import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface UserPublicProfile {
  id: number;
  username: string;
  display_name: string;
  avatar: string | null;
  cover: string | null;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  followers_count: number;
  following_count: number;
  created_at: string;
  bio: string | null;
}

interface CommunityPostRow {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  status: string;
  created_at: string;
}

/**
 * GET /api/users/[username] - Get public user profile
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    // Get current user session for follow status
    const session = await getServerSession(authOptions);

    // Get user public profile
    const user = await queryOne<UserPublicProfile>(
      `SELECT id, username, display_name, avatar, cover, role, trust_level, 
              posts_created, likes_received, 
              COALESCE(followers_count, 0) as followers_count,
              COALESCE(following_count, 0) as following_count,
              created_at,
              meta->>'bio' as bio
       FROM users 
       WHERE username = $1`,
      [username]
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if current user is following this user
    let isFollowing = false;
    if (session?.userId && session.userId !== user.id) {
      const followRecord = await queryOne<{ id: number }>(
        'SELECT id FROM user_followers WHERE follower_id = $1 AND following_id = $2',
        [session.userId, user.id]
      );
      isFollowing = !!followRecord;
    }

    // Get user's approved community posts
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const offset = (page - 1) * pageSize;

    const [posts, countResult] = await Promise.all([
      query<CommunityPostRow>(
        `SELECT id, title, content, excerpt, status, created_at
         FROM community_posts
         WHERE user_id = $1 AND status = 'approved'
         ORDER BY created_at DESC
         LIMIT $2 OFFSET $3`,
        [user.id, pageSize, offset]
      ),
      queryOne<{ count: string }>(
        `SELECT COUNT(*) as count FROM community_posts WHERE user_id = $1 AND status = 'approved'`,
        [user.id]
      ),
    ]);

    // Calculate account age
    const createdDate = new Date(user.created_at);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const accountAge = diffDays < 30 
      ? `${diffDays} ngày` 
      : diffDays < 365 
        ? `${Math.floor(diffDays / 30)} tháng`
        : `${Math.floor(diffDays / 365)} năm`;

    return NextResponse.json({
      user: {
        ...user,
        account_age: accountAge,
      },
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || post.content.substring(0, 200),
        createdAt: post.created_at,
      })),
      pagination: {
        page,
        pageSize,
        total: parseInt(countResult?.count || '0'),
        totalPages: Math.ceil(parseInt(countResult?.count || '0') / pageSize),
      },
      isFollowing,
      isOwnProfile: session?.userId === user.id,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
