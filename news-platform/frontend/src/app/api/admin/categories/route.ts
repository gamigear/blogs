import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug, generateSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * GET /api/admin/categories - List all categories
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor', 'moderator'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const categories = await query(`
      SELECT c.*, 
        p.name as parent_name,
        (SELECT COUNT(*) FROM articles WHERE category_id = c.id) as article_count
      FROM categories c
      LEFT JOIN categories p ON c.parent_id = p.id
      ORDER BY c.name ASC
    `);

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

/**
 * POST /api/admin/categories - Create new category
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
    const { name, slug, description, parent_id, image } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const baseSlug = slug || generateSlug(name);
    const uniqueSlug = await generateUniqueSlug('categories', baseSlug);

    const result = await query<{ id: number }>(`
      INSERT INTO categories (name, slug, description, parent_id, image)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `, [name, uniqueSlug, description || null, parent_id || null, image || null]);

    const categoryId = result[0]?.id;

    await logAuditAction(userId, 'create_category', 'category', categoryId, { name });

    return NextResponse.json({ success: true, id: categoryId, slug: uniqueSlug });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
