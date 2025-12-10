import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { moveMediaToFolder } from '@/lib/media';
import { createAuditLog } from '@/lib/moderation';
import { addSecurityHeaders } from '@/lib/security';

/**
 * POST /api/admin/media/move - Move multiple media files to a folder
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { ids, folder } = await req.json();
    
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Không có file nào được chọn' }, { status: 400 });
    }

    if (typeof folder !== 'string') {
      return NextResponse.json({ error: 'Thư mục không hợp lệ' }, { status: 400 });
    }

    const result = await moveMediaToFolder(ids, folder);

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    await createAuditLog({
      userId: (session as any).userId,
      action: 'media.move',
      resourceType: 'media',
      details: { movedIds: ids, targetFolder: folder, success: result.success, failed: result.failed },
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return addSecurityHeaders(NextResponse.json(result));
  } catch (error) {
    console.error('Media move error:', error);
    return NextResponse.json({ error: 'Di chuyển thất bại' }, { status: 500 });
  }
}
