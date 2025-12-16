const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../frontend/.env.local') });
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// 10 bài viết mới với nội dung phong phú
const newArticles = [
  {
    title: "Cách mạng AI trong ngành y tế Việt Nam",
    content: `Trí tuệ nhân tạo đang mở ra kỷ nguyên mới cho ngành y tế Việt Nam. Từ chẩn đoán hình ảnh đến dự đoán bệnh tật, AI đang giúp các bác sĩ đưa ra quyết định chính xác hơn.

Các bệnh viện lớn như Bạch Mai, Chợ Rẫy đã bắt đầu ứng dụng AI trong việc phân tích X-quang và CT scan. Kết quả cho thấy độ chính xác lên đến 95%, giúp phát hiện sớm các bệnh nguy hiểm như ung thư phổi.

Ngoài ra, các startup y tế Việt Nam cũng đang phát triển các ứng dụng AI để hỗ trợ người dân theo dõi sức khỏe tại nhà, giảm tải cho hệ thống y tế công.`,
    excerpt: "AI đang cách mạng hóa ngành y tế Việt Nam với độ chính xác chẩn đoán lên đến 95%."
  },
  {
    title: "Top 10 địa điểm du lịch hot nhất 2025",
    content: `Năm 2025 hứa hẹn là năm bùng nổ của du lịch Việt Nam với nhiều điểm đến hấp dẫn. Đứng đầu danh sách là Phú Quốc với hệ sinh thái biển đảo tuyệt đẹp.

Tiếp theo là Đà Lạt - thành phố ngàn hoa với khí hậu mát mẻ quanh năm. Sapa cũng thu hút đông đảo du khách với ruộng bậc thang và văn hóa dân tộc độc đáo.

Các điểm đến mới nổi như Quy Nhơn, Ninh Bình, Hà Giang cũng đang trở thành lựa chọn yêu thích của giới trẻ yêu thích khám phá.`,
    excerpt: "Khám phá những điểm đến du lịch hấp dẫn nhất Việt Nam năm 2025."
  },
  {
    title: "Bí quyết đầu tư chứng khoán cho người mới",
    content: `Đầu tư chứng khoán không còn xa lạ với người Việt Nam. Tuy nhiên, để thành công, nhà đầu tư mới cần nắm vững những nguyên tắc cơ bản.

Đầu tiên, hãy bắt đầu với số vốn nhỏ và học cách phân tích cơ bản. Đừng đầu tư theo đám đông hay tin đồn. Thay vào đó, hãy nghiên cứu kỹ báo cáo tài chính của doanh nghiệp.

Đa dạng hóa danh mục đầu tư là chìa khóa để giảm thiểu rủi ro. Hãy phân bổ vốn vào nhiều ngành nghề khác nhau và luôn giữ một phần tiền mặt để tận dụng cơ hội.`,
    excerpt: "Hướng dẫn đầu tư chứng khoán an toàn và hiệu quả cho người mới bắt đầu."
  },
  {
    title: "Xu hướng thời trang bền vững 2025",
    content: `Thời trang bền vững đang trở thành xu hướng chủ đạo trong năm 2025. Người tiêu dùng ngày càng quan tâm đến nguồn gốc và quy trình sản xuất quần áo.

Các thương hiệu Việt Nam như Kilomet109, Metiseko đang tiên phong trong việc sử dụng vải tái chế và quy trình sản xuất thân thiện môi trường.

Phong cách minimalist với tủ đồ capsule cũng đang được ưa chuộng, giúp giảm lãng phí và tạo phong cách cá nhân độc đáo.`,
    excerpt: "Khám phá xu hướng thời trang bền vững và thân thiện môi trường năm 2025."
  },
  {
    title: "Công nghệ blockchain trong nông nghiệp",
    content: `Blockchain không chỉ dành cho tiền điện tử. Công nghệ này đang được ứng dụng trong nông nghiệp Việt Nam để truy xuất nguồn gốc sản phẩm.

Người tiêu dùng có thể quét mã QR để biết chính xác nông sản được trồng ở đâu, thu hoạch khi nào và qua những khâu chế biến nào. Điều này tạo niềm tin và nâng cao giá trị sản phẩm.

Các hợp tác xã ở Đồng Tháp, Lâm Đồng đã áp dụng thành công blockchain cho xoài, cà phê, mang lại giá bán cao hơn 20-30%.`,
    excerpt: "Blockchain giúp nông sản Việt Nam tăng giá trị và tạo niềm tin với người tiêu dùng."
  },
  {
    title: "Hướng dẫn chăm sóc sức khỏe tinh thần",
    content: `Sức khỏe tinh thần quan trọng không kém sức khỏe thể chất. Trong cuộc sống hiện đại đầy áp lực, việc chăm sóc tâm lý trở nên cần thiết hơn bao giờ hết.

Thiền định 10-15 phút mỗi ngày có thể giúp giảm stress đáng kể. Các ứng dụng như Headspace, Calm đang được nhiều người Việt sử dụng.

Ngoài ra, việc duy trì các mối quan hệ xã hội, tập thể dục đều đặn và ngủ đủ giấc cũng là những yếu tố quan trọng để có tinh thần khỏe mạnh.`,
    excerpt: "Những phương pháp đơn giản để chăm sóc sức khỏe tinh thần mỗi ngày."
  },
  {
    title: "Startup công nghệ Việt Nam gọi vốn thành công",
    content: `Năm 2025 chứng kiến nhiều startup Việt Nam gọi vốn thành công từ các quỹ đầu tư quốc tế. Lĩnh vực fintech và edtech dẫn đầu về số lượng deal.

MoMo, VNPay tiếp tục mở rộng với các vòng gọi vốn hàng trăm triệu USD. Các startup giáo dục như Elsa, Topica cũng thu hút sự quan tâm lớn.

Hệ sinh thái startup Việt Nam đang trưởng thành với nhiều founder có kinh nghiệm quốc tế quay về xây dựng doanh nghiệp.`,
    excerpt: "Điểm danh những startup Việt Nam gọi vốn thành công trong năm 2025."
  },
  {
    title: "Ẩm thực Việt Nam chinh phục thế giới",
    content: `Phở, bánh mì, bún chả Việt Nam đang được yêu thích trên toàn thế giới. Các nhà hàng Việt Nam mọc lên khắp nơi từ New York đến Tokyo.

Đặc biệt, phở Việt Nam đã được CNN bình chọn là một trong những món súp ngon nhất thế giới. Bánh mì cũng lọt top sandwich ngon nhất theo đánh giá của nhiều tạp chí ẩm thực.

Các đầu bếp Việt Nam như Christine Hà đang góp phần quảng bá ẩm thực nước nhà ra thế giới thông qua các chương trình truyền hình và sách nấu ăn.`,
    excerpt: "Ẩm thực Việt Nam ngày càng được yêu thích và công nhận trên thế giới."
  },
  {
    title: "Năng lượng mặt trời - Giải pháp cho tương lai",
    content: `Việt Nam đang đẩy mạnh phát triển năng lượng mặt trời để đảm bảo an ninh năng lượng và bảo vệ môi trường. Nhiều tỉnh miền Trung và miền Nam có tiềm năng lớn.

Các dự án điện mặt trời áp mái đang được khuyến khích với chính sách mua điện hấp dẫn. Nhiều hộ gia đình và doanh nghiệp đã lắp đặt và tiết kiệm đáng kể chi phí điện.

Dự kiến đến năm 2030, năng lượng tái tạo sẽ chiếm 30% tổng sản lượng điện của Việt Nam, góp phần giảm phát thải carbon.`,
    excerpt: "Năng lượng mặt trời đang trở thành giải pháp năng lượng bền vững cho Việt Nam."
  },
  {
    title: "Kỹ năng cần thiết cho thị trường lao động 2025",
    content: `Thị trường lao động đang thay đổi nhanh chóng với sự phát triển của công nghệ. Để cạnh tranh, người lao động cần trang bị những kỹ năng mới.

Kỹ năng số như phân tích dữ liệu, lập trình cơ bản, sử dụng AI tools đang được các nhà tuyển dụng ưu tiên. Ngoài ra, kỹ năng mềm như giao tiếp, làm việc nhóm, tư duy phản biện cũng rất quan trọng.

Học tập suốt đời trở thành yêu cầu bắt buộc. Các nền tảng học trực tuyến như Coursera, Udemy cung cấp nhiều khóa học chất lượng với chi phí hợp lý.`,
    excerpt: "Những kỹ năng quan trọng nhất để thành công trong thị trường lao động 2025."
  }
];

