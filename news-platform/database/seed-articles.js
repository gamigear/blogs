const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../frontend/.env.local') });
const { Pool } = require('pg');

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Found' : 'Not found');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const articles = [
  { title: "Xu hướng công nghệ AI năm 2025", content: "Trí tuệ nhân tạo đang thay đổi mọi ngành công nghiệp. Từ y tế đến tài chính, AI đang được ứng dụng rộng rãi để tối ưu hóa quy trình và nâng cao hiệu quả công việc.", excerpt: "AI đang định hình lại tương lai công nghệ." },
  { title: "Bí quyết sống khỏe mỗi ngày", content: "Một lối sống lành mạnh bắt đầu từ những thói quen nhỏ. Ngủ đủ giấc, ăn uống cân bằng và tập thể dục đều đặn là nền tảng cho sức khỏe tốt.", excerpt: "Những thói quen đơn giản cho cuộc sống khỏe mạnh." },
  { title: "Thị trường chứng khoán Việt Nam 2025", content: "Thị trường chứng khoán Việt Nam đang có những bước phát triển mạnh mẽ với sự tham gia của nhiều nhà đầu tư trong và ngoài nước.", excerpt: "Triển vọng thị trường chứng khoán năm mới." },
  { title: "Du lịch Đà Nẵng - Điểm đến hấp dẫn", content: "Đà Nẵng với bãi biển đẹp, ẩm thực phong phú và con người thân thiện đang trở thành điểm đến yêu thích của du khách trong và ngoài nước.", excerpt: "Khám phá vẻ đẹp thành phố biển Đà Nẵng." },
  { title: "Giáo dục STEM cho trẻ em", content: "Giáo dục STEM giúp trẻ phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề từ sớm, chuẩn bị cho tương lai công nghệ.", excerpt: "Tầm quan trọng của giáo dục STEM." },
  { title: "Xe điện - Tương lai giao thông xanh", content: "Xe điện đang dần thay thế xe xăng truyền thống, góp phần giảm ô nhiễm môi trường và tiết kiệm chi phí nhiên liệu.", excerpt: "Xu hướng xe điện tại Việt Nam." },
  { title: "Bóng đá Việt Nam vươn tầm châu lục", content: "Đội tuyển Việt Nam đang có những bước tiến vượt bậc trên đấu trường quốc tế, mang lại niềm tự hào cho người hâm mộ.", excerpt: "Thành tích ấn tượng của bóng đá Việt Nam." },
  { title: "Ẩm thực đường phố Sài Gòn", content: "Sài Gòn nổi tiếng với nền ẩm thực đường phố đa dạng, từ bánh mì, phở đến các món ăn vặt độc đáo.", excerpt: "Khám phá thiên đường ẩm thực Sài Gòn." },
  { title: "Startup Việt Nam và cơ hội phát triển", content: "Hệ sinh thái startup Việt Nam đang phát triển mạnh mẽ với nhiều dự án sáng tạo thu hút đầu tư từ các quỹ lớn.", excerpt: "Tiềm năng của startup Việt Nam." },
  { title: "Yoga và thiền định cho người bận rộn", content: "Yoga và thiền định giúp giảm stress, cải thiện sức khỏe tinh thần và thể chất cho những người có lịch làm việc bận rộn.", excerpt: "Cân bằng cuộc sống với yoga." },
  { title: "Blockchain và tương lai tài chính", content: "Công nghệ blockchain đang cách mạng hóa ngành tài chính với tính minh bạch, bảo mật và phi tập trung.", excerpt: "Blockchain thay đổi ngành tài chính." },
  { title: "Nghệ thuật cà phê Việt Nam", content: "Cà phê Việt Nam không chỉ là thức uống mà còn là văn hóa, từ cà phê phin truyền thống đến các quán cà phê hiện đại.", excerpt: "Văn hóa cà phê độc đáo của Việt Nam." },
  { title: "Phát triển bền vững và môi trường", content: "Phát triển bền vững đang trở thành ưu tiên hàng đầu của các doanh nghiệp và chính phủ trong bối cảnh biến đổi khí hậu.", excerpt: "Hướng tới tương lai xanh và bền vững." },
  { title: "Thời trang Việt Nam trên bản đồ thế giới", content: "Các nhà thiết kế Việt Nam đang ghi dấu ấn trên sàn diễn quốc tế với những bộ sưu tập độc đáo mang đậm bản sắc dân tộc.", excerpt: "Thời trang Việt vươn ra thế giới." },
  { title: "Công nghệ 5G và cuộc sống số", content: "Mạng 5G mở ra kỷ nguyên mới cho IoT, xe tự lái và nhiều ứng dụng công nghệ cao khác.", excerpt: "5G thay đổi cách chúng ta kết nối." },
  { title: "Kinh tế số Việt Nam", content: "Kinh tế số đang đóng góp ngày càng lớn vào GDP Việt Nam với sự phát triển của thương mại điện tử và fintech.", excerpt: "Tiềm năng kinh tế số tại Việt Nam." },
  { title: "Bảo tồn di sản văn hóa", content: "Việt Nam đang nỗ lực bảo tồn các di sản văn hóa vật thể và phi vật thể được UNESCO công nhận.", excerpt: "Gìn giữ di sản cho thế hệ mai sau." },
  { title: "Thể thao điện tử - Ngành công nghiệp tỷ đô", content: "Esports đang phát triển mạnh mẽ tại Việt Nam với nhiều game thủ chuyên nghiệp và giải đấu lớn.", excerpt: "Sự bùng nổ của thể thao điện tử." },
  { title: "Nông nghiệp công nghệ cao", content: "Ứng dụng công nghệ vào nông nghiệp giúp tăng năng suất, chất lượng sản phẩm và thu nhập cho nông dân.", excerpt: "Cách mạng trong nông nghiệp Việt Nam." },
  { title: "Sức khỏe tâm thần trong xã hội hiện đại", content: "Nhận thức về sức khỏe tâm thần đang được nâng cao, giúp nhiều người tìm được sự hỗ trợ cần thiết.", excerpt: "Chăm sóc sức khỏe tâm thần." },
  { title: "Phim Việt Nam chinh phục khán giả", content: "Điện ảnh Việt Nam đang có những bước tiến đáng kể với nhiều bộ phim chất lượng thu hút đông đảo khán giả.", excerpt: "Sự trỗi dậy của phim Việt." },
  { title: "Năng lượng tái tạo tại Việt Nam", content: "Điện gió và điện mặt trời đang được đầu tư mạnh mẽ, góp phần đảm bảo an ninh năng lượng quốc gia.", excerpt: "Phát triển năng lượng sạch." },
  { title: "Thương mại điện tử bùng nổ", content: "Mua sắm online trở thành xu hướng với sự phát triển của các sàn thương mại điện tử lớn.", excerpt: "Cách mạng mua sắm trực tuyến." },
  { title: "Kiến trúc xanh và đô thị thông minh", content: "Các công trình xanh và đô thị thông minh đang được xây dựng để cải thiện chất lượng sống.", excerpt: "Xây dựng thành phố của tương lai." },
  { title: "Âm nhạc Việt Nam đương đại", content: "Âm nhạc Việt Nam đang đa dạng hóa với nhiều thể loại từ pop, rock đến indie và electronic.", excerpt: "Sự phong phú của âm nhạc Việt." },
  { title: "Khởi nghiệp trong lĩnh vực y tế", content: "Healthtech startup đang phát triển với các giải pháp chăm sóc sức khỏe thông minh và tiện lợi.", excerpt: "Công nghệ y tế cho mọi người." },
  { title: "Du lịch sinh thái Việt Nam", content: "Du lịch sinh thái đang thu hút du khách với những trải nghiệm gần gũi thiên nhiên và bảo vệ môi trường.", excerpt: "Khám phá thiên nhiên Việt Nam." },
  { title: "Giáo dục trực tuyến thời đại mới", content: "E-learning đang thay đổi cách học tập với sự linh hoạt và tiếp cận kiến thức từ mọi nơi.", excerpt: "Học tập không giới hạn." },
  { title: "Thực phẩm hữu cơ và sức khỏe", content: "Xu hướng tiêu dùng thực phẩm hữu cơ đang tăng cao khi người dân quan tâm hơn đến sức khỏe.", excerpt: "Ăn sạch sống khỏe." },
  { title: "Công nghệ trong giáo dục", content: "EdTech đang cách mạng hóa giáo dục với các công cụ học tập tương tác và cá nhân hóa.", excerpt: "Công nghệ thay đổi giáo dục." },
  { title: "Thể thao mạo hiểm tại Việt Nam", content: "Các môn thể thao mạo hiểm như leo núi, lặn biển đang thu hút giới trẻ yêu thích khám phá.", excerpt: "Trải nghiệm thể thao cực đoan." },
  { title: "Fintech và thanh toán số", content: "Ví điện tử và thanh toán không tiền mặt đang trở nên phổ biến trong cuộc sống hàng ngày.", excerpt: "Tương lai của thanh toán." },
  { title: "Văn hóa làm việc từ xa", content: "Work from home đang thay đổi cách làm việc truyền thống với nhiều lợi ích và thách thức.", excerpt: "Làm việc linh hoạt thời đại mới." },
  { title: "Nghệ thuật truyền thống Việt Nam", content: "Các loại hình nghệ thuật truyền thống như chèo, tuồng, cải lương đang được bảo tồn và phát huy.", excerpt: "Gìn giữ nghệ thuật dân tộc." },
  { title: "Thị trường bất động sản 2025", content: "Thị trường bất động sản đang có nhiều biến động với các chính sách mới và nhu cầu đa dạng.", excerpt: "Xu hướng bất động sản năm mới." },
  { title: "Sáng tạo nội dung số", content: "Content creator đang trở thành nghề nghiệp hấp dẫn với thu nhập cao từ các nền tảng số.", excerpt: "Kiếm tiền từ sáng tạo nội dung." },
  { title: "Chăm sóc thú cưng chuyên nghiệp", content: "Ngành công nghiệp thú cưng đang phát triển với nhiều dịch vụ chăm sóc cao cấp.", excerpt: "Yêu thương thú cưng đúng cách." },
  { title: "Công nghệ thực tế ảo VR/AR", content: "VR và AR đang mở ra những trải nghiệm mới trong giải trí, giáo dục và công việc.", excerpt: "Thế giới ảo và thực tế tăng cường." },
  { title: "Ẩm thực chay và xu hướng plant-based", content: "Thực phẩm từ thực vật đang được ưa chuộng vì lợi ích sức khỏe và môi trường.", excerpt: "Xu hướng ăn chay hiện đại." },
  { title: "Phát triển kỹ năng mềm", content: "Kỹ năng mềm như giao tiếp, làm việc nhóm ngày càng quan trọng trong môi trường làm việc.", excerpt: "Kỹ năng cần thiết cho thành công." },
  { title: "Thời tiết cực đoan và biến đổi khí hậu", content: "Biến đổi khí hậu đang gây ra nhiều hiện tượng thời tiết cực đoan ảnh hưởng đến cuộc sống.", excerpt: "Ứng phó với biến đổi khí hậu." },
  { title: "Podcast - Xu hướng nghe mới", content: "Podcast đang trở thành kênh giải trí và học tập phổ biến với nội dung đa dạng.", excerpt: "Sự bùng nổ của podcast." },
  { title: "Bảo mật thông tin cá nhân", content: "An ninh mạng và bảo vệ dữ liệu cá nhân đang trở nên quan trọng hơn bao giờ hết.", excerpt: "Bảo vệ thông tin trong thời đại số." },
  { title: "Nghề nghiệp tương lai", content: "Nhiều nghề nghiệp mới đang xuất hiện cùng với sự phát triển của công nghệ và xã hội.", excerpt: "Chuẩn bị cho công việc tương lai." },
  { title: "Văn hóa đọc sách thời đại số", content: "Sách điện tử và audiobook đang thay đổi thói quen đọc sách của người Việt.", excerpt: "Đọc sách trong kỷ nguyên số." },
  { title: "Thể dục thể thao cho mọi lứa tuổi", content: "Tập luyện thể thao đều đặn giúp cải thiện sức khỏe và chất lượng cuộc sống ở mọi độ tuổi.", excerpt: "Vận động để sống khỏe." },
  { title: "Nghệ thuật nhiếp ảnh di động", content: "Smartphone với camera chất lượng cao đang biến mọi người thành nhiếp ảnh gia.", excerpt: "Chụp ảnh đẹp với điện thoại." },
  { title: "Xu hướng làm đẹp tự nhiên", content: "Mỹ phẩm thiên nhiên và chăm sóc da tối giản đang được ưa chuộng.", excerpt: "Làm đẹp an toàn và hiệu quả." },
  { title: "Giao thông công cộng thông minh", content: "Hệ thống giao thông công cộng đang được hiện đại hóa với công nghệ thông minh.", excerpt: "Di chuyển tiện lợi trong thành phố." }
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

