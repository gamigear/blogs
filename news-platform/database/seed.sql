-- News Platform Seed Data
-- Run after schema.sql

-- ============================================
-- INSERT DEFAULT CATEGORY
-- ============================================
INSERT INTO categories (name, slug, description, is_default) VALUES
    ('Chung', 'chung', 'Danh mục mặc định cho các bài viết chưa phân loại', TRUE),
    ('Công nghệ', 'cong-nghe', 'Tin tức về công nghệ, phần mềm, AI', FALSE),
    ('Kinh doanh', 'kinh-doanh', 'Tin tức kinh tế, startup, đầu tư', FALSE),
    ('Đời sống', 'doi-song', 'Phong cách sống, sức khỏe, du lịch', FALSE),
    ('Thể thao', 'the-thao', 'Tin tức thể thao trong và ngoài nước', FALSE),
    ('Giải trí', 'giai-tri', 'Phim ảnh, âm nhạc, nghệ thuật', FALSE),
    ('Khoa học', 'khoa-hoc', 'Khám phá khoa học, vũ trụ, môi trường', FALSE)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- INSERT AUTHORS
-- ============================================
INSERT INTO authors (name, email, slug, bio) VALUES
    ('Nguyễn Văn A', 'nguyenvana@example.com', 'nguyen-van-a', 'Chuyên gia công nghệ với 10 năm kinh nghiệm trong lĩnh vực AI và Machine Learning'),
    ('Trần Thị B', 'tranthib@example.com', 'tran-thi-b', 'Nhà báo kinh tế, cựu biên tập viên Forbes Vietnam'),
    ('Lê Văn C', 'levanc@example.com', 'le-van-c', 'Blogger về phong cách sống và phát triển bản thân'),
    ('Phạm Thị D', 'phamthid@example.com', 'pham-thi-d', 'Phóng viên thể thao, chuyên mục bóng đá quốc tế'),
    ('Hoàng Văn E', 'hoangvane@example.com', 'hoang-van-e', 'Nhà nghiên cứu khoa học, tiến sĩ vật lý thiên văn')
ON CONFLICT (email) DO NOTHING;

-- ============================================
-- INSERT SAMPLE USERS
-- ============================================
INSERT INTO users (username, email, display_name, role, trust_level) VALUES
    ('admin', 'admin@example.com', 'Administrator', 'admin', 4),
    ('editor1', 'editor1@example.com', 'Biên tập viên 1', 'editor', 3),
    ('moderator1', 'moderator1@example.com', 'Moderator 1', 'moderator', 3),
    ('contributor1', 'contributor1@example.com', 'Cộng tác viên 1', 'contributor', 2),
    ('user1', 'user1@example.com', 'Người dùng 1', 'reader', 1),
    ('newuser', 'newuser@example.com', 'Người dùng mới', 'reader', 0)
ON CONFLICT (email) DO NOTHING;

