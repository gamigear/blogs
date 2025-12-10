import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

interface CustomScript {
  id: number;
  name: string;
  position: string;
  code: string;
  is_active: boolean;
  sort_order: number;
  description: string | null;
}

// GET - Lấy danh sách custom scripts
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const position = searchParams.get('position');

    let sql = 'SELECT * FROM custom_scripts';
    const params: any[] = [];

    if (position) {
      sql += ' WHERE position = $1';
      params.push(position);
    }

    sql += ' ORDER BY position, sort_order ASC';

    const result = await query<CustomScript>(sql, params);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching custom scripts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Tạo custom script mới
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, position, code, is_active, sort_order, description } = body;

    if (!name || !position || !code) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const validPositions = ['header', 'footer', 'body_top', 'body_bottom'];
    if (!validPositions.includes(position)) {
      return NextResponse.json({ error: 'Invalid position' }, { status: 400 });
    }

    const result = await query<CustomScript>(
      `INSERT INTO custom_scripts (name, position, code, is_active, sort_order, description, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, position, code, is_active ?? true, sort_order ?? 0, description, session.user?.id]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating custom script:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
