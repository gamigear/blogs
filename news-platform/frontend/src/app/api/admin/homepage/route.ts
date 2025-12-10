import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

export interface HomepageSection {
  id: number;
  name: string;
  title: string | null;
  section_type: string;
  selection_type: string;
  selection_data: any;
  display_limit: number;
  display_layout: string;
  display_settings: any;
  sort_order: number;
  is_visible: boolean;
  position: string;
  created_at: string;
  updated_at: string;
}

/**
 * GET /api/admin/homepage - Get all homepage sections
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sections = await query<HomepageSection>(`
      SELECT * FROM homepage_sections
      ORDER BY position, sort_order ASC
    `);

    return NextResponse.json({ sections });
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return NextResponse.json({ error: 'Failed to fetch sections' }, { status: 500 });
  }
}

/**
 * POST /api/admin/homepage - Create new section
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      title,
      section_type,
      selection_type,
      selection_data,
      display_limit,
      display_layout,
      display_settings,
      position,
      is_visible
    } = body;

    if (!name || !section_type) {
      return NextResponse.json({ error: 'Name and section_type are required' }, { status: 400 });
    }

    // Get max sort_order for position
    const maxOrder = await query<{ max: number }>(`
      SELECT COALESCE(MAX(sort_order), 0) as max FROM homepage_sections WHERE position = $1
    `, [position || 'main']);

    const result = await query<{ id: number }>(`
      INSERT INTO homepage_sections (
        name, title, section_type, selection_type, selection_data,
        display_limit, display_layout, display_settings, sort_order, position, is_visible, created_by
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id
    `, [
      name,
      title || null,
      section_type,
      selection_type || 'auto',
      JSON.stringify(selection_data || {}),
      display_limit || 5,
      display_layout || 'grid',
      JSON.stringify(display_settings || {}),
      (maxOrder[0]?.max || 0) + 1,
      position || 'main',
      is_visible !== false,
      userId
    ]);

    const sectionId = result[0]?.id;
    await logAuditAction(userId, 'create_homepage_section', 'homepage_section', sectionId, { name });

    return NextResponse.json({ success: true, id: sectionId });
  } catch (error) {
    console.error('Error creating section:', error);
    return NextResponse.json({ error: 'Failed to create section' }, { status: 500 });
  }
}

/**
 * PUT /api/admin/homepage - Update sections order
 */
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { sections } = body;

    if (!Array.isArray(sections)) {
      return NextResponse.json({ error: 'Invalid sections data' }, { status: 400 });
    }

    // Update sort_order for each section
    for (const section of sections) {
      await execute(`
        UPDATE homepage_sections SET sort_order = $1, position = $2, updated_by = $3
        WHERE id = $4
      `, [section.sort_order, section.position, userId, section.id]);
    }

    await logAuditAction(userId, 'reorder_homepage_sections', 'homepage', null, { count: sections.length });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating sections order:', error);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}
