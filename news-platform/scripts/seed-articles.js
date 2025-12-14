const { Client } = require('pg');

const DATABASE_URL = 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

// Images from R2
const images = [
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/attractive-businesswoman-holding-meeting-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/business-concept-with-team-close-up-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/business-woman-talking-conversation-outdoor-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/businesswomen-discussing-paperwork-together-against-railing-business-people-concept-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/group-asia-young-creative-people-smart-casual-wear-discussing-business-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-office-coworker-teamwork-concept-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/portrait-close-up-smart-attractive-asian-business-female-smile-with-confident-leadership-modern-office-background-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/workers-considering-term-agreement-min.webp',
  'https://pub-b581b7bec14c432a8cc28d969fc3fb1a.r2.dev/static/working-meeting-asian-colleagues-min.webp',
];

// Articles by category
const articlesByCategory = {
  1: [ // Thời sự
    { title: 'Thủ tướng chủ trì hội nghị phát triển kinh tế vùng Đông Nam Bộ', excerpt: 'Hội nghị tập trung thảo luận các giải pháp thúc đẩy phát triển kinh tế - xã hội vùng Đông Nam Bộ trong giai đoạn mới.' },
    { title: 'Quốc hội thông qua Luật Đất đai sửa đổi với nhiều điểm mới', excerpt: 'Luật Đất đai sửa đổi được thông qua với nhiều quy định mới về bồi thường, hỗ trợ tái định cư.' },
    { title: 'Việt Nam và Nhật Bản nâng cấp quan hệ Đối tác Chiến lược', excerpt: 'Hai nước nhất trí nâng cấp quan hệ lên Đối tác Chiến lược toàn diện vì hòa bình và thịnh vượng.' },
    { title: 'Bão số 5 đổ bộ vào miền Trung, hàng nghìn người sơ tán', excerpt: 'Các tỉnh miền Trung đang khẩn trương di dời người dân vùng nguy hiểm trước khi bão đổ bộ.' },
    { title: 'Hà Nội công bố quy hoạch thành phố đến năm 2045', excerpt: 'Quy hoạch mới định hướng Hà Nội trở thành thành phố thông minh, hiện đại, có bản sắc.' },
  ],
  2: [ // Kinh doanh
    { title: 'VN-Index vượt mốc 1.300 điểm, thanh khoản đạt kỷ lục', excerpt: 'Thị trường chứng khoán Việt Nam ghi nhận phiên giao dịch sôi động với thanh khoản vượt 30.000 tỷ đồng.' },
    { title: 'Ngân hàng Nhà nước giữ nguyên lãi suất điều hành', excerpt: 'NHNN quyết định giữ nguyên các mức lãi suất điều hành để hỗ trợ tăng trưởng kinh tế.' },
    { title: 'Vingroup công bố kế hoạch đầu tư 5 tỷ USD vào AI', excerpt: 'Tập đoàn Vingroup sẽ đầu tư mạnh vào lĩnh vực trí tuệ nhân tạo trong 5 năm tới.' },
    { title: 'Xuất khẩu Việt Nam đạt 350 tỷ USD trong 11 tháng', excerpt: 'Kim ngạch xuất khẩu tiếp tục tăng trưởng mạnh, xuất siêu đạt kỷ lục mới.' },
    { title: 'Giá vàng trong nước lập đỉnh mới, vượt 80 triệu đồng', excerpt: 'Giá vàng SJC tiếp tục tăng mạnh theo đà tăng của giá vàng thế giới.' },
  ],
  3: [ // Công nghệ
    { title: 'Apple ra mắt iPhone 16 với chip A18 mạnh mẽ nhất', excerpt: 'iPhone 16 series được trang bị chip A18 Pro với hiệu năng vượt trội và khả năng AI tiên tiến.' },
    { title: 'OpenAI công bố GPT-5 với khả năng suy luận vượt trội', excerpt: 'GPT-5 đánh dấu bước tiến lớn trong lĩnh vực AI với khả năng hiểu và suy luận như con người.' },
    { title: 'Việt Nam đặt mục tiêu 100.000 kỹ sư bán dẫn năm 2030', excerpt: 'Chính phủ phê duyệt chiến lược phát triển ngành công nghiệp bán dẫn quốc gia.' },
    { title: 'Tesla ra mắt robot Optimus thế hệ 2 làm việc nhà', excerpt: 'Robot hình người Optimus Gen 2 có thể thực hiện các công việc gia đình phức tạp.' },
    { title: '5G đã phủ sóng 95% dân số Việt Nam', excerpt: 'Các nhà mạng hoàn thành mục tiêu phủ sóng 5G trên toàn quốc trước thời hạn.' },
  ],
  4: [ // Thể thao
    { title: 'Đội tuyển Việt Nam thắng đậm 4-0 trước Indonesia', excerpt: 'Chiến thắng ấn tượng giúp đội tuyển Việt Nam củng cố ngôi đầu bảng AFF Cup.' },
    { title: 'Nguyễn Thị Oanh giành HCV marathon SEA Games', excerpt: 'Nữ hoàng điền kinh Việt Nam tiếp tục khẳng định đẳng cấp với tấm HCV marathon.' },
    { title: 'Real Madrid vô địch Champions League lần thứ 16', excerpt: 'Los Blancos đánh bại Dortmund trong trận chung kết để nâng cao chiếc cúp vô địch.' },
    { title: 'Hoàng Nam vào tứ kết ATP 250 tại Singapore', excerpt: 'Tay vợt số 1 Việt Nam có chiến thắng lịch sử trước đối thủ hạng 50 thế giới.' },
    { title: 'VBA 2024: Saigon Heat vô địch sau loạt overtime', excerpt: 'Trận chung kết kịch tính kết thúc với chiến thắng của Saigon Heat sau 3 hiệp phụ.' },
  ],
  5: [ // Giải trí
    { title: 'Phim Việt Mai cán mốc 500 tỷ đồng doanh thu', excerpt: 'Bộ phim của đạo diễn Trấn Thành tiếp tục phá kỷ lục phòng vé Việt Nam.' },
    { title: 'BTS thông báo tái hợp sau nghĩa vụ quân sự', excerpt: 'Nhóm nhạc Hàn Quốc xác nhận sẽ comeback vào năm 2025 sau khi hoàn thành nghĩa vụ.' },
    { title: 'Sơn Tùng M-TP ra mắt MV mới đạt 10 triệu view', excerpt: 'MV mới của nam ca sĩ nhanh chóng leo top trending YouTube Việt Nam.' },
    { title: 'Liên hoan phim Cannes: Phim Việt được đề cử Cành Cọ Vàng', excerpt: 'Lần đầu tiên một bộ phim Việt Nam được đề cử giải thưởng cao nhất tại Cannes.' },
    { title: 'Taylor Swift công bố tour diễn châu Á có Việt Nam', excerpt: 'Nữ ca sĩ sẽ biểu diễn tại TP.HCM trong khuôn khổ Eras Tour vào năm 2025.' },
  ],
  6: [ // Sức khỏe
    { title: 'Việt Nam phát triển thành công vaccine ung thư phổi', excerpt: 'Vaccine điều trị ung thư phổi do Việt Nam nghiên cứu bước vào giai đoạn thử nghiệm lâm sàng.' },
    { title: 'Cách phòng tránh bệnh cúm mùa đông hiệu quả', excerpt: 'Các chuyên gia y tế khuyến cáo biện pháp phòng ngừa cúm trong mùa lạnh.' },
    { title: '10 thực phẩm tốt cho tim mạch nên ăn hàng ngày', excerpt: 'Chế độ ăn uống khoa học giúp bảo vệ sức khỏe tim mạch và phòng ngừa bệnh tật.' },
    { title: 'Yoga và thiền định: Bí quyết giảm stress hiệu quả', excerpt: 'Nghiên cứu mới chứng minh lợi ích của yoga và thiền định đối với sức khỏe tinh thần.' },
    { title: 'Cảnh báo: Tăng đột biến ca mắc sốt xuất huyết', excerpt: 'Bộ Y tế khuyến cáo người dân tăng cường các biện pháp phòng chống sốt xuất huyết.' },
  ],
  7: [ // Đời sống
    { title: 'Xu hướng sống tối giản: Bớt đồ đạc, thêm hạnh phúc', excerpt: 'Phong cách sống minimalism đang được nhiều người trẻ Việt Nam áp dụng.' },
    { title: 'Bí quyết cân bằng công việc và gia đình', excerpt: 'Các chuyên gia chia sẻ cách quản lý thời gian hiệu quả cho người bận rộn.' },
    { title: 'Thú cưng: Người bạn đồng hành giúp giảm cô đơn', excerpt: 'Nghiên cứu cho thấy nuôi thú cưng có tác động tích cực đến sức khỏe tinh thần.' },
    { title: 'Mẹo tiết kiệm chi tiêu cho gia đình trẻ', excerpt: 'Hướng dẫn quản lý tài chính cá nhân hiệu quả trong thời kỳ lạm phát.' },
    { title: 'Làm thế nào để xây dựng thói quen đọc sách', excerpt: 'Những cách đơn giản giúp bạn duy trì thói quen đọc sách mỗi ngày.' },
  ],
  8: [ // Giáo dục
    { title: 'Điểm chuẩn đại học 2024: Nhiều ngành tăng mạnh', excerpt: 'Điểm chuẩn các ngành hot như Công nghệ thông tin, Y khoa tiếp tục tăng cao.' },
    { title: 'Học sinh Việt Nam giành 6 HCV Olympic Toán quốc tế', excerpt: 'Đoàn Việt Nam đạt thành tích xuất sắc nhất trong lịch sử tham dự IMO.' },
    { title: 'Chương trình giáo dục STEM được triển khai toàn quốc', excerpt: 'Bộ GD&ĐT đưa giáo dục STEM vào chương trình chính khóa từ năm học mới.' },
    { title: 'Du học Nhật Bản: Cơ hội và thách thức', excerpt: 'Hướng dẫn chi tiết cho học sinh muốn du học tại xứ sở hoa anh đào.' },
    { title: 'Trường học thông minh: Xu hướng giáo dục tương lai', excerpt: 'Công nghệ AI và IoT đang thay đổi cách dạy và học trong trường học.' },
  ],
  9: [ // Du lịch
    { title: 'Phú Quốc lọt top 10 đảo đẹp nhất thế giới 2024', excerpt: 'Tạp chí du lịch nổi tiếng bình chọn Phú Quốc là điểm đến hấp dẫn nhất Đông Nam Á.' },
    { title: 'Khám phá Sapa mùa lúa chín vàng óng', excerpt: 'Tháng 9-10 là thời điểm lý tưởng để ngắm ruộng bậc thang Sapa đẹp nhất năm.' },
    { title: 'Hội An - Điểm đến lãng mạn nhất Đông Nam Á', excerpt: 'Phố cổ Hội An tiếp tục được bình chọn là điểm đến lãng mạn hàng đầu khu vực.' },
    { title: '5 điểm cắm trại đẹp nhất gần Hà Nội', excerpt: 'Gợi ý những địa điểm camping lý tưởng cho chuyến đi cuối tuần.' },
    { title: 'Việt Nam đón 15 triệu lượt khách quốc tế năm 2024', excerpt: 'Ngành du lịch phục hồi mạnh mẽ, vượt mục tiêu đề ra từ đầu năm.' },
  ],
  10: [ // Xe
    { title: 'VinFast VF 9 chính thức bàn giao cho khách hàng', excerpt: 'Mẫu SUV điện cỡ lớn của VinFast bắt đầu được giao đến tay khách hàng Việt Nam.' },
    { title: 'Toyota Vios 2024 ra mắt với nhiều nâng cấp', excerpt: 'Phiên bản mới của mẫu sedan bán chạy nhất Việt Nam có gì đặc biệt?' },
    { title: 'Xe máy điện VinFast Vento S bán chạy nhất', excerpt: 'Mẫu xe máy điện của VinFast dẫn đầu doanh số phân khúc xe điện hai bánh.' },
    { title: 'Giá xăng giảm mạnh, về mức thấp nhất 2 năm', excerpt: 'Giá xăng RON 95 giảm xuống dưới 20.000 đồng/lít sau nhiều lần điều chỉnh.' },
    { title: 'Hyundai Santa Fe 2024 có giá từ 1,2 tỷ đồng', excerpt: 'Mẫu SUV 7 chỗ thế hệ mới của Hyundai chính thức ra mắt thị trường Việt Nam.' },
  ],
};

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

function generateContent(title, excerpt) {
  return `<p>${excerpt}</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
<h2>Chi tiết</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>`;
}

async function seedArticles() {
  const client = new Client({ connectionString: DATABASE_URL });
  
  try {
    await client.connect();
    console.log('Connected to database');
    
    const adminId = 3; // dteanh
    let totalCreated = 0;
    
    for (const [categoryId, articles] of Object.entries(articlesByCategory)) {
      console.log(`\nCreating articles for category ${categoryId}...`);
      
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const slug = generateSlug(article.title);
        const content = generateContent(article.title, article.excerpt);
        const image = images[i % images.length];
        const readingTime = Math.floor(Math.random() * 5) + 3;
        const viewCount = Math.floor(Math.random() * 1000) + 100;
        
        await client.query(`
          INSERT INTO articles (title, slug, excerpt, content, featured_image, category_id, author_id, status, reading_time, view_count, published_at, created_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, 'published', $8, $9, NOW(), NOW())
        `, [article.title, slug, article.excerpt, content, image, categoryId, adminId, readingTime, viewCount]);
        
        totalCreated++;
        console.log(`  ✓ ${article.title}`);
      }
    }
    
    console.log(`\n✅ Created ${totalCreated} articles`);
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

seedArticles();
