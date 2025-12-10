import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

// GET /api/admin/users/[id]/badges - Get user's badges
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin', 'moderator'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const badges = await query(
      `SELECT ub.*, b.name, b.slug, b.icon, b.color, b.type, u.display_name as granted_by_name
       FROM user_badges ub
       JOIN badges b ON ub.badge_id = b.id
       LEFT JOIN users u ON ub.granted_by = u.id
       WHERE ub.user_id = $1
       ORDER BY ub.granted_at DESC`,
      [id]
    );

    return NextResponse.json({ badges });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/admin/users/[id]/badges - Grant badge to user
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();
    const { badge_id, note, expires_at } = body;

    if (!badge_id) {
      return NextResponse.json({ error: 'badge_id is required' }, { status: 400 });
    }

    // Check if badge exists
    const badge = await queryOne('SELECT * FROM badges WHERE id = $1', [badge_id]);
    if (!badge) {
      return NextResponse.json({ error: 'Badge not found' }, { status: 404 });
    }

    // Grant badge
    const result = await query(
      `INSERT INTO user_badges (user_id, badge_id, granted_by, note, expires_at)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, badge_id) DO UPDATE SET
         granted_by = $3, note = $4, expires_at = $5, granted_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [id, badge_id, session.userId, note || null, expires_at || null]
    );

    return NextResponse.json({ userBadge: result[0] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/admin/users/[id]/badges - Revoke badge from user
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const badgeId = searchParams.get('badge_id');

    if (!badgeId) {
      return NextResponse.json({ error: 'badge_id is required' }, { status: 400 });
    }

    await query('DELETE FROM user_badges WHERE user_id = $1 AND badge_id = $2', [id, badgeId]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
