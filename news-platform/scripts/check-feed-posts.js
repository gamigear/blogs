const { Client } = require('pg');

const DATABASE_URL = 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

async function checkFeedPosts() {
  const client = new Client({ connectionString: DATABASE_URL });
  
  try {
    await client.connect();
    console.log('Connected to database\n');
    
    // Get recent feed posts
    const posts = await client.query(`
      SELECT id, title, content, images, created_at 
      FROM feed_posts 
      ORDER BY created_at DESC 
      LIMIT 5
    `);
    
    console.log('Recent feed posts:');
    for (const post of posts.rows) {
      console.log('\n---');
      console.log('ID:', post.id);
      console.log('Title:', post.title);
      console.log('Content:', post.content?.substring(0, 100));
      console.log('Images:', post.images);
      console.log('Created:', post.created_at);
    }
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

checkFeedPosts();
