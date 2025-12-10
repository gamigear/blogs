/**
 * Feed/Newsfeed Module
 * Handles community posts for the newsfeed feature (similar to Tinhte Fact)
 */

import { query, queryOne } from './db';

export interface FeedPost {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  images: string[];
  author: {
    id: number;
    name: string;
    username: string;
    avatar: string | null;
    trust_level: number;
  };
  likes_count: number;
  comments_count: number;
  shares_count: number;
  is_liked?: boolean;
  is_bookmarked?: boolean;
  created_at: string;
}

interface FeedPostRow {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  images: string[] | null;
  user_id: number;
  author_name: string | null;
  author_username: string | null;
  author_avatar: string | null;
  author_trust_level: number;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  created_at: string;
}

function mapFeedPost(row: FeedPostRow): FeedPost {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    excerpt: row.excerpt,
    images: row.images || [],
    author: {
      id: row.user_id,
      name: row.author_name || 'Anonymous',
      username: row.author_username || '',
      avatar: row.author_avatar,
      trust_level: row.author_trust_level || 0,
    },
    likes_count: row.likes_count || 0,
    comments_count: row.comments_count || 0,
    shares_count: row.shares_count || 0,
    created_at: row.created_at,
  };
}

// Get feed posts (approved only)
export async function getFeedPosts(
  page = 1,
  pageSize = 20,
  userId?: number
): Promise<{ posts: FeedPost[]; total: number; hasMore: boolean }> {
  const offset = (page - 1) * pageSize;

  const [rows, countResult] = await Promise.all([
    query<FeedPostRow>(
      `SELECT 
        cp.id, cp.title, cp.content, cp.excerpt, cp.images,
        cp.user_id, cp.likes_count, cp.comments_count, cp.shares_count,
        cp.created_at,
        u.display_name as author_name,
        u.username as author_username,
        u.avatar as author_avatar,
        u.trust_level as author_trust_level
      FROM community_posts cp
      LEFT JOIN users u ON cp.user_id = u.id
      WHERE cp.status = 'approved'
      ORDER BY cp.created_at DESC
      LIMIT $1 OFFSET $2`,
      [pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM community_posts WHERE status = 'approved'`
    ),
  ]);

  const posts = rows.map(mapFeedPost);
  const total = parseInt(countResult?.count || '0');

  // If user is logged in, check likes and bookmarks
  if (userId && posts.length > 0) {
    const postIds = posts.map(p => p.id);
    
    const [likes, bookmarks] = await Promise.all([
      query<{ post_id: number }>(
        `SELECT post_id FROM post_likes WHERE user_id = $1 AND post_id = ANY($2)`,
        [userId, postIds]
      ),
      query<{ post_id: number }>(
        `SELECT post_id FROM post_bookmarks WHERE user_id = $1 AND post_id = ANY($2)`,
        [userId, postIds]
      ),
    ]);

    const likedIds = new Set(likes.map(l => l.post_id));
    const bookmarkedIds = new Set(bookmarks.map(b => b.post_id));

    posts.forEach(post => {
      post.is_liked = likedIds.has(post.id);
      post.is_bookmarked = bookmarkedIds.has(post.id);
    });
  }

  return {
    posts,
    total,
    hasMore: offset + posts.length < total,
  };
}

// Get single feed post
export async function getFeedPostById(id: number, userId?: number): Promise<FeedPost | null> {
  const row = await queryOne<FeedPostRow>(
    `SELECT 
      cp.id, cp.title, cp.content, cp.excerpt, cp.images,
      cp.user_id, cp.likes_count, cp.comments_count, cp.shares_count,
      cp.created_at,
      u.display_name as author_name,
      u.username as author_username,
      u.avatar as author_avatar,
      u.trust_level as author_trust_level
    FROM community_posts cp
    LEFT JOIN users u ON cp.user_id = u.id
    WHERE cp.id = $1 AND cp.status = 'approved'`,
    [id]
  );

  if (!row) return null;

  const post = mapFeedPost(row);

  if (userId) {
    const [like, bookmark] = await Promise.all([
      queryOne<{ id: number }>(
        `SELECT id FROM post_likes WHERE post_id = $1 AND user_id = $2`,
        [id, userId]
      ),
      queryOne<{ id: number }>(
        `SELECT id FROM post_bookmarks WHERE post_id = $1 AND user_id = $2`,
        [id, userId]
      ),
    ]);
    post.is_liked = !!like;
    post.is_bookmarked = !!bookmark;
  }

  return post;
}

// Toggle like
export async function toggleLike(postId: number, userId: number): Promise<{ liked: boolean; count: number }> {
  const existing = await queryOne<{ id: number }>(
    `SELECT id FROM post_likes WHERE post_id = $1 AND user_id = $2`,
    [postId, userId]
  );

  if (existing) {
    await query(`DELETE FROM post_likes WHERE post_id = $1 AND user_id = $2`, [postId, userId]);
    await query(`UPDATE community_posts SET likes_count = likes_count - 1 WHERE id = $1`, [postId]);
  } else {
    await query(
      `INSERT INTO post_likes (post_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [postId, userId]
    );
    await query(`UPDATE community_posts SET likes_count = likes_count + 1 WHERE id = $1`, [postId]);
  }

  const post = await queryOne<{ likes_count: number }>(
    `SELECT likes_count FROM community_posts WHERE id = $1`,
    [postId]
  );

  return { liked: !existing, count: post?.likes_count || 0 };
}

// Toggle bookmark
export async function toggleBookmark(postId: number, userId: number): Promise<{ bookmarked: boolean }> {
  const existing = await queryOne<{ id: number }>(
    `SELECT id FROM post_bookmarks WHERE post_id = $1 AND user_id = $2`,
    [postId, userId]
  );

  if (existing) {
    await query(`DELETE FROM post_bookmarks WHERE post_id = $1 AND user_id = $2`, [postId, userId]);
  } else {
    await query(
      `INSERT INTO post_bookmarks (post_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [postId, userId]
    );
  }

  return { bookmarked: !existing };
}

// Create feed post
export async function createFeedPost(
  userId: number,
  data: { title?: string; content: string; images?: string[] }
): Promise<FeedPost> {
  // Check user trust level for auto-approval
  const user = await queryOne<{ trust_level: number }>(
    `SELECT trust_level FROM users WHERE id = $1`,
    [userId]
  );

  const status = (user?.trust_level || 0) >= 2 ? 'approved' : 'pending';

  const result = await query<FeedPostRow>(
    `INSERT INTO community_posts (title, content, images, user_id, status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, title, content, excerpt, images, user_id, likes_count, comments_count, shares_count, created_at`,
    [data.title || '', data.content, JSON.stringify(data.images || []), userId, status]
  );

  const row = result[0];
  
  // Get author info
  const authorRow = await queryOne<{
    display_name: string | null;
    username: string | null;
    avatar: string | null;
    trust_level: number;
  }>(
    `SELECT display_name, username, avatar, trust_level FROM users WHERE id = $1`,
    [userId]
  );

  return {
    id: row.id,
    title: row.title,
    content: row.content,
    excerpt: row.excerpt,
    images: row.images || [],
    author: {
      id: userId,
      name: authorRow?.display_name || 'Anonymous',
      username: authorRow?.username || '',
      avatar: authorRow?.avatar || null,
      trust_level: authorRow?.trust_level || 0,
    },
    likes_count: 0,
    comments_count: 0,
    shares_count: 0,
    created_at: row.created_at,
  };
}
