require('dotenv').config({ path: '../frontend/.env.local' });
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const facts = [
  {
    title: "Mật ong không bao giờ hỏng",
    content: "Mật ong là thực phẩm duy nhất không bao giờ hỏng. Các nhà khảo cổ đã tìm thấy mật ong 3000 năm tuổi trong các lăng mộ Ai Cập và nó vẫn có thể ăn được. Điều này là do mật ong có độ pH thấp, hàm lượng đường cao và chứa hydrogen peroxide tự nhiên.",
    excerpt: "Mật ong là thực phẩm duy nhất không bao giờ hỏng, ngay cả sau hàng nghìn năm."
  },
  {
    title: "Bạch tuộc có 3 trái tim",
    content: "Bạch tuộc có 3 trái tim - 2 trái tim bơm máu đến mang và 1 trái tim bơm máu đến phần còn lại của cơ thể. Điều thú vị là trái tim chính ngừng đập khi bạch tuộc bơi, đó là lý do tại sao chúng thích bò hơn bơi.",
    excerpt: "Bạch tuộc sở hữu 3 trái tim với chức năng khác nhau."
  },
  {
    title: "Sao Thổ có thể nổi trên nước",
    content: "Mặc dù là hành tinh lớn thứ hai trong hệ Mặt Trời, Sao Thổ có mật độ thấp đến mức nếu có một bể nước đủ lớn, nó sẽ nổi. Mật độ trung bình của Sao Thổ chỉ khoảng 0.687 g/cm³, thấp hơn nước (1 g/cm³).",
    excerpt: "Sao Thổ có mật độ thấp đến mức có thể nổi trên nước."
  },
  {
    title: "Con người chia sẻ 60% DNA với chuối",
    content: "Con người chia sẻ khoảng 60% DNA với chuối. Điều này nghe có vẻ kỳ lạ nhưng thực tế là tất cả sinh vật sống đều có chung tổ tiên và nhiều gen cơ bản được bảo tồn qua hàng tỷ năm tiến hóa.",
    excerpt: "Con người và chuối có chung 60% mã di truyền."
  },
  {
    title: "Một ngày trên Sao Kim dài hơn một năm",
    content: "Sao Kim quay quanh trục của nó rất chậm - mất 243 ngày Trái Đất để hoàn thành một vòng quay. Trong khi đó, nó chỉ mất 225 ngày để quay quanh Mặt Trời. Vì vậy, một ngày trên Sao Kim dài hơn một năm của nó!",
    excerpt: "Sao Kim có ngày dài hơn năm do tốc độ quay chậm."
  },
  {
    title: "Não người sử dụng 20% năng lượng cơ thể",
    content: "Mặc dù chỉ chiếm khoảng 2% trọng lượng cơ thể, não bộ tiêu thụ khoảng 20% tổng năng lượng của cơ thể. Não cần năng lượng liên tục để duy trì hoạt động của hàng tỷ tế bào thần kinh.",
    excerpt: "Não bộ tiêu thụ 20% năng lượng dù chỉ chiếm 2% trọng lượng."
  },
  {
    title: "Ánh sáng Mặt Trời mất 8 phút để đến Trái Đất",
    content: "Ánh sáng di chuyển với tốc độ khoảng 300,000 km/giây, nhưng khoảng cách từ Mặt Trời đến Trái Đất là khoảng 150 triệu km. Vì vậy, ánh sáng mất khoảng 8 phút 20 giây để đi từ Mặt Trời đến Trái Đất.",
    excerpt: "Ánh sáng Mặt Trời cần hơn 8 phút để đến được Trái Đất."
  },
  {
    title: "Cá heo ngủ với một nửa não",
    content: "Cá heo thực hiện 'giấc ngủ một bán cầu' - chỉ một nửa não ngủ trong khi nửa còn lại vẫn tỉnh táo. Điều này cho phép chúng tiếp tục bơi lên mặt nước để thở và cảnh giác với kẻ săn mồi.",
    excerpt: "Cá heo có khả năng ngủ với chỉ một nửa não hoạt động."
  },
  {
    title: "Có nhiều cây trên Trái Đất hơn sao trong Dải Ngân Hà",
    content: "Trái Đất có khoảng 3 nghìn tỷ cây, trong khi Dải Ngân Hà chỉ có khoảng 100-400 tỷ ngôi sao. Điều này có nghĩa là có ít nhất 7 cây cho mỗi ngôi sao trong thiên hà của chúng ta.",
    excerpt: "Số lượng cây trên Trái Đất vượt xa số sao trong Dải Ngân Hà."
  },
  {
    title: "Tim người đập khoảng 100,000 lần mỗi ngày",
    content: "Trái tim con người đập trung bình khoảng 100,000 lần mỗi ngày, bơm khoảng 7,500 lít máu. Trong suốt cuộc đời, tim đập khoảng 2.5 tỷ lần và bơm đủ máu để đổ đầy 200 toa tàu hỏa.",
    excerpt: "Tim người thực hiện khoảng 100,000 nhịp đập mỗi ngày."
  },
  {
    title: "Ốc sên có thể ngủ 3 năm liên tục",
    content: "Ốc sên cần độ ẩm để tồn tại. Nếu thời tiết không thuận lợi, chúng có thể ngủ đông lên đến 3 năm. Trong thời gian này, chúng tiết ra một lớp chất nhầy để bảo vệ cơ thể khỏi khô.",
    excerpt: "Ốc sên có khả năng ngủ đông lên đến 3 năm."
  },
  {
    title: "Vân tay của koala giống hệt con người",
    content: "Koala là một trong số ít động vật có vân tay, và vân tay của chúng gần như không thể phân biệt với vân tay người, ngay cả dưới kính hiển vi. Điều này đã từng gây nhầm lẫn tại các hiện trường tội phạm ở Úc!",
    excerpt: "Vân tay koala giống vân tay người đến mức khó phân biệt."
  },
  {
    title: "Một đám mây có thể nặng hơn 1 triệu pound",
    content: "Một đám mây tích trung bình chứa khoảng 500 triệu gram nước, tương đương hơn 1 triệu pound. Chúng vẫn nổi được vì nước được phân tán thành hàng tỷ giọt nhỏ li ti trải rộng trên diện tích lớn.",
    excerpt: "Đám mây có thể chứa hàng triệu pound nước."
  },
  {
    title: "Tia sét nóng gấp 5 lần bề mặt Mặt Trời",
    content: "Nhiệt độ của tia sét có thể đạt 30,000 Kelvin (khoảng 29,700°C), trong khi bề mặt Mặt Trời chỉ khoảng 5,500°C. Nhiệt độ cực cao này khiến không khí xung quanh giãn nở nhanh chóng, tạo ra tiếng sấm.",
    excerpt: "Tia sét có nhiệt độ cao gấp 5 lần bề mặt Mặt Trời."
  },
  {
    title: "Chuột túi không thể đi lùi",
    content: "Do cấu tạo chân sau lớn và đuôi dày, chuột túi không thể đi lùi. Đây là lý do tại sao chuột túi được chọn làm biểu tượng trên quốc huy Úc - tượng trưng cho sự tiến về phía trước.",
    excerpt: "Chuột túi không có khả năng di chuyển lùi."
  },
  {
    title: "Mỗi người có mùi cơ thể độc nhất",
    content: "Giống như vân tay, mỗi người có mùi cơ thể riêng biệt (trừ cặp song sinh giống hệt). Mùi này được xác định bởi gen, chế độ ăn uống, và vi khuẩn trên da. Chó có thể phân biệt người qua mùi này.",
    excerpt: "Mùi cơ thể của mỗi người là duy nhất như vân tay."
  },
  {
    title: "Vũ trụ có mùi như thịt nướng",
    content: "Các phi hành gia mô tả mùi của không gian giống như thịt nướng, kim loại nóng và khói thuốc súng. Mùi này đến từ các hợp chất hóa học được tạo ra khi các ngôi sao chết và bụi vũ trụ.",
    excerpt: "Không gian vũ trụ có mùi giống thịt nướng và kim loại."
  },
  {
    title: "Xương đùi cứng hơn bê tông",
    content: "Xương đùi người có thể chịu lực nén lên đến 1,700 kg trước khi gãy, cứng hơn bê tông cùng kích thước. Xương được cấu tạo từ collagen và canxi phosphate, tạo nên sự kết hợp vừa cứng vừa dẻo.",
    excerpt: "Xương đùi người cứng và chắc hơn cả bê tông."
  },
  {
    title: "Có nhiều vi khuẩn trong cơ thể hơn tế bào người",
    content: "Cơ thể người chứa khoảng 37 nghìn tỷ tế bào, nhưng có đến 100 nghìn tỷ vi khuẩn sống trong và trên cơ thể. Phần lớn vi khuẩn này có lợi và giúp tiêu hóa, miễn dịch và nhiều chức năng khác.",
    excerpt: "Vi khuẩn trong cơ thể nhiều gấp 3 lần số tế bào người."
  },
  {
    title: "Mắt người có thể phân biệt 10 triệu màu",
    content: "Mắt người có khoảng 6-7 triệu tế bào hình nón cho phép nhìn màu sắc. Với 3 loại tế bào nón (đỏ, xanh lá, xanh dương), mắt có thể phân biệt khoảng 10 triệu màu sắc khác nhau.",
    excerpt: "Mắt người có khả năng phân biệt đến 10 triệu màu sắc."
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

async function resetFacts() {
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
    
    // Get all category IDs for random assignment
    const categoryResult = await client.query("SELECT id, name FROM categories");
    if (categoryResult.rows.length === 0) {
      console.log('No categories found');
      return;
    }
    const categories = categoryResult.rows;
    console.log(`Found ${categories.length} categories`);
    
    // Insert new Fact articles with random categories
    let inserted = 0;
    for (const fact of facts) {
      const slug = generateSlug(fact.title) + '-' + Date.now().toString().slice(-6) + Math.random().toString(36).slice(-3);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      await client.query(
        `INSERT INTO articles (title, slug, content, excerpt, author_id, category_id, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, 'published', NOW(), NOW(), NOW())`,
        [fact.title, slug, fact.content, fact.excerpt, adminId, randomCategory.id]
      );
      console.log(`+ ${fact.title.slice(0, 40)}... -> ${randomCategory.name}`);
      inserted++;
    }
    
    console.log(`\n✅ Created ${inserted} new Fact articles by Admin`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

resetFacts();
