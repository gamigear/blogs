import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne } from '@/lib/db';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';
import crypto from 'crypto';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || '';
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || '';
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || '';
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'euro';
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || '';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

/**
 * POST /api/feed/upload - Upload image for feed post to R2
 * Each user has their own folder: feed/{username}/
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get username for folder structure
    const user = await queryOne<{ username: string }>(
      'SELECT username FROM users WHERE id = $1',
      [session.userId]
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
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
        error: 'Ảnh quá lớn. Vui lòng chọn ảnh dưới 5MB' 
      }, { status: 400 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(4).toString('hex');
    const filename = `${timestamp}-${randomString}.webp`;
    
    // Store in feed/{username}/ folder on R2
    const key = `feed/${user.username}/${filename}`;

    // Convert to webp and optimize
    const buffer = Buffer.from(await file.arrayBuffer());
    
    const webpBuffer = await sharp(buffer)
      .resize(1200, 1200, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .webp({ quality: 85 })
      .toBuffer();

    // Upload to R2
    await s3Client.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
        Body: webpBuffer,
        ContentType: 'image/webp',
        CacheControl: 'public, max-age=31536000', // 1 year cache
      })
    );

    const url = `${R2_PUBLIC_URL}/${key}`;

    return NextResponse.json({ 
      success: true,
      url,
    });
  } catch (error: any) {
    console.error('Error uploading feed image:', error);
    return NextResponse.json({ 
      error: error.message || 'Upload failed' 
    }, { status: 500 });
  }
}
