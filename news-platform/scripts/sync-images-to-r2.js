const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// R2 Configuration
const R2_ACCOUNT_ID = 'd340befc5dd856fb010d57d60168fbcb';
const R2_ACCESS_KEY_ID = '958c430d9de7b42f67ce2f1c57c95f2c';
const R2_SECRET_ACCESS_KEY = 'd022f243a8b6c09ed64a3dc681bfa60a3cab1ab57dff3b2ac217fb29fbbe215e';
const R2_BUCKET_NAME = 'euro';
const R2_PUBLIC_URL = 'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const PUBLIC_DIR = path.join(__dirname, '../frontend/public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Store mapping of old paths to new R2 URLs
const imageMapping = {};

async function getAllImages(dir, baseDir = dir) {
  const images = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      images.push(...await getAllImages(fullPath, baseDir));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        images.push({ fullPath, relativePath });
      }
    }
  }
  
  return images;
}

async function convertToWebp(inputPath) {
  const buffer = fs.readFileSync(inputPath);
  return sharp(buffer)
    .webp({ quality: 80 })
    .toBuffer();
}

async function uploadToR2(buffer, key, contentType = 'image/webp') {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });
  
  await s3Client.send(command);
  return `${R2_PUBLIC_URL}/${key}`;
}

async function syncImages() {
  console.log('🔍 Scanning images in frontend/public...\n');
  
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images\n`);
  
  for (const { fullPath, relativePath } of images) {
    try {
      const ext = path.extname(relativePath).toLowerCase();
      const baseName = relativePath.replace(/\\/g, '/').replace(ext, '');
      
      // Skip if already webp
      let webpBuffer;
      let newKey;
      
      if (ext === '.webp') {
        webpBuffer = fs.readFileSync(fullPath);
        newKey = `static/${relativePath.replace(/\\/g, '/')}`;
      } else {
        webpBuffer = await convertToWebp(fullPath);
        newKey = `static/${baseName}.webp`;
      }
      
      const r2Url = await uploadToR2(webpBuffer, newKey);
      
      // Store mapping
      const oldPath = `/${relativePath.replace(/\\/g, '/')}`;
      imageMapping[oldPath] = r2Url;
      
      console.log(`✅ ${relativePath} -> ${r2Url}`);
    } catch (err) {
      console.error(`❌ Failed to process ${relativePath}:`, err.message);
    }
  }
  
  // Save mapping to file
  fs.writeFileSync(
    path.join(__dirname, 'image-mapping.json'),
    JSON.stringify(imageMapping, null, 2)
  );
  
  console.log('\n📝 Image mapping saved to scripts/image-mapping.json');
  console.log('\n✨ Done! Total images synced:', Object.keys(imageMapping).length);
}

syncImages().catch(console.error);
