import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, isAdmin } from '@/lib/auth';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { query, queryOne } from '@/lib/db';

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
 * POST /api/admin/media/sync - Sync images from R2 to media database
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isAdmin(roles)) {
      return NextResponse.json({ error: 'Admin required' }, { status: 403 });
    }

    const body = await req.json();
    const prefix = body.prefix || ''; // Optional: sync specific folder

    // List all objects in R2
    let continuationToken: string | undefined;
    const allObjects: any[] = [];
    
    do {
      const command = new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME,
        Prefix: prefix,
        ContinuationToken: continuationToken,
        MaxKeys: 1000,
      });
      
      const response = await s3Client.send(command);
      if (response.Contents) {
        allObjects.push(...response.Contents);
      }
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    // Filter only image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageObjects = allObjects.filter(obj => {
      const key = obj.Key?.toLowerCase() || '';
      return imageExtensions.some(ext => key.endsWith(ext));
    });

    let synced = 0;
    let skipped = 0;
    let errors = 0;

    for (const obj of imageObjects) {
      const key = obj.Key;
      if (!key) continue;

      const url = `${R2_PUBLIC_URL}/${key}`;
      const filename = key.split('/').pop() || key;
      const folder = key.includes('/') ? key.substring(0, key.lastIndexOf('/')) : 'root';

      // Check if already exists in database
      const existing = await queryOne<{ id: number }>(
        'SELECT id FROM media_files WHERE url = $1',
        [url]
      );

      if (existing) {
        skipped++;
        continue;
      }

      // Determine mime type from extension
      const ext = filename.split('.').pop()?.toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === 'png') mimeType = 'image/png';
      else if (ext === 'gif') mimeType = 'image/gif';
      else if (ext === 'webp') mimeType = 'image/webp';
      else if (ext === 'svg') mimeType = 'image/svg+xml';

      try {
        // Insert into database
        await query(
          `INSERT INTO media_files (filename, original_filename, mime_type, size, url, folder, uploaded_by)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            filename,
            filename,
            mimeType,
            obj.Size || 0,
            url,
            folder,
            session.userId,
          ]
        );
        synced++;
      } catch (err) {
        console.error(`Error syncing ${key}:`, err);
        errors++;
      }
    }

    return NextResponse.json({
      success: true,
      total: imageObjects.length,
      synced,
      skipped,
      errors,
      message: `Đã đồng bộ ${synced} file mới, bỏ qua ${skipped} file đã tồn tại`,
    });
  } catch (error: any) {
    console.error('Sync error:', error);
    return NextResponse.json({ error: error.message || 'Sync failed' }, { status: 500 });
  }
}

/**
 * GET /api/admin/media/sync - Get sync status / preview
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roles = session.roles || [];
    if (!isAdmin(roles)) {
      return NextResponse.json({ error: 'Admin required' }, { status: 403 });
    }

    // Count files in R2
    let continuationToken: string | undefined;
    let totalR2Files = 0;
    const folders = new Set<string>();
    
    do {
      const command = new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME,
        ContinuationToken: continuationToken,
        MaxKeys: 1000,
      });
      
      const response = await s3Client.send(command);
      if (response.Contents) {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
        for (const obj of response.Contents) {
          const key = obj.Key?.toLowerCase() || '';
          if (imageExtensions.some(ext => key.endsWith(ext))) {
            totalR2Files++;
            const folder = obj.Key?.includes('/') 
              ? obj.Key.substring(0, obj.Key.lastIndexOf('/')) 
              : 'root';
            folders.add(folder);
          }
        }
      }
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    // Count files in database
    const dbCount = await queryOne<{ count: string }>(
      'SELECT COUNT(*) as count FROM media_files'
    );

    return NextResponse.json({
      r2Files: totalR2Files,
      dbFiles: parseInt(dbCount?.count || '0'),
      folders: Array.from(folders).sort(),
    });
  } catch (error: any) {
    console.error('Sync status error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
