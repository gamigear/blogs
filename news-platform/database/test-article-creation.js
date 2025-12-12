const { Pool } = require('pg');

async function testArticleCreation() {
  const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
  });
  
  try {
    // Get first category
    const categories = await pool.query('SELECT id, name FROM categories LIMIT 1');
    const categoryId = categories.rows[0]?.id || 1;
    console.log('Using category:', categories.rows[0]?.name);
    
    // Get test user
    const users = await pool.query("SELECT id, display_name, role FROM users WHERE email = 'testuser@example.com'");
    const testUser = users.rows[0];
    console.log('Test user:', testUser);
    
    // Simulate creating an article as a regular user
    // First, check if author exists for this user
    let authorId = null;
    const existingAuthor = await pool.query("SELECT id FROM authors WHERE email = 'testuser@example.com'");
    
    if (existingAuthor.rows.length > 0) {
      authorId = existingAuthor.rows[0].id;
      console.log('Author already exists, ID:', authorId);
    } else {
      // Create author
      const newAuthor = await pool.query(
        "INSERT INTO authors (name, email, slug) VALUES ($1, $2, $3) RETURNING id",
        [testUser.display_name, 'testuser@example.com', 'test-user']
      );
      authorId = newAuthor.rows[0].id;
      console.log('Created author with ID:', authorId);
    }
    
    // Create article with pending_review status (simulating regular user)
    const articleResult = await pool.query(`
      INSERT INTO articles (
        title, slug, excerpt, content, category_id, author_id, 
        status, reading_time, seo
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9
      )
      RETURNING id, slug, status
    `, [
      'Bài viết test từ user thường',
      'bai-viet-test-tu-user-thuong-' + Date.now(),
      'Đây là bài viết test được tạo bởi user thường',
      '<p>Nội dung bài viết test. Bài viết này sẽ cần được admin duyệt trước khi xuất bản.</p>',
      categoryId,
      authorId,
      'pending_review', // Regular user -> pending_review
      1,
      JSON.stringify({})
    ]);
    
    console.log('\n✅ Article created successfully!');
    console.log('Article ID:', articleResult.rows[0].id);
    console.log('Article slug:', articleResult.rows[0].slug);
    console.log('Article status:', articleResult.rows[0].status);
    
    // Check pending articles
    const pendingArticles = await pool.query(`
      SELECT a.id, a.title, a.status, au.name as author_name 
      FROM articles a 
      LEFT JOIN authors au ON a.author_id = au.id 
      WHERE a.status = 'pending_review'
      ORDER BY a.created_at DESC
      LIMIT 5
    `);
    
    console.log('\n📋 Pending articles for review:');
    pendingArticles.rows.forEach(article => {
      console.log(`  - [${article.id}] ${article.title} (by ${article.author_name})`);
    });
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await pool.end();
  }
}

testArticleCreation();
