/**
 * Admin Users API
 * Requirements: 10.1 - User management
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { hashPassword, validatePassword, logAuditAction } from '@/lib/security';

export const dynamic = 'force-dynamic';

/**
 * GET /api/admin/users - List users with pagination and filters
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'moderator', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const search = searchParams.get('search') || '';
    const role = searchParams.get('role') || '';
    const trustLevel = searchParams.get('trustLevel');
    const status = searchParams.get('status') || '';
    const sortBy = searchParams.get('sortBy') || 'created_at';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'ASC' : 'DESC';

    const offset = (page - 1) * limit;
    const conditions: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    // Search filter
    if (search) {
      conditions.push(`(username ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR display_name ILIKE $${paramIndex})`);
      values.push(`%${search}%`);
      paramIndex++;
    }

    // Role filter
    if (role) {
      conditions.push(`role = $${paramIndex}`);
      values.push(role);
      paramIndex++;
    }

    // Trust level filter
    if (trustLevel !== null && trustLevel !== '') {
      conditions.push(`trust_level = $${paramIndex}`);
      values.push(parseInt(trustLevel));
      paramIndex++;
    }

    // Status filter (banned/active)
    if (status === 'banned') {
      conditions.push(`banned_until IS NOT NULL AND banned_until > NOW()`);
    } else if (status === 'active') {
      conditions.push(`(banned_until IS NULL OR banned_until <= NOW())`);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Validate sort column
    const validSortColumns = ['created_at', 'last_login_at', 'trust_level', 'posts_created', 'display_name'];
    const sortColumn = validSortColumns.includes(sortBy) ? sortBy : 'created_at';

    // Get users
    const users = await query(`
      SELECT 
        u.id, u.keycloak_id, u.email, u.username, u.display_name, u.avatar,
        u.role, u.trust_level, u.posts_created, u.likes_received, u.flagged_count,
        u.banned_until, u.created_at, u.last_login_at,
        (SELECT COUNT(*) FROM community_posts WHERE author_id = u.id) as post_count
      FROM users u
      ${whereClause}
      ORDER BY ${sortColumn} ${sortOrder}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `, [...values, limit, offset]);

    // Get total count
    const countResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM users ${whereClause}`,
      values
    );
    const total = parseInt(countResult?.count || '0');

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

/**
 * POST /api/admin/users - Create new user (admin only)
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const currentUserId = session?.userId;
    if (!session?.user || userRole !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { username, email, displayName, password, role = 'reader', trustLevel = 0 } = body;

    // Validate required fields
    if (!username || !email || !displayName || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json({ error: passwordValidation.message }, { status: 400 });
    }

    // Check existing user
    const existing = await queryOne(
      'SELECT id FROM users WHERE username = $1 OR email = $2',
      [username.toLowerCase(), email.toLowerCase()]
    );
    if (existing) {
      return NextResponse.json({ error: 'Username or email already exists' }, { status: 409 });
    }

    // Hash password and create user
    const passwordHash = await hashPassword(password);
    const result = await query<{ id: number }>(
      `INSERT INTO users (username, email, display_name, password_hash, role, trust_level, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
       RETURNING id`,
      [username.toLowerCase(), email.toLowerCase(), displayName, passwordHash, role, trustLevel]
    );

    if (currentUserId) {
      await logAuditAction(currentUserId, 'create_user', 'user', result[0].id, { username, email, role });
    }

    return NextResponse.json({ success: true, userId: result[0].id });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
