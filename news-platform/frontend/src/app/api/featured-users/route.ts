import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface FeaturedUser {
  id: number;
  username: string;
  display_name: string;
  avatar: string | null;
  bio: string | null;
  role: string;
  article_count: number;
  follower_count: number;
}

// GET - Get featured users based on config or query params
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const typeParam = searchParams.get('type');
    const limitParam = searchParams.get('limit');
    const userIdsParam = searchParams.get('user_ids');

    // Get config from site_settings (fallback)
    const configRow = await queryOne<{ value: any }>(
      "SELECT value FROM site_settings WHERE key = 'featured_users'"
    );

    const defaultConfig = {
      enabled: true,
      title: 'Top đóng góp',
      type: 'contributors' as const,
      user_ids: [],
      limit: 5,
    };

    let config = configRow?.value ? { ...defaultConfig, ...configRow.value } : defaultConfig;

    // Override with query params if provided
    if (typeParam) {
      config.type = typeParam;
    }
    if (limitParam) {
      config.limit = parseInt(limitParam) || 5;
    }
    if (userIdsParam) {
      config.user_ids = userIdsParam.split(',').map(id => parseInt(id)).filter(id => !isNaN(id));
      if (config.user_ids.length > 0) {
        config.type = 'custom';
      }
    }

    if (!config.enabled) {
      return NextResponse.json({ config, users: [] });
    }

    let users: FeaturedUser[] = [];

    if (config.type === 'custom' && config.user_ids?.length > 0) {
      // Get specific users by IDs
      users = await query<FeaturedUser>(`
        SELECT 
          u.id, u.username, u.display_name, u.avatar, '' as bio, u.role,
          0 as article_count, 0 as follower_count
        FROM users u
        WHERE u.id = ANY($1)
        ORDER BY array_position($1, u.id)
      `, [config.user_ids]);
    } else if (config.type === 'admins') {
      // Get admins and moderators
      users = await query<FeaturedUser>(`
        SELECT 
          u.id, u.username, u.display_name, u.avatar, '' as bio, u.role,
          0 as article_count, 0 as follower_count
        FROM users u
        WHERE u.role IN ('admin', 'moderator')
        ORDER BY 
          CASE u.role WHEN 'admin' THEN 1 WHEN 'moderator' THEN 2 ELSE 3 END,
          u.display_name
        LIMIT $1
      `, [config.limit]);
    } else if (config.type === 'experts') {
      // Get users with most articles (experts)
      users = await query<FeaturedUser>(`
        SELECT 
          u.id, u.username, u.display_name, u.avatar, '' as bio, u.role,
          0 as article_count, 0 as follower_count
        FROM users u
        ORDER BY u.created_at DESC
        LIMIT $1
      `, [config.limit]);
    } else {
      // contributors - get all users ordered by creation date
      users = await query<FeaturedUser>(`
        SELECT 
          u.id, u.username, u.display_name, u.avatar, '' as bio, u.role,
          0 as article_count, 0 as follower_count
        FROM users u
        ORDER BY u.created_at DESC
        LIMIT $1
      `, [config.limit]);
    }

    return NextResponse.json({ config, users });
  } catch (error) {
    console.error('Error fetching featured users:', error);
    // Return enabled: true so component still tries to render
    return NextResponse.json({ 
      config: { enabled: true, title: 'Top đóng góp', type: 'contributors', user_ids: [], limit: 5 },
      users: [] 
    });
  }
}
