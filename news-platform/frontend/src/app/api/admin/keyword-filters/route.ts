import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { 
  getKeywordFilters, 
  createKeywordFilter, 
  getKeywordFilterStats,
  bulkDeleteKeywordFilters 
} from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/keyword-filters - Lấy danh sách từ khóa lọc
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
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '50'), 200);
    const filter_type = searchParams.get('filter_type') || undefined;
    const is_active = searchParams.get('is_active') === 'true' ? true : 
                      searchParams.get('is_active') === 'false' ? false : undefined;
    const search = searchParams.get('search') || undefined;

    const [result, stats] = await Promise.all([
      getKeywordFilters(page, pageSize, { filter_type, is_active, search }),
      getKeywordFilterStats(),
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
    console.error('Error fetching keyword filters:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/admin/keyword-filters - Tạo từ khóa lọc mới
 */
export async function POST(req: NextRequest) {
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
    const { keyword, filter_type, replacement_text, is_regex, is_case_sensitive } = body;

    if (!keyword || !keyword.trim()) {
      return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
    }

    if (!['banned', 'review', 'replace'].includes(filter_type)) {
      return NextResponse.json({ error: 'Invalid filter type' }, { status: 400 });
    }

    if (filter_type === 'replace' && !replacement_text) {
      return NextResponse.json({ error: 'Replacement text is required for replace type' }, { status: 400 });
    }

    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const filter = await createKeywordFilter(
      { keyword: keyword.trim(), filter_type, replacement_text, is_regex, is_case_sensitive },
      userId
    );

    if (!filter) {
      return NextResponse.json({ error: 'Failed to create keyword filter' }, { status: 500 });
    }

    return NextResponse.json({ data: filter }, { status: 201 });
  } catch (error) {
    console.error('Error creating keyword filter:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/keyword-filters - Xóa nhiều từ khóa
 */
export async function DELETE(req: NextRequest) {
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
    const { ids } = body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Invalid ids' }, { status: 400 });
    }

    const deleted = await bulkDeleteKeywordFilters(ids);

    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    console.error('Error deleting keyword filters:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
