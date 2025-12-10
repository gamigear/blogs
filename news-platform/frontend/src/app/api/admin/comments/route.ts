import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { getComments, getCommentStats, bulkUpdateCommentStatus } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/comments - Lấy danh sách comments
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '20'), 100);
    const status = searchParams.get('status') || undefined;
    const article_id = searchParams.get('article_id') ? parseInt(searchParams.get('article_id')!) : undefined;
    const search = searchParams.get('search') || undefined;

    const [result, stats] = await Promise.all([
      getComments(page, pageSize, { status, article_id, search }),
      getCommentStats(),
    ]);

    const response = NextResponse.json({
      data: result.items,
      meta: {
        page,
        pageSize,
        total: result.total,
        totalPages: Math.ceil(result.total / pageSize),
      },
      stats,
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/comments - Bulk update comment status
 */
export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const { ids, status } = body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Invalid ids' }, { status: 400 });
    }

    if (!['approved', 'rejected', 'spam', 'pending'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    await bulkUpdateCommentStatus(ids, status, userId);

    return NextResponse.json({ success: true, message: `Updated ${ids.length} comments` });
  } catch (error) {
    console.error('Error updating comments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
