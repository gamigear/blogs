require('dotenv').config({ path: './frontend/.env.local' });
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function resetFeedPosts() {
  const client = await pool.connect();
  
  try {
    console.log('🗑️  Xóa tất cả bài Fact cũ...');
    
    // Xóa likes và bookmarks trước
    await client.query('DELETE FROM post_likes');
    await client.query('DELETE FROM post_bookmarks');
    
    // Xóa tất cả community_posts (feed posts)
    await client.query('DELETE FROM community_posts');
    
    console.log('✅ Đã xóa bài cũ');
    
    // Lấy danh sách hình ảnh từ articles (featured_image)
    const mediaResult = await client.query(`
      SELECT DISTINCT featured_image as url FROM articles 
      WHERE featured_image IS NOT NULL 
        AND featured_image != ''
        AND featured_image NOT ILIKE '%logo%' 
        AND featured_image NOT ILIKE '%favicon%'
        AND featured_image NOT ILIKE '%icon%'
      ORDER BY url
      LIMIT 30
    `);
    
    const mediaUrls = mediaResult.rows.map(r => r.url).filter(Boolean);
    console.log(`📷 Tìm thấy ${mediaUrls.length} hình ảnh từ articles`);
    
    if (mediaUrls.length === 0) {
      console.log('⚠️  Không có hình ảnh trong media. Sử dụng hình mặc định.');
    }
    
    // Lấy user admin hoặc user đầu tiên
    const userResult = await client.query(`
      SELECT id, display_name, username FROM users 
      WHERE role = 'admin' OR trust_level >= 2
      ORDER BY id ASC LIMIT 1
    `);
    
    if (userResult.rows.length === 0) {
      console.log('❌ Không tìm thấy user để tạo bài');
      return;
    }
    
    const user = userResult.rows[0];
    console.log(`👤 Sử dụng user: ${user.display_name || user.username}`);
    
    // Nội dung mẫu cho 10 bài Fact
    const factPosts = [
      {
        title: 'Bạn có biết?',
        content: 'Mỗi ngày, não bộ của bạn xử lý khoảng 70.000 suy nghĩ. Hãy đảm bảo rằng phần lớn trong số đó là tích cực! 🧠✨',
      },
      {
        title: 'Fact thú vị',
        content: 'Mật ong là thực phẩm duy nhất không bao giờ hỏng. Các nhà khảo cổ đã tìm thấy mật ong 3000 năm tuổi trong các lăng mộ Ai Cập và nó vẫn có thể ăn được! 🍯',
      },
      {
        title: 'Khoa học hay',
        content: 'Nếu bạn có thể gấp một tờ giấy 42 lần, nó sẽ đủ dày để chạm tới Mặt Trăng! Đó là sức mạnh của cấp số nhân. 📄🌙',
      },
      {
        title: 'Thiên nhiên kỳ diệu',
        content: 'Cây tre có thể mọc cao tới 91cm chỉ trong một ngày, khiến nó trở thành loài thực vật phát triển nhanh nhất thế giới! 🎋',
      },
      {
        title: 'Vũ trụ bao la',
        content: 'Có nhiều ngôi sao trong vũ trụ hơn số hạt cát trên tất cả các bãi biển Trái Đất. Ước tính có khoảng 200-400 tỷ ngôi sao chỉ riêng trong dải Ngân Hà! ⭐',
      },
      {
        title: 'Động vật thú vị',
        content: 'Bạch tuộc có 3 trái tim và máu màu xanh! Hai tim bơm máu đến mang, một tim bơm máu đến phần còn lại của cơ thể. 🐙💙',
      },
      {
        title: 'Công nghệ',
        content: 'Chiếc điện thoại thông minh của bạn có sức mạnh tính toán gấp hàng triệu lần so với tất cả các máy tính NASA sử dụng để đưa con người lên Mặt Trăng năm 1969! 📱🚀',
      },
      {
        title: 'Lịch sử',
        content: 'Cleopatra sống gần thời đại iPhone hơn là thời xây dựng Kim tự tháp Giza. Kim tự tháp được xây khoảng 2560 TCN, Cleopatra sống 69-30 TCN! 🏛️',
      },
      {
        title: 'Cơ thể người',
        content: 'Cơ thể bạn tạo ra đủ nhiệt trong 30 phút để đun sôi nửa gallon nước. Và trong suốt cuộc đời, bạn sẽ đi bộ khoảng 100.000 dặm! 🚶‍♂️🔥',
      },
      {
        title: 'Đại dương bí ẩn',
        content: 'Chúng ta đã khám phá nhiều bề mặt Mặt Trăng và Sao Hỏa hơn là đáy đại dương của chính Trái Đất. Hơn 80% đại dương vẫn chưa được khám phá! 🌊🔍',
      },
    ];
    
    console.log('\n📝 Tạo 10 bài Fact mới...\n');
    
    for (let i = 0; i < factPosts.length; i++) {
      const post = factPosts[i];
      
      // Chọn 1-3 hình ngẫu nhiên cho mỗi bài
      const numImages = Math.floor(Math.random() * 3) + 1;
      const selectedImages = [];
      
      if (mediaUrls.length > 0) {
        const shuffled = [...mediaUrls].sort(() => Math.random() - 0.5);
        for (let j = 0; j < Math.min(numImages, shuffled.length); j++) {
          selectedImages.push(shuffled[j]);
        }
      }
      
      const result = await client.query(`
        INSERT INTO community_posts (
          user_id, title, content, images, status, 
          likes_count, comments_count, shares_count, created_at
        ) VALUES ($1, $2, $3, $4, 'approved', $5, 0, 0, NOW() - INTERVAL '${i} hours')
        RETURNING id
      `, [
        user.id,
        post.title,
        post.content,
        JSON.stringify(selectedImages),
        Math.floor(Math.random() * 50) + 10 // Random likes 10-60
      ]);
      
      console.log(`✅ Bài ${i + 1}: "${post.title}" - ${selectedImages.length} hình`);
    }
    
    console.log('\n🎉 Hoàn thành! Đã tạo 10 bài Fact mới.');
    
  } catch (error) {
    console.error('❌ Lỗi:', error.message);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

resetFeedPosts();
