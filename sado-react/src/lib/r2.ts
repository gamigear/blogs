import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID!
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY!
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL! // Custom domain or R2.dev URL

// Initialize S3 Client for R2
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

export const R2_BUCKET = R2_BUCKET_NAME
export const PUBLIC_URL = R2_PUBLIC_URL

// Upload file to R2
export async function uploadToR2(
  buffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  })

  await r2Client.send(command)
  
  // Return public URL
  return `${PUBLIC_URL}/${key}`
}

// Delete file from R2
export async function deleteFromR2(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  })

  await r2Client.send(command)
}

// Delete multiple files from R2
export async function deleteMultipleFromR2(keys: string[]): Promise<void> {
  await Promise.all(keys.map(key => deleteFromR2(key)))
}

// List files in R2 bucket
export async function listR2Files(prefix?: string) {
  const command = new ListObjectsV2Command({
    Bucket: R2_BUCKET,
    Prefix: prefix,
  })

  const response = await r2Client.send(command)
  return response.Contents || []
}

// Generate unique key for file
export function generateFileKey(folder: string, filename: string): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  const ext = filename.split('.').pop()
  const baseName = filename.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9-_]/g, '-')
  return `${folder}/${timestamp}-${random}-${baseName}.${ext}`
}
