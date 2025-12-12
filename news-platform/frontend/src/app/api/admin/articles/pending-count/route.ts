import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * GET /api/admin/articles/pending-count - Get count of pending articles
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    
    // Only admin/editor/moderator can see pending count
    if (!session?.user || !['admin', 'editor', 'moderator', 'superadmin'].includes(userRole)) {
      return NextResponse.json({ count: 0 });
    }

    const result = await queryOne<{ count: string }>(
      "SELECT COUNT(*) as count FROM articles WHERE status = 'pending_review'"
    );

    return NextResponse.json({ 
      count: parseInt(result?.count || '0') 
    });
  } catch (error) {
    console.error('Error fetching pending count:', error);
    return NextResponse.json({ count: 0 });
  }
}
