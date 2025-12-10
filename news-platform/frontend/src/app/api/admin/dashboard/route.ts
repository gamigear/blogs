import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { queryOne } from '@/lib/db';
import { addSecurityHeaders } from '@/lib/security';
import { getOrSet, cacheKey, CACHE_KEYS, CACHE_TTL } from '@/lib/redis';

export const dynamic = 'force-dynamic';

interface DashboardMetrics {
  articles: {
    total: number;
    published: number;
    draft: number;
    pending: number;
  };
  communityPosts: {
    total: number;
    approved: number;
    pending: number;
  };
  moderation: {
    queuePending: number;
    queueAssigned: number;
    resolvedToday: number;
  };
  users: {
    total: number;
    activeToday: number;
    newThisWeek: number;
  };
}

/**
 * GET /api/admin/dashboard - Get dashboard metrics
 * Requirements: 14.1 - Return pending queue count, published articles count, active users
 */
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check moderator/admin permission
    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get metrics with caching
    const metrics = await getOrSet<DashboardMetrics>(
      cacheKey(CACHE_KEYS.STATS, 'dashboard'),
      async () => {
        // Article stats
        const articleStats = await queryOne<{
          total: string;
          published: string;
          draft: string;
          pending: string;
        }>(`
          SELECT 
            COUNT(*)::text as total,
            COUNT(*) FILTER (WHERE status = 'published')::text as published,
            COUNT(*) FILTER (WHERE status = 'draft')::text as draft,
            COUNT(*) FILTER (WHERE status = 'pending_review')::text as pending
          FROM articles
        `);

        // Community post stats
        const communityStats = await queryOne<{
          total: string;
          approved: string;
          pending: string;
        }>(`
          SELECT 
            COUNT(*)::text as total,
            COUNT(*) FILTER (WHERE status = 'approved')::text as approved,
            COUNT(*) FILTER (WHERE status = 'pending')::text as pending
          FROM community_posts
        `);

        // Moderation queue stats
        const moderationStats = await queryOne<{
          queue_pending: string;
          queue_assigned: string;
          resolved_today: string;
        }>(`
          SELECT 
            COUNT(*) FILTER (WHERE status = 'pending')::text as queue_pending,
            COUNT(*) FILTER (WHERE status = 'assigned')::text as queue_assigned,
            COUNT(*) FILTER (WHERE status = 'resolved' AND resolved_at >= CURRENT_DATE)::text as resolved_today
          FROM moderation_queue
        `);

        // User stats
        const userStats = await queryOne<{
          total: string;
          active_today: string;
          new_this_week: string;
        }>(`
          SELECT 
            COUNT(*)::text as total,
            COUNT(*) FILTER (WHERE last_login_at >= CURRENT_DATE)::text as active_today,
            COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days')::text as new_this_week
          FROM users
        `);

        return {
          articles: {
            total: parseInt(articleStats?.total || '0'),
            published: parseInt(articleStats?.published || '0'),
            draft: parseInt(articleStats?.draft || '0'),
            pending: parseInt(articleStats?.pending || '0'),
          },
          communityPosts: {
            total: parseInt(communityStats?.total || '0'),
            approved: parseInt(communityStats?.approved || '0'),
            pending: parseInt(communityStats?.pending || '0'),
          },
          moderation: {
            queuePending: parseInt(moderationStats?.queue_pending || '0'),
            queueAssigned: parseInt(moderationStats?.queue_assigned || '0'),
            resolvedToday: parseInt(moderationStats?.resolved_today || '0'),
          },
          users: {
            total: parseInt(userStats?.total || '0'),
            activeToday: parseInt(userStats?.active_today || '0'),
            newThisWeek: parseInt(userStats?.new_this_week || '0'),
          },
        };
      },
      CACHE_TTL.SHORT // 1 minute cache
    );

    const response = NextResponse.json({ data: metrics });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}
