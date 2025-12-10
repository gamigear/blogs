import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

interface Badge {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string;
  type: string;
  is_active: boolean;
  sort_order: number;
}

// GET /api/admin/badges - List all badges
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const badges = await query<Badge>(
      'SELECT * FROM badges ORDER BY sort_order, created_at DESC'
    );

    return NextResponse.json({ badges });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/admin/badges - Create new badge
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const { name, slug, description, icon, color, type, is_active, sort_order } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: 'Name and slug are required' }, { status: 400 });
    }

    const result = await query<Badge>(
      `INSERT INTO badges (name, slug, description, icon, color, type, is_active, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [name, slug, description || null, icon || null, color || '#3B82F6', type || 'achievement', is_active !== false, sort_order || 0]
    );

    return NextResponse.json({ badge: result[0] });
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
