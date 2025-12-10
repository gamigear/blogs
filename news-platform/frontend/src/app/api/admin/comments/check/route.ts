import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { checkContentAgainstFilters } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

/**
 * POST /api/admin/comments/check - Kiểm tra nội dung comment
 * Dùng để preview kết quả lọc từ khóa
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { content } = body;

    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const result = await checkContentAgainstFilters(content);

    const response = NextResponse.json({
      data: {
        isAllowed: !result.hasBannedKeywords,
        needsReview: result.needsReview,
        hasBannedKeywords: result.hasBannedKeywords,
        matchedFilters: result.matchedFilters,
        replacements: result.replacements,
      },
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error checking content:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
