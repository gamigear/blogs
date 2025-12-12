import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// Cloudflare R2 configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID!
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY!
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL! // Your custom domain or R2.dev URL

// Create S3 client configured for R2
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

// Upload file to R2
export async function uploadToR2(
  file: Buffer,
  filename: string,
  contentType: string,
  folder: string = 'general'
): Promise<{ url: string; key: string }> {
  const key = `${folder}/${filename}`

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  })

  await r2Client.send(command)

  const url = `${R2_PUBLIC_URL}/${key}`

  return { url, key }
}

// Delete file from R2
export async function deleteFromR2(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
  })

  await r2Client.send(command)
}

// Get signed URL for private files (optional)
export async function getSignedUrlFromR2(key: string, expiresIn: number = 3600): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
  })

  return getSignedUrl(r2Client, command, { expiresIn })
}

// Extract key from full URL
export function getKeyFromUrl(url: string): string {
  return url.replace(`${R2_PUBLIC_URL}/`, '')
}
