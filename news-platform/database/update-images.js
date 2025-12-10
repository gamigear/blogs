const path = require('path');
const { Client } = require(path.join(__dirname, '../frontend/node_modules/pg'));

const images = [
  '/attractive-businesswoman-holding-meeting-min.jpg',
  '/business-concept-with-team-close-up-min.jpg',
  '/business-woman-talking-conversation-outdoor-min.jpg',
  '/businesswomen-discussing-paperwork-together-against-railing-business-people-concept-min.jpg',
  '/group-asia-young-creative-people-smart-casual-wear-discussing-business-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-office-coworker-teamwork-concept-min.jpg',
  '/portrait-close-up-smart-attractive-asian-business-female-smile-with-confident-leadership-modern-office-background-min.jpg',
  '/workers-considering-term-agreement-min.jpg',
  '/working-meeting-asian-colleagues-min.jpg'
];

async function updateImages() {
  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    // Get all articles
    const { rows: articles } = await client.query('SELECT id FROM articles ORDER BY id');
    
    // Update each article with a random image
    for (const article of articles) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      await client.query(
        'UPDATE articles SET featured_image = $1 WHERE id = $2',
        [randomImage, article.id]
      );
    }
    
    console.log(`✓ Updated ${articles.length} articles with random images`);
    console.log('\n✅ Done!');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

updateImages();
