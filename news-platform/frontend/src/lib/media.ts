/**
 * Media Library Module
 * Quản lý upload, chuyển đổi và lưu trữ media files
 */

import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import crypto from 'crypto';
import { query, queryOne } from './db';
import { MediaFile, MediaListResponse, MediaUploadOptions } from '@/types/media';

// Cloudflare R2 configuration (S3-compatible)
const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT || `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'news-platform';
// R2 public URL - use custom domain or R2.dev URL
const CDN_URL = process.env.R2_PUBLIC_URL || '';

// Allowed file types
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'application/pdf',
  'video/mp4',
  'video/webm',
  'audio/mpeg',
  'audio/wav',
];

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateMediaFile(file: { type: string; size: number; name: string }): ValidationResult {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File quá lớn. Tối đa ${MAX_FILE_SIZE / 1024 / 1024}MB` };
  }
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return { valid: false, error: 'Loại file không được hỗ trợ' };
  }
  return { valid: true };
}

function generateUniqueFilename(originalName: string, extension?: string): string {
  const ext = extension || originalName.split('.').pop()?.toLowerCase() || 'jpg';
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString('hex');
  return `${timestamp}-${randomString}.${ext}`;
}

/**
 * Generate thumbnail for image
 */
async function generateThumbnail(buffer: Buffer, mimeType: string): Promise<Buffer | null> {
  if (!mimeType.startsWith('image/') || mimeType === 'image/svg+xml') return null;
  try {
    const sharp = (await import('sharp')).default;
    return await sharp(buffer)
      .resize(300, 300, { fit: 'cover', position: 'center' })
      .webp({ quality: 70 })
      .toBuffer();
  } catch (error) {
    console.error('Thumbnail generation error:', error);
    return null;
  }
}

/**
 * Upload media file to S3 and save metadata to database
 */
