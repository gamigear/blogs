import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

// GET - Lấy custom CSS
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query<{ value: any }>(
      "SELECT value FROM site_settings WHERE key = 'custom_css'"
    );

    if (result.length === 0) {
      return NextResponse.json({
        desktop: '',
        tablet: '',
        mobile: '',
        is_active: true,
      });
    }

    return NextResponse.json(result[0].value);
  } catch (error) {
    console.error('Error fetching custom CSS:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Lưu custom CSS
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !['admin', 'superadmin'].includes(session.user?.role || '')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { desktop, tablet, mobile, is_active } = body;

    const cssValue = {
      desktop: desktop || '',
      tablet: tablet || '',
      mobile: mobile || '',
      is_active: is_active ?? true,
    };

    // Upsert vào site_settings
    const result = await query<{ value: any }>(
      `INSERT INTO site_settings (key, value, description, updated_by)
       VALUES ('custom_css', $1, 'Custom CSS cho Desktop, Tablet, Mobile', $2)
       ON CONFLICT (key) DO UPDATE SET value = $1, updated_by = $2
       RETURNING *`,
      [JSON.stringify(cssValue), session.user?.id]
    );

    return NextResponse.json(result[0]?.value || cssValue);
  } catch (error) {
    console.error('Error saving custom CSS:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
