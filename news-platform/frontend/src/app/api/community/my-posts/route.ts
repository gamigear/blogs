/**
 * My Posts API - Get current user's community posts
 */

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const posts = await query(`
      SELECT id, title, excerpt, status, rejection_reason, created_at
      FROM community_posts
      WHERE user_id = $1
      ORDER BY created_at DESC
    `, [session.userId]);

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching my posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