export async function uploadMedia(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
  userId: number,
  options: MediaUploadOptions
): Promise<{ success: boolean; file?: MediaFile; error?: string }> {
  try {
    const folder = options.folder || 'media';
    let finalBuffer = buffer;
    let finalMimeType = mimeType;
    let finalExtension = originalName.split('.').pop()?.toLowerCase();

    // Convert to WebP if requested and is image
    if (options.convertToWebp && ['image/jpeg', 'image/png'].includes(mimeType)) {
      const converted = await convertToWebp(buffer, options.quality || 85);
      if (converted) {
        finalBuffer = converted;
        finalMimeType = 'image/webp';
        finalExtension = 'webp';
      }
    }

    const filename = generateUniqueFilename(originalName, finalExtension);
    const key = `${folder}/${filename}`;

    // Upload main file to S3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: finalBuffer,
        ContentType: finalMimeType,
        CacheControl: 'public, max-age=31536000',
      })
    );

    // R2 public URL format (without bucket name if using custom domain)
    const url = `${CDN_URL}/${key}`;
    
    // Get image dimensions if it's an image
    const dimensions = await getImageDimensions(finalBuffer, finalMimeType);

    // Generate and upload thumbnail for images
    let thumbnailUrl: string | null = null;
    if (finalMimeType.startsWith('image/') && finalMimeType !== 'image/svg+xml') {
      const thumbnail = await generateThumbnail(finalBuffer, finalMimeType);
      if (thumbnail) {
        const thumbFilename = `thumb_${filename.replace(/\.[^.]+$/, '.webp')}`;
        const thumbKey = `${folder}/thumbnails/${thumbFilename}`;
        await s3Client.send(
          new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: thumbKey,
            Body: thumbnail,
            ContentType: 'image/webp',
            CacheControl: 'public, max-age=31536000',
          })
        );
        thumbnailUrl = `${CDN_URL}/${thumbKey}`;
      }
    }

    // Save to database
    const rows = await query<any>(
      `INSERT INTO media_files (filename, original_filename, mime_type, size, width, height, url, thumbnail_url, folder, alt_text, caption, uploaded_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [
        filename,
        originalName,
        finalMimeType,
        finalBuffer.length,
        dimensions?.width || null,
        dimensions?.height || null,
        url,
        thumbnailUrl,
        folder,
        options.alt_text || null,
        options.caption || null,
        userId,
      ]
    );

    const file = mapMediaFile(rows[0]);
    return { success: true, file };
  } catch (error) {
    console.error('Media upload error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Upload thất bại' };
  }
}

/**
 * Convert image to WebP format
 */
async function convertToWebp(buffer: Buffer, quality: number): Promise<Buffer | null> {
  try {
    // Dynamic import sharp for WebP conversion
    const sharp = (await import('sharp')).default;
    return await sharp(buffer)
      .webp({ quality })
      .toBuffer();
  } catch (error) {
    console.error('WebP conversion error:', error);
    return null;
  }
}

/**
 * Get image dimensions
 */
async function getImageDimensions(buffer: Buffer, mimeType: string): Promise<{ width: number; height: number } | null> {
  if (!mimeType.startsWith('image/')) return null;
  try {
    const sharp = (await import('sharp')).default;
    const metadata = await sharp(buffer).metadata();
    return { width: metadata.width || 0, height: metadata.height || 0 };
  } catch {
    return null;
  }
}

/**
 * Get media files with pagination
 */
export async function getMediaFiles(
  page = 1,
  pageSize = 24,
  folder?: string,
  mimeTypeFilter?: string,
  search?: string
): Promise<MediaListResponse> {
  const offset = (page - 1) * pageSize;
  let whereClause = '1=1';
  const params: any[] = [];
  let paramIndex = 1;

  if (folder) {
    whereClause += ` AND m.folder = $${paramIndex++}`;
    params.push(folder);
  }

  if (mimeTypeFilter) {
    whereClause += ` AND m.mime_type LIKE $${paramIndex++}`;
    params.push(`${mimeTypeFilter}%`);
  }

  if (search) {
    whereClause += ` AND (m.original_filename ILIKE $${paramIndex++} OR m.alt_text ILIKE $${paramIndex++} OR m.caption ILIKE $${paramIndex++})`;
    const searchPattern = `%${search}%`;
    params.push(searchPattern, searchPattern, searchPattern);
  }

  // Get total count
  const countResult = await queryOne<{ count: string }>(
    `SELECT COUNT(*) as count FROM media_files m WHERE ${whereClause}`,
    params
  );
  const total = parseInt(countResult?.count || '0');

  // Get files
  params.push(pageSize, offset);
  const rows = await query<any>(
    `SELECT m.*, u.display_name as uploaded_by_name
     FROM media_files m
     LEFT JOIN users u ON m.uploaded_by = u.id
     WHERE ${whereClause}
     ORDER BY m.created_at DESC
     LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
    params
  );

  return {
    files: rows.map(mapMediaFile),
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

/**
 * Get single media file by ID
 */
export async function getMediaById(id: number): Promise<MediaFile | null> {
  const row = await queryOne<any>(
    `SELECT m.*, u.display_name as uploaded_by_name
     FROM media_files m
     LEFT JOIN users u ON m.uploaded_by = u.id
     WHERE m.id = $1`,
    [id]
  );
  return row ? mapMediaFile(row) : null;
}

/**
 * Update media file metadata
 */
export async function updateMedia(
  id: number,
  data: { alt_text?: string; caption?: string }
): Promise<MediaFile | null> {
  const row = await queryOne<any>(
    `UPDATE media_files 
     SET alt_text = COALESCE($2, alt_text), 
         caption = COALESCE($3, caption),
         updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [id, data.alt_text, data.caption]
  );
  return row ? mapMediaFile(row) : null;
}

/**
 * Delete media file
 */
export async function deleteMedia(id: number): Promise<boolean> {
  try {
    const file = await getMediaById(id);
    if (!file) return false;

    // Delete from S3
    const key = `${file.folder}/${file.filename}`;
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      })
    );

    // Delete from database
    await query('DELETE FROM media_files WHERE id = $1', [id]);
    return true;
  } catch (error) {
    console.error('Media delete error:', error);
    return false;
  }
}

/**
 * Delete multiple media files
 */
export async function deleteMultipleMedia(ids: number[]): Promise<{ success: number; failed: number }> {
  let success = 0;
  let failed = 0;

  for (const id of ids) {
    const result = await deleteMedia(id);
    if (result) success++;
    else failed++;
  }

  return { success, failed };
}

/**
 * Get folders list
 */
export async function getMediaFolders(): Promise<string[]> {
  const rows = await query<{ folder: string }>(
    'SELECT DISTINCT folder FROM media_files ORDER BY folder'
  );
  return rows.map(r => r.folder);
}

/**
 * Move multiple media files to a folder
 */
export async function moveMediaToFolder(ids: number[], folder: string): Promise<{ success: number; failed: number }> {
  let success = 0;
  let failed = 0;

  for (const id of ids) {
    try {
      await query(
        'UPDATE media_files SET folder = $2, updated_at = NOW() WHERE id = $1',
        [id, folder]
      );
      success++;
    } catch (error) {
      console.error(`Failed to move media ${id}:`, error);
      failed++;
    }
  }

  return { success, failed };
}

function mapMediaFile(row: any): MediaFile {
  return {
    id: row.id,
    filename: row.filename,
    original_filename: row.original_filename,
    mime_type: row.mime_type,
    size: row.size,
    width: row.width,
    height: row.height,
    url: row.url,
    thumbnail_url: row.thumbnail_url,
    alt_text: row.alt_text,
    caption: row.caption,
    folder: row.folder,
    uploaded_by: row.uploaded_by,
    uploaded_by_name: row.uploaded_by_name,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}
