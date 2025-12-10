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

// GET - Lấy chi tiết một custom script
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query<CustomScript>('SELECT * FROM custom_scripts WHERE id = $1', [params.id]);
    
    if (result.length === 0) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error fetching custom script:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Cập nhật custom script
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, position, code, is_active, sort_order, description } = body;

    if (position) {
      const validPositions = ['header', 'footer', 'body_top', 'body_bottom'];
      if (!validPositions.includes(position)) {
        return NextResponse.json({ error: 'Invalid position' }, { status: 400 });
      }
    }

    const result = await query<CustomScript>(
      `UPDATE custom_scripts 
       SET name = COALESCE($1, name),
           position = COALESCE($2, position),
           code = COALESCE($3, code),
           is_active = COALESCE($4, is_active),
           sort_order = COALESCE($5, sort_order),
           description = COALESCE($6, description),
           updated_by = $7
       WHERE id = $8
       RETURNING *`,
      [name, position, code, is_active, sort_order, description, session.user?.id, params.id]
    );

    if (result.length === 0) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating custom script:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Xóa custom script
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query<{ id: number }>('DELETE FROM custom_scripts WHERE id = $1 RETURNING id', [params.id]);

    if (result.length === 0) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting custom script:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
