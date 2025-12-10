import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET /api/admin/kyc - List KYC requests
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || 'pending';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    const offset = (page - 1) * pageSize;

    const [requests, countResult] = await Promise.all([
      query(
        `SELECT k.*, u.username, u.email, u.display_name, u.avatar
         FROM kyc_requests k
         JOIN users u ON k.user_id = u.id
         WHERE k.status = $1
         ORDER BY k.created_at DESC
         LIMIT $2 OFFSET $3`,
        [status, pageSize, offset]
      ),
      queryOne<{ count: string }>(
        'SELECT COUNT(*) as count FROM kyc_requests WHERE status = $1',
        [status]
      ),
    ]);

    return NextResponse.json({
      requests,
      pagination: {
        page,
        pageSize,
        total: parseInt(countResult?.count || '0'),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
