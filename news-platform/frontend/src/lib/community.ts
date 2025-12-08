/**
 * Community Post Management Module
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

import { query, queryOne, transaction } from './db';
import { PoolClient } from 'pg';

// Types
export interface CommunityPostInput {
  title: string;
  content: string;
  excerpt?: string;
}

export interface CommunityPostRecord {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  author_id: number | null;
  user_id: number | null;
  status: 'pending' | 'approved' | 'rejected';
  discourse_topic_id: number | null;
  rejection_reason: string | null;
  moderator_id: number | null;
  moderator_notes: string | null;
  moderated_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRecord {
  id: number;
  username: string;
  email: string;
  display_name: string | null;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  flagged_count: number;
}

// Trust level threshold for auto-approval
const AUTO_APPROVE_TRUST_LEVEL = 2;

// ============================================
// CREATE COMMUNITY POST
// Requirements: 3.1, 3.2 - Check trust level for auto-approval
// ============================================
export async function createCommunityPost(
  input: CommunityPostInput,
  userId: number
): Promise<CommunityPostRecord> {
  return transaction(async (client: PoolClient) => {
    // Get user's trust level
    const userResult = await client.query<UserRecord>(
      'SELECT * FROM users WHERE id = $1',
      [userId]
    );
    
    if (userResult.rows.length === 0) {
      throw new Error('User not found');
    }
    
    const user = userResult.rows[0];
    
    // Determine status based on trust level
    // Requirements: 3.1 - trust_level < 2 → pending
    // Requirements: 3.2 - trust_level >= 2 → approved
    const status = user.trust_level >= AUTO_APPROVE_TRUST_LEVEL ? 'approved' : 'pending';
    
    // Create the post
    const result = await client.query<CommunityPostRecord>(
      `INSERT INTO community_posts (title, content, excerpt, user_id, status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        input.title,
        input.content,
        input.excerpt || input.content.substring(0, 200),
        userId,
        status,
      ]
    );
    
    const post = result.rows[0];
    
    // Update user's posts_created count
    await client.query(
      'UPDATE users SET posts_created = posts_created + 1 WHERE id = $1',
      [userId]
    );
    
    // If pending, add to moderation queue
    if (status === 'pending') {
      await client.query(
        `INSERT INTO moderation_queue (resource_type, resource_id, reason, status, priority)
         VALUES ('community_post', $1, 'New community post requires review', 'pending', 'normal')`,
        [post.id]
      );
    }
    
    return post;
  });
}

// ============================================
// GET COMMUNITY POSTS
// ============================================
export async function getCommunityPostById(id: number): Promise<CommunityPostRecord | null> {
  return queryOne<CommunityPostRecord>(
    'SELECT * FROM community_posts WHERE id = $1',
    [id]
  );
}

export async function getCommunityPostsByStatus(
  status: string,
  page = 1,
  pageSize = 20
): Promise<{ posts: CommunityPostRecord[]; total: number }> {
  const offset = (page - 1) * pageSize;
  
  const [posts, countResult] = await Promise.all([
    query<CommunityPostRecord>(
      `SELECT cp.*, u.display_name as author_name, u.trust_level
       FROM community_posts cp
       LEFT JOIN users u ON cp.user_id = u.id
       WHERE cp.status = $1
       ORDER BY cp.created_at DESC
       LIMIT $2 OFFSET $3`,
      [status, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      'SELECT COUNT(*) as count FROM community_posts WHERE status = $1',
      [status]
    ),
  ]);
  
  return {
    posts,
    total: parseInt(countResult?.count || '0'),
  };
}

export async function getPendingCommunityPosts(page = 1, pageSize = 20) {
  return getCommunityPostsByStatus('pending', page, pageSize);
}

export async function getApprovedCommunityPosts(page = 1, pageSize = 20) {
  return getCommunityPostsByStatus('approved', page, pageSize);
}

// ============================================
// MODERATION ACTIONS
// Requirements: 3.3, 3.4
// ============================================

/**
 * Approve community post: pending → approved
 * Requirements: 3.3
 */
export async function approveCommunityPost(
  postId: number,
  moderatorId: number,
  notes?: string
): Promise<CommunityPostRecord> {
  return transaction(async (client: PoolClient) => {
    // Get current post
    const postResult = await client.query<CommunityPostRecord>(
      'SELECT * FROM community_posts WHERE id = $1 FOR UPDATE',
      [postId]
    );
    
    if (postResult.rows.length === 0) {
      throw new Error('Community post not found');
    }
    
    const post = postResult.rows[0];
    
    if (post.status !== 'pending') {
      throw new Error('Only pending posts can be approved');
    }
    
    // Update post status
    const result = await client.query<CommunityPostRecord>(
      `UPDATE community_posts 
       SET status = 'approved', 
           moderator_id = $1, 
           moderator_notes = $2,
           moderated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
      [moderatorId, notes || null, postId]
    );
    
    // Update moderation queue
    await client.query(
      `UPDATE moderation_queue 
       SET status = 'resolved', 
           resolved_by = $1, 
           resolution = 'approved',
           resolved_at = CURRENT_TIMESTAMP
       WHERE resource_type = 'community_post' AND resource_id = $2`,
      [moderatorId, postId]
    );
    
    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'community_post.approve', 'community_post', $2, $3)`,
      [moderatorId, postId, JSON.stringify({ notes })]
    );
    
    return result.rows[0];
  });
}

