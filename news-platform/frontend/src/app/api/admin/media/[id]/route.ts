import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { getMediaById, updateMedia, deleteMedia } from '@/lib/media';
import { createAuditLog } from '@/lib/moderation';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/media/[id] - Get single media file
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const file = await getMediaById(parseInt(id));
    
    if (!file) {
      return NextResponse.json({ error: 'File không tồn tại' }, { status: 404 });
    }

    return addSecurityHeaders(NextResponse.json(file));
  } catch (error) {
    console.error('Get media error:', error);
    return NextResponse.json({ error: 'Lỗi khi lấy thông tin file' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/media/[id] - Update media metadata
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const data = await req.json();
    const file = await updateMedia(parseInt(id), {
      alt_text: data.alt_text,
      caption: data.caption,
    });

    if (!file) {
      return NextResponse.json({ error: 'File không tồn tại' }, { status: 404 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    await createAuditLog({
      userId: (session as any).userId,
      action: 'media.update',
      resourceType: 'media',
      resourceId: parseInt(id),
      details: data,
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return addSecurityHeaders(NextResponse.json(file));
  } catch (error) {
    console.error('Update media error:', error);
    return NextResponse.json({ error: 'Cập nhật thất bại' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/media/[id] - Delete single media file
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const success = await deleteMedia(parseInt(id));

    if (!success) {
      return NextResponse.json({ error: 'Xóa thất bại' }, { status: 500 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    await createAuditLog({
      userId: (session as any).userId,
      action: 'media.delete',
      resourceType: 'media',
      resourceId: parseInt(id),
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return addSecurityHeaders(NextResponse.json({ success: true }));
  } catch (error) {
    console.error('Delete media error:', error);
    return NextResponse.json({ error: 'Xóa thất bại' }, { status: 500 });
  }
}
