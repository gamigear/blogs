import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { 
  assignToModerator, 
  resolveQueueItem, 
  escalateQueueItem,
  unassignQueueItem 
} from '@/lib/moderation';
import { approveCommunityPost, rejectCommunityPost } from '@/lib/community';
import { queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/moderation/[id] - Get queue item details
 * Requirements: 7.1
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const queueItem = await queryOne(
      `SELECT mq.*, 
              u_reporter.display_name as reporter_name,
              u_assigned.display_name as assigned_name
       FROM moderation_queue mq
       LEFT JOIN users u_reporter ON mq.reported_by = u_reporter.id
       LEFT JOIN users u_assigned ON mq.assigned_to = u_assigned.id
       WHERE mq.id = $1`,
      [parseInt(params.id)]
    );

    if (!queueItem) {
      return NextResponse.json({ error: 'Queue item not found' }, { status: 404 });
    }

    const response = NextResponse.json({ data: queueItem });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching queue item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/admin/moderation/[id]/approve - Approve item
 * Requirements: 7.3
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const action = body.action;
    const queueItemId = parseInt(params.id);
    
    // Get moderator user ID
    const moderator = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE email = $1',
      [session.user?.email]
    );

    if (!moderator) {
      return NextResponse.json({ error: 'Moderator not found' }, { status: 400 });
    }

    const moderatorId = moderator.id;

    // Get queue item to determine resource type
    const queueItem = await queryOne<{ resource_type: string; resource_id: number; status: string }>(
      'SELECT resource_type, resource_id, status FROM moderation_queue WHERE id = $1',
      [queueItemId]
    );

    if (!queueItem) {
      return NextResponse.json({ error: 'Queue item not found' }, { status: 404 });
    }

    let result;

    switch (action) {
      case 'assign':
        result = await assignToModerator(queueItemId, moderatorId);
        break;

      case 'unassign':
        result = await unassignQueueItem(queueItemId);
        break;

      case 'approve':
        // Handle based on resource type
        if (queueItem.resource_type === 'community_post') {
          await approveCommunityPost(queueItem.resource_id, moderatorId, body.notes);
        }
        result = await resolveQueueItem(queueItemId, moderatorId, 'approved');
        break;

      case 'reject':
        if (!body.reason) {
          return NextResponse.json({ error: 'Rejection reason is required' }, { status: 400 });
        }
        if (queueItem.resource_type === 'community_post') {
          await rejectCommunityPost(queueItem.resource_id, moderatorId, body.reason);
        }
        result = await resolveQueueItem(queueItemId, moderatorId, `rejected: ${body.reason}`);
        break;

      case 'escalate':
        result = await escalateQueueItem(queueItemId, moderatorId, body.reason || 'Escalated');
        break;

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const response = NextResponse.json({ 
      data: result,
      message: `Item ${action}ed successfully` 
    });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error processing moderation action:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('already assigned')) {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
      if (error.message.includes('already resolved')) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
