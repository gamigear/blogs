import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/admin/categories/[id] - Get category details
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const categoryId = parseInt(id);
    const categories = await query(`
      SELECT c.*, p.name as parent_name
      FROM categories c
      LEFT JOIN categories p ON c.parent_id = p.id
      WHERE c.id = $1
    `, [categoryId]);

    if (categories.length === 0) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ category: categories[0] });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json({ error: 'Failed to fetch category' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/categories/[id] - Update category
 */
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const categoryId = parseInt(id);
    const body = await request.json();
    const { name, slug, description, parent_id, image } = body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (name) {
      updates.push(`name = $${paramIndex++}`);
      values.push(name);
    }
    if (slug) {
      const uniqueSlug = await generateUniqueSlug('categories', slug, categoryId);
      updates.push(`slug = $${paramIndex++}`);
      values.push(uniqueSlug);
    }
    if (description !== undefined) {
      updates.push(`description = $${paramIndex++}`);
      values.push(description);
    }
    if (parent_id !== undefined) {
      // Prevent circular reference
      if (parent_id === categoryId) {
        return NextResponse.json({ error: 'Category cannot be its own parent' }, { status: 400 });
      }
      updates.push(`parent_id = $${paramIndex++}`);
      values.push(parent_id || null);
    }
    if (image !== undefined) {
      updates.push(`image = $${paramIndex++}`);
      values.push(image || null);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(categoryId);
    await execute(`UPDATE categories SET ${updates.join(', ')} WHERE id = $${paramIndex}`, values);

    await logAuditAction(userId, 'update_category', 'category', categoryId, { changes: Object.keys(body) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/categories/[id] - Delete category
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const categoryId = parseInt(id);

    // Check if category has articles
    const articles = await query<{ count: string }>(`SELECT COUNT(*) as count FROM articles WHERE category_id = $1`, [categoryId]);
    if (parseInt(articles[0]?.count || '0') > 0) {
      return NextResponse.json({ 
        error: 'Cannot delete category with articles. Please move articles to another category first.' 
      }, { status: 400 });
    }

    // Check if category has children
    const children = await query<{ count: string }>(`SELECT COUNT(*) as count FROM categories WHERE parent_id = $1`, [categoryId]);
    if (parseInt(children[0]?.count || '0') > 0) {
      return NextResponse.json({ 
        error: 'Cannot delete category with subcategories. Please delete subcategories first.' 
      }, { status: 400 });
    }

    await execute(`DELETE FROM categories WHERE id = $1`, [categoryId]);
    await logAuditAction(userId, 'delete_category', 'category', categoryId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
