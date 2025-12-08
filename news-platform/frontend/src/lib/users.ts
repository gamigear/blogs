/**
 * User & Trust Level Management Module
 * Requirements: 6.1, 6.2, 6.4, 6.5, 10.1
 */

import { query, queryOne, transaction } from './db';
import { PoolClient } from 'pg';

// Types
export interface UserRecord {
  id: number;
  keycloak_id: string | null;
  discourse_id: number | null;
  username: string;
  email: string;
  display_name: string | null;
  avatar: string | null;
  role: 'reader' | 'contributor' | 'moderator' | 'editor' | 'admin' | 'superadmin';
  trust_level: number;
  posts_created: number;
  likes_received: number;
  flagged_count: number;
  banned_until: string | null;
  last_login_at: string | null;
  author_id: number | null;
  meta: Record<string, any>;
  created_at: string;
  updated_at: string;
}

// Trust level thresholds
export const TRUST_LEVEL_THRESHOLDS = {
  1: { posts_created: 1, likes_received: 0, max_flags: 5 },
  2: { posts_created: 5, likes_received: 3, max_flags: 3 },
  3: { posts_created: 20, likes_received: 15, max_flags: 1 },
  4: { posts_created: 50, likes_received: 50, max_flags: 0 },
};

// Role permissions
export const ROLE_PERMISSIONS = {
  reader: ['read'],
  contributor: ['read', 'create_community_post'],
  moderator: ['read', 'create_community_post', 'approve_community_post', 'view_audit_logs'],
  editor: ['read', 'create_community_post', 'approve_community_post', 'create_article', 'approve_article', 'view_audit_logs'],
  admin: ['read', 'create_community_post', 'approve_community_post', 'create_article', 'approve_article', 'view_audit_logs', 'manage_users', 'manage_settings'],
  superadmin: ['*'],
};

// ============================================
// USER CRUD
// ============================================

/**
 * Create new user with trust_level 0
 * Requirements: 6.1 - New users get trust_level 0
 */
export async function createUser(input: {
  username: string;
  email: string;
  displayName?: string;
  keycloakId?: string;
}): Promise<UserRecord> {
  const result = await query<UserRecord>(
    `INSERT INTO users (username, email, display_name, keycloak_id, trust_level, role)
     VALUES ($1, $2, $3, $4, 0, 'reader')
     RETURNING *`,
    [input.username, input.email, input.displayName || input.username, input.keycloakId || null]
  );
  return result[0];
}

export async function getUserById(id: number): Promise<UserRecord | null> {
  return queryOne<UserRecord>('SELECT * FROM users WHERE id = $1', [id]);
}

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  return queryOne<UserRecord>('SELECT * FROM users WHERE email = $1', [email]);
}

export async function getUserByKeycloakId(keycloakId: string): Promise<UserRecord | null> {
  return queryOne<UserRecord>('SELECT * FROM users WHERE keycloak_id = $1', [keycloakId]);
}

// ============================================
// TRUST LEVEL SYSTEM
// Requirements: 6.2, 6.5
// ============================================

/**
 * Calculate if user meets promotion criteria
 * Requirements: 6.2 - Check posts_created, likes_received, flagged_count
 */
export function meetsPromotionCriteria(user: UserRecord, targetLevel: number): boolean {
  const threshold = TRUST_LEVEL_THRESHOLDS[targetLevel as keyof typeof TRUST_LEVEL_THRESHOLDS];
  if (!threshold) return false;

  // Requirements: 6.5 - Flags prevent promotion
  if (user.flagged_count > threshold.max_flags) {
    return false;
  }

  return (
    user.posts_created >= threshold.posts_created &&
    user.likes_received >= threshold.likes_received
  );
}

/**
 * Calculate user's eligible trust level based on activity
 */
export function calculateEligibleTrustLevel(user: UserRecord): number {
  let eligibleLevel = 0;

  for (let level = 1; level <= 4; level++) {
    if (meetsPromotionCriteria(user, level)) {
      eligibleLevel = level;
    } else {
      break;
    }
  }

  return eligibleLevel;
}

/**
 * Evaluate and potentially upgrade user's trust level
 * Requirements: 6.2 - Automatically upgrade trust_level when criteria met
 */
export async function evaluateUserTrustLevel(userId: number): Promise<{
  upgraded: boolean;
  previousLevel: number;
  newLevel: number;
}> {
  return transaction(async (client: PoolClient) => {
    const userResult = await client.query<UserRecord>(
      'SELECT * FROM users WHERE id = $1 FOR UPDATE',
      [userId]
    );

    if (userResult.rows.length === 0) {
      throw new Error('User not found');
    }

    const user = userResult.rows[0];
    const eligibleLevel = calculateEligibleTrustLevel(user);

    if (eligibleLevel > user.trust_level) {
      await client.query(
        'UPDATE users SET trust_level = $1 WHERE id = $2',
        [eligibleLevel, userId]
      );

      // Create audit log
      await client.query(
        `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
         VALUES ($1, 'user.trust_level_upgrade', 'user', $2, $3)`,
        [userId, userId, JSON.stringify({ from: user.trust_level, to: eligibleLevel })]
      );

      return {
        upgraded: true,
        previousLevel: user.trust_level,
        newLevel: eligibleLevel,
      };
    }

    return {
      upgraded: false,
      previousLevel: user.trust_level,
      newLevel: user.trust_level,
    };
  });
}

/**
 * Manually set user trust level (admin action)
 */
