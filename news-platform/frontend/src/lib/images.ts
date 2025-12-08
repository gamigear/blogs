/**
 * Image Upload and Processing Module
 * Requirements: 12.1, 12.2, 12.3
 */

import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

// S3-compatible storage configuration
const s3Client = new S3Client({
  region: process.env.S3_REGION || 'us-east-1',
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true, // Required for MinIO and other S3-compatible services
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'news-platform';
const CDN_URL = process.env.CDN_URL || process.env.S3_ENDPOINT || '';

// ============================================
// IMAGE VALIDATION
// Requirements: 12.3 - Validate file type and size
// ============================================

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
];

const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export interface ImageValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate image file
 * Requirements: 12.3 - Validate file type (jpg, png, webp, gif) and size (max 10MB)
 */
export function validateImage(
  file: { type: string; size: number; name: string }
): ImageValidationResult {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds maximum allowed (${MAX_FILE_SIZE / 1024 / 1024}MB)`,
    };
  }

  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}`,
    };
  }

  // Check file extension
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
    return {
      valid: false,
      error: `Invalid file extension. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`,
    };
  }

  return { valid: true };
}

// ============================================
// IMAGE UPLOAD
// Requirements: 12.1
// ============================================

export interface UploadResult {
  success: boolean;
  url?: string;
  key?: string;
  error?: string;
}

/**
 * Generate unique filename for upload
 */
function generateUniqueFilename(originalName: string): string {
  const extension = originalName.split('.').pop()?.toLowerCase() || 'jpg';
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString('hex');
  return `${timestamp}-${randomString}.${extension}`;
}

/**
 * Upload image to S3-compatible storage
 * Requirements: 12.1 - Store in S3-compatible storage
 */
export async function uploadImage(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
  folder = 'uploads'
): Promise<UploadResult> {
  try {
    const filename = generateUniqueFilename(originalName);
    const key = `${folder}/${filename}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: mimeType,
        CacheControl: 'public, max-age=31536000', // 1 year cache
      })
    );

    const url = `${CDN_URL}/${BUCKET_NAME}/${key}`;

    return {
      success: true,
      url,
      key,
    };
  } catch (error) {
    console.error('Image upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

/**
 * Delete image from storage
 */
export async function deleteImage(key: string): Promise<boolean> {
  try {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      })
    );
    return true;
  } catch (error) {
    console.error('Image delete error:', error);
    return false;
  }
}

// ============================================
// IMAGE OPTIMIZATION
// Requirements: 12.1, 12.2 - Generate optimized variants
// ============================================

export interface ImageVariant {
  width: number;
  suffix: string;
}

export const IMAGE_VARIANTS: ImageVariant[] = [
  { width: 320, suffix: 'sm' },
  { width: 640, suffix: 'md' },
  { width: 1024, suffix: 'lg' },
  { width: 1920, suffix: 'xl' },
];

/**
 * Generate srcset string for responsive images
 * Requirements: 12.2 - Serve with responsive srcset
 */
export function generateSrcSet(baseUrl: string): string {
  // For now, return the base URL
  // In production, this would generate URLs for different sizes
  // using an image CDN like Cloudinary, imgix, or Next.js Image Optimization
  return IMAGE_VARIANTS
    .map((variant) => `${baseUrl}?w=${variant.width} ${variant.width}w`)
    .join(', ');
}

/**
 * Get optimized image URL with format conversion
 * Requirements: 12.1 - Generate optimized variants (WebP/AVIF)
 */
export function getOptimizedImageUrl(
  originalUrl: string,
  options: {
    width?: number;
    height?: number;
    format?: 'webp' | 'avif' | 'auto';
    quality?: number;
  } = {}
): string {
  const { width, height, format = 'auto', quality = 80 } = options;

  // If using Next.js Image Optimization
  if (process.env.NEXT_PUBLIC_USE_IMAGE_OPTIMIZATION === 'true') {
    const params = new URLSearchParams();
    params.set('url', originalUrl);
    if (width) params.set('w', String(width));
    if (height) params.set('h', String(height));
    params.set('q', String(quality));
    return `/_next/image?${params.toString()}`;
  }

  // If using external image CDN (Cloudinary, imgix, etc.)
  const cdnUrl = process.env.IMAGE_CDN_URL;
  if (cdnUrl) {
    const transforms = [];
    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    transforms.push(`q_${quality}`);
    if (format !== 'auto') transforms.push(`f_${format}`);
    else transforms.push('f_auto');
    
    return `${cdnUrl}/${transforms.join(',')}/${originalUrl}`;
  }

  // Fallback to original URL
  return originalUrl;
}

// ============================================
// IMAGE METADATA
// ============================================

export interface ImageMetadata {
  width?: number;
  height?: number;
  format?: string;
  size?: number;
}

/**
 * Extract basic image metadata from buffer
 * Note: For full metadata extraction, use a library like sharp
 */
export function getImageMetadata(buffer: Buffer): ImageMetadata {
  // Basic detection based on magic bytes
  const header = buffer.slice(0, 12);
  
  // JPEG
  if (header[0] === 0xFF && header[1] === 0xD8) {
    return { format: 'jpeg', size: buffer.length };
  }
  
  // PNG
  if (header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4E && header[3] === 0x47) {
    return { format: 'png', size: buffer.length };
  }
  
  // WebP
  if (header[0] === 0x52 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x46) {
    return { format: 'webp', size: buffer.length };
  }
  
  // GIF
  if (header[0] === 0x47 && header[1] === 0x49 && header[2] === 0x46) {
    return { format: 'gif', size: buffer.length };
  }

  return { size: buffer.length };
}
