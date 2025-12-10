import { NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

const samplePosts = [
  {
    content: 'Vừa setup xong góc làm việc mới tại nhà! Sau 2 tuần nghiên cứu và đặt hàng, cuối cùng cũng hoàn thành. Monitor 27" 4K, bàn phím cơ custom, và đèn LED RGB cho không gian thêm sinh động 🎮💻',
    images: [
      'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800',
      'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800',
    ],
    likes_count: 45,
  },
  {
    content: 'Review nhanh iPhone 15 Pro Max sau 1 tháng sử dụng:\n\n✅ Camera zoom 5x quá đỉnh\n✅ Action button tiện lợi\n✅ Titanium nhẹ hơn hẳn\n❌ Pin vẫn chưa như kỳ vọng\n❌ Giá hơi cao\n\nTổng thể 8.5/10, đáng để upgrade từ 13 Pro trở xuống!',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
    ],
    likes_count: 128,
  },
  {
    content: 'Cuối tuần vừa rồi đi Đà Lạt, thời tiết đẹp quá trời! Nhiệt độ chỉ 18-22 độ, sương mù buổi sáng tạo cảm giác như đang ở châu Âu vậy 🌲☁️\n\nĐịa điểm: Đồi chè Cầu Đất',
    images: [
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    ],
    likes_count: 89,
  },
  {
    content: 'Mới mua được con MacBook Pro M3 Max, build code nhanh gấp 3 lần con Intel cũ 🚀\n\nCompile project React Native từ 8 phút xuống còn 2 phút 30 giây. Đáng đồng tiền bát gạo!',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    ],
    likes_count: 67,
  },
  {
    content: 'Chia sẻ bộ sưu tập sneaker của mình sau 3 năm collect 👟\n\nTừ trái qua: Jordan 1 Chicago, Yeezy 350 Zebra, Nike Dunk Low Panda, New Balance 550\n\nCon nào các bạn thích nhất?',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
    ],
    likes_count: 156,
  },
  {
    content: 'Nấu bữa tối cho gia đình hôm nay: Bò hầm rượu vang kiểu Pháp 🍷🥩\n\nMất 3 tiếng nhưng kết quả xứng đáng. Thịt mềm tan trong miệng, nước sốt đậm đà. Ai muốn công thức comment nhé!',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    ],
    likes_count: 234,
  },
  {
    content: 'Vừa hoàn thành chuyến road trip Sài Gòn - Nha Trang bằng xe máy! 450km trong 2 ngày, đường đẹp, cảnh đẹp, đồ ăn ngon 🏍️\n\nHighlight: Đèo Cả lúc hoàng hôn, view biển tuyệt vời!',
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
    ],
    likes_count: 312,
  },
  {
    content: 'Unbox bộ Lego Technic Porsche 911 GT3 RS! 2704 miếng, dự kiến build trong 1 tuần 😅\n\nĐây là set Lego đắt nhất mình từng mua, nhưng nhìn chi tiết thì quá đáng đồng tiền.',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
    likes_count: 78,
  },
  {
    content: 'Tips chụp ảnh đêm bằng điện thoại:\n\n1. Dùng tripod hoặc đặt điện thoại cố định\n2. Bật Night Mode\n3. Giảm ISO thủ công nếu được\n4. Chỉnh WB về 4000K cho tone ấm\n\nẢnh mình chụp bằng Pixel 8 Pro tại Hội An 📸',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    ],
    likes_count: 445,
  },
  {
    content: 'Mới adopt được bé mèo từ trạm cứu hộ! Tên là Mochi, 4 tháng tuổi, siêu quậy nhưng cũng siêu đáng yêu 🐱❤️\n\nCó ai nuôi mèo cho mình xin tips chăm sóc với ạ!',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800',
    ],
    likes_count: 567,
  },
];

export async function GET() {
  try {
    // Get a user to assign posts to
    const user = await queryOne<{ id: number }>(
      'SELECT id FROM users ORDER BY id LIMIT 1'
    );

    if (!user) {
      return NextResponse.json({ error: 'No users found. Please create a user first.' }, { status: 400 });
    }

    const createdPosts = [];

    for (const post of samplePosts) {
      // Random date within last 7 days
      const daysAgo = Math.floor(Math.random() * 7);
      const hoursAgo = Math.floor(Math.random() * 24);
      const createdAt = new Date();
      createdAt.setDate(createdAt.getDate() - daysAgo);
      createdAt.setHours(createdAt.getHours() - hoursAgo);

      const result = await query<{ id: number }>(
        `INSERT INTO community_posts (title, content, images, user_id, status, likes_count, created_at)
         VALUES ($1, $2, $3, $4, 'approved', $5, $6)
         RETURNING id`,
        ['', post.content, JSON.stringify(post.images), user.id, post.likes_count, createdAt.toISOString()]
      );

      createdPosts.push(result[0]);
    }

    return NextResponse.json({
      success: true,
      message: `Created ${createdPosts.length} sample feed posts`,
      posts: createdPosts,
    });
  } catch (error: any) {
    console.error('Sample feed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
