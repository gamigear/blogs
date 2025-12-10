import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const samplePosts = [
  {
    title: 'Đánh giá iPhone 15 Pro Max sau 3 tháng sử dụng',
    content: `Sau 3 tháng sử dụng iPhone 15 Pro Max, mình xin chia sẻ một số trải nghiệm thực tế.

**Thiết kế và cảm giác cầm nắm:**
Khung titanium nhẹ hơn đáng kể so với thép không gỉ của các đời trước. Cảm giác cầm nắm thoải mái hơn nhiều, đặc biệt khi sử dụng một tay.

**Camera:**
Hệ thống camera 48MP cho chất lượng ảnh xuất sắc. Chế độ chụp đêm cải thiện rõ rệt. Zoom quang 5x rất hữu ích khi chụp từ xa.

**Hiệu năng:**
Chip A17 Pro mạnh mẽ, chơi game nặng vẫn mượt mà. Nhiệt độ máy được kiểm soát tốt hơn sau các bản cập nhật.

**Pin:**
Pin sử dụng được cả ngày với cường độ cao. Sạc nhanh 20W vẫn hơi chậm so với Android.

Tổng kết: Đây là chiếc iPhone tốt nhất mình từng sử dụng!`,
    excerpt: 'Chia sẻ trải nghiệm thực tế sau 3 tháng sử dụng iPhone 15 Pro Max với khung titanium mới.',
  },
  {
    title: 'Hướng dẫn setup workspace làm việc tại nhà hiệu quả',
    content: `Làm việc tại nhà đã trở thành xu hướng, và việc có một workspace tốt là rất quan trọng.

**1. Bàn làm việc:**
- Chọn bàn có chiều cao phù hợp (72-76cm)
- Mặt bàn rộng ít nhất 120cm
- Có thể cân nhắc bàn nâng hạ điện

**2. Ghế ngồi:**
- Đầu tư ghế công thái học
- Có tựa lưng và tựa đầu
- Điều chỉnh được độ cao

**3. Màn hình:**
- Màn hình 27 inch trở lên
- Độ phân giải 4K nếu có thể
- Arm màn hình để điều chỉnh linh hoạt

**4. Ánh sáng:**
- Đèn bàn LED điều chỉnh được
- Tránh ánh sáng chiếu trực tiếp vào màn hình

**5. Phụ kiện:**
- Bàn phím cơ
- Chuột ergonomic
- Webcam chất lượng cao

Đầu tư đúng cách sẽ giúp bạn làm việc hiệu quả và bảo vệ sức khỏe!`,
    excerpt: 'Hướng dẫn chi tiết cách setup workspace làm việc tại nhà với các thiết bị cần thiết.',
  },
  {
    title: 'So sánh MacBook Air M3 vs MacBook Pro M3 - Nên mua máy nào?',
    content: `Cả hai đều sử dụng chip M3 mới nhất, vậy nên chọn máy nào?

**MacBook Air M3:**
- Thiết kế mỏng nhẹ (1.24kg)
- Không quạt tản nhiệt
- Pin 18 giờ
- Giá từ 27.99 triệu

**MacBook Pro M3:**
- Thiết kế chắc chắn hơn
- Có quạt tản nhiệt
- Màn hình ProMotion 120Hz
- Giá từ 39.99 triệu

**Nên chọn Air nếu:**
- Công việc văn phòng, lập trình nhẹ
- Di chuyển nhiều
- Ngân sách hạn chế

**Nên chọn Pro nếu:**
- Render video, 3D
- Cần hiệu năng bền bỉ
- Làm việc với màn hình ngoài nhiều

Cá nhân mình chọn Air M3 vì đủ dùng và nhẹ hơn nhiều!`,
    excerpt: 'Phân tích chi tiết sự khác biệt giữa MacBook Air M3 và MacBook Pro M3 để giúp bạn chọn đúng.',
  },
  {
    title: 'Review tai nghe Sony WH-1000XM5 - Vua chống ồn',
    content: `Sony WH-1000XM5 được đánh giá là tai nghe chống ồn tốt nhất hiện nay.

**Thiết kế:**
- Nhẹ hơn đời trước (250g)
- Đệm tai mềm mại
- Gập gọn trong hộp đựng

**Chống ồn:**
- ANC xuất sắc, tốt nhất phân khúc
- 8 microphone thu âm
- Chế độ Ambient Sound tự nhiên

**Chất âm:**
- Bass sâu, không bị bùng
- Mid trong trẻo
- Treble chi tiết

**Pin:**
- 30 giờ sử dụng
- Sạc nhanh 3 phút = 3 giờ nghe

**Nhược điểm:**
- Giá cao (8.5 triệu)
- Không gập phẳng như XM4

Đây là lựa chọn hoàn hảo cho ai cần tai nghe chống ồn cao cấp!`,
    excerpt: 'Đánh giá chi tiết tai nghe Sony WH-1000XM5 với khả năng chống ồn hàng đầu.',
  },
  {
    title: 'Kinh nghiệm mua xe ô tô điện VinFast VF8 sau 6 tháng',
    content: `Mình đã sử dụng VinFast VF8 được 6 tháng, chia sẻ một số kinh nghiệm thực tế.

**Ưu điểm:**
- Thiết kế đẹp, nội thất rộng rãi
- Tăng tốc mạnh mẽ (0-100km/h trong 5.5s)
- Chi phí sạc rẻ hơn xăng nhiều
- Hệ thống ADAS hỗ trợ lái tốt

**Nhược điểm:**
- Trạm sạc chưa phủ rộng
- Phần mềm còn nhiều lỗi
- Tiêu hao pin thực tế cao hơn công bố

**Chi phí vận hành:**
- Sạc tại nhà: ~500k/tháng
- Bảo dưỡng: Miễn phí 2 năm đầu
- Thuê pin: 2.9 triệu/tháng

**Lời khuyên:**
- Nên lắp sạc tại nhà
- Kiểm tra trạm sạc trên đường đi
- Cập nhật phần mềm thường xuyên

Nhìn chung, xe điện là tương lai và VF8 là lựa chọn tốt!`,
    excerpt: 'Chia sẻ kinh nghiệm thực tế sau 6 tháng sử dụng xe điện VinFast VF8.',
  },
  {
    title: 'Top 5 ứng dụng AI hữu ích nhất năm 2024',
    content: `AI đang thay đổi cách chúng ta làm việc. Đây là 5 ứng dụng AI mình dùng hàng ngày.

**1. ChatGPT:**
- Trả lời câu hỏi, viết content
- Hỗ trợ code, debug
- Dịch thuật đa ngôn ngữ

**2. Midjourney:**
- Tạo hình ảnh từ text
- Chất lượng cao, sáng tạo
- Phù hợp cho designer

**3. Notion AI:**
- Tóm tắt văn bản
- Viết email, báo cáo
- Tích hợp sẵn trong Notion

**4. GitHub Copilot:**
- Gợi ý code thông minh
- Hỗ trợ nhiều ngôn ngữ
- Tăng năng suất lập trình

**5. Grammarly:**
- Sửa lỗi ngữ pháp
- Cải thiện văn phong
- Hỗ trợ tiếng Anh

Hãy thử và cho mình biết bạn thích ứng dụng nào nhất!`,
    excerpt: 'Giới thiệu 5 ứng dụng AI hữu ích nhất giúp tăng năng suất làm việc trong năm 2024.',
  },
  {
    title: 'Hướng dẫn đầu tư chứng khoán cho người mới bắt đầu',
    content: `Đầu tư chứng khoán không khó như bạn nghĩ. Đây là hướng dẫn cơ bản cho người mới.

**Bước 1: Mở tài khoản**
- Chọn công ty chứng khoán uy tín
- Chuẩn bị CCCD và tài khoản ngân hàng
- Đăng ký online hoặc tại quầy

**Bước 2: Nạp tiền**
- Chuyển khoản vào tài khoản chứng khoán
- Số tiền tối thiểu: 1 triệu đồng

**Bước 3: Học cơ bản**
- Hiểu về cổ phiếu, trái phiếu
- Đọc báo cáo tài chính
- Theo dõi tin tức thị trường

**Bước 4: Bắt đầu đầu tư**
- Chọn cổ phiếu blue-chip đầu tiên
- Đầu tư số tiền nhỏ để học
- Không all-in một mã

**Lưu ý quan trọng:**
- Chỉ đầu tư tiền nhàn rỗi
- Đa dạng hóa danh mục
- Kiên nhẫn, không FOMO

Chúc bạn đầu tư thành công!`,
    excerpt: 'Hướng dẫn từng bước để bắt đầu đầu tư chứng khoán cho người mới.',
  },
  {
    title: 'Review Samsung Galaxy S24 Ultra - Flagship Android đáng mua nhất',
    content: `Samsung Galaxy S24 Ultra là flagship Android tốt nhất hiện tại. Đây là review chi tiết.

**Màn hình:**
- 6.8 inch Dynamic AMOLED 2X
- Độ sáng 2600 nits
- Gorilla Armor chống chói

**Camera:**
- 200MP chính, zoom quang 5x
- Chụp đêm xuất sắc
- Quay video 8K

**Hiệu năng:**
- Snapdragon 8 Gen 3
- RAM 12GB, ROM 256GB-1TB
- Chơi game mượt mà

**S Pen:**
- Tích hợp sẵn
- Độ trễ thấp
- Nhiều tính năng AI

**Galaxy AI:**
- Circle to Search
- Live Translate
- Chat Assist

**Pin:**
- 5000mAh
- Sạc nhanh 45W
- Sử dụng cả ngày

Giá 33.99 triệu - Đáng đồng tiền bát gạo!`,
    excerpt: 'Đánh giá chi tiết Samsung Galaxy S24 Ultra với Galaxy AI và camera 200MP.',
  },
  {
    title: 'Cách tối ưu Windows 11 để chơi game mượt hơn',
    content: `Windows 11 có thể được tối ưu để chơi game tốt hơn. Đây là các bước mình đã làm.

**1. Bật Game Mode:**
- Settings > Gaming > Game Mode
- Bật ON

**2. Tắt VBS:**
- Tìm "Core isolation"
- Tắt Memory integrity
- Restart máy

**3. Cập nhật driver:**
- GPU driver mới nhất
- Chipset driver
- BIOS nếu cần

**4. Tối ưu nguồn điện:**
- Power plan: High Performance
- Hoặc Ultimate Performance

**5. Tắt ứng dụng nền:**
- Task Manager > Startup
- Disable các app không cần

**6. Cài đặt trong game:**
- Fullscreen thay vì Borderless
- Tắt V-Sync nếu có G-Sync/FreeSync
- Điều chỉnh đồ họa phù hợp

**Kết quả:**
- FPS tăng 10-20%
- Giảm stuttering
- Nhiệt độ ổn định hơn

Thử ngay và cho mình biết kết quả nhé!`,
    excerpt: 'Hướng dẫn tối ưu Windows 11 để tăng FPS và trải nghiệm chơi game mượt mà hơn.',
  },
  {
    title: 'Kinh nghiệm du lịch Đà Nẵng 4 ngày 3 đêm tự túc',
    content: `Vừa đi Đà Nẵng về, chia sẻ kinh nghiệm cho ai cần.

**Ngày 1: Đà Nẵng**
- Sáng: Check-in khách sạn, ăn bánh mì Bà Lan
- Chiều: Bãi biển Mỹ Khê
- Tối: Cầu Rồng phun lửa (T7, CN)

**Ngày 2: Bà Nà Hills**
- Cả ngày tại Bà Nà
- Cầu Vàng, làng Pháp
- Vé: 900k/người

**Ngày 3: Hội An**
- Sáng: Phố cổ Hội An
- Trưa: Cao lầu, mì Quảng
- Tối: Thả đèn hoa đăng

**Ngày 4: Ngũ Hành Sơn**
- Sáng: Leo núi, thăm chùa
- Trưa: Hải sản Bé Mặn
- Chiều: Bay về

**Chi phí (2 người):**
- Vé máy bay: 3 triệu
- Khách sạn: 1.5 triệu
- Ăn uống: 2 triệu
- Vé tham quan: 2 triệu
- Di chuyển: 500k
- Tổng: ~9 triệu

Tips: Đặt vé Bà Nà trước, đi sớm tránh đông!`,
    excerpt: 'Chia sẻ lịch trình và chi phí du lịch Đà Nẵng 4 ngày 3 đêm tự túc chi tiết.',
  },
];

export async function GET() {
  try {
    // Get user ID 1 (admin)
    const userId = 1;

    // Insert sample posts
    for (const post of samplePosts) {
      await query(
        `INSERT INTO community_posts (title, content, excerpt, user_id, status, created_at)
         VALUES ($1, $2, $3, $4, 'approved', NOW() - INTERVAL '${Math.floor(Math.random() * 30)} days')`,
        [post.title, post.content, post.excerpt, userId]
      );
    }

    // Update user posts_created count
    await query(
      'UPDATE users SET posts_created = posts_created + $1 WHERE id = $2',
      [samplePosts.length, userId]
    );

    return NextResponse.json({
      success: true,
      message: `Created ${samplePosts.length} sample posts`,
    });
  } catch (error: any) {
    console.error('Error creating sample posts:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
