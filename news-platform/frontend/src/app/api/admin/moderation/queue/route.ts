import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { getModerationQueue, getQueueStats } from '@/lib/moderation';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/moderation/queue - Get moderation queue
 * Requirements: 7.1, 7.2
 */
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check moderator permission
    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden: Moderator role required' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '20'), 100);
    const status = searchParams.get('status') || undefined;
    const resourceType = searchParams.get('resourceType') || undefined;
    const priority = searchParams.get('priority') || undefined;

    const [queueResult, stats] = await Promise.all([
      getModerationQueue(page, pageSize, { status, resourceType, priority }),
      getQueueStats(),
    ]);

    const response = NextResponse.json({
      data: queueResult.items,
      meta: {
        page,
        pageSize,
        total: queueResult.total,
        totalPages: Math.ceil(queueResult.total / pageSize),
      },
      stats,
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching moderation queue:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
