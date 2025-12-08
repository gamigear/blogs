import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: { id: string };
}

/**
 * GET /api/admin/users/[id] - Get user details
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !['admin', 'moderator'].includes(session.user.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(params.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const users = await query(`
      SELECT 
        id, keycloak_id, email, username, display_name, role, 
        trust_level, posts_created, likes_received, flagged_count,
        banned_until, created_at, last_login_at, avatar
      FROM users WHERE id = $1
    `, [userId]);

    if (users.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user: users[0] });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/users/[id] - Update user
 */
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(params.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const body = await request.json();
    const { display_name, role, trust_level } = body;

    // Validate role
    const validRoles = ['reader', 'contributor', 'moderator', 'editor', 'admin'];
    if (role && !validRoles.includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    // Validate trust level
    if (trust_level !== undefined && (trust_level < 0 || trust_level > 4)) {
      return NextResponse.json({ error: 'Invalid trust level' }, { status: 400 });
    }

    // Build update query
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (display_name) {
      updates.push(`display_name = $${paramIndex++}`);
      values.push(display_name);
    }
    if (role) {
      updates.push(`role = $${paramIndex++}`);
      values.push(role);
    }
    if (trust_level !== undefined) {
      updates.push(`trust_level = $${paramIndex++}`);
      values.push(trust_level);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(userId);
    await execute(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex}`,
      values
    );

    // Log audit
    await logAuditAction(
      session.user.id!,
      'update_user',
      'user',
      userId,
      { changes: body }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/users/[id] - Delete user (soft delete)
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(params.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Prevent self-deletion
    if (userId === session.user.id) {
      return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 });
    }

    // Soft delete by setting banned_until to far future
    await execute(
      `UPDATE users SET banned_until = '2099-12-31', role = 'reader' WHERE id = $1`,
      [userId]
    );

    // Log audit
    await logAuditAction(
      session.user.id!,
      'delete_user',
      'user',
      userId,
      {}
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
