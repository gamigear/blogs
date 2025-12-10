const path = require('path');
const { Client } = require(path.join(__dirname, '../frontend/node_modules/pg'));

const categories = [
  { name: 'Thời sự', slug: 'thoi-su', description: 'Tin tức thời sự trong nước và quốc tế', is_default: true },
  { name: 'Kinh doanh', slug: 'kinh-doanh', description: 'Tin tức kinh tế, tài chính, doanh nghiệp' },
  { name: 'Công nghệ', slug: 'cong-nghe', description: 'Tin tức công nghệ, khoa học, đổi mới sáng tạo' },
  { name: 'Thể thao', slug: 'the-thao', description: 'Tin tức thể thao trong nước và quốc tế' },
  { name: 'Giải trí', slug: 'giai-tri', description: 'Tin tức giải trí, showbiz, âm nhạc, phim ảnh' },
  { name: 'Sức khỏe', slug: 'suc-khoe', description: 'Tin tức y tế, sức khỏe, đời sống' },
  { name: 'Đời sống', slug: 'doi-song', description: 'Tin tức đời sống, gia đình, xã hội' },
  { name: 'Giáo dục', slug: 'giao-duc', description: 'Tin tức giáo dục, tuyển sinh, học tập' },
  { name: 'Du lịch', slug: 'du-lich', description: 'Tin tức du lịch, khám phá, ẩm thực' },
  { name: 'Xe', slug: 'xe', description: 'Tin tức ô tô, xe máy, giao thông' }
];

const authors = [
  { name: 'Nguyễn Văn An', email: 'an.nguyen@bobatea.vn', slug: 'nguyen-van-an', bio: 'Phóng viên chuyên mục Thời sự' },
  { name: 'Trần Thị Bình', email: 'binh.tran@bobatea.vn', slug: 'tran-thi-binh', bio: 'Biên tập viên Kinh doanh' },
  { name: 'Lê Minh Cường', email: 'cuong.le@bobatea.vn', slug: 'le-minh-cuong', bio: 'Chuyên gia Công nghệ' },
  { name: 'Phạm Hồng Đào', email: 'dao.pham@bobatea.vn', slug: 'pham-hong-dao', bio: 'Phóng viên Thể thao' },
  { name: 'Hoàng Thị Em', email: 'em.hoang@bobatea.vn', slug: 'hoang-thi-em', bio: 'Biên tập viên Giải trí' }
];

async function seed() {
  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    // Clear existing data
    await client.query('TRUNCATE articles, categories, authors RESTART IDENTITY CASCADE');
    console.log('✓ Cleared existing data');

    // Insert categories
    for (const cat of categories) {
      await client.query(
        'INSERT INTO categories (name, slug, description, is_default) VALUES ($1, $2, $3, $4)',
        [cat.name, cat.slug, cat.description, cat.is_default || false]
      );
    }
    console.log('✓ Inserted 10 categories');

    // Insert authors
    for (const author of authors) {
      await client.query(
        'INSERT INTO authors (name, email, slug, bio) VALUES ($1, $2, $3, $4)',
        [author.name, author.email, author.slug, author.bio]
      );
    }
    console.log('✓ Inserted 5 authors');

    console.log('\n✅ Categories and authors seeded! Run seed-articles.js next.');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

seed();
