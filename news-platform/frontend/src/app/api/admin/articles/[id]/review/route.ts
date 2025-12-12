import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: Promise<{ id: string }>;
}

/**
 * POST /api/admin/articles/[id]/review - Approve or reject article
 */
export async function POST(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session as any)?.userId;
    
    if (!session?.user || !['admin', 'editor', 'superadmin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const articleId = parseInt(id);
    if (isNaN(articleId)) {
      return NextResponse.json({ error: 'Invalid article ID' }, { status: 400 });
    }

    const body = await request.json();
    const { action, reason } = body;

    if (!action || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action. Must be "approve" or "reject"' }, { status: 400 });
    }

    // Check if article exists and is pending
    const articles = await query<{ id: number; status: string; title: string }>(
      'SELECT id, status, title FROM articles WHERE id = $1',
      [articleId]
    );

    if (articles.length === 0) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const article = articles[0];

    if (action === 'approve') {
      // Approve article - set status to published
      await execute(`
        UPDATE articles 
        SET status = 'published', 
            published_at = NOW(),
            reviewed_by = $1,
            reviewed_at = NOW(),
            rejection_reason = NULL
        WHERE id = $2
      `, [userId, articleId]);

      await logAuditAction(userId, 'approve_article', 'article', articleId, { 
        previousStatus: article.status,
        title: article.title 
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Bài viết đã được duyệt và xuất bản!',
        status: 'published'
      });

    } else if (action === 'reject') {
      if (!reason || reason.trim() === '') {
        return NextResponse.json({ error: 'Rejection reason is required' }, { status: 400 });
      }

      // Reject article
      await execute(`
        UPDATE articles 
        SET status = 'rejected',
            reviewed_by = $1,
            reviewed_at = NOW(),
            rejection_reason = $2
        WHERE id = $3
      `, [userId, reason.trim(), articleId]);

      await logAuditAction(userId, 'reject_article', 'article', articleId, { 
        previousStatus: article.status,
        title: article.title,
        reason: reason.trim()
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Bài viết đã bị từ chối.',
        status: 'rejected'
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Error reviewing article:', error);
    return NextResponse.json({ error: 'Failed to review article' }, { status: 500 });
  }
}