export async function setUserTrustLevel(
  userId: number,
  trustLevel: number,
  adminId: number
): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const userResult = await client.query<UserRecord>(
      'SELECT * FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      throw new Error('User not found');
    }

    const previousLevel = userResult.rows[0].trust_level;

    const result = await client.query<UserRecord>(
      'UPDATE users SET trust_level = $1 WHERE id = $2 RETURNING *',
      [trustLevel, userId]
    );

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.trust_level_set', 'user', $2, $3)`,
      [adminId, userId, JSON.stringify({ from: previousLevel, to: trustLevel, by: adminId })]
    );

    return result.rows[0];
  });
}

// ============================================
// TRUST LEVEL PERMISSIONS
// Requirements: 6.4
// ============================================

/**
 * Check if user has moderation capabilities
 * Requirements: 6.4 - trust_level 4 grants moderation capabilities
 */
export function hasModeratorCapabilities(user: UserRecord): boolean {
  return user.trust_level >= 4 || ['moderator', 'editor', 'admin', 'superadmin'].includes(user.role);
}

/**
 * Check if user can auto-approve posts
 */
export function canAutoApprove(user: UserRecord): boolean {
  return user.trust_level >= 2;
}

// ============================================
// ROLE-BASED ACCESS CONTROL
// Requirements: 10.1
// ============================================

/**
 * Check if user has specific permission
 */
export function hasPermission(user: UserRecord, permission: string): boolean {
  const rolePermissions = ROLE_PERMISSIONS[user.role];
  if (!rolePermissions) return false;
  
  // Superadmin has all permissions
  if (rolePermissions.includes('*')) return true;
  
  return rolePermissions.includes(permission);
}

/**
 * Set user role (admin action)
 */
export async function setUserRole(
  userId: number,
  role: UserRecord['role'],
  adminId: number
): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const userResult = await client.query<UserRecord>(
      'SELECT * FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      throw new Error('User not found');
    }

    const previousRole = userResult.rows[0].role;

    const result = await client.query<UserRecord>(
      'UPDATE users SET role = $1 WHERE id = $2 RETURNING *',
      [role, userId]
    );

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.role_change', 'user', $2, $3)`,
      [adminId, userId, JSON.stringify({ from: previousRole, to: role, by: adminId })]
    );

    return result.rows[0];
  });
}

// ============================================
// USER FLAGS
// Requirements: 6.5
// ============================================

/**
 * Add flag to user (affects trust level promotion)
 */
export async function flagUser(
  userId: number,
  reason: string,
  reportedBy?: number
): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<UserRecord>(
      'UPDATE users SET flagged_count = flagged_count + 1 WHERE id = $1 RETURNING *',
      [userId]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.flagged', 'user', $2, $3)`,
      [reportedBy || null, userId, JSON.stringify({ reason })]
    );

    return result.rows[0];
  });
}

/**
 * Clear user flags (admin action)
 */
export async function clearUserFlags(userId: number, adminId: number): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<UserRecord>(
      'UPDATE users SET flagged_count = 0 WHERE id = $1 RETURNING *',
      [userId]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.flags_cleared', 'user', $2, $3)`,
      [adminId, userId, JSON.stringify({ by: adminId })]
    );

    return result.rows[0];
  });
}

// ============================================
// BAN MANAGEMENT
// ============================================

export async function banUser(
  userId: number,
  until: Date,
  reason: string,
  adminId: number
): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<UserRecord>(
      'UPDATE users SET banned_until = $1 WHERE id = $2 RETURNING *',
      [until, userId]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.ban', 'user', $2, $3)`,
      [adminId, userId, JSON.stringify({ until, reason, by: adminId })]
    );

    return result.rows[0];
  });
}

export async function unbanUser(userId: number, adminId: number): Promise<UserRecord> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<UserRecord>(
      'UPDATE users SET banned_until = NULL WHERE id = $1 RETURNING *',
      [userId]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    // Create audit log
    await client.query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details)
       VALUES ($1, 'user.unban', 'user', $2, $3)`,
      [adminId, userId, JSON.stringify({ by: adminId })]
    );

    return result.rows[0];
  });
}

export function isUserBanned(user: UserRecord): boolean {
  if (!user.banned_until) return false;
  return new Date(user.banned_until) > new Date();
}

// ============================================
// USER STATISTICS
// ============================================

export async function updateUserStats(
  userId: number,
  stats: { postsCreated?: number; likesReceived?: number }
): Promise<void> {
  const updates: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (stats.postsCreated !== undefined) {
    updates.push(`posts_created = posts_created + $${paramIndex++}`);
    values.push(stats.postsCreated);
  }

  if (stats.likesReceived !== undefined) {
    updates.push(`likes_received = likes_received + $${paramIndex++}`);
    values.push(stats.likesReceived);
  }

  if (updates.length > 0) {
    values.push(userId);
    await query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex}`,
      values
    );
  }
}

// ============================================
// USER LISTING
// ============================================

export async function getUsers(
  page = 1,
  pageSize = 20,
  filters?: {
    role?: string;
    trustLevel?: number;
    search?: string;
  }
): Promise<{ users: UserRecord[]; total: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (filters?.role) {
    conditions.push(`role = $${paramIndex++}`);
    values.push(filters.role);
  }

  if (filters?.trustLevel !== undefined) {
    conditions.push(`trust_level = $${paramIndex++}`);
    values.push(filters.trustLevel);
  }

  if (filters?.search) {
    conditions.push(`(username ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR display_name ILIKE $${paramIndex})`);
    values.push(`%${filters.search}%`);
    paramIndex++;
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const [users, countResult] = await Promise.all([
    query<UserRecord>(
      `SELECT * FROM users ${whereClause} ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
      [...values, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM users ${whereClause}`,
      values
    ),
  ]);

  return {
    users,
    total: parseInt(countResult?.count || '0'),
  };
}
