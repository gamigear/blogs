import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { getMediaFiles, uploadMedia, deleteMultipleMedia, getMediaFolders, validateMediaFile } from '@/lib/media';
import { createAuditLog } from '@/lib/moderation';
import { checkRateLimit, addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/admin/media - Get media files with pagination
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '24');
    const folder = searchParams.get('folder') || undefined;
    const type = searchParams.get('type') || undefined;
    const search = searchParams.get('search') || undefined;

    const result = await getMediaFiles(page, pageSize, folder, type, search);
    const folders = await getMediaFolders();

    return addSecurityHeaders(NextResponse.json({ ...result, folders }));
  } catch (error) {
    console.error('Get media error:', error);
    return NextResponse.json({ error: 'Failed to get media' }, { status: 500 });
  }
}

/**
 * POST /api/admin/media - Upload media file
 */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = checkRateLimit(`media-upload:${ip}`, { maxRequests: 20, windowMs: 60000 });
    
    if (!allowed) {
      return NextResponse.json({ error: 'Quá nhiều yêu cầu. Vui lòng đợi.' }, { status: 429 });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const convertToWebp = formData.get('convertToWebp') === 'true';
    const quality = parseInt(formData.get('quality') as string) || 85;
    const folder = (formData.get('folder') as string) || 'media';
    const altText = formData.get('alt_text') as string || '';
    const caption = formData.get('caption') as string || '';

    if (!file) {
      return NextResponse.json({ error: 'Không có file được chọn' }, { status: 400 });
    }

    const validation = validateMediaFile({
      type: file.type,
      size: file.size,
      name: file.name,
    });

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadMedia(buffer, file.name, file.type, (session as any).userId, {
      convertToWebp,
      quality,
      folder,
      alt_text: altText,
      caption,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await createAuditLog({
      userId: (session as any).userId,
      action: 'media.upload',
      resourceType: 'media',
      resourceId: result.file?.id,
      details: { 
        filename: file.name, 
        size: file.size, 
        convertedToWebp: convertToWebp,
      },
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return addSecurityHeaders(NextResponse.json({ success: true, file: result.file }));
  } catch (error) {
    console.error('Media upload error:', error);
    return NextResponse.json({ error: 'Upload thất bại' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/media - Delete multiple media files
 */
export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { ids } = await req.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Không có file nào được chọn' }, { status: 400 });
    }

    const result = await deleteMultipleMedia(ids);

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    await createAuditLog({
      userId: (session as any).userId,
      action: 'media.delete',
      resourceType: 'media',
      details: { deletedIds: ids, success: result.success, failed: result.failed },
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    return addSecurityHeaders(NextResponse.json(result));
  } catch (error) {
    console.error('Media delete error:', error);
    return NextResponse.json({ error: 'Xóa thất bại' }, { status: 500 });
  }
}
