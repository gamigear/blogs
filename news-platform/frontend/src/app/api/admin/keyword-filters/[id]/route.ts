import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isModerator } from '@/lib/auth';
import { getKeywordFilterById, updateKeywordFilter, deleteKeywordFilter } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/admin/keyword-filters/[id] - Lấy chi tiết từ khóa
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const filter = await getKeywordFilterById(parseInt(id));

    if (!filter) {
      return NextResponse.json({ error: 'Keyword filter not found' }, { status: 404 });
    }

    const response = NextResponse.json({ data: filter });
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching keyword filter:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/keyword-filters/[id] - Cập nhật từ khóa
 */
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();
    const { keyword, filter_type, replacement_text, is_regex, is_case_sensitive, is_active } = body;

    if (filter_type && !['banned', 'review', 'replace'].includes(filter_type)) {
      return NextResponse.json({ error: 'Invalid filter type' }, { status: 400 });
    }

    const userId = session.user?.id ? parseInt(session.user.id) : 0;
    const filter = await updateKeywordFilter(
      parseInt(id),
      { keyword, filter_type, replacement_text, is_regex, is_case_sensitive, is_active },
      userId
    );

    if (!filter) {
      return NextResponse.json({ error: 'Keyword filter not found' }, { status: 404 });
    }

    return NextResponse.json({ data: filter });
  } catch (error) {
    console.error('Error updating keyword filter:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/keyword-filters/[id] - Xóa từ khóa
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isModerator(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const deleted = await deleteKeywordFilter(parseInt(id));

    if (!deleted) {
      return NextResponse.json({ error: 'Keyword filter not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting keyword filter:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
