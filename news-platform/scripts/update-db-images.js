const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const DATABASE_URL = 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

// Load image mapping
const imageMapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'image-mapping.json'), 'utf-8')
);

async function updateDatabaseImages() {
  const client = new Client({ connectionString: DATABASE_URL });
  
  try {
    await client.connect();
    console.log('Connected to database\n');
    
    // Check articles for local images
    const articles = await client.query(`
      SELECT id, title, featured_image, content 
      FROM articles 
      WHERE featured_image LIKE '/%' 
         OR content LIKE '%src="/%'
         OR content LIKE '%src=''/%'
    `);
    
    console.log(`Found ${articles.rows.length} articles with local images\n`);
    
    for (const article of articles.rows) {
      let updated = false;
      let newFeaturedImage = article.featured_image;
      let newContent = article.content;
      
      // Update featured_image
      if (article.featured_image && article.featured_image.startsWith('/')) {
        for (const [oldPath, newUrl] of Object.entries(imageMapping)) {
          if (article.featured_image === oldPath || 
              article.featured_image.includes(oldPath.slice(1))) {
            newFeaturedImage = newUrl;
            updated = true;
            console.log(`Article ${article.id}: featured_image ${oldPath} -> ${newUrl}`);
            break;
          }
        }
      }
      
      // Update content
      if (article.content) {
        for (const [oldPath, newUrl] of Object.entries(imageMapping)) {
          const patterns = [
            oldPath,
            oldPath.slice(1), // without leading /
          ];
          
          for (const pattern of patterns) {
            if (newContent.includes(pattern)) {
              newContent = newContent.split(pattern).join(newUrl);
              updated = true;
              console.log(`Article ${article.id}: content ${pattern} -> ${newUrl}`);
            }
          }
        }
      }
      
      if (updated) {
        await client.query(
          'UPDATE articles SET featured_image = $1, content = $2 WHERE id = $3',
          [newFeaturedImage, newContent, article.id]
        );
        console.log(`✅ Updated article ${article.id}: ${article.title}\n`);
      }
    }
    
    // Check categories for local images
    const categories = await client.query(`
      SELECT id, name, image 
      FROM categories 
      WHERE image LIKE '/%'
    `);
    
    console.log(`\nFound ${categories.rows.length} categories with local images`);
    
    for (const cat of categories.rows) {
      if (cat.image) {
        for (const [oldPath, newUrl] of Object.entries(imageMapping)) {
          if (cat.image === oldPath || cat.image.includes(oldPath.slice(1))) {
            await client.query(
              'UPDATE categories SET image = $1 WHERE id = $2',
              [newUrl, cat.id]
            );
            console.log(`✅ Updated category ${cat.id}: ${cat.name}`);
            break;
          }
        }
      }
    }
    
    // Check users for local avatars/covers
    const users = await client.query(`
      SELECT id, username, avatar, cover_image 
      FROM users 
      WHERE avatar LIKE '/%' OR cover_image LIKE '/%'
    `);
    
    console.log(`\nFound ${users.rows.length} users with local images`);
    
    for (const user of users.rows) {
      let newAvatar = user.avatar;
      let newCover = user.cover_image;
      let updated = false;
      
      for (const [oldPath, newUrl] of Object.entries(imageMapping)) {
        if (user.avatar && (user.avatar === oldPath || user.avatar.includes(oldPath.slice(1)))) {
          newAvatar = newUrl;
          updated = true;
        }
        if (user.cover_image && (user.cover_image === oldPath || user.cover_image.includes(oldPath.slice(1)))) {
          newCover = newUrl;
          updated = true;
        }
      }
      
      if (updated) {
        await client.query(
          'UPDATE users SET avatar = $1, cover_image = $2 WHERE id = $3',
          [newAvatar, newCover, user.id]
        );
        console.log(`✅ Updated user ${user.id}: ${user.username}`);
      }
    }
    
    console.log('\n✨ Database update complete!');
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

updateDatabaseImages();
