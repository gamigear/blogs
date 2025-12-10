import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isAdmin } from '@/lib/auth';
import { getCommentSettings, updateCommentSettings } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/comment-settings - Lấy cài đặt comment
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isAdmin(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const settings = await getCommentSettings();
    const response = NextResponse.json({ data: settings });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching comment settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/comment-settings - Cập nhật cài đặt comment
 */
export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isAdmin(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const { key, value } = body;

    if (!['general', 'moderation', 'notifications'].includes(key)) {
      return NextResponse.json({ error: 'Invalid settings key' }, { status: 400 });
    }

    if (!value || typeof value !== 'object') {
      return NextResponse.json({ error: 'Invalid settings value' }, { status: 400 });
    }

    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const updated = await updateCommentSettings(key, value, userId);

    if (!updated) {
      return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating comment settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
