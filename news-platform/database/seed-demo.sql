-- Demo Data: 10 Categories + 50 Articles
-- Run this after schema.sql

-- ============================================
-- CLEAR EXISTING DATA
-- ============================================
TRUNCATE articles, categories, authors RESTART IDENTITY CASCADE;

-- ============================================
-- 10 CATEGORIES
-- ============================================
INSERT INTO categories (name, slug, description, is_default) VALUES
('Thời sự', 'thoi-su', 'Tin tức thời sự trong nước và quốc tế', true),
('Kinh doanh', 'kinh-doanh', 'Tin tức kinh tế, tài chính, doanh nghiệp', false),
('Công nghệ', 'cong-nghe', 'Tin tức công nghệ, khoa học, đổi mới sáng tạo', false),
('Thể thao', 'the-thao', 'Tin tức thể thao trong nước và quốc tế', false),
('Giải trí', 'giai-tri', 'Tin tức giải trí, showbiz, âm nhạc, phim ảnh', false),
('Sức khỏe', 'suc-khoe', 'Tin tức y tế, sức khỏe, đời sống', false),
('Đời sống', 'doi-song', 'Tin tức đời sống, gia đình, xã hội', false),
('Giáo dục', 'giao-duc', 'Tin tức giáo dục, tuyển sinh, học tập', false),
('Du lịch', 'du-lich', 'Tin tức du lịch, khám phá, ẩm thực', false),
('Xe', 'xe', 'Tin tức ô tô, xe máy, giao thông', false);

-- ============================================
-- AUTHORS
-- ============================================
INSERT INTO authors (name, email, slug, bio) VALUES
('Nguyễn Văn An', 'an.nguyen@bobatea.vn', 'nguyen-van-an', 'Phóng viên chuyên mục Thời sự'),
('Trần Thị Bình', 'binh.tran@bobatea.vn', 'tran-thi-binh', 'Biên tập viên Kinh doanh'),
('Lê Minh Cường', 'cuong.le@bobatea.vn', 'le-minh-cuong', 'Chuyên gia Công nghệ'),
('Phạm Hồng Đào', 'dao.pham@bobatea.vn', 'pham-hong-dao', 'Phóng viên Thể thao'),
('Hoàng Thị Em', 'em.hoang@bobatea.vn', 'hoang-thi-em', 'Biên tập viên Giải trí');

-- ============================================
-- 50 ARTICLES
-- ============================================

