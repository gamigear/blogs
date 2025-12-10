import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

/**
 * PATCH /api/users/[username]/profile - Update user profile (avatar, cover, bio)
 */
export async function PATCH(
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
    const targetUser = await queryOne<{ id: number; username: string }>(
      'SELECT id, username FROM users WHERE username = $1',
      [username]
    );

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if current user is the owner
    if (targetUser.id !== session.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const { avatar, cover, bio, display_name } = body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (avatar !== undefined) {
      updates.push(`avatar = $${paramIndex++}`);
      values.push(avatar);
    }

    if (cover !== undefined) {
      updates.push(`cover = $${paramIndex++}`);
      values.push(cover);
    }

    if (bio !== undefined) {
      updates.push(`meta = jsonb_set(COALESCE(meta, '{}')::jsonb, '{bio}', $${paramIndex++}::jsonb)`);
      values.push(JSON.stringify(bio));
    }

    if (display_name !== undefined) {
      updates.push(`display_name = $${paramIndex++}`);
      values.push(display_name);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(targetUser.id);
    
    const result = await query<{ avatar: string; cover: string; display_name: string }>(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex} 
       RETURNING avatar, cover, display_name, meta->>'bio' as bio`,
      values
    );

    return NextResponse.json({
      success: true,
      user: result[0],
    });
  } catch (error: any) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
