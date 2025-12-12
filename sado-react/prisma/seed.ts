import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      phone: '0901234567',
      password: 'admin123', // Should be hashed in production
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  })

  const editor = await prisma.user.upsert({
    where: { email: 'editor@example.com' },
    update: {},
    create: {
      email: 'editor@example.com',
      name: 'Nguyễn Văn Editor',
      phone: '0912345678',
      password: 'editor123',
      role: 'EDITOR',
      status: 'ACTIVE',
    },
  })

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Trần Thị User',
      phone: '0923456789',
      password: 'user123',
      role: 'USER',
      status: 'ACTIVE',
    },
  })

  console.log('✅ Users created')

  // Create Products (Tours)
  const products = await Promise.all([
    prisma.product.upsert({
      where: { slug: 'tour-phu-quoc-3n2d' },
      update: {},
      create: {
        name: 'Tour Phú Quốc 3N2Đ',
        slug: 'tour-phu-quoc-3n2d',
        description: 'Khám phá đảo ngọc Phú Quốc với tour 3 ngày 2 đêm. Tham quan các điểm du lịch nổi tiếng, tắm biển, thưởng thức hải sản tươi ngon.',
        price: 2500000,
        salePrice: 2200000,
        category: 'Tour biển',
        stock: 50,
        status: 'ACTIVE',
        duration: '3N2Đ',
        location: 'Phú Quốc',
      },
    }),
    prisma.product.upsert({
      where: { slug: 'tour-da-nang-hoi-an-4n3d' },
      update: {},
      create: {
        name: 'Tour Đà Nẵng - Hội An 4N3Đ',
        slug: 'tour-da-nang-hoi-an-4n3d',
        description: 'Khám phá thành phố đáng sống Đà Nẵng và phố cổ Hội An. Tham quan Bà Nà Hills, cầu Vàng, phố cổ Hội An.',
        price: 3200000,
        salePrice: 2900000,
        category: 'Tour văn hóa',
        stock: 30,
        status: 'ACTIVE',
        duration: '4N3Đ',
        location: 'Đà Nẵng',
      },
    }),
    prisma.product.upsert({
      where: { slug: 'tour-nha-trang-2n1d' },
      update: {},
      create: {
        name: 'Tour Nha Trang 2N1Đ',
        slug: 'tour-nha-trang-2n1d',
        description: 'Tour ngắn ngày khám phá Nha Trang. Tham quan Vinpearl Land, tắm bùn, lặn ngắm san hô.',
        price: 1800000,
        category: 'Tour biển',
        stock: 40,
        status: 'ACTIVE',
        duration: '2N1Đ',
        location: 'Nha Trang',
      },
    }),
    prisma.product.upsert({
      where: { slug: 'tour-ha-long-3n2d' },
      update: {},
      create: {
        name: 'Tour Hạ Long 3N2Đ',
        slug: 'tour-ha-long-3n2d',
        description: 'Khám phá vịnh Hạ Long - Di sản thiên nhiên thế giới. Du thuyền ngắm cảnh, tham quan hang động.',
        price: 2900000,
        salePrice: 2600000,
        category: 'Tour biển',
        stock: 25,
        status: 'ACTIVE',
        duration: '3N2Đ',
        location: 'Hạ Long',
      },
    }),
    prisma.product.upsert({
      where: { slug: 'tour-sapa-3n2d' },
      update: {},
      create: {
        name: 'Tour Sapa 3N2Đ',
        slug: 'tour-sapa-3n2d',
        description: 'Khám phá vùng núi Tây Bắc. Chinh phục Fansipan, tham quan bản làng dân tộc, ngắm ruộng bậc thang.',
        price: 2700000,
        category: 'Tour núi',
        stock: 35,
        status: 'ACTIVE',
        duration: '3N2Đ',
        location: 'Sapa',
      },
    }),
    prisma.product.upsert({
      where: { slug: 'tour-da-lat-3n2d' },
      update: {},
      create: {
        name: 'Tour Đà Lạt 3N2Đ',
        slug: 'tour-da-lat-3n2d',
        description: 'Khám phá thành phố ngàn hoa. Tham quan các điểm du lịch nổi tiếng, thưởng thức đặc sản địa phương.',
        price: 2400000,
        salePrice: 2100000,
        category: 'Tour núi',
        stock: 45,
        status: 'ACTIVE',
        duration: '3N2Đ',
        location: 'Đà Lạt',
      },
    }),
  ])

  console.log('✅ Products created')

  // Create Bookings
  await Promise.all([
    prisma.booking.create({
      data: {
        customerName: 'Nguyễn Văn A',
        customerPhone: '0901111111',
        customerEmail: 'nguyenvana@email.com',
        destination: 'Phú Quốc',
        travelDate: new Date('2025-01-15'),
        guests: 2,
        totalAmount: 5000000,
        status: 'CONFIRMED',
        paymentStatus: 'PAID',
        productId: products[0].id,
      },
    }),
    prisma.booking.create({
      data: {
        customerName: 'Trần Thị B',
        customerPhone: '0902222222',
        customerEmail: 'tranthib@email.com',
        destination: 'Đà Nẵng',
        travelDate: new Date('2025-01-20'),
        guests: 4,
        totalAmount: 12800000,
        status: 'PENDING',
        paymentStatus: 'UNPAID',
        productId: products[1].id,
      },
    }),
    prisma.booking.create({
      data: {
        customerName: 'Lê Văn C',
        customerPhone: '0903333333',
        customerEmail: 'levanc@email.com',
        destination: 'Nha Trang',
        travelDate: new Date('2025-01-25'),
        guests: 3,
        totalAmount: 5400000,
        status: 'CONFIRMED',
        paymentStatus: 'PAID',
        productId: products[2].id,
      },
    }),
    prisma.booking.create({
      data: {
        customerName: 'Phạm Thị D',
        customerPhone: '0904444444',
        destination: 'Hạ Long',
        travelDate: new Date('2025-02-01'),
        guests: 2,
        totalAmount: 5800000,
        status: 'CANCELLED',
        paymentStatus: 'REFUNDED',
        productId: products[3].id,
      },
    }),
    prisma.booking.create({
      data: {
        customerName: 'Hoàng Văn E',
        customerPhone: '0905555555',
        customerEmail: 'hoangvane@email.com',
        destination: 'Sapa',
        travelDate: new Date('2025-02-10'),
        guests: 5,
        totalAmount: 13500000,
        status: 'PENDING',
        paymentStatus: 'UNPAID',
        productId: products[4].id,
      },
    }),
  ])

  console.log('✅ Bookings created')

  // Create Posts
  await Promise.all([
    prisma.post.upsert({
      where: { slug: 'kinh-nghiem-du-lich-phu-quoc' },
      update: {},
      create: {
        title: 'Kinh nghiệm du lịch Phú Quốc từ A-Z',
        slug: 'kinh-nghiem-du-lich-phu-quoc',
        excerpt: 'Hướng dẫn chi tiết du lịch Phú Quốc: đi lại, ăn uống, điểm tham quan, lưu trú...',
        content: 'Phú Quốc là hòn đảo lớn nhất Việt Nam, được mệnh danh là đảo ngọc với những bãi biển tuyệt đẹp...',
        category: 'Kinh nghiệm',
        status: 'PUBLISHED',
        views: 1250,
        authorId: editor.id,
      },
    }),
    prisma.post.upsert({
      where: { slug: 'top-10-diem-den-hot-nhat-2025' },
      update: {},
      create: {
        title: 'Top 10 điểm đến hot nhất 2025',
        slug: 'top-10-diem-den-hot-nhat-2025',
        excerpt: 'Khám phá những điểm đến được yêu thích nhất trong năm 2025',
        content: 'Năm 2025 hứa hẹn nhiều điểm đến hấp dẫn cho du khách Việt Nam...',
        category: 'Tin tức',
        status: 'PUBLISHED',
        views: 890,
        authorId: admin.id,
      },
    }),
    prisma.post.upsert({
      where: { slug: 'huong-dan-dat-ve-may-bay-gia-re' },
      update: {},
      create: {
        title: 'Hướng dẫn đặt vé máy bay giá rẻ',
        slug: 'huong-dan-dat-ve-may-bay-gia-re',
        excerpt: 'Bí quyết săn vé máy bay giá rẻ cho chuyến du lịch tiết kiệm',
        content: 'Để đặt được vé máy bay giá rẻ, bạn cần lưu ý một số điểm sau...',
        category: 'Hướng dẫn',
        status: 'PUBLISHED',
        views: 2100,
        authorId: editor.id,
      },
    }),
    prisma.post.upsert({
      where: { slug: 'kham-pha-am-thuc-da-nang' },
      update: {},
      create: {
        title: 'Khám phá ẩm thực Đà Nẵng',
        slug: 'kham-pha-am-thuc-da-nang',
        excerpt: 'Những món ăn đặc sản không thể bỏ qua khi đến Đà Nẵng',
        content: 'Đà Nẵng không chỉ nổi tiếng với cảnh đẹp mà còn có nền ẩm thực phong phú...',
        category: 'Du lịch',
        status: 'DRAFT',
        views: 0,
        authorId: admin.id,
      },
    }),
  ])

  console.log('✅ Posts created')

  // Create Pages
  await Promise.all([
    prisma.page.upsert({
      where: { slug: '/gioi-thieu' },
      update: {},
      create: {
        title: 'Giới thiệu',
        slug: '/gioi-thieu',
        content: 'Chúng tôi là công ty du lịch hàng đầu Việt Nam với hơn 10 năm kinh nghiệm...',
        template: 'default',
        status: 'PUBLISHED',
      },
    }),
    prisma.page.upsert({
      where: { slug: '/lien-he' },
      update: {},
      create: {
        title: 'Liên hệ',
        slug: '/lien-he',
        content: 'Liên hệ với chúng tôi qua hotline: 1900 1234 hoặc email: info@example.com',
        template: 'contact',
        status: 'PUBLISHED',
      },
    }),
    prisma.page.upsert({
      where: { slug: '/chinh-sach-bao-mat' },
      update: {},
      create: {
        title: 'Chính sách bảo mật',
        slug: '/chinh-sach-bao-mat',
        content: 'Chính sách bảo mật thông tin khách hàng...',
        template: 'default',
        status: 'PUBLISHED',
      },
    }),
    prisma.page.upsert({
      where: { slug: '/dieu-khoan-su-dung' },
      update: {},
      create: {
        title: 'Điều khoản sử dụng',
        slug: '/dieu-khoan-su-dung',
        content: 'Điều khoản và điều kiện sử dụng dịch vụ...',
        template: 'default',
        status: 'DRAFT',
      },
    }),
  ])

  console.log('✅ Pages created')

  // Create Main Menu
  const mainMenu = await prisma.menu.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Menu chính',
      location: 'main',
    },
  })

  // Create Menu Items
  await prisma.menuItem.deleteMany({ where: { menuId: mainMenu.id } })
  
  const menuItems = await Promise.all([
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        title: 'Trang chủ',
        url: '/',
        icon: 'ri-home-line',
        order: 1,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        title: 'Điểm đến',
        url: '/diem-den',
        icon: 'ri-map-pin-line',
        order: 2,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        title: 'Tour',
        url: '/tour',
        icon: 'ri-compass-line',
        order: 3,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        title: 'Tin tức',
        url: '/tin-tuc',
        icon: 'ri-newspaper-line',
        order: 4,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        title: 'Liên hệ',
        url: '/lien-he',
        icon: 'ri-phone-line',
        order: 5,
      },
    }),
  ])

  // Add submenu items for "Điểm đến"
  await Promise.all([
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[1].id,
        title: 'Phú Quốc',
        url: '/diem-den/phu-quoc',
        order: 1,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[1].id,
        title: 'Đà Nẵng',
        url: '/diem-den/da-nang',
        order: 2,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[1].id,
        title: 'Nha Trang',
        url: '/diem-den/nha-trang',
        order: 3,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[1].id,
        title: 'Hạ Long',
        url: '/diem-den/ha-long',
        order: 4,
      },
    }),
  ])

  // Add submenu items for "Tour"
  await Promise.all([
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[2].id,
        title: 'Tour biển',
        url: '/tour/bien',
        order: 1,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[2].id,
        title: 'Tour núi',
        url: '/tour/nui',
        order: 2,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: mainMenu.id,
        parentId: menuItems[2].id,
        title: 'Tour văn hóa',
        url: '/tour/van-hoa',
        order: 3,
      },
    }),
  ])

  console.log('✅ Menu created')

  // Create Footer Menu
  const footerMenu = await prisma.menu.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Menu Footer',
      location: 'footer',
    },
  })

  await prisma.menuItem.deleteMany({ where: { menuId: footerMenu.id } })
  
  await Promise.all([
    prisma.menuItem.create({
      data: {
        menuId: footerMenu.id,
        title: 'Về chúng tôi',
        url: '/gioi-thieu',
        order: 1,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: footerMenu.id,
        title: 'Chính sách bảo mật',
        url: '/chinh-sach-bao-mat',
        order: 2,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: footerMenu.id,
        title: 'Điều khoản sử dụng',
        url: '/dieu-khoan-su-dung',
        order: 3,
      },
    }),
    prisma.menuItem.create({
      data: {
        menuId: footerMenu.id,
        title: 'Liên hệ',
        url: '/lien-he',
        order: 4,
      },
    }),
  ])

  console.log('✅ Footer Menu created')

  // Create Settings
  const settings = [
    { key: 'siteName', value: 'Du lịch Việt Nam', group: 'general' },
    { key: 'tagline', value: 'Khám phá vẻ đẹp Việt Nam', group: 'general' },
    { key: 'siteUrl', value: 'https://example.com', group: 'general' },
    { key: 'adminEmail', value: 'admin@example.com', group: 'general' },
    { key: 'phone', value: '1900 1234', group: 'general' },
    { key: 'address', value: '123 Đường ABC, Quận 1, TP.HCM', group: 'general' },
    { key: 'metaTitle', value: 'Du lịch Việt Nam - Đặt vé tour giá tốt', group: 'seo' },
    { key: 'metaDescription', value: 'Khám phá Việt Nam với các tour du lịch chất lượng cao, giá cả hợp lý.', group: 'seo' },
    { key: 'facebook', value: 'https://facebook.com/dulichvietnam', group: 'social' },
    { key: 'instagram', value: 'https://instagram.com/dulichvietnam', group: 'social' },
    { key: 'youtube', value: 'https://youtube.com/dulichvietnam', group: 'social' },
  ]

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }

  console.log('✅ Settings created')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