-- Thời sự (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Thủ tướng chủ trì hội nghị phát triển kinh tế vùng Đông Nam Bộ', 'thu-tuong-chu-tri-hoi-nghi-phat-trien-kinh-te-vung-dong-nam-bo', 'Hội nghị tập trung thảo luận các giải pháp thúc đẩy liên kết vùng và phát triển bền vững.', '## Nội dung chính

Sáng nay, Thủ tướng Chính phủ đã chủ trì Hội nghị phát triển kinh tế vùng Đông Nam Bộ với sự tham dự của lãnh đạo các tỉnh, thành phố trong vùng.

### Các giải pháp được đề xuất

1. Đẩy mạnh liên kết giao thông vùng
2. Phát triển công nghiệp công nghệ cao
3. Thu hút đầu tư nước ngoài chất lượng cao

### Kết luận

Hội nghị đã thống nhất nhiều giải pháp quan trọng để thúc đẩy phát triển kinh tế vùng trong thời gian tới.', 1, 1, 'published', NOW() - INTERVAL '1 hour', true, 15420, 5),

('Quốc hội thông qua Luật Đất đai sửa đổi với nhiều điểm mới quan trọng', 'quoc-hoi-thong-qua-luat-dat-dai-sua-doi', 'Luật mới có hiệu lực từ ngày 1/1/2025 với nhiều thay đổi về quyền sử dụng đất.', '## Những điểm mới của Luật Đất đai sửa đổi

Quốc hội đã chính thức thông qua Luật Đất đai sửa đổi với tỷ lệ tán thành cao.

### Các điểm mới nổi bật

- Bỏ khung giá đất, áp dụng bảng giá đất theo thị trường
- Mở rộng quyền của người sử dụng đất
- Tăng cường công khai, minh bạch trong quản lý đất đai

Luật sẽ có hiệu lực thi hành từ ngày 1/1/2025.', 1, 1, 'published', NOW() - INTERVAL '3 hours', true, 28350, 7),

('Việt Nam và Nhật Bản nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện', 'viet-nam-nhat-ban-nang-cap-quan-he', 'Hai nước nhất trí tăng cường hợp tác trên nhiều lĩnh vực quan trọng.', '## Quan hệ Việt Nam - Nhật Bản

Trong chuyến thăm cấp Nhà nước, lãnh đạo hai nước đã nhất trí nâng cấp quan hệ song phương.

### Các lĩnh vực hợp tác

1. Kinh tế - thương mại
2. Quốc phòng - an ninh
3. Văn hóa - giáo dục
4. Khoa học công nghệ

Đây là bước phát triển quan trọng trong quan hệ hai nước.', 1, 1, 'published', NOW() - INTERVAL '5 hours', false, 12890, 4),

('Bão số 5 đổ bộ vào miền Trung, hàng nghìn người dân được sơ tán', 'bao-so-5-do-bo-vao-mien-trung', 'Các tỉnh miền Trung đang khẩn trương ứng phó với bão và mưa lớn.', '## Tình hình bão số 5

Bão số 5 đã đổ bộ vào các tỉnh miền Trung với sức gió mạnh cấp 10-11.

### Công tác ứng phó

- Sơ tán hơn 50.000 người dân vùng nguy hiểm
- Cấm tàu thuyền ra khơi
- Các trường học cho học sinh nghỉ học

Dự báo bão sẽ suy yếu thành áp thấp nhiệt đới trong 24 giờ tới.', 1, 1, 'published', NOW() - INTERVAL '8 hours', false, 45670, 3),

('Hà Nội công bố quy hoạch thành phố đến năm 2045', 'ha-noi-cong-bo-quy-hoach-thanh-pho-2045', 'Quy hoạch mới định hướng Hà Nội trở thành đô thị thông minh, xanh và bền vững.', '## Quy hoạch Thủ đô Hà Nội

UBND TP Hà Nội vừa công bố quy hoạch phát triển thành phố đến năm 2045.

### Các mục tiêu chính

1. Dân số khoảng 12 triệu người
2. Phát triển 5 đô thị vệ tinh
3. Hoàn thiện hệ thống metro
4. Xây dựng thành phố thông minh

Quy hoạch đặt mục tiêu Hà Nội trở thành thành phố đáng sống hàng đầu châu Á.', 1, 1, 'published', NOW() - INTERVAL '12 hours', false, 8920, 6);

-- Kinh doanh (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('VN-Index vượt mốc 1.300 điểm, thanh khoản đạt kỷ lục', 'vn-index-vuot-moc-1300-diem', 'Thị trường chứng khoán Việt Nam ghi nhận phiên giao dịch sôi động nhất trong năm.', '## Thị trường chứng khoán

VN-Index đã vượt mốc 1.300 điểm trong phiên giao dịch hôm nay.

### Điểm nhấn

- Thanh khoản đạt 35.000 tỷ đồng
- Khối ngoại mua ròng 500 tỷ đồng
- Nhóm cổ phiếu ngân hàng dẫn dắt thị trường

Các chuyên gia dự báo thị trường sẽ tiếp tục tích cực trong thời gian tới.', 2, 2, 'published', NOW() - INTERVAL '2 hours', true, 23450, 4),

('Ngân hàng Nhà nước giữ nguyên lãi suất điều hành', 'ngan-hang-nha-nuoc-giu-nguyen-lai-suat', 'Quyết định nhằm hỗ trợ tăng trưởng kinh tế và kiểm soát lạm phát.', '## Chính sách tiền tệ

Ngân hàng Nhà nước quyết định giữ nguyên các mức lãi suất điều hành.

### Lý do

1. Lạm phát được kiểm soát tốt
2. Tăng trưởng tín dụng ổn định
3. Hỗ trợ doanh nghiệp phục hồi

Lãi suất cho vay bình quân hiện ở mức 8-10%/năm.', 2, 2, 'published', NOW() - INTERVAL '4 hours', false, 15670, 5),

('Vingroup công bố kế hoạch đầu tư 5 tỷ USD vào AI và bán dẫn', 'vingroup-dau-tu-5-ty-usd-ai-ban-dan', 'Tập đoàn đặt mục tiêu trở thành doanh nghiệp công nghệ hàng đầu khu vực.', '## Chiến lược mới của Vingroup

Vingroup vừa công bố kế hoạch đầu tư lớn vào lĩnh vực công nghệ cao.

### Chi tiết đầu tư

- 3 tỷ USD cho trung tâm dữ liệu AI
- 2 tỷ USD cho nhà máy bán dẫn
- Hợp tác với các đối tác quốc tế

Dự án dự kiến hoàn thành trong 5 năm tới.', 2, 2, 'published', NOW() - INTERVAL '6 hours', true, 34560, 6),

('Xuất khẩu Việt Nam đạt 350 tỷ USD trong 11 tháng', 'xuat-khau-viet-nam-dat-350-ty-usd', 'Kim ngạch xuất khẩu tăng 12% so với cùng kỳ năm trước.', '## Tình hình xuất khẩu

Theo số liệu của Tổng cục Hải quan, xuất khẩu 11 tháng đạt kết quả ấn tượng.

### Các mặt hàng chủ lực

1. Điện tử, máy tính: 55 tỷ USD
2. Dệt may: 35 tỷ USD
3. Giày dép: 22 tỷ USD
4. Nông sản: 28 tỷ USD

Mỹ và Trung Quốc vẫn là hai thị trường xuất khẩu lớn nhất.', 2, 2, 'published', NOW() - INTERVAL '10 hours', false, 11230, 4),

('Giá vàng trong nước lập đỉnh mới, vượt 80 triệu đồng/lượng', 'gia-vang-lap-dinh-moi-80-trieu', 'Giá vàng tăng mạnh theo đà tăng của thị trường thế giới.', '## Thị trường vàng

Giá vàng SJC sáng nay đã vượt mốc 80 triệu đồng/lượng.

### Nguyên nhân

- Giá vàng thế giới tăng mạnh
- Đồng USD suy yếu
- Nhu cầu trú ẩn an toàn tăng

Các chuyên gia khuyến cáo nhà đầu tư cẩn trọng khi mua vàng ở mức giá cao.', 2, 2, 'published', NOW() - INTERVAL '14 hours', false, 28900, 3);


-- Công nghệ (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Apple ra mắt iPhone 16 với chip A18 mạnh mẽ nhất', 'apple-ra-mat-iphone-16-chip-a18', 'iPhone 16 series mang đến nhiều cải tiến về camera và hiệu năng.', '## iPhone 16 chính thức ra mắt

Apple vừa giới thiệu dòng iPhone 16 với nhiều nâng cấp đáng chú ý.

### Điểm nổi bật

- Chip A18 Pro với hiệu năng tăng 40%
- Camera 48MP với zoom quang 5x
- Pin lớn hơn 20%
- Hỗ trợ Apple Intelligence

Giá khởi điểm từ 799 USD, bán ra từ ngày 20/9.', 3, 3, 'published', NOW() - INTERVAL '1 hour', true, 67890, 5),

('OpenAI công bố GPT-5 với khả năng suy luận vượt trội', 'openai-cong-bo-gpt-5', 'Mô hình AI mới có thể giải quyết các bài toán phức tạp như con người.', '## GPT-5 - Bước tiến lớn của AI

OpenAI vừa ra mắt GPT-5 với nhiều cải tiến đột phá.

### Khả năng mới

1. Suy luận logic phức tạp
2. Hiểu ngữ cảnh sâu hơn
3. Tạo code chính xác hơn
4. Hỗ trợ đa phương thức

GPT-5 sẽ được tích hợp vào ChatGPT trong tháng tới.', 3, 3, 'published', NOW() - INTERVAL '3 hours', true, 89120, 6),

('Việt Nam đặt mục tiêu có 100.000 kỹ sư bán dẫn vào năm 2030', 'viet-nam-100000-ky-su-ban-dan-2030', 'Chính phủ phê duyệt chiến lược phát triển ngành công nghiệp bán dẫn.', '## Chiến lược phát triển bán dẫn

Việt Nam đặt mục tiêu trở thành trung tâm bán dẫn của khu vực.

### Kế hoạch hành động

- Đào tạo 100.000 kỹ sư bán dẫn
- Thu hút 10 tỷ USD đầu tư
- Xây dựng 5 nhà máy sản xuất chip

Nhiều tập đoàn lớn như Intel, Samsung đã cam kết đầu tư.', 3, 3, 'published', NOW() - INTERVAL '7 hours', false, 34560, 5),

('Tesla ra mắt robot Optimus thế hệ 2 có thể làm việc nhà', 'tesla-robot-optimus-the-he-2', 'Robot hình người của Tesla có thể thực hiện các công việc gia đình đơn giản.', '## Robot Optimus Gen 2

Tesla vừa giới thiệu phiên bản mới của robot Optimus.

### Khả năng

1. Đi bộ mượt mà hơn
2. Cầm nắm đồ vật chính xác
3. Nhận diện giọng nói
4. Tự sạc pin

Elon Musk cho biết robot sẽ có giá dưới 20.000 USD khi sản xuất hàng loạt.', 3, 3, 'published', NOW() - INTERVAL '9 hours', false, 45670, 4),

('5G đã phủ sóng 95% dân số Việt Nam', '5g-phu-song-95-dan-so-viet-nam', 'Việt Nam trở thành một trong những nước có tốc độ triển khai 5G nhanh nhất.', '## Triển khai 5G tại Việt Nam

Các nhà mạng đã hoàn thành mục tiêu phủ sóng 5G trước thời hạn.

### Thành tựu

- 95% dân số được phủ sóng
- Tốc độ trung bình 500 Mbps
- Giá cước cạnh tranh

5G đang thúc đẩy chuyển đổi số mạnh mẽ tại Việt Nam.', 3, 3, 'published', NOW() - INTERVAL '15 hours', false, 23450, 3);

-- Thể thao (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Đội tuyển Việt Nam thắng đậm 4-0 trước Indonesia', 'doi-tuyen-viet-nam-thang-4-0-indonesia', 'Chiến thắng ấn tượng giúp Việt Nam dẫn đầu bảng đấu AFF Cup.', '## AFF Cup 2024

Đội tuyển Việt Nam có chiến thắng đậm đà trước Indonesia.

### Các bàn thắng

1. Phút 15: Tiến Linh
2. Phút 34: Quang Hải
3. Phút 67: Hoàng Đức
4. Phút 89: Văn Toàn

HLV Kim Sang-sik hài lòng với màn trình diễn của các học trò.', 4, 4, 'published', NOW() - INTERVAL '2 hours', true, 156780, 4),

('Nguyễn Thị Oanh giành HCV marathon SEA Games', 'nguyen-thi-oanh-hcv-marathon-sea-games', 'Nữ VĐV Việt Nam lập kỷ lục mới ở nội dung marathon.', '## SEA Games 33

Nguyễn Thị Oanh tiếp tục khẳng định vị thế số 1 Đông Nam Á.

### Thành tích

- Thời gian: 2 giờ 28 phút
- Phá kỷ lục SEA Games
- HCV thứ 3 tại giải

Oanh chia sẻ sẽ hướng tới Olympic 2028.', 4, 4, 'published', NOW() - INTERVAL '5 hours', false, 78900, 3),

('Real Madrid vô địch Champions League lần thứ 16', 'real-madrid-vo-dich-champions-league-16', 'Đội bóng Hoàng gia Tây Ban Nha tiếp tục thống trị châu Âu.', '## Champions League 2024

Real Madrid đánh bại Man City 2-1 trong trận chung kết.

### Diễn biến

- Hiệp 1: Vinicius mở tỷ số
- Hiệp 2: Haaland gỡ hòa
- Phút 89: Bellingham ghi bàn quyết định

Đây là danh hiệu Champions League thứ 16 của Real Madrid.', 4, 4, 'published', NOW() - INTERVAL '8 hours', true, 234560, 5),

('Hoàng Nam vào tứ kết ATP 250 tại Singapore', 'hoang-nam-tu-ket-atp-250-singapore', 'Tay vợt số 1 Việt Nam có bước tiến lịch sử.', '## Tennis Việt Nam

Lý Hoàng Nam đánh bại đối thủ hạng 45 thế giới.

### Hành trình

1. Vòng 1: Thắng 2-0
2. Vòng 2: Thắng 2-1
3. Vòng 3: Thắng 2-0

Hoàng Nam sẽ gặp tay vợt Nhật Bản ở tứ kết.', 4, 4, 'published', NOW() - INTERVAL '11 hours', false, 45670, 3),

('VBA 2024: Saigon Heat vô địch sau loạt overtime kịch tính', 'vba-2024-saigon-heat-vo-dich', 'Trận chung kết kéo dài 3 hiệp phụ với kết quả 98-95.', '## VBA Finals 2024

Saigon Heat đánh bại Hanoi Buffaloes trong trận chung kết lịch sử.

### Điểm nhấn

- 3 hiệp phụ liên tiếp
- Tỷ số cuối: 98-95
- MVP: Stefan Nguyen với 35 điểm

Đây là chức vô địch VBA thứ 3 của Saigon Heat.', 4, 4, 'published', NOW() - INTERVAL '16 hours', false, 34560, 4);


-- Giải trí (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Phim Việt "Mai" cán mốc 500 tỷ đồng doanh thu', 'phim-mai-can-moc-500-ty-doanh-thu', 'Bộ phim của Trấn Thành trở thành phim Việt có doanh thu cao nhất lịch sử.', '## Kỷ lục phòng vé Việt

Phim "Mai" tiếp tục tạo nên cơn sốt phòng vé.

### Thành tích

- Doanh thu: 500 tỷ đồng
- Lượt xem: 6 triệu
- Thời gian chiếu: 4 tuần

Trấn Thành chia sẻ niềm vui và cảm ơn khán giả.', 5, 5, 'published', NOW() - INTERVAL '1 hour', true, 89120, 3),

('BTS thông báo tái hợp sau khi hoàn thành nghĩa vụ quân sự', 'bts-thong-bao-tai-hop', 'Nhóm nhạc Hàn Quốc sẽ comeback vào năm 2025.', '## BTS Comeback

HYBE chính thức xác nhận BTS sẽ tái hợp.

### Kế hoạch

1. Album mới: Quý 2/2025
2. World Tour: Quý 3/2025
3. Concert tại Việt Nam: Dự kiến tháng 10

ARMY toàn cầu đang háo hức chờ đợi.', 5, 5, 'published', NOW() - INTERVAL '4 hours', true, 234560, 4),

('Sơn Tùng M-TP ra mắt MV mới đạt 10 triệu view sau 24 giờ', 'son-tung-mtp-mv-moi-10-trieu-view', 'Ca khúc mới của nam ca sĩ gây bão trên các nền tảng âm nhạc.', '## Sơn Tùng M-TP Comeback

MV mới của Sơn Tùng đạt thành tích ấn tượng.

### Thành tích

- 10 triệu view/24h trên YouTube
- Top 1 Trending
- 500.000 lượt thích

Ca khúc được đánh giá là bước đột phá trong âm nhạc của Sơn Tùng.', 5, 5, 'published', NOW() - INTERVAL '6 hours', false, 156780, 3),

('Liên hoan phim Cannes 2024: Phim Việt Nam được đề cử Cành Cọ Vàng', 'lhp-cannes-2024-phim-viet-de-cu', 'Đây là lần đầu tiên một bộ phim Việt Nam lọt vào danh sách đề cử chính thức.', '## Cannes 2024

Phim "Đất Rừng Phương Nam" được đề cử giải thưởng danh giá.

### Thông tin

- Đạo diễn: Nguyễn Quang Dũng
- Diễn viên: Trấn Thành, Tuấn Trần
- Thể loại: Hành động, lịch sử

Đoàn phim sẽ tham dự lễ trao giải vào tuần tới.', 5, 5, 'published', NOW() - INTERVAL '10 hours', false, 67890, 4),

('Taylor Swift công bố tour diễn châu Á, có điểm dừng tại Việt Nam', 'taylor-swift-tour-chau-a-viet-nam', 'Nữ ca sĩ sẽ biểu diễn tại TP.HCM vào tháng 3/2025.', '## The Eras Tour Asia

Taylor Swift xác nhận biểu diễn tại Việt Nam.

### Chi tiết

- Địa điểm: Sân vận động Mỹ Đình
- Thời gian: 15-16/3/2025
- Giá vé: Từ 2-15 triệu đồng

Vé sẽ được mở bán từ ngày 1/12.', 5, 5, 'published', NOW() - INTERVAL '18 hours', false, 345670, 3);

-- Sức khỏe (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Việt Nam phát triển thành công vaccine ung thư phổi', 'viet-nam-vaccine-ung-thu-phoi', 'Vaccine do Việt Nam nghiên cứu cho kết quả khả quan trong thử nghiệm lâm sàng.', '## Đột phá y học Việt Nam

Các nhà khoa học Việt Nam công bố vaccine ung thư phổi.

### Kết quả thử nghiệm

- Hiệu quả: 70% bệnh nhân cải thiện
- Tác dụng phụ: Nhẹ
- Thời gian điều trị: 6 tháng

Vaccine dự kiến được cấp phép vào năm 2025.', 6, 1, 'published', NOW() - INTERVAL '2 hours', true, 78900, 5),

('Cách phòng tránh bệnh cúm mùa đông hiệu quả', 'cach-phong-tranh-cum-mua-dong', 'Chuyên gia y tế chia sẻ các biện pháp bảo vệ sức khỏe trong mùa lạnh.', '## Phòng bệnh cúm mùa

Mùa đông là thời điểm bệnh cúm bùng phát mạnh.

### Biện pháp phòng tránh

1. Tiêm vaccine cúm
2. Rửa tay thường xuyên
3. Đeo khẩu trang nơi đông người
4. Tăng cường vitamin C

Nếu có triệu chứng, nên đi khám sớm.', 6, 1, 'published', NOW() - INTERVAL '5 hours', false, 45670, 4),

('10 thực phẩm tốt cho tim mạch nên ăn hàng ngày', '10-thuc-pham-tot-cho-tim-mach', 'Chế độ ăn uống khoa học giúp giảm nguy cơ bệnh tim mạch.', '## Dinh dưỡng cho tim mạch

Các chuyên gia khuyến cáo 10 thực phẩm tốt cho tim.

### Danh sách

1. Cá hồi
2. Quả óc chó
3. Dầu ô liu
4. Rau xanh đậm
5. Quả mọng
6. Yến mạch
7. Đậu
8. Tỏi
9. Trà xanh
10. Socola đen

Nên kết hợp với tập thể dục đều đặn.', 6, 1, 'published', NOW() - INTERVAL '9 hours', false, 34560, 5),

('Yoga và thiền định: Bí quyết giảm stress hiệu quả', 'yoga-thien-dinh-giam-stress', 'Nghiên cứu mới cho thấy yoga giúp giảm 60% mức độ căng thẳng.', '## Lợi ích của Yoga

Yoga và thiền định ngày càng được ưa chuộng.

### Lợi ích

- Giảm stress 60%
- Cải thiện giấc ngủ
- Tăng sự tập trung
- Linh hoạt cơ thể

Chỉ cần 15-30 phút mỗi ngày để thấy hiệu quả.', 6, 1, 'published', NOW() - INTERVAL '13 hours', false, 23450, 4),

('Cảnh báo: Tăng đột biến ca mắc sốt xuất huyết tại miền Nam', 'canh-bao-sot-xuat-huyet-mien-nam', 'Bộ Y tế khuyến cáo người dân tăng cường phòng chống dịch.', '## Dịch sốt xuất huyết

Số ca mắc sốt xuất huyết tăng 200% so với cùng kỳ.

### Khuyến cáo

1. Diệt muỗi, lăng quăng
2. Ngủ màn
3. Mặc quần áo dài
4. Đi khám khi có triệu chứng

Các bệnh viện đã sẵn sàng tiếp nhận bệnh nhân.', 6, 1, 'published', NOW() - INTERVAL '20 hours', false, 56780, 3);


-- Đời sống (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Xu hướng sống tối giản: Bớt đồ đạc, thêm hạnh phúc', 'xu-huong-song-toi-gian', 'Ngày càng nhiều người trẻ Việt Nam theo đuổi lối sống minimalism.', '## Lối sống tối giản

Minimalism đang trở thành xu hướng tại Việt Nam.

### Nguyên tắc

1. Chỉ giữ những gì cần thiết
2. Chất lượng hơn số lượng
3. Trải nghiệm hơn vật chất
4. Không gian sống gọn gàng

Nhiều người chia sẻ cuộc sống trở nên nhẹ nhàng hơn.', 7, 5, 'published', NOW() - INTERVAL '1 hour', false, 34560, 4),

('Bí quyết cân bằng công việc và gia đình cho người trẻ', 'can-bang-cong-viec-gia-dinh', 'Chuyên gia tâm lý chia sẻ cách quản lý thời gian hiệu quả.', '## Work-Life Balance

Cân bằng cuộc sống là thách thức với nhiều người.

### Lời khuyên

- Đặt ranh giới rõ ràng
- Ưu tiên sức khỏe
- Dành thời gian cho gia đình
- Học cách nói "không"

Hạnh phúc không chỉ đến từ thành công trong công việc.', 7, 5, 'published', NOW() - INTERVAL '4 hours', false, 23450, 5),

('Thú cưng: Người bạn đồng hành giúp giảm cô đơn', 'thu-cung-nguoi-ban-dong-hanh', 'Nghiên cứu cho thấy nuôi thú cưng giúp cải thiện sức khỏe tinh thần.', '## Lợi ích của thú cưng

Nuôi thú cưng mang lại nhiều lợi ích bất ngờ.

### Lợi ích

1. Giảm stress và lo âu
2. Tăng vận động
3. Mở rộng quan hệ xã hội
4. Có trách nhiệm hơn

Chó và mèo là hai loại thú cưng phổ biến nhất.', 7, 5, 'published', NOW() - INTERVAL '7 hours', false, 45670, 4),

('Mẹo tiết kiệm chi tiêu cho gia đình trẻ', 'meo-tiet-kiem-chi-tieu-gia-dinh', 'Cách quản lý tài chính thông minh trong thời kỳ lạm phát.', '## Tiết kiệm thông minh

Quản lý chi tiêu là kỹ năng quan trọng.

### Mẹo tiết kiệm

1. Lập ngân sách hàng tháng
2. Nấu ăn tại nhà
3. Mua sắm có kế hoạch
4. Tận dụng khuyến mãi
5. Tiết kiệm điện nước

Mục tiêu tiết kiệm 20-30% thu nhập.', 7, 5, 'published', NOW() - INTERVAL '12 hours', false, 56780, 5),

('Làm thế nào để xây dựng thói quen đọc sách mỗi ngày', 'xay-dung-thoi-quen-doc-sach', 'Đọc sách 30 phút mỗi ngày có thể thay đổi cuộc sống của bạn.', '## Thói quen đọc sách

Đọc sách là cách học tập hiệu quả nhất.

### Cách xây dựng thói quen

1. Bắt đầu với 10 phút/ngày
2. Chọn sách phù hợp
3. Đọc vào giờ cố định
4. Ghi chép những điều học được

Mục tiêu: 12 cuốn sách/năm.', 7, 5, 'published', NOW() - INTERVAL '16 hours', false, 34560, 4);

-- Giáo dục (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Điểm chuẩn đại học 2024: Nhiều ngành tăng mạnh', 'diem-chuan-dai-hoc-2024', 'Các ngành công nghệ thông tin và y dược có điểm chuẩn cao nhất.', '## Điểm chuẩn đại học 2024

Bộ GD&ĐT công bố điểm chuẩn các trường đại học.

### Điểm chuẩn cao nhất

1. Y đa khoa: 28.5 điểm
2. CNTT: 27.8 điểm
3. Kinh tế: 26.5 điểm
4. Luật: 26.0 điểm

Thí sinh có thể tra cứu kết quả trên cổng thông tin.', 8, 2, 'published', NOW() - INTERVAL '2 hours', true, 234560, 4),

('Học sinh Việt Nam giành 6 HCV Olympic Toán quốc tế', 'hoc-sinh-viet-nam-6-hcv-olympic-toan', 'Đoàn Việt Nam đạt thành tích cao nhất trong lịch sử tham dự.', '## IMO 2024

Đoàn học sinh Việt Nam tỏa sáng tại Olympic Toán quốc tế.

### Thành tích

- 6 Huy chương Vàng
- Xếp hạng 3 toàn đoàn
- Điểm số cao nhất: 42/42

Các em sẽ được tuyên dương tại Phủ Chủ tịch.', 8, 2, 'published', NOW() - INTERVAL '6 hours', true, 156780, 3),

('Chương trình giáo dục STEM được triển khai toàn quốc', 'chuong-trinh-giao-duc-stem-toan-quoc', 'Bộ GD&ĐT đưa STEM vào chương trình chính khóa từ năm học 2024-2025.', '## Giáo dục STEM

STEM sẽ được dạy từ cấp tiểu học.

### Nội dung

1. Khoa học
2. Công nghệ
3. Kỹ thuật
4. Toán học

Mục tiêu: Phát triển tư duy sáng tạo cho học sinh.', 8, 2, 'published', NOW() - INTERVAL '9 hours', false, 67890, 4),

('Du học Nhật Bản: Cơ hội và thách thức cho sinh viên Việt', 'du-hoc-nhat-ban-co-hoi-thach-thuc', 'Nhật Bản vẫn là điểm đến du học hấp dẫn với nhiều chính sách hỗ trợ.', '## Du học Nhật Bản

Số lượng du học sinh Việt Nam tại Nhật tăng 20%.

### Ưu điểm

- Chất lượng giáo dục cao
- Học bổng đa dạng
- Cơ hội việc làm tốt
- Chi phí hợp lý

### Thách thức

- Rào cản ngôn ngữ
- Áp lực học tập
- Khác biệt văn hóa', 8, 2, 'published', NOW() - INTERVAL '14 hours', false, 45670, 5),

('Trường học thông minh: Xu hướng giáo dục tương lai', 'truong-hoc-thong-minh-xu-huong', 'Nhiều trường học tại Việt Nam áp dụng công nghệ AI trong giảng dạy.', '## Smart School

Trường học thông minh đang được triển khai rộng rãi.

### Công nghệ áp dụng

1. AI hỗ trợ học tập
2. Thực tế ảo (VR)
3. Bảng tương tác
4. Học liệu số

Học sinh có thể học mọi lúc, mọi nơi.', 8, 2, 'published', NOW() - INTERVAL '19 hours', false, 34560, 4);


-- Du lịch (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('Phú Quốc lọt top 10 đảo đẹp nhất thế giới 2024', 'phu-quoc-top-10-dao-dep-nhat', 'Tạp chí Travel + Leisure bình chọn Phú Quốc trong danh sách danh giá.', '## Phú Quốc - Đảo Ngọc Việt Nam

Phú Quốc tiếp tục được vinh danh quốc tế.

### Điểm nổi bật

1. Bãi biển hoang sơ
2. Ẩm thực phong phú
3. Cơ sở hạ tầng hiện đại
4. Giá cả hợp lý

Du khách quốc tế đến Phú Quốc tăng 50% so với năm trước.', 9, 3, 'published', NOW() - INTERVAL '1 hour', true, 89120, 4),

('Khám phá Sapa mùa lúa chín vàng óng', 'kham-pha-sapa-mua-lua-chin', 'Tháng 9-10 là thời điểm đẹp nhất để ngắm ruộng bậc thang Sapa.', '## Sapa mùa vàng

Ruộng bậc thang Sapa đang vào mùa đẹp nhất năm.

### Điểm đến gợi ý

1. Bản Cát Cát
2. Thung lũng Mường Hoa
3. Đỉnh Fansipan
4. Chợ phiên Bắc Hà

Nên đặt phòng trước 2 tuần vì mùa cao điểm.', 9, 3, 'published', NOW() - INTERVAL '5 hours', false, 67890, 5),

('Hội An - Điểm đến lãng mạn nhất Đông Nam Á', 'hoi-an-diem-den-lang-man-nhat', 'Phố cổ Hội An được CNN bình chọn là điểm đến lãng mạn hàng đầu.', '## Hội An - Phố cổ mộng mơ

Hội An tiếp tục chinh phục du khách quốc tế.

### Trải nghiệm không thể bỏ qua

1. Thả đèn hoa đăng
2. May áo dài
3. Ẩm thực đường phố
4. Đạp xe quanh phố cổ

Giá tour trọn gói từ 2 triệu đồng/người.', 9, 3, 'published', NOW() - INTERVAL '8 hours', true, 78900, 4),

('5 điểm cắm trại đẹp nhất gần Hà Nội cho cuối tuần', '5-diem-cam-trai-dep-gan-ha-noi', 'Những địa điểm lý tưởng để thoát khỏi thành phố ồn ào.', '## Camping gần Hà Nội

Cắm trại đang là xu hướng hot của giới trẻ.

### Top 5 điểm đến

1. Hồ Đồng Đò - Sóc Sơn
2. Núi Hàm Lợn - Ba Vì
3. Hồ Quan Sơn - Mỹ Đức
4. Thung Nai - Hòa Bình
5. Đảo Cô Tô - Quảng Ninh

Chi phí trung bình: 500.000 - 1.000.000 đồng/người.', 9, 3, 'published', NOW() - INTERVAL '11 hours', false, 56780, 5),

('Việt Nam đón 15 triệu lượt khách quốc tế trong năm 2024', 'viet-nam-don-15-trieu-khach-quoc-te', 'Du lịch Việt Nam phục hồi mạnh mẽ sau đại dịch.', '## Du lịch Việt Nam 2024

Ngành du lịch đạt mục tiêu đề ra.

### Thống kê

- 15 triệu khách quốc tế
- 110 triệu khách nội địa
- Doanh thu: 850.000 tỷ đồng

Hàn Quốc, Trung Quốc, Mỹ là 3 thị trường lớn nhất.', 9, 3, 'published', NOW() - INTERVAL '17 hours', false, 45670, 3);

-- Xe (5 bài)
INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time) VALUES
('VinFast VF 9 chính thức bàn giao cho khách hàng Việt Nam', 'vinfast-vf9-ban-giao-khach-hang', 'Mẫu SUV điện hạng sang của VinFast bắt đầu đến tay người dùng.', '## VinFast VF 9

VinFast bàn giao lô VF 9 đầu tiên tại Việt Nam.

### Thông số

- Động cơ: 402 mã lực
- Pin: 123 kWh
- Tầm xa: 594 km
- Giá: 1.59 tỷ đồng

Khách hàng đánh giá cao chất lượng và dịch vụ.', 10, 4, 'published', NOW() - INTERVAL '2 hours', true, 78900, 4),

('Toyota Vios 2024 ra mắt với nhiều nâng cấp đáng giá', 'toyota-vios-2024-ra-mat', 'Mẫu sedan bán chạy nhất Việt Nam có phiên bản mới.', '## Toyota Vios 2024

Toyota Việt Nam giới thiệu Vios thế hệ mới.

### Nâng cấp

1. Thiết kế ngoại thất mới
2. Màn hình 9 inch
3. Hệ thống an toàn Toyota Safety Sense
4. Động cơ 1.5L tiết kiệm nhiên liệu

Giá từ 479 triệu đồng.', 10, 4, 'published', NOW() - INTERVAL '6 hours', false, 56780, 4),

('Xe máy điện VinFast Vento S bán chạy nhất thị trường', 'vinfast-vento-s-ban-chay-nhat', 'Mẫu xe máy điện của VinFast chiếm 60% thị phần xe điện.', '## VinFast Vento S

Vento S tiếp tục dẫn đầu phân khúc xe máy điện.

### Ưu điểm

- Giá: 56 triệu đồng
- Tầm xa: 200 km
- Sạc nhanh 2 giờ
- Bảo hành pin 10 năm

Doanh số tháng 11: 15.000 xe.', 10, 4, 'published', NOW() - INTERVAL '10 hours', false, 45670, 3),

('Giá xăng giảm mạnh, về mức thấp nhất trong 2 năm', 'gia-xang-giam-manh-thap-nhat-2-nam', 'Giá xăng RON 95 giảm còn 20.500 đồng/lít.', '## Giá xăng dầu

Liên Bộ Công Thương - Tài chính điều chỉnh giá xăng.

### Giá mới

- RON 95: 20.500 đồng/lít
- E5 RON 92: 19.800 đồng/lít
- Dầu diesel: 18.500 đồng/lít

Giá giảm do giá dầu thế giới hạ nhiệt.', 10, 4, 'published', NOW() - INTERVAL '14 hours', false, 89120, 3),

('Hà Nội cấm xe máy vào nội đô từ năm 2030', 'ha-noi-cam-xe-may-noi-do-2030', 'UBND TP Hà Nội công bố lộ trình hạn chế xe máy.', '## Lộ trình cấm xe máy

Hà Nội sẽ cấm xe máy trong nội đô từ năm 2030.

### Lộ trình

1. 2025: Cấm một số tuyến phố
2. 2027: Mở rộng vùng cấm
3. 2030: Cấm toàn bộ nội đô

Thành phố sẽ phát triển giao thông công cộng để thay thế.', 10, 4, 'published', NOW() - INTERVAL '22 hours', false, 123450, 4);

-- ============================================
-- UPDATE FEATURED ARTICLES
-- ============================================
UPDATE articles SET is_featured = true WHERE id IN (1, 2, 6, 8, 11, 12, 16, 17, 21, 26, 31, 36, 41, 46);

-- ============================================
-- VERIFY DATA
-- ============================================
SELECT 'Categories:' as info, COUNT(*) as count FROM categories
UNION ALL
SELECT 'Authors:', COUNT(*) FROM authors
UNION ALL
SELECT 'Articles:', COUNT(*) FROM articles;
