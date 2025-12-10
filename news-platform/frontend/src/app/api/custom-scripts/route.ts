import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

interface CustomScript {
  id: number;
  position: string;
  code: string;
}

// GET - Lấy custom scripts active (public API cho frontend)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const position = searchParams.get('position');

    let sql = 'SELECT id, position, code FROM custom_scripts WHERE is_active = true';
    const params: any[] = [];

    if (position) {
      sql += ' AND position = $1';
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
