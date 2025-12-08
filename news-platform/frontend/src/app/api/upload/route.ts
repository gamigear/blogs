import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isEditor } from '@/lib/auth';
import { validateImage, uploadImage } from '@/lib/images';
import { createAuditLog } from '@/lib/moderation';
import { checkRateLimit, addSecurityHeaders } from '@/lib/security';

/**
 * POST /api/upload - Upload image
 * Requirements: 12.1, 12.3
 */
export async function POST(req: NextRequest) {
  try {
    // Rate limit uploads
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = checkRateLimit(`upload:${ip}`, { maxRequests: 10, windowMs: 60000 });
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many upload requests. Please wait.' },
        { status: 429 }
      );
    }

    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check editor permission for uploads
    const roles = session.roles || [];
    if (!isEditor(roles)) {
      return NextResponse.json({ error: 'Forbidden: Editor role required' }, { status: 403 });
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'uploads';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate image
    // Requirements: 12.3 - Validate file type and size
    const validation = validateImage({
      type: file.type,
      size: file.size,
      name: file.name,
    });

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to storage
    const result = await uploadImage(buffer, file.name, file.type, folder);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    // Create audit log
    await createAuditLog({
      userId: (session as any).userId,
      action: 'image.upload',
      resourceType: 'image',
      details: { 
        filename: file.name, 
        size: file.size, 
        type: file.type,
        key: result.key,
      },
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    const response = NextResponse.json({
      success: true,
      url: result.url,
      key: result.key,
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
