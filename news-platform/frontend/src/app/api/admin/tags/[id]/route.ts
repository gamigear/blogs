import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

interface Props {
  params: { id: string };
}

/**
 * GET /api/admin/tags/[id] - Get tag details
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tagId = parseInt(params.id);
    const tags = await query(`SELECT * FROM tags WHERE id = $1`, [tagId]);

    if (tags.length === 0) {
      return NextResponse.json({ error: 'Tag not found' }, { status: 404 });
    }

    return NextResponse.json({ tag: tags[0] });
  } catch (error) {
    console.error('Error fetching tag:', error);
    return NextResponse.json({ error: 'Failed to fetch tag' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/tags/[id] - Update tag
 */
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin', 'editor'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tagId = parseInt(params.id);
    const body = await request.json();
    const { name, slug } = body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (name) {
      updates.push(`name = $${paramIndex++}`);
      values.push(name);
    }
    if (slug) {
      const uniqueSlug = await generateUniqueSlug('tags', slug, tagId);
      updates.push(`slug = $${paramIndex++}`);
      values.push(uniqueSlug);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(tagId);
    await execute(`UPDATE tags SET ${updates.join(', ')} WHERE id = $${paramIndex}`, values);

    await logAuditAction(userId, 'update_tag', 'tag', tagId, { changes: Object.keys(body) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating tag:', error);
    return NextResponse.json({ error: 'Failed to update tag' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/tags/[id] - Delete tag
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    const userId = (session?.user as any)?.id;
    if (!session?.user || !['admin'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tagId = parseInt(params.id);

    // Remove tag associations first
    await execute(`DELETE FROM article_tags WHERE tag_id = $1`, [tagId]);
    // Then delete the tag
    await execute(`DELETE FROM tags WHERE id = $1`, [tagId]);

    await logAuditAction(userId, 'delete_tag', 'tag', tagId, {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting tag:', error);
    return NextResponse.json({ error: 'Failed to delete tag' }, { status: 500 });
  }
}
