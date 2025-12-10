import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

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

    // Check if table exists first
    const tableCheck = await query<{ exists: boolean }>(
      `SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'custom_scripts'
      )`
    );
    
    if (!tableCheck[0]?.exists) {
      return NextResponse.json([]);
    }

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
    return NextResponse.json([]);
  }
}