/**
 * Reject community post: pending → rejected
 * Requirements: 3.4
 */
export async function rejectCommunityPost(
  postId: number,
  moderatorId: number,
  reason: string
): Promise<CommunityPostRecord> {
  return transaction(async (client: PoolClient) => {
    // Get current post
    const postResult = await client.query<CommunityPostRecord>(
      'SELECT * FROM community_posts WHERE id = $1 FOR UPDATE',
      [postId]
    );
    
    if (postResult.rows.length === 0) {
      throw new Error('Community post not found');
    }
    
    const post = postResult.rows[0];
    
    if (post.status !== 'pending') {
      throw new Error('Only pending posts can be rejected');
    }
    
    // Update post status
    const result = await client.query<CommunityPostRecord>(
      `UPDATE community_posts 
       SET status = 'rejected', 
           moderator_id = $1, 
           rejection_reason = $2,
           moderated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
      [moderatorId, reason, postId]
    );
    
    // Update moderation queue
    await client.query(
      `UPDATE moderation_queue 
       SET status = 'resolved', 
           resolved_by = $1, 
           resolution = $2,
           resolved_at = CURRENT_TIMESTAMP
       WHERE resource_type = 'community_post' AND resource_id = $3`,
      [moderatorId, `rejected: ${reason}`, postId]
    );
    
    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'community_post.reject', 'community_post', $2, $3)`,
      [moderatorId, postId, JSON.stringify({ reason })]
    );
    
    return result.rows[0];
  });
}

/**
 * Request changes on community post
 */
export async function requestChanges(
  postId: number,
  moderatorId: number,
  feedback: string
): Promise<CommunityPostRecord> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<CommunityPostRecord>(
      `UPDATE community_posts 
       SET moderator_notes = $1,
           moderator_id = $2
       WHERE id = $3
       RETURNING *`,
      [feedback, moderatorId, postId]
    );
    
    if (result.rows.length === 0) {
      throw new Error('Community post not found');
    }
    
    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'community_post.request_changes', 'community_post', $2, $3)`,
      [moderatorId, postId, JSON.stringify({ feedback })]
    );
    
    return result.rows[0];
  });
}

// ============================================
// USER TRUST LEVEL HELPERS
// ============================================
export async function getUserTrustLevel(userId: number): Promise<number> {
  const user = await queryOne<UserRecord>('SELECT trust_level FROM users WHERE id = $1', [userId]);
  return user?.trust_level || 0;
}

export async function canAutoApprove(userId: number): Promise<boolean> {
  const trustLevel = await getUserTrustLevel(userId);
  return trustLevel >= AUTO_APPROVE_TRUST_LEVEL;
}

// ============================================
// DELETE COMMUNITY POST
// ============================================
export async function deleteCommunityPost(postId: number): Promise<boolean> {
  await query('DELETE FROM community_posts WHERE id = $1', [postId]);
  return true;
}

// ============================================
// UPDATE COMMUNITY POST (by author)
// ============================================
export async function updateCommunityPost(
  postId: number,
  userId: number,
  input: Partial<CommunityPostInput>
): Promise<CommunityPostRecord> {
  return transaction(async (client: PoolClient) => {
    // Verify ownership
    const postResult = await client.query<CommunityPostRecord>(
      'SELECT * FROM community_posts WHERE id = $1 AND user_id = $2 FOR UPDATE',
      [postId, userId]
    );
    
    if (postResult.rows.length === 0) {
      throw new Error('Community post not found or not owned by user');
    }
    
    const post = postResult.rows[0];
    
    // Only allow editing pending or rejected posts
    if (post.status === 'approved') {
      throw new Error('Cannot edit approved posts');
    }
    
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;
    
    if (input.title !== undefined) {
      updates.push(`title = $${paramIndex++}`);
      values.push(input.title);
    }
    
    if (input.content !== undefined) {
      updates.push(`content = $${paramIndex++}`);
      values.push(input.content);
    }
    
    if (input.excerpt !== undefined) {
      updates.push(`excerpt = $${paramIndex++}`);
      values.push(input.excerpt);
    }
    
    if (updates.length === 0) {
      return post;
    }
    
    // If post was rejected, reset to pending for re-review
    if (post.status === 'rejected') {
      updates.push(`status = 'pending'`);
      updates.push(`rejection_reason = NULL`);
    }
    
    values.push(postId);
    const result = await client.query<CommunityPostRecord>(
      `UPDATE community_posts SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );
    
    return result.rows[0];
  });
}