function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function seed10Articles() {
  const client = await pool.connect();
  
  try {
    // Lấy admin user
    const adminResult = await client.query("SELECT id, username FROM users WHERE role = 'admin' LIMIT 1");
    if (adminResult.rows.length === 0) {
      console.log('❌ Không tìm thấy admin user');
      return;
    }
    const admin = adminResult.rows[0];
    console.log(`✅ Admin: ${admin.username} (ID: ${admin.id})`);
    
    // Lấy author_id của admin
    const authorResult = await client.query("SELECT id FROM authors WHERE email = (SELECT email FROM users WHERE id = $1)", [admin.id]);
    let authorId = null;
    if (authorResult.rows.length > 0) {
      authorId = authorResult.rows[0].id;
      console.log(`✅ Author ID: ${authorId}`);
    } else {
      // Tạo author mới cho admin
      const createAuthor = await client.query(
        "INSERT INTO authors (name, email, slug) SELECT display_name, email, username FROM users WHERE id = $1 RETURNING id",
        [admin.id]
      );
      authorId = createAuthor.rows[0].id;
      console.log(`✅ Tạo author mới ID: ${authorId}`);
    }
    
    // Lấy media files (không lấy logo)
    const mediaResult = await client.query(`
      SELECT id, url, filename 
      FROM media_files 
      WHERE LOWER(filename) NOT LIKE '%logo%' 
        AND LOWER(original_filename) NOT LIKE '%logo%'
        AND mime_type LIKE 'image/%'
      ORDER BY id
    `);
    const mediaFiles = mediaResult.rows;
    console.log(`✅ Tìm thấy ${mediaFiles.length} media files (không bao gồm logo)`);
    
    if (mediaFiles.length === 0) {
      console.log('⚠️ Không có media files, bài viết sẽ không có ảnh');
    } else {
      console.log('📷 Media files:');
      mediaFiles.forEach(m => console.log(`   - ${m.filename}: ${m.url}`));
    }
    
    // Lấy categories
    const categoryResult = await client.query("SELECT id, name FROM categories");
    const categories = categoryResult.rows;
    console.log(`✅ Tìm thấy ${categories.length} categories`);
    
    // Tạo 10 bài viết mới
    console.log('\n📝 Tạo 10 bài viết mới...\n');
    
    let inserted = 0;
    for (let i = 0; i < newArticles.length; i++) {
      const article = newArticles[i];
      const slug = generateSlug(article.title) + '-' + Date.now().toString().slice(-6) + Math.random().toString(36).slice(-3);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      
      // Lấy ảnh từ media (xoay vòng)
      let featuredImage = null;
      if (mediaFiles.length > 0) {
        const mediaIndex = i % mediaFiles.length;
        featuredImage = mediaFiles[mediaIndex].url;
      }
      
      await client.query(
        `INSERT INTO articles (title, slug, content, excerpt, author_id, category_id, featured_image, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'published', NOW(), NOW(), NOW())`,
        [article.title, slug, article.content, article.excerpt, authorId, randomCategory.id, featuredImage]
      );
      
      console.log(`✅ ${i + 1}. ${article.title.slice(0, 50)}...`);
      console.log(`   📁 Category: ${randomCategory.name}`);
      console.log(`   🖼️ Image: ${featuredImage ? 'Có' : 'Không'}`);
      inserted++;
    }
    
    console.log(`\n🎉 Đã tạo thành công ${inserted} bài viết mới!`);
    
  } catch (error) {
    console.error('❌ Lỗi:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

seed10Articles();