-- ============================================
-- INSERT TAGS
-- ============================================
INSERT INTO tags (name, slug) VALUES
    ('AI', 'ai'),
    ('Startup', 'startup'),
    ('Remote Work', 'remote-work'),
    ('Blockchain', 'blockchain'),
    ('Bóng đá', 'bong-da'),
    ('Sức khỏe', 'suc-khoe'),
    ('Du lịch', 'du-lich'),
    ('Đầu tư', 'dau-tu')
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- INSERT SAMPLE ARTICLES
-- ============================================
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, source_type, published_at, reading_time) VALUES
    (
        'AI đang thay đổi thế giới như thế nào',
        'ai-thay-doi-the-gioi',
        'Trí tuệ nhân tạo đang tạo ra những thay đổi lớn trong mọi lĩnh vực từ y tế đến giáo dục.',
        '# AI đang thay đổi thế giới

Trí tuệ nhân tạo (AI) không còn là khái niệm xa vời. Từ ChatGPT đến các hệ thống tự động hóa, AI đang len lỏi vào mọi ngóc ngách của cuộc sống.

## Ứng dụng trong Y tế

AI đang giúp các bác sĩ chẩn đoán bệnh chính xác hơn, phát hiện ung thư sớm qua hình ảnh X-quang.

## Giáo dục thông minh

Các nền tảng học tập cá nhân hóa sử dụng AI để điều chỉnh nội dung phù hợp với từng học sinh.

## Tương lai

Dự báo đến 2030, AI sẽ đóng góp 15.7 nghìn tỷ USD vào GDP toàn cầu.',
        (SELECT id FROM categories WHERE slug = 'cong-nghe'),
        (SELECT id FROM authors WHERE slug = 'nguyen-van-a'),
        'published',
        'editorial',
        NOW() - INTERVAL '2 days',
        5
    ),
    (
        'Startup Việt Nam: Cơ hội và thách thức 2024',
        'startup-viet-nam-2024',
        'Hệ sinh thái startup Việt Nam đang phát triển mạnh mẽ với nhiều cơ hội mới.',
        '# Startup Việt Nam 2024

Năm 2024 đánh dấu sự phục hồi của hệ sinh thái startup Việt Nam sau giai đoạn khó khăn.

## Các lĩnh vực tiềm năng

- **Fintech**: Thanh toán số, cho vay P2P
- **Edtech**: Giáo dục trực tuyến
- **Healthtech**: Y tế số
- **Agritech**: Nông nghiệp công nghệ cao

## Thách thức

Thiếu vốn đầu tư giai đoạn sau (Series B, C) vẫn là rào cản lớn nhất.',
        (SELECT id FROM categories WHERE slug = 'kinh-doanh'),
        (SELECT id FROM authors WHERE slug = 'tran-thi-b'),
        'published',
        'editorial',
        NOW() - INTERVAL '1 day',
        4
    ),
    (
        'Xu hướng làm việc từ xa: Tương lai của công việc',
        'xu-huong-lam-viec-tu-xa',
        'Remote work đang trở thành xu hướng không thể đảo ngược trong thế giới việc làm.',
        '# Làm việc từ xa - Xu hướng tất yếu

Sau đại dịch, làm việc từ xa đã trở thành tiêu chuẩn mới cho nhiều ngành nghề.

## Lợi ích

1. Tiết kiệm thời gian di chuyển
2. Cân bằng công việc - cuộc sống tốt hơn
3. Giảm chi phí văn phòng cho doanh nghiệp

## Thách thức

- Khó duy trì văn hóa công ty
- Vấn đề giao tiếp và phối hợp
- Ranh giới công việc - cá nhân mờ nhạt

## Giải pháp

Mô hình hybrid (kết hợp) đang được nhiều công ty áp dụng thành công.',
        (SELECT id FROM categories WHERE slug = 'doi-song'),
        (SELECT id FROM authors WHERE slug = 'le-van-c'),
        'published',
        'editorial',
        NOW() - INTERVAL '12 hours',
        6
    ),
    (
        'Blockchain và tương lai của tài chính',
        'blockchain-tuong-lai-tai-chinh',
        'Công nghệ blockchain đang định hình lại ngành tài chính toàn cầu.',
        '# Blockchain - Cuộc cách mạng tài chính

Blockchain không chỉ là Bitcoin. Công nghệ này đang thay đổi cách chúng ta giao dịch và lưu trữ dữ liệu.

## DeFi - Tài chính phi tập trung

DeFi cho phép vay, cho vay, giao dịch mà không cần ngân hàng trung gian.

## NFT và quyền sở hữu số

NFT đang tạo ra thị trường mới cho nghệ thuật số và collectibles.

## Quy định pháp lý

Các quốc gia đang dần hoàn thiện khung pháp lý cho crypto và blockchain.',
        (SELECT id FROM categories WHERE slug = 'cong-nghe'),
        (SELECT id FROM authors WHERE slug = 'nguyen-van-a'),
        'published',
        'editorial',
        NOW() - INTERVAL '3 days',
        7
    ),
    (
        'Bí quyết quản lý thời gian hiệu quả',
        'bi-quyet-quan-ly-thoi-gian',
        'Những phương pháp đã được chứng minh giúp bạn làm việc năng suất hơn.',
        '# Quản lý thời gian hiệu quả

Thời gian là tài sản quý giá nhất. Học cách quản lý nó sẽ thay đổi cuộc sống của bạn.

## Phương pháp Pomodoro

Làm việc 25 phút, nghỉ 5 phút. Đơn giản nhưng hiệu quả.

## Ma trận Eisenhower

Phân loại công việc theo mức độ quan trọng và khẩn cấp.

## Time blocking

Chia ngày thành các khối thời gian cố định cho từng loại công việc.

## Loại bỏ xao nhãng

- Tắt thông báo điện thoại
- Sử dụng app chặn website
- Tạo không gian làm việc riêng',
        (SELECT id FROM categories WHERE slug = 'doi-song'),
        (SELECT id FROM authors WHERE slug = 'le-van-c'),
        'published',
        'editorial',
        NOW() - INTERVAL '5 days',
        5
    ),
    (
        'Việt Nam vô địch AFF Cup 2024',
        'viet-nam-vo-dich-aff-cup-2024',
        'Đội tuyển Việt Nam xuất sắc giành chức vô địch AFF Cup sau trận chung kết kịch tính.',
        '# Việt Nam vô địch AFF Cup 2024

Đội tuyển Việt Nam đã có màn trình diễn xuất sắc để giành chức vô địch AFF Cup 2024.

## Hành trình đến ngôi vô địch

- Vòng bảng: 3 trận thắng, 1 hòa
- Bán kết: Thắng Indonesia 3-2 (tổng)
- Chung kết: Thắng Thái Lan 2-1

## Người hùng

Tiền đạo Nguyễn Tiến Linh với 5 bàn thắng trong giải đấu.

## Ý nghĩa

Đây là chức vô địch AFF Cup thứ 3 trong lịch sử bóng đá Việt Nam.',
        (SELECT id FROM categories WHERE slug = 'the-thao'),
        (SELECT id FROM authors WHERE slug = 'pham-thi-d'),
        'published',
        'editorial',
        NOW() - INTERVAL '6 hours',
        4
    )
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- INSERT SAMPLE COMMUNITY POSTS
-- ============================================
INSERT INTO community_posts (title, content, user_id, status) VALUES
    (
        'Chia sẻ kinh nghiệm học lập trình',
        'Mình muốn chia sẻ một số kinh nghiệm học lập trình hiệu quả cho người mới bắt đầu:

1. **Chọn một ngôn ngữ và stick với nó**: Đừng nhảy qua nhảy lại giữa các ngôn ngữ
2. **Thực hành mỗi ngày**: Dù chỉ 30 phút cũng tốt hơn không làm gì
3. **Làm project thực tế**: Học qua làm là cách tốt nhất
4. **Tham gia cộng đồng**: Hỏi đáp, chia sẻ kiến thức

Các bạn có kinh nghiệm gì khác không?',
        (SELECT id FROM users WHERE username = 'contributor1'),
        'approved'
    ),
    (
        'Hỏi về career path trong ngành IT',
        'Mình đang phân vân giữa Frontend và Backend. Các anh chị có thể cho mình lời khuyên được không?

Background: Mình học CNTT năm 3, thích cả design lẫn logic.

Cảm ơn mọi người!',
        (SELECT id FROM users WHERE username = 'user1'),
        'approved'
    ),
    (
        'Review khóa học Data Science',
        'Mình vừa hoàn thành khóa Data Science trên Coursera. Đây là review chi tiết:

**Ưu điểm:**
- Nội dung bài bản, từ cơ bản đến nâng cao
- Có project thực hành
- Certificate được công nhận

**Nhược điểm:**
- Một số phần hơi outdated
- Cần background toán tốt

Rating: 4/5 ⭐',
        (SELECT id FROM users WHERE username = 'contributor1'),
        'approved'
    ),
    (
        'Tìm mentor học Machine Learning',
        'Mình đang tự học ML và cần một mentor để hướng dẫn. Có ai có kinh nghiệm và sẵn sàng giúp đỡ không ạ?',
        (SELECT id FROM users WHERE username = 'newuser'),
        'pending'
    )
ON CONFLICT DO NOTHING;

-- ============================================
-- INSERT SAMPLE MODERATION QUEUE ITEMS
-- ============================================
INSERT INTO moderation_queue (resource_type, resource_id, reason, status, priority) 
SELECT 
    'community_post',
    id,
    'New community post requires review',
    'pending',
    'normal'
FROM community_posts 
WHERE status = 'pending';

-- ============================================
-- INSERT SAMPLE AUDIT LOGS
-- ============================================
INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address) VALUES
    (
        (SELECT id FROM users WHERE username = 'admin'),
        'user.create',
        'user',
        (SELECT id FROM users WHERE username = 'editor1'),
        '{"role": "editor"}',
        '127.0.0.1'
    ),
    (
        (SELECT id FROM users WHERE username = 'editor1'),
        'article.publish',
        'article',
        (SELECT id FROM articles WHERE slug = 'ai-thay-doi-the-gioi'),
        '{"previous_status": "pending_review"}',
        '127.0.0.1'
    );
