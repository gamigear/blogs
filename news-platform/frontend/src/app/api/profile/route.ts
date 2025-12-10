/**
 * User Profile API
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne, execute } from '@/lib/db';
import { sanitizeInput } from '@/lib/security';

interface UserProfile {
  id: number;
  username: string;
  email: string;
  display_name: string;
  avatar: string | null;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  created_at: string;
}

/**
 * GET /api/profile - Get current user's profile
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await queryOne<UserProfile>(
      `SELECT id, username, email, display_name, avatar, role, trust_level, 
              posts_created, likes_received, created_at
       FROM users WHERE id = $1`,
      [session.userId]
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

/**
 * PATCH /api/profile - Update current user's profile
 */
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { display_name, avatar } = body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (display_name !== undefined) {
      const sanitized = sanitizeInput(display_name);
      if (sanitized.length < 2 || sanitized.length > 100) {
        return NextResponse.json(
          { error: 'Tên hiển thị phải từ 2-100 ký tự' },
          { status: 400 }
        );
      }
      updates.push(`display_name = $${paramIndex++}`);
      values.push(sanitized);
    }

    if (avatar !== undefined) {
      updates.push(`avatar = $${paramIndex++}`);
      values.push(avatar);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(session.userId);
    await execute(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex}`,
      values
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
