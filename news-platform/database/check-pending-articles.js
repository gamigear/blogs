const { Pool } = require('pg');

async function checkPendingArticles() {
  const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
  });
  
  try {
    // Check all articles with pending_review status
    const pendingArticles = await pool.query(`
      SELECT 
        a.id, 
        a.title, 
        a.slug,
        a.status, 
        a.created_at,
        au.name as author_name,
        c.name as category_name
      FROM articles a 
      LEFT JOIN authors au ON a.author_id = au.id 
      LEFT JOIN categories c ON a.category_id = c.id
      WHERE a.status = 'pending_review'
      ORDER BY a.created_at DESC
    `);
    
    console.log('📋 Bài viết chờ duyệt (pending_review):');
    console.log('=' .repeat(80));
    
    if (pendingArticles.rows.length === 0) {
      console.log('Không có bài viết nào chờ duyệt.');
    } else {
      pendingArticles.rows.forEach((article, index) => {
        console.log(`\n${index + 1}. [ID: ${article.id}] ${article.title}`);
        console.log(`   Tác giả: ${article.author_name || 'N/A'}`);
        console.log(`   Danh mục: ${article.category_name || 'N/A'}`);
        console.log(`   Slug: ${article.slug}`);
        console.log(`   Ngày tạo: ${article.created_at}`);
      });
    }
    
    console.log('\n' + '=' .repeat(80));
    console.log(`Tổng cộng: ${pendingArticles.rows.length} bài viết chờ duyệt`);
    
    // Also show article counts by status
    const statusCounts = await pool.query(`
      SELECT status, COUNT(*) as count 
      FROM articles 
      GROUP BY status 
      ORDER BY status
    `);
    
    console.log('\n📊 Thống kê bài viết theo trạng thái:');
    statusCounts.rows.forEach(row => {
      console.log(`   ${row.status}: ${row.count} bài`);
    });
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await pool.end();
  }
}

checkPendingArticles();
