import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * GET /api/admin/settings - Get all settings or specific setting by key
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (key) {
      const settings = await query('SELECT * FROM site_settings WHERE key = $1', [key]);
      if (settings.length === 0) {
        return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
      }
      return NextResponse.json({ setting: settings[0] });
    }

    const settings = await query('SELECT * FROM site_settings ORDER BY key');
    return NextResponse.json({ settings });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/settings - Update a setting (upsert)
 */
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized - Admin only' }, { status: 401 });
    }

    const body = await request.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json({ error: 'Key and value are required' }, { status: 400 });
    }

    // Use UPSERT to insert if not exists, or update if exists
    const jsonValue = JSON.stringify(value);
    console.log('Saving setting:', { key, jsonValue, userId });
    
    await execute(
      `INSERT INTO site_settings (key, value, updated_by, created_at, updated_at)
       VALUES ($1, $2::jsonb, $3, NOW(), NOW())
       ON CONFLICT (key) 
       DO UPDATE SET value = $2::jsonb, updated_by = $3, updated_at = NOW()`,
      [key, jsonValue, userId]
    );

    await logAuditAction(userId, 'update_setting', 'site_settings', null, { key });

    return NextResponse.json({ success: true, message: 'Setting saved successfully' });
  } catch (error: any) {
    console.error('Error updating setting:', error);
    return NextResponse.json(
      { error: 'Failed to update setting', details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
