const path = require('path');
const { Client } = require(path.join(__dirname, '../frontend/node_modules/pg'));

const articles = [
  // Thời sự (cat 1, author 1)
  { title: 'Thủ tướng chủ trì hội nghị phát triển kinh tế vùng Đông Nam Bộ', slug: 'thu-tuong-chu-tri-hoi-nghi-phat-trien-kinh-te', excerpt: 'Hội nghị tập trung thảo luận các giải pháp thúc đẩy liên kết vùng.', content: '## Nội dung chính\n\nSáng nay, Thủ tướng đã chủ trì Hội nghị phát triển kinh tế vùng Đông Nam Bộ.\n\n### Các giải pháp\n\n1. Đẩy mạnh liên kết giao thông\n2. Phát triển công nghiệp công nghệ cao\n3. Thu hút đầu tư nước ngoài', cat: 1, author: 1, featured: true, views: 15420, hours: 1 },
  { title: 'Quốc hội thông qua Luật Đất đai sửa đổi với nhiều điểm mới', slug: 'quoc-hoi-thong-qua-luat-dat-dai-sua-doi', excerpt: 'Luật mới có hiệu lực từ ngày 1/1/2025 với nhiều thay đổi.', content: '## Những điểm mới\n\n- Bỏ khung giá đất\n- Mở rộng quyền sử dụng đất\n- Tăng cường công khai minh bạch', cat: 1, author: 1, featured: true, views: 28350, hours: 3 },
  { title: 'Việt Nam và Nhật Bản nâng cấp quan hệ Đối tác Chiến lược', slug: 'viet-nam-nhat-ban-nang-cap-quan-he', excerpt: 'Hai nước nhất trí tăng cường hợp tác trên nhiều lĩnh vực.', content: '## Quan hệ Việt Nam - Nhật Bản\n\nLãnh đạo hai nước đã nhất trí nâng cấp quan hệ song phương.', cat: 1, author: 1, featured: false, views: 12890, hours: 5 },
  { title: 'Bão số 5 đổ bộ vào miền Trung, hàng nghìn người sơ tán', slug: 'bao-so-5-do-bo-vao-mien-trung', excerpt: 'Các tỉnh miền Trung đang khẩn trương ứng phó với bão.', content: '## Tình hình bão số 5\n\nBão đã đổ bộ với sức gió mạnh cấp 10-11.\n\n### Công tác ứng phó\n\n- Sơ tán 50.000 người dân\n- Cấm tàu thuyền ra khơi', cat: 1, author: 1, featured: false, views: 45670, hours: 8 },
  { title: 'Hà Nội công bố quy hoạch thành phố đến năm 2045', slug: 'ha-noi-cong-bo-quy-hoach-2045', excerpt: 'Quy hoạch mới định hướng Hà Nội trở thành đô thị thông minh.', content: '## Quy hoạch Thủ đô\n\n1. Dân số 12 triệu người\n2. 5 đô thị vệ tinh\n3. Hoàn thiện hệ thống metro', cat: 1, author: 1, featured: false, views: 8920, hours: 12 },

  // Kinh doanh (cat 2, author 2)
  { title: 'VN-Index vượt mốc 1.300 điểm, thanh khoản đạt kỷ lục', slug: 'vn-index-vuot-moc-1300-diem', excerpt: 'Thị trường chứng khoán ghi nhận phiên giao dịch sôi động nhất.', content: '## Thị trường chứng khoán\n\n- Thanh khoản 35.000 tỷ đồng\n- Khối ngoại mua ròng 500 tỷ', cat: 2, author: 2, featured: true, views: 23450, hours: 2 },
  { title: 'Ngân hàng Nhà nước giữ nguyên lãi suất điều hành', slug: 'ngan-hang-nha-nuoc-giu-nguyen-lai-suat', excerpt: 'Quyết định nhằm hỗ trợ tăng trưởng kinh tế.', content: '## Chính sách tiền tệ\n\nLãi suất cho vay bình quân 8-10%/năm.', cat: 2, author: 2, featured: false, views: 15670, hours: 4 },
  { title: 'Vingroup công bố kế hoạch đầu tư 5 tỷ USD vào AI', slug: 'vingroup-dau-tu-5-ty-usd-ai', excerpt: 'Tập đoàn đặt mục tiêu trở thành doanh nghiệp công nghệ hàng đầu.', content: '## Chiến lược mới\n\n- 3 tỷ USD cho trung tâm dữ liệu AI\n- 2 tỷ USD cho nhà máy bán dẫn', cat: 2, author: 2, featured: true, views: 34560, hours: 6 },
  { title: 'Xuất khẩu Việt Nam đạt 350 tỷ USD trong 11 tháng', slug: 'xuat-khau-viet-nam-dat-350-ty-usd', excerpt: 'Kim ngạch xuất khẩu tăng 12% so với cùng kỳ.', content: '## Tình hình xuất khẩu\n\n1. Điện tử: 55 tỷ USD\n2. Dệt may: 35 tỷ USD\n3. Giày dép: 22 tỷ USD', cat: 2, author: 2, featured: false, views: 11230, hours: 10 },
  { title: 'Giá vàng trong nước lập đỉnh mới, vượt 80 triệu đồng', slug: 'gia-vang-lap-dinh-moi-80-trieu', excerpt: 'Giá vàng tăng mạnh theo đà tăng của thế giới.', content: '## Thị trường vàng\n\nGiá vàng SJC vượt 80 triệu đồng/lượng.', cat: 2, author: 2, featured: false, views: 28900, hours: 14 },

  // Công nghệ (cat 3, author 3)
  { title: 'Apple ra mắt iPhone 16 với chip A18 mạnh mẽ nhất', slug: 'apple-ra-mat-iphone-16-chip-a18', excerpt: 'iPhone 16 mang đến nhiều cải tiến về camera và hiệu năng.', content: '## iPhone 16\n\n- Chip A18 Pro hiệu năng tăng 40%\n- Camera 48MP zoom quang 5x\n- Pin lớn hơn 20%', cat: 3, author: 3, featured: true, views: 67890, hours: 1 },
  { title: 'OpenAI công bố GPT-5 với khả năng suy luận vượt trội', slug: 'openai-cong-bo-gpt-5', excerpt: 'Mô hình AI mới có thể giải quyết bài toán phức tạp.', content: '## GPT-5\n\n1. Suy luận logic phức tạp\n2. Hiểu ngữ cảnh sâu hơn\n3. Tạo code chính xác hơn', cat: 3, author: 3, featured: true, views: 89120, hours: 3 },
  { title: 'Việt Nam đặt mục tiêu 100.000 kỹ sư bán dẫn năm 2030', slug: 'viet-nam-100000-ky-su-ban-dan-2030', excerpt: 'Chính phủ phê duyệt chiến lược phát triển ngành bán dẫn.', content: '## Chiến lược bán dẫn\n\n- Đào tạo 100.000 kỹ sư\n- Thu hút 10 tỷ USD đầu tư', cat: 3, author: 3, featured: false, views: 34560, hours: 7 },
  { title: 'Tesla ra mắt robot Optimus thế hệ 2 làm việc nhà', slug: 'tesla-robot-optimus-the-he-2', excerpt: 'Robot hình người có thể thực hiện công việc gia đình.', content: '## Robot Optimus Gen 2\n\n1. Đi bộ mượt mà\n2. Cầm nắm chính xác\n3. Nhận diện giọng nói', cat: 3, author: 3, featured: false, views: 45670, hours: 9 },
  { title: '5G đã phủ sóng 95% dân số Việt Nam', slug: '5g-phu-song-95-dan-so-viet-nam', excerpt: 'Việt Nam có tốc độ triển khai 5G nhanh nhất khu vực.', content: '## Triển khai 5G\n\n- 95% dân số được phủ sóng\n- Tốc độ trung bình 500 Mbps', cat: 3, author: 3, featured: false, views: 23450, hours: 15 },

  // Thể thao (cat 4, author 4)
  { title: 'Đội tuyển Việt Nam thắng đậm 4-0 trước Indonesia', slug: 'doi-tuyen-viet-nam-thang-4-0-indonesia', excerpt: 'Chiến thắng ấn tượng giúp Việt Nam dẫn đầu bảng AFF Cup.', content: '## AFF Cup 2024\n\n1. Phút 15: Tiến Linh\n2. Phút 34: Quang Hải\n3. Phút 67: Hoàng Đức\n4. Phút 89: Văn Toàn', cat: 4, author: 4, featured: true, views: 156780, hours: 2 },
  { title: 'Nguyễn Thị Oanh giành HCV marathon SEA Games', slug: 'nguyen-thi-oanh-hcv-marathon-sea-games', excerpt: 'Nữ VĐV Việt Nam lập kỷ lục mới ở nội dung marathon.', content: '## SEA Games 33\n\n- Thời gian: 2 giờ 28 phút\n- Phá kỷ lục SEA Games', cat: 4, author: 4, featured: false, views: 78900, hours: 5 },
  { title: 'Real Madrid vô địch Champions League lần thứ 16', slug: 'real-madrid-vo-dich-champions-league-16', excerpt: 'Đội bóng Hoàng gia tiếp tục thống trị châu Âu.', content: '## Champions League 2024\n\nReal Madrid đánh bại Man City 2-1 trong trận chung kết.', cat: 4, author: 4, featured: true, views: 234560, hours: 8 },
  { title: 'Hoàng Nam vào tứ kết ATP 250 tại Singapore', slug: 'hoang-nam-tu-ket-atp-250-singapore', excerpt: 'Tay vợt số 1 Việt Nam có bước tiến lịch sử.', content: '## Tennis Việt Nam\n\nLý Hoàng Nam đánh bại đối thủ hạng 45 thế giới.', cat: 4, author: 4, featured: false, views: 45670, hours: 11 },
  { title: 'VBA 2024: Saigon Heat vô địch sau loạt overtime', slug: 'vba-2024-saigon-heat-vo-dich', excerpt: 'Trận chung kết kéo dài 3 hiệp phụ với kết quả 98-95.', content: '## VBA Finals 2024\n\n- 3 hiệp phụ liên tiếp\n- MVP: Stefan Nguyen với 35 điểm', cat: 4, author: 4, featured: false, views: 34560, hours: 16 },

  // Giải trí (cat 5, author 5)
  { title: 'Phim Việt Mai cán mốc 500 tỷ đồng doanh thu', slug: 'phim-mai-can-moc-500-ty-doanh-thu', excerpt: 'Bộ phim của Trấn Thành trở thành phim Việt có doanh thu cao nhất.', content: '## Kỷ lục phòng vé\n\n- Doanh thu: 500 tỷ đồng\n- Lượt xem: 6 triệu', cat: 5, author: 5, featured: true, views: 89120, hours: 1 },
  { title: 'BTS thông báo tái hợp sau nghĩa vụ quân sự', slug: 'bts-thong-bao-tai-hop', excerpt: 'Nhóm nhạc Hàn Quốc sẽ comeback vào năm 2025.', content: '## BTS Comeback\n\n1. Album mới: Quý 2/2025\n2. World Tour: Quý 3/2025', cat: 5, author: 5, featured: true, views: 234560, hours: 4 },
  { title: 'Sơn Tùng M-TP ra mắt MV mới đạt 10 triệu view', slug: 'son-tung-mtp-mv-moi-10-trieu-view', excerpt: 'Ca khúc mới gây bão trên các nền tảng âm nhạc.', content: '## Sơn Tùng Comeback\n\n- 10 triệu view/24h\n- Top 1 Trending', cat: 5, author: 5, featured: false, views: 156780, hours: 6 },
  { title: 'Liên hoan phim Cannes: Phim Việt được đề cử Cành Cọ Vàng', slug: 'lhp-cannes-2024-phim-viet-de-cu', excerpt: 'Lần đầu tiên phim Việt Nam lọt vào danh sách đề cử chính thức.', content: '## Cannes 2024\n\nPhim Đất Rừng Phương Nam được đề cử giải thưởng danh giá.', cat: 5, author: 5, featured: false, views: 67890, hours: 10 },
  { title: 'Taylor Swift công bố tour diễn châu Á có Việt Nam', slug: 'taylor-swift-tour-chau-a-viet-nam', excerpt: 'Nữ ca sĩ sẽ biểu diễn tại TP.HCM vào tháng 3/2025.', content: '## The Eras Tour Asia\n\n- Địa điểm: Sân vận động Mỹ Đình\n- Thời gian: 15-16/3/2025', cat: 5, author: 5, featured: false, views: 345670, hours: 18 },

  // Sức khỏe (cat 6, author 1)
  { title: 'Việt Nam phát triển thành công vaccine ung thư phổi', slug: 'viet-nam-vaccine-ung-thu-phoi', excerpt: 'Vaccine cho kết quả khả quan trong thử nghiệm lâm sàng.', content: '## Đột phá y học\n\n- Hiệu quả: 70% bệnh nhân cải thiện\n- Tác dụng phụ: Nhẹ', cat: 6, author: 1, featured: true, views: 78900, hours: 2 },
  { title: 'Cách phòng tránh bệnh cúm mùa đông hiệu quả', slug: 'cach-phong-tranh-cum-mua-dong', excerpt: 'Chuyên gia chia sẻ các biện pháp bảo vệ sức khỏe.', content: '## Phòng bệnh cúm\n\n1. Tiêm vaccine\n2. Rửa tay thường xuyên\n3. Đeo khẩu trang', cat: 6, author: 1, featured: false, views: 45670, hours: 5 },
  { title: '10 thực phẩm tốt cho tim mạch nên ăn hàng ngày', slug: '10-thuc-pham-tot-cho-tim-mach', excerpt: 'Chế độ ăn uống khoa học giúp giảm nguy cơ bệnh tim.', content: '## Dinh dưỡng tim mạch\n\n1. Cá hồi\n2. Quả óc chó\n3. Dầu ô liu\n4. Rau xanh đậm', cat: 6, author: 1, featured: false, views: 34560, hours: 9 },
  { title: 'Yoga và thiền định: Bí quyết giảm stress hiệu quả', slug: 'yoga-thien-dinh-giam-stress', excerpt: 'Nghiên cứu cho thấy yoga giúp giảm 60% căng thẳng.', content: '## Lợi ích Yoga\n\n- Giảm stress 60%\n- Cải thiện giấc ngủ\n- Tăng sự tập trung', cat: 6, author: 1, featured: false, views: 23450, hours: 13 },
  { title: 'Cảnh báo: Tăng đột biến ca mắc sốt xuất huyết', slug: 'canh-bao-sot-xuat-huyet-mien-nam', excerpt: 'Bộ Y tế khuyến cáo tăng cường phòng chống dịch.', content: '## Dịch sốt xuất huyết\n\nSố ca mắc tăng 200% so với cùng kỳ.', cat: 6, author: 1, featured: false, views: 56780, hours: 20 },

  // Đời sống (cat 7, author 5)
  { title: 'Xu hướng sống tối giản: Bớt đồ đạc, thêm hạnh phúc', slug: 'xu-huong-song-toi-gian', excerpt: 'Ngày càng nhiều người trẻ theo đuổi lối sống minimalism.', content: '## Lối sống tối giản\n\n1. Chỉ giữ những gì cần thiết\n2. Chất lượng hơn số lượng', cat: 7, author: 5, featured: false, views: 34560, hours: 1 },
  { title: 'Bí quyết cân bằng công việc và gia đình', slug: 'can-bang-cong-viec-gia-dinh', excerpt: 'Chuyên gia tâm lý chia sẻ cách quản lý thời gian.', content: '## Work-Life Balance\n\n- Đặt ranh giới rõ ràng\n- Ưu tiên sức khỏe', cat: 7, author: 5, featured: false, views: 23450, hours: 4 },
  { title: 'Thú cưng: Người bạn đồng hành giúp giảm cô đơn', slug: 'thu-cung-nguoi-ban-dong-hanh', excerpt: 'Nuôi thú cưng giúp cải thiện sức khỏe tinh thần.', content: '## Lợi ích thú cưng\n\n1. Giảm stress\n2. Tăng vận động\n3. Mở rộng quan hệ xã hội', cat: 7, author: 5, featured: false, views: 45670, hours: 7 },
  { title: 'Mẹo tiết kiệm chi tiêu cho gia đình trẻ', slug: 'meo-tiet-kiem-chi-tieu-gia-dinh', excerpt: 'Cách quản lý tài chính thông minh trong thời kỳ lạm phát.', content: '## Tiết kiệm thông minh\n\n1. Lập ngân sách\n2. Nấu ăn tại nhà\n3. Mua sắm có kế hoạch', cat: 7, author: 5, featured: false, views: 56780, hours: 12 },
  { title: 'Làm thế nào để xây dựng thói quen đọc sách', slug: 'xay-dung-thoi-quen-doc-sach', excerpt: 'Đọc sách 30 phút mỗi ngày có thể thay đổi cuộc sống.', content: '## Thói quen đọc sách\n\n1. Bắt đầu với 10 phút/ngày\n2. Chọn sách phù hợp', cat: 7, author: 5, featured: false, views: 34560, hours: 16 },

  // Giáo dục (cat 8, author 2)
  { title: 'Điểm chuẩn đại học 2024: Nhiều ngành tăng mạnh', slug: 'diem-chuan-dai-hoc-2024', excerpt: 'Các ngành CNTT và y dược có điểm chuẩn cao nhất.', content: '## Điểm chuẩn 2024\n\n1. Y đa khoa: 28.5 điểm\n2. CNTT: 27.8 điểm\n3. Kinh tế: 26.5 điểm', cat: 8, author: 2, featured: true, views: 234560, hours: 2 },
  { title: 'Học sinh Việt Nam giành 6 HCV Olympic Toán quốc tế', slug: 'hoc-sinh-viet-nam-6-hcv-olympic-toan', excerpt: 'Đoàn Việt Nam đạt thành tích cao nhất trong lịch sử.', content: '## IMO 2024\n\n- 6 Huy chương Vàng\n- Xếp hạng 3 toàn đoàn', cat: 8, author: 2, featured: true, views: 156780, hours: 6 },
  { title: 'Chương trình giáo dục STEM được triển khai toàn quốc', slug: 'chuong-trinh-giao-duc-stem-toan-quoc', excerpt: 'Bộ GD&ĐT đưa STEM vào chương trình chính khóa.', content: '## Giáo dục STEM\n\n1. Khoa học\n2. Công nghệ\n3. Kỹ thuật\n4. Toán học', cat: 8, author: 2, featured: false, views: 67890, hours: 9 },
  { title: 'Du học Nhật Bản: Cơ hội và thách thức', slug: 'du-hoc-nhat-ban-co-hoi-thach-thuc', excerpt: 'Nhật Bản vẫn là điểm đến du học hấp dẫn.', content: '## Du học Nhật Bản\n\n### Ưu điểm\n- Chất lượng giáo dục cao\n- Học bổng đa dạng', cat: 8, author: 2, featured: false, views: 45670, hours: 14 },
  { title: 'Trường học thông minh: Xu hướng giáo dục tương lai', slug: 'truong-hoc-thong-minh-xu-huong', excerpt: 'Nhiều trường áp dụng công nghệ AI trong giảng dạy.', content: '## Smart School\n\n1. AI hỗ trợ học tập\n2. Thực tế ảo (VR)\n3. Bảng tương tác', cat: 8, author: 2, featured: false, views: 34560, hours: 19 },

  // Du lịch (cat 9, author 3)
  { title: 'Phú Quốc lọt top 10 đảo đẹp nhất thế giới 2024', slug: 'phu-quoc-top-10-dao-dep-nhat', excerpt: 'Travel + Leisure bình chọn Phú Quốc trong danh sách danh giá.', content: '## Phú Quốc - Đảo Ngọc\n\n1. Bãi biển hoang sơ\n2. Ẩm thực phong phú\n3. Cơ sở hạ tầng hiện đại', cat: 9, author: 3, featured: true, views: 89120, hours: 1 },
  { title: 'Khám phá Sapa mùa lúa chín vàng óng', slug: 'kham-pha-sapa-mua-lua-chin', excerpt: 'Tháng 9-10 là thời điểm đẹp nhất để ngắm ruộng bậc thang.', content: '## Sapa mùa vàng\n\n1. Bản Cát Cát\n2. Thung lũng Mường Hoa\n3. Đỉnh Fansipan', cat: 9, author: 3, featured: false, views: 67890, hours: 5 },
  { title: 'Hội An - Điểm đến lãng mạn nhất Đông Nam Á', slug: 'hoi-an-diem-den-lang-man-nhat', excerpt: 'Phố cổ Hội An được CNN bình chọn là điểm đến lãng mạn.', content: '## Hội An\n\n1. Thả đèn hoa đăng\n2. May áo dài\n3. Ẩm thực đường phố', cat: 9, author: 3, featured: true, views: 78900, hours: 8 },
  { title: '5 điểm cắm trại đẹp nhất gần Hà Nội', slug: '5-diem-cam-trai-dep-gan-ha-noi', excerpt: 'Những địa điểm lý tưởng để thoát khỏi thành phố.', content: '## Camping gần Hà Nội\n\n1. Hồ Đồng Đò\n2. Núi Hàm Lợn\n3. Hồ Quan Sơn', cat: 9, author: 3, featured: false, views: 56780, hours: 11 },
  { title: 'Việt Nam đón 15 triệu lượt khách quốc tế năm 2024', slug: 'viet-nam-don-15-trieu-khach-quoc-te', excerpt: 'Du lịch Việt Nam phục hồi mạnh mẽ sau đại dịch.', content: '## Du lịch 2024\n\n- 15 triệu khách quốc tế\n- 110 triệu khách nội địa', cat: 9, author: 3, featured: false, views: 45670, hours: 17 },

  // Xe (cat 10, author 4)
  { title: 'VinFast VF 9 chính thức bàn giao cho khách hàng', slug: 'vinfast-vf9-ban-giao-khach-hang', excerpt: 'Mẫu SUV điện hạng sang bắt đầu đến tay người dùng.', content: '## VinFast VF 9\n\n- Động cơ: 402 mã lực\n- Pin: 123 kWh\n- Tầm xa: 594 km', cat: 10, author: 4, featured: true, views: 78900, hours: 2 },
  { title: 'Toyota Vios 2024 ra mắt với nhiều nâng cấp', slug: 'toyota-vios-2024-ra-mat', excerpt: 'Mẫu sedan bán chạy nhất Việt Nam có phiên bản mới.', content: '## Toyota Vios 2024\n\n1. Thiết kế mới\n2. Màn hình 9 inch\n3. Toyota Safety Sense', cat: 10, author: 4, featured: false, views: 56780, hours: 6 },
  { title: 'Xe máy điện VinFast Vento S bán chạy nhất', slug: 'vinfast-vento-s-ban-chay-nhat', excerpt: 'Mẫu xe máy điện chiếm 60% thị phần xe điện.', content: '## VinFast Vento S\n\n- Giá: 56 triệu đồng\n- Tầm xa: 200 km', cat: 10, author: 4, featured: false, views: 45670, hours: 10 },
  { title: 'Giá xăng giảm mạnh, về mức thấp nhất 2 năm', slug: 'gia-xang-giam-manh-thap-nhat-2-nam', excerpt: 'Giá xăng RON 95 giảm còn 20.500 đồng/lít.', content: '## Giá xăng dầu\n\n- RON 95: 20.500 đồng/lít\n- E5 RON 92: 19.800 đồng/lít', cat: 10, author: 4, featured: false, views: 89120, hours: 14 },
  { title: 'Hà Nội cấm xe máy vào nội đô từ năm 2030', slug: 'ha-noi-cam-xe-may-noi-do-2030', excerpt: 'UBND TP Hà Nội công bố lộ trình hạn chế xe máy.', content: '## Lộ trình cấm xe máy\n\n1. 2025: Cấm một số tuyến\n2. 2027: Mở rộng vùng cấm\n3. 2030: Cấm toàn bộ nội đô', cat: 10, author: 4, featured: false, views: 123450, hours: 22 }
];

async function seed() {
  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    for (const a of articles) {
      const publishedAt = new Date(Date.now() - a.hours * 60 * 60 * 1000);
      await client.query(
        `INSERT INTO articles (title, slug, excerpt, content, category_id, author_id, status, published_at, is_featured, view_count, reading_time)
         VALUES ($1, $2, $3, $4, $5, $6, 'published', $7, $8, $9, $10)`,
        [a.title, a.slug, a.excerpt, a.content, a.cat, a.author, publishedAt, a.featured, a.views, Math.ceil(a.content.length / 500)]
      );
    }
    console.log(`✓ Inserted ${articles.length} articles`);
    console.log('\n✅ Seed completed!');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

seed();
