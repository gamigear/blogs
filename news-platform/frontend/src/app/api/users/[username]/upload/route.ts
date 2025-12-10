import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne } from '@/lib/db';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

/**
 * POST /api/users/[username]/upload - Upload avatar or cover image
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { username } = await params;

    // Verify user owns this profile
    const targetUser = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE username = $1',
      [username]
    );

    if (!targetUser || targetUser.id !== session.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const type = formData.get('type') as string; // 'avatar' or 'cover'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!type || !['avatar', 'cover'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be avatar or cover' }, { status: 400 });
    }

    // Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Định dạng không hỗ trợ. Chỉ chấp nhận JPG, PNG, GIF, WEBP' 
      }, { status: 400 });
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ 
        error: 'Ảnh quá lớn. Vui lòng chọn ảnh dưới 1MB' 
      }, { status: 400 });
    }

    // Create user upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'users', username);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate filename
    const timestamp = Date.now();
    const filename = `${type}-${timestamp}.webp`;
    const filepath = path.join(uploadDir, filename);

    // Convert to webp and resize
    const buffer = Buffer.from(await file.arrayBuffer());
    
    let sharpInstance = sharp(buffer);
    
    if (type === 'avatar') {
      // Avatar: 400x400, square crop
      sharpInstance = sharpInstance
        .resize(400, 400, { fit: 'cover', position: 'center' });
    } else {
      // Cover: 1200x400, crop to banner ratio
      sharpInstance = sharpInstance
        .resize(1200, 400, { fit: 'cover', position: 'center' });
    }

    await sharpInstance
      .webp({ quality: 85 })
      .toFile(filepath);

    const url = `/uploads/users/${username}/${filename}`;

    return NextResponse.json({ 
      success: true,
      url,
      type,
    });
  } catch (error: any) {
    console.error('Error uploading user image:', error);
    return NextResponse.json({ 
      error: error.message || 'Upload failed' 
    }, { status: 500 });
  }
}
