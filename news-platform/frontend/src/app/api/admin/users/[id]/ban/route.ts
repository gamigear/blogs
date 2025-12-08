import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: { id: string };
}

/**
 * POST /api/admin/users/[id]/ban - Ban user
 */
export async function POST(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const currentUserId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'moderator'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(params.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    if (userId === currentUserId) {
      return NextResponse.json({ error: 'Cannot ban yourself' }, { status: 400 });
    }

    const body = await request.json();
    const { duration, reason } = body;

    let bannedUntil: Date;
    switch (duration) {
      case '1h': bannedUntil = new Date(Date.now() + 60 * 60 * 1000); break;
      case '24h': bannedUntil = new Date(Date.now() + 24 * 60 * 60 * 1000); break;
      case '7d': bannedUntil = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); break;
      case '30d': bannedUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); break;
      case 'permanent': bannedUntil = new Date('2099-12-31'); break;
      default: return NextResponse.json({ error: 'Invalid duration' }, { status: 400 });
    }

    await execute(`UPDATE users SET banned_until = $1 WHERE id = $2`, [bannedUntil.toISOString(), userId]);
    await logAuditAction(currentUserId, 'ban_user', 'user', userId, { duration, reason, banned_until: bannedUntil.toISOString() });

    return NextResponse.json({ success: true, banned_until: bannedUntil.toISOString() });
  } catch (error) {
    console.error('Error banning user:', error);
    return NextResponse.json({ error: 'Failed to ban user' }, { status: 500 });
  }
}


/**
 * DELETE /api/admin/users/[id]/ban - Unban user
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const currentUserId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'moderator'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(params.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    await execute(`UPDATE users SET banned_until = NULL WHERE id = $1`, [userId]);
    await logAuditAction(currentUserId, 'unban_user', 'user', userId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error unbanning user:', error);
    return NextResponse.json({ error: 'Failed to unban user' }, { status: 500 });
  }
}