async function seedArticles() {
  const client = await pool.connect();
  
  try {
    // Get admin user ID
    const adminResult = await client.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
    if (adminResult.rows.length === 0) {
      console.log('No admin user found');
      return;
    }
    const adminId = adminResult.rows[0].id;
    console.log(`Admin ID: ${adminId}`);
    
    // Get all categories
    const categoryResult = await client.query("SELECT id, name FROM categories");
    if (categoryResult.rows.length === 0) {
      console.log('No categories found');
      return;
    }
    const categories = categoryResult.rows;
    console.log(`Found ${categories.length} categories`);
    
    // Get media files for featured images
    const mediaResult = await client.query("SELECT id, url, filename FROM media_files ORDER BY id");
    const mediaFiles = mediaResult.rows;
    console.log(`Found ${mediaFiles.length} media files`);
    
    // Delete all existing articles
    const deleteResult = await client.query("DELETE FROM articles");
    console.log(`Deleted ${deleteResult.rowCount} existing articles`);
    
    // Insert new articles
    let inserted = 0;
    for (const article of articles) {
      const slug = generateSlug(article.title) + '-' + Date.now().toString().slice(-6) + Math.random().toString(36).slice(-3);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      
      // Get random media for featured image
      let featuredImage = null;
      if (mediaFiles.length > 0) {
        const randomMedia = mediaFiles[Math.floor(Math.random() * mediaFiles.length)];
        featuredImage = randomMedia.url;
      }
      
      await client.query(
        `INSERT INTO articles (title, slug, content, excerpt, author_id, category_id, featured_image, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'published', NOW(), NOW(), NOW())`,
        [article.title, slug, article.content, article.excerpt, adminId, randomCategory.id, featuredImage]
      );
      console.log(`+ ${article.title.slice(0, 40)}... -> ${randomCategory.name} ${featuredImage ? '📷' : ''}`);
      inserted++;
    }
    
    console.log(`\n✅ Created ${inserted} new articles with media images`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

seedArticles();
