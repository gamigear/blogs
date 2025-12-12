import sharp from 'sharp'

export interface ConvertedImage {
  buffer: Buffer
  width: number
  height: number
  format: string
}

// Convert image to WebP format
export async function convertToWebP(
  buffer: Buffer,
  quality: number = 80
): Promise<ConvertedImage> {
  const image = sharp(buffer)
  const metadata = await image.metadata()
  
  const webpBuffer = await image
    .webp({ quality })
    .toBuffer()

  return {
    buffer: webpBuffer,
    width: metadata.width || 0,
    height: metadata.height || 0,
    format: 'webp',
  }
}

// Get image metadata
export async function getImageMetadata(buffer: Buffer) {
  const metadata = await sharp(buffer).metadata()
  return {
    width: metadata.width || 0,
    height: metadata.height || 0,
    format: metadata.format || 'unknown',
  }
}

// Check if file is an image that can be converted
export function isConvertibleImage(mimeType: string): boolean {
  const convertibleTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/tiff',
    'image/bmp',
  ]
  return convertibleTypes.includes(mimeType.toLowerCase())
}

// Resize image if needed (optional)
export async function resizeImage(
  buffer: Buffer,
  maxWidth: number = 1920,
  maxHeight: number = 1080
): Promise<Buffer> {
  const image = sharp(buffer)
  const metadata = await image.metadata()

  if (
    (metadata.width && metadata.width > maxWidth) ||
    (metadata.height && metadata.height > maxHeight)
  ) {
    return image
      .resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toBuffer()
  }

  return buffer
}

// Generate thumbnail
export async function generateThumbnail(
  buffer: Buffer,
  width: number = 300,
  height: number = 300
): Promise<Buffer> {
  return sharp(buffer)
    .resize(width, height, {
      fit: 'cover',
      position: 'center',
    })
    .webp({ quality: 70 })
    .toBuffer()
}
