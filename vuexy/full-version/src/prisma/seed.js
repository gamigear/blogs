const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Simple password hashing for seed (same algorithm as libs/password.js)
async function hashPassword(password) {
  const encoder = new TextEncoder()
  const salt = crypto.getRandomValues(new Uint8Array(16))

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits']
  )

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-512'
    },
    keyMaterial,
    64 * 8
  )

  const hashArray = new Uint8Array(derivedBits)
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('')
  const hashHex = Array.from(hashArray).map(b => b.toString(16).padStart(2, '0')).join('')

  return `${saltHex}:${hashHex}`
}

async function main() {
  console.log('🌱 Starting seed...')

  // Clean existing data
  await prisma.activityLog.deleteMany()
  await prisma.passwordReset.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.wishlistItem.deleteMany()
  await prisma.wishlist.deleteMany()
  await prisma.cartItem.deleteMany()
  await prisma.cart.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.customerAddress.deleteMany()
  await prisma.customer.deleteMany()
  await prisma.productReview.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()
  await prisma.productCategory.deleteMany()
  await prisma.blogComment.deleteMany()
  await prisma.blogPostTag.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.blogTag.deleteMany()
  await prisma.blogCategory.deleteMany()
  await prisma.user.deleteMany()

  // ==================== Admin Users ====================
  console.log('Creating admin users...')

  const adminPassword = await hashPassword('Admin@123')
  const userPassword = await hashPassword('User@123')

  await Promise.all([
    prisma.user.create({
      data: {
        name: 'Super Admin',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'SUPER_ADMIN',
        status: 'ACTIVE',
        emailVerified: new Date()
      }
    }),
    prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'manager@example.com',
        password: adminPassword,
        role: 'ADMIN',
        status: 'ACTIVE',
        emailVerified: new Date()
      }
    }),
    prisma.user.create({
      data: {
        name: 'Editor User',
        email: 'editor@example.com',
        password: userPassword,
        role: 'EDITOR',
        status: 'ACTIVE',
        emailVerified: new Date()
      }
    }),
    prisma.user.create({
      data: {
        name: 'Normal User',
        email: 'user@example.com',
        password: userPassword,
        role: 'USER',
        status: 'ACTIVE',
        emailVerified: new Date()
      }
    })
  ])

  console.log('✅ Admin users created')
  console.log('   - admin@example.com / Admin@123 (SUPER_ADMIN)')
  console.log('   - manager@example.com / Admin@123 (ADMIN)')
  console.log('   - editor@example.com / User@123 (EDITOR)')
  console.log('   - user@example.com / User@123 (USER)')

  // ==================== Blog Categories ====================
  const blogCategories = await Promise.all([
    prisma.blogCategory.create({
      data: {
        name: 'Điểm đến',
        slug: 'diem-den',
        description: 'Khám phá các điểm đến du lịch hấp dẫn',
        image: '/images/blog/destinations.jpg'
      }
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Ẩm thực',
        slug: 'am-thuc',
        description: 'Trải nghiệm ẩm thực địa phương',
        image: '/images/blog/food.jpg'
      }
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Mẹo du lịch',
        slug: 'meo-du-lich',
        description: 'Kinh nghiệm và mẹo hay khi đi du lịch',
        image: '/images/blog/tips.jpg'
      }
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Văn hóa',
        slug: 'van-hoa',
        description: 'Tìm hiểu văn hóa các vùng miền',
        image: '/images/blog/culture.jpg'
      }
    })
  ])

  console.log('✅ Blog categories created')

  // ==================== Blog Tags ====================
  const blogTags = await Promise.all([
    prisma.blogTag.create({ data: { name: 'Việt Nam', slug: 'viet-nam' } }),
    prisma.blogTag.create({ data: { name: 'Biển đảo', slug: 'bien-dao' } }),
    prisma.blogTag.create({ data: { name: 'Núi rừng', slug: 'nui-rung' } }),
    prisma.blogTag.create({ data: { name: 'Phượt', slug: 'phuot' } }),
    prisma.blogTag.create({ data: { name: 'Gia đình', slug: 'gia-dinh' } }),
    prisma.blogTag.create({ data: { name: 'Budget', slug: 'budget' } }),
    prisma.blogTag.create({ data: { name: 'Luxury', slug: 'luxury' } }),
    prisma.blogTag.create({ data: { name: 'Đông Nam Á', slug: 'dong-nam-a' } })
  ])

  console.log('✅ Blog tags created')

  // ==================== Blog Posts ====================
  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        title: 'Top 10 bãi biển đẹp nhất Việt Nam năm 2024',
        slug: 'top-10-bai-bien-dep-nhat-viet-nam-2024',
        excerpt: 'Khám phá những bãi biển tuyệt đẹp từ Bắc vào Nam, nơi bạn có thể tận hưởng kỳ nghỉ hoàn hảo.',
        content: `<h2>1. Bãi biển Mỹ Khê - Đà Nẵng</h2>
<p>Được tạp chí Forbes bình chọn là một trong những bãi biển quyến rũ nhất hành tinh, Mỹ Khê sở hữu bờ cát trắng mịn trải dài và làn nước trong xanh.</p>

<h2>2. Bãi Dài - Phú Quốc</h2>
<p>Với chiều dài gần 20km, Bãi Dài là thiên đường cho những ai yêu thích sự yên bình và hoang sơ.</p>

<h2>3. Bãi biển Nha Trang</h2>
<p>Nha Trang nổi tiếng với vịnh biển đẹp, nước biển trong xanh và hệ thống resort cao cấp.</p>

<h2>4. Bãi Sao - Phú Quốc</h2>
<p>Bãi Sao được mệnh danh là bãi biển đẹp nhất Phú Quốc với cát trắng như tuyết.</p>

<h2>5. Bãi biển An Bàng - Hội An</h2>
<p>Nằm cách phố cổ Hội An khoảng 4km, An Bàng mang vẻ đẹp bình yên và thơ mộng.</p>`,
        featuredImage: '/images/blog/beach-vietnam.jpg',
        categoryId: blogCategories[0].id,
        authorName: 'Nguyễn Văn Travel',
        authorAvatar: '/images/avatars/1.png',
        status: 'published',
        viewCount: 1520,
        publishedAt: new Date('2024-01-15'),
        tags: {
          create: [
            { tagId: blogTags[0].id },
            { tagId: blogTags[1].id }
          ]
        }
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Hành trình khám phá Sapa - Thiên đường mây trắng',
        slug: 'hanh-trinh-kham-pha-sapa-thien-duong-may-trang',
        excerpt: 'Sapa với những thửa ruộng bậc thang tuyệt đẹp và văn hóa đặc sắc của đồng bào dân tộc.',
        content: `<h2>Giới thiệu về Sapa</h2>
<p>Sapa là một thị trấn vùng cao thuộc tỉnh Lào Cai, nổi tiếng với cảnh quan thiên nhiên hùng vĩ và văn hóa đa dạng của các dân tộc thiểu số.</p>

<h2>Thời điểm đẹp nhất để đến Sapa</h2>
<p>Mùa lúa chín (tháng 9-10) là thời điểm đẹp nhất để chiêm ngưỡng ruộng bậc thang vàng óng.</p>

<h2>Các điểm tham quan không thể bỏ qua</h2>
<ul>
<li>Đỉnh Fansipan - Nóc nhà Đông Dương</li>
<li>Bản Cát Cát</li>
<li>Thung lũng Mường Hoa</li>
<li>Núi Hàm Rồng</li>
</ul>`,
        featuredImage: '/images/blog/sapa.jpg',
        categoryId: blogCategories[0].id,
        authorName: 'Trần Thị Hương',
        authorAvatar: '/images/avatars/2.png',
        status: 'published',
        viewCount: 2340,
        publishedAt: new Date('2024-02-20'),
        tags: {
          create: [
            { tagId: blogTags[0].id },
            { tagId: blogTags[2].id },
            { tagId: blogTags[3].id }
          ]
        }
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Ẩm thực đường phố Hà Nội - 20 món ngon phải thử',
        slug: 'am-thuc-duong-pho-ha-noi-20-mon-ngon-phai-thu',
        excerpt: 'Khám phá nền ẩm thực đường phố phong phú của thủ đô ngàn năm văn hiến.',
        content: `<h2>Phở Hà Nội</h2>
<p>Không gì có thể thay thế được bát phở nóng hổi vào buổi sáng sớm tại Hà Nội.</p>

<h2>Bún chả</h2>
<p>Món ăn từng được Tổng thống Obama thưởng thức khi đến Việt Nam.</p>

<h2>Bánh mì</h2>
<p>Bánh mì Việt Nam đã được CNN bình chọn là một trong những món sandwich ngon nhất thế giới.</p>`,
        featuredImage: '/images/blog/hanoi-food.jpg',
        categoryId: blogCategories[1].id,
        authorName: 'Lê Minh Chef',
        authorAvatar: '/images/avatars/3.png',
        status: 'published',
        viewCount: 3100,
        publishedAt: new Date('2024-03-10'),
        tags: {
          create: [
            { tagId: blogTags[0].id },
            { tagId: blogTags[5].id }
          ]
        }
      }
    }),
    prisma.blogPost.create({
      data: {
        title: '15 mẹo tiết kiệm chi phí khi du lịch bụi',
        slug: '15-meo-tiet-kiem-chi-phi-khi-du-lich-bui',
        excerpt: 'Bí quyết để có chuyến đi tiết kiệm mà vẫn trọn vẹn trải nghiệm.',
        content: `<h2>1. Đặt vé máy bay sớm</h2>
<p>Đặt trước 2-3 tháng để có giá tốt nhất.</p>

<h2>2. Sử dụng hostel hoặc homestay</h2>
<p>Tiết kiệm đáng kể so với khách sạn và có cơ hội giao lưu với du khách khác.</p>

<h2>3. Ăn như người địa phương</h2>
<p>Tránh các nhà hàng du lịch, tìm đến quán ăn của người dân.</p>`,
        featuredImage: '/images/blog/budget-travel.jpg',
        categoryId: blogCategories[2].id,
        authorName: 'Phạm Văn Phượt',
        authorAvatar: '/images/avatars/4.png',
        status: 'published',
        viewCount: 4500,
        publishedAt: new Date('2024-03-25'),
        tags: {
          create: [
            { tagId: blogTags[3].id },
            { tagId: blogTags[5].id }
          ]
        }
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Lễ hội truyền thống Việt Nam - Nét đẹp văn hóa ngàn năm',
        slug: 'le-hoi-truyen-thong-viet-nam-net-dep-van-hoa-ngan-nam',
        excerpt: 'Tìm hiểu về các lễ hội đặc sắc diễn ra quanh năm trên khắp Việt Nam.',
        content: `<h2>Tết Nguyên Đán</h2>
<p>Lễ hội lớn nhất trong năm của người Việt, thời điểm sum họp gia đình.</p>

<h2>Lễ hội Chùa Hương</h2>
<p>Diễn ra từ tháng Giêng đến tháng 3 âm lịch tại Hà Nội.</p>

<h2>Lễ hội Đền Hùng</h2>
<p>Giỗ Tổ Hùng Vương - ngày lễ quan trọng tưởng nhớ các vua Hùng.</p>`,
        featuredImage: '/images/blog/festival.jpg',
        categoryId: blogCategories[3].id,
        authorName: 'Hoàng Văn Hóa',
        authorAvatar: '/images/avatars/5.png',
        status: 'published',
        viewCount: 1890,
        publishedAt: new Date('2024-04-05'),
        tags: {
          create: [
            { tagId: blogTags[0].id },
            { tagId: blogTags[4].id }
          ]
        }
      }
    })
  ])

  console.log('✅ Blog posts created')

  // ==================== Product Categories ====================
  const productCategories = await Promise.all([
    prisma.productCategory.create({
      data: {
        name: 'Vali & Túi xách',
        slug: 'vali-tui-xach',
        description: 'Vali kéo, balo du lịch, túi xách tiện dụng',
        image: '/images/products/category-luggage.jpg'
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Phụ kiện du lịch',
        slug: 'phu-kien-du-lich',
        description: 'Gối cổ, bịt mắt, adapter, túi đựng mỹ phẩm',
        image: '/images/products/category-accessories.jpg'
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Đồ dùng cắm trại',
        slug: 'do-dung-cam-trai',
        description: 'Lều, túi ngủ, đèn pin, bếp dã ngoại',
        image: '/images/products/category-camping.jpg'
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Quần áo outdoor',
        slug: 'quan-ao-outdoor',
        description: 'Áo khoác, quần trekking, giày leo núi',
        image: '/images/products/category-clothing.jpg'
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Thiết bị điện tử',
        slug: 'thiet-bi-dien-tu',
        description: 'Action cam, sạc dự phòng, tai nghe',
        image: '/images/products/category-electronics.jpg'
      }
    })
  ])

  console.log('✅ Product categories created')


  // ==================== Products ====================
  const products = await Promise.all([
    // Vali & Túi xách
    prisma.product.create({
      data: {
        name: 'Vali kéo du lịch 24 inch',
        slug: 'vali-keo-du-lich-24-inch',
        sku: 'VAL-001',
        description: 'Vali kéo cao cấp với chất liệu PC chống va đập, khóa TSA, bánh xe 360 độ êm ái. Dung tích 60L phù hợp cho chuyến đi 5-7 ngày.',
        shortDesc: 'Vali 24 inch chất liệu PC cao cấp',
        price: 1890000,
        salePrice: 1590000,
        stock: 50,
        categoryId: productCategories[0].id,
        brand: 'TravelPro',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/vali-1.jpg', isPrimary: true, sortOrder: 0 },
            { url: '/images/products/vali-1-2.jpg', sortOrder: 1 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Balo du lịch chống nước 40L',
        slug: 'balo-du-lich-chong-nuoc-40l',
        sku: 'BAL-001',
        description: 'Balo du lịch dung tích lớn 40L, chất liệu nylon chống nước, nhiều ngăn tiện dụng, đệm lưng thoáng khí.',
        shortDesc: 'Balo 40L chống nước đa năng',
        price: 890000,
        salePrice: 750000,
        stock: 80,
        categoryId: productCategories[0].id,
        brand: 'Osprey',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/balo-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    // Phụ kiện du lịch
    prisma.product.create({
      data: {
        name: 'Gối cổ memory foam cao cấp',
        slug: 'goi-co-memory-foam-cao-cap',
        sku: 'PHU-001',
        description: 'Gối cổ chất liệu memory foam, có túi đựng tiện lợi, hỗ trợ cổ tối ưu khi di chuyển đường dài.',
        shortDesc: 'Gối cổ memory foam êm ái',
        price: 350000,
        salePrice: 290000,
        stock: 150,
        categoryId: productCategories[1].id,
        brand: 'Cabeau',
        status: 'published',
        featured: false,
        images: {
          create: [
            { url: '/images/products/goi-co-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Adapter du lịch đa năng',
        slug: 'adapter-du-lich-da-nang',
        sku: 'PHU-002',
        description: 'Adapter chuyển đổi ổ cắm quốc tế, tương thích 150+ quốc gia, có 2 cổng USB và 1 cổng Type-C.',
        shortDesc: 'Adapter quốc tế 150+ quốc gia',
        price: 450000,
        stock: 200,
        categoryId: productCategories[1].id,
        brand: 'Anker',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/adapter-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Bộ túi đựng đồ du lịch 6 món',
        slug: 'bo-tui-dung-do-du-lich-6-mon',
        sku: 'PHU-003',
        description: 'Bộ 6 túi đựng quần áo, giày dép, mỹ phẩm giúp sắp xếp vali gọn gàng. Chất liệu nylon chống thấm.',
        shortDesc: 'Bộ 6 túi organizer cho vali',
        price: 250000,
        salePrice: 199000,
        stock: 300,
        categoryId: productCategories[1].id,
        brand: 'TravelMate',
        status: 'published',
        images: {
          create: [
            { url: '/images/products/tui-dung-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    // Đồ dùng cắm trại
    prisma.product.create({
      data: {
        name: 'Lều cắm trại 2 người chống mưa',
        slug: 'leu-cam-trai-2-nguoi-chong-mua',
        sku: 'CAM-001',
        description: 'Lều 2 lớp chống mưa 3000mm, khung nhôm nhẹ, dễ dàng lắp đặt trong 5 phút. Trọng lượng chỉ 2.5kg.',
        shortDesc: 'Lều 2 người siêu nhẹ 2.5kg',
        price: 1500000,
        salePrice: 1290000,
        stock: 40,
        categoryId: productCategories[2].id,
        brand: 'NatureHike',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/leu-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Túi ngủ mùa đông -5°C',
        slug: 'tui-ngu-mua-dong-am-5-do',
        sku: 'CAM-002',
        description: 'Túi ngủ lông vũ giữ ấm đến -5°C, trọng lượng 1.2kg, có thể nén nhỏ gọn.',
        shortDesc: 'Túi ngủ giữ ấm -5°C',
        price: 1200000,
        stock: 60,
        categoryId: productCategories[2].id,
        brand: 'Aegismax',
        status: 'published',
        images: {
          create: [
            { url: '/images/products/tui-ngu-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Đèn pin LED cắm trại 1000 lumen',
        slug: 'den-pin-led-cam-trai-1000-lumen',
        sku: 'CAM-003',
        description: 'Đèn pin LED siêu sáng 1000 lumen, pin sạc USB, chống nước IPX6, có thể dùng làm sạc dự phòng.',
        shortDesc: 'Đèn pin 1000 lumen chống nước',
        price: 550000,
        salePrice: 450000,
        stock: 100,
        categoryId: productCategories[2].id,
        brand: 'Fenix',
        status: 'published',
        images: {
          create: [
            { url: '/images/products/den-pin-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    // Quần áo outdoor
    prisma.product.create({
      data: {
        name: 'Áo khoác gió chống nước 3 lớp',
        slug: 'ao-khoac-gio-chong-nuoc-3-lop',
        sku: 'OUT-001',
        description: 'Áo khoác 3 lớp với công nghệ chống nước 10000mm, thoáng khí, có mũ trùm có thể tháo rời.',
        shortDesc: 'Áo khoác 3 lớp chống nước',
        price: 1890000,
        salePrice: 1590000,
        stock: 70,
        categoryId: productCategories[3].id,
        brand: 'The North Face',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/ao-khoac-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Giày leo núi chống trượt',
        slug: 'giay-leo-nui-chong-truot',
        sku: 'OUT-002',
        description: 'Giày trekking đế Vibram chống trượt, chống nước, bảo vệ mắt cá chân, phù hợp địa hình khó.',
        shortDesc: 'Giày trekking đế Vibram',
        price: 2500000,
        salePrice: 2190000,
        stock: 45,
        categoryId: productCategories[3].id,
        brand: 'Salomon',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/giay-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    // Thiết bị điện tử
    prisma.product.create({
      data: {
        name: 'Action Camera 4K chống nước',
        slug: 'action-camera-4k-chong-nuoc',
        sku: 'ELE-001',
        description: 'Camera hành động quay 4K/60fps, chống nước 10m, chống rung EIS, màn hình cảm ứng.',
        shortDesc: 'Camera 4K chống nước 10m',
        price: 3500000,
        salePrice: 2990000,
        stock: 30,
        categoryId: productCategories[4].id,
        brand: 'GoPro',
        status: 'published',
        featured: true,
        images: {
          create: [
            { url: '/images/products/camera-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Sạc dự phòng 20000mAh',
        slug: 'sac-du-phong-20000mah',
        sku: 'ELE-002',
        description: 'Pin sạc dự phòng 20000mAh, hỗ trợ sạc nhanh PD 65W, có thể sạc laptop, 2 cổng USB-C.',
        shortDesc: 'Pin 20000mAh sạc nhanh 65W',
        price: 890000,
        salePrice: 750000,
        stock: 120,
        categoryId: productCategories[4].id,
        brand: 'Anker',
        status: 'published',
        images: {
          create: [
            { url: '/images/products/sac-1.jpg', isPrimary: true, sortOrder: 0 }
          ]
        }
      }
    })
  ])

  console.log('✅ Products created')

  // ==================== Customers ====================
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        email: 'nguyenvana@email.com',
        firstName: 'Văn A',
        lastName: 'Nguyễn',
        phone: '0901234567',
        avatar: '/images/avatars/1.png',
        addresses: {
          create: {
            type: 'shipping',
            firstName: 'Văn A',
            lastName: 'Nguyễn',
            address1: '123 Nguyễn Huệ',
            city: 'Hồ Chí Minh',
            state: 'Quận 1',
            postalCode: '700000',
            country: 'Việt Nam',
            phone: '0901234567',
            isDefault: true
          }
        }
      }
    }),
    prisma.customer.create({
      data: {
        email: 'tranthib@email.com',
        firstName: 'Thị B',
        lastName: 'Trần',
        phone: '0912345678',
        avatar: '/images/avatars/2.png',
        addresses: {
          create: {
            type: 'shipping',
            firstName: 'Thị B',
            lastName: 'Trần',
            address1: '456 Lê Lợi',
            city: 'Hà Nội',
            state: 'Hoàn Kiếm',
            postalCode: '100000',
            country: 'Việt Nam',
            phone: '0912345678',
            isDefault: true
          }
        }
      }
    }),
    prisma.customer.create({
      data: {
        email: 'levanc@email.com',
        firstName: 'Văn C',
        lastName: 'Lê',
        phone: '0923456789',
        avatar: '/images/avatars/3.png'
      }
    })
  ])

  console.log('✅ Customers created')

  // ==================== Orders ====================
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        orderNumber: 'ORD-2024-0001',
        customerId: customers[0].id,
        status: 'delivered',
        paymentStatus: 'paid',
        paymentMethod: 'credit_card',
        subtotal: 2340000,
        discount: 200000,
        shipping: 30000,
        tax: 0,
        total: 2170000,
        shippingAddress: '123 Nguyễn Huệ, Quận 1, Hồ Chí Minh',
        items: {
          create: [
            {
              productId: products[0].id,
              name: 'Vali kéo du lịch 24 inch',
              sku: 'VAL-001',
              price: 1590000,
              quantity: 1,
              total: 1590000
            },
            {
              productId: products[2].id,
              name: 'Gối cổ memory foam cao cấp',
              sku: 'PHU-001',
              price: 290000,
              quantity: 1,
              total: 290000
            }
          ]
        }
      }
    }),
    prisma.order.create({
      data: {
        orderNumber: 'ORD-2024-0002',
        customerId: customers[1].id,
        status: 'processing',
        paymentStatus: 'paid',
        paymentMethod: 'bank_transfer',
        subtotal: 3780000,
        shipping: 0,
        tax: 0,
        total: 3780000,
        shippingAddress: '456 Lê Lợi, Hoàn Kiếm, Hà Nội',
        items: {
          create: [
            {
              productId: products[5].id,
              name: 'Lều cắm trại 2 người chống mưa',
              sku: 'CAM-001',
              price: 1290000,
              quantity: 1,
              total: 1290000
            },
            {
              productId: products[9].id,
              name: 'Giày leo núi chống trượt',
              sku: 'OUT-002',
              price: 2190000,
              quantity: 1,
              total: 2190000
            }
          ]
        }
      }
    }),
    prisma.order.create({
      data: {
        orderNumber: 'ORD-2024-0003',
        customerId: customers[0].id,
        status: 'pending',
        paymentStatus: 'pending',
        subtotal: 2990000,
        shipping: 30000,
        tax: 0,
        total: 3020000,
        shippingAddress: '123 Nguyễn Huệ, Quận 1, Hồ Chí Minh',
        items: {
          create: [
            {
              productId: products[10].id,
              name: 'Action Camera 4K chống nước',
              sku: 'ELE-001',
              price: 2990000,
              quantity: 1,
              total: 2990000
            }
          ]
        }
      }
    })
  ])

  console.log('✅ Orders created')

  // ==================== Product Reviews ====================
  await Promise.all([
    prisma.productReview.create({
      data: {
        productId: products[0].id,
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        avatar: '/images/avatars/1.png',
        rating: 5,
        title: 'Vali rất chắc chắn',
        content: 'Mình đã dùng vali này đi 3 chuyến rồi, rất bền và đẹp. Bánh xe êm, kéo nhẹ.',
        status: 'approved'
      }
    }),
    prisma.productReview.create({
      data: {
        productId: products[0].id,
        name: 'Trần Thị B',
        email: 'tranthib@email.com',
        avatar: '/images/avatars/2.png',
        rating: 4,
        title: 'Đáng tiền',
        content: 'Chất lượng tốt so với giá tiền. Giao hàng nhanh.',
        status: 'approved'
      }
    }),
    prisma.productReview.create({
      data: {
        productId: products[5].id,
        name: 'Lê Văn C',
        email: 'levanc@email.com',
        avatar: '/images/avatars/3.png',
        rating: 5,
        title: 'Lều chất lượng cao',
        content: 'Đã dùng lều này cắm trại ở Đà Lạt, chống mưa rất tốt, dựng lều nhanh.',
        status: 'approved'
      }
    }),
    prisma.productReview.create({
      data: {
        productId: products[9].id,
        name: 'Phạm Văn D',
        email: 'phamvand@email.com',
        avatar: '/images/avatars/4.png',
        rating: 5,
        title: 'Giày leo núi tuyệt vời',
        content: 'Đã leo Fansipan với đôi giày này, bám đường rất tốt, không bị trượt.',
        status: 'approved'
      }
    })
  ])

  console.log('✅ Product reviews created')

  // ==================== Blog Comments ====================
  await Promise.all([
    prisma.blogComment.create({
      data: {
        postId: blogPosts[0].id,
        name: 'Minh Anh',
        email: 'minhanh@email.com',
        content: 'Bài viết rất hay! Mình đã đi Mỹ Khê rồi, đúng là rất đẹp.',
        status: 'approved'
      }
    }),
    prisma.blogComment.create({
      data: {
        postId: blogPosts[1].id,
        name: 'Hoàng Long',
        email: 'hoanglong@email.com',
        content: 'Cảm ơn bạn đã chia sẻ. Mình đang plan đi Sapa tháng 10 này.',
        status: 'approved'
      }
    })
  ])

  console.log('✅ Blog comments created')
  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
