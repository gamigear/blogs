import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, execute, generateUniqueSlug, generateSlug } from '@/lib/db';
import { logAuditAction } from '@/lib/security';

/**
 * GET /api/admin/tags - List all tags
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || !['admin', 'editor', 'moderator'].includes(userRole)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tags = await query(`
      SELECT t.*,
        (SELECT COUNT(*) FROM article_tags WHERE tag_id = t.id) as article_count
      FROM tags t
      ORDER BY t.name ASC
    `);

    return NextResponse.json({ tags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
  }
}

/**
 * POST /api/admin/tags - Create new tag
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
    const { name, slug } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const baseSlug = slug || generateSlug(name);
    const uniqueSlug = await generateUniqueSlug('tags', baseSlug);

    const result = await query<{ id: number }>(`
      INSERT INTO tags (name, slug)
      VALUES ($1, $2)
      RETURNING id
    `, [name, uniqueSlug]);

    const tagId = result[0]?.id;

    await logAuditAction(userId, 'create_tag', 'tag', tagId, { name });

    return NextResponse.json({ success: true, id: tagId, slug: uniqueSlug });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json({ error: 'Failed to create tag' }, { status: 500 });
  }
}
