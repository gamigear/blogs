// Type Imports
import type { BannerType } from '@/types/apps/bannerTypes'

export const db: BannerType[] = [
  {
    id: 1,
    title: 'Tết Nguyên Đán 2025',
    subtitle: 'Lắc lì xì - Nhận quà khủng',
    image: '/images/banners/banner-1.jpg',
    link: '/events/tet-2025',
    buttonText: 'Tham gia ngay',
    position: 1,
    status: 'active',
    startDate: '2025-01-15',
    endDate: '2025-02-15',
    createdAt: '2025-12-01'
  },
  {
    id: 2,
    title: 'Flash Sale 12.12',
    subtitle: 'Giảm giá sốc - Deal hot mỗi giờ',
    image: '/images/banners/banner-2.jpg',
    link: '/events/flash-sale',
    buttonText: 'Săn deal ngay',
    position: 2,
    status: 'active',
    startDate: '2025-12-12',
    endDate: '2025-12-12',
    createdAt: '2025-12-01'
  },
  {
    id: 3,
    title: 'Mini Game mới',
    subtitle: 'Chơi game - Nhận xu miễn phí',
    image: '/images/banners/banner-3.jpg',
    link: '/games',
    buttonText: 'Khám phá',
    position: 3,
    status: 'active',
    createdAt: '2025-12-01'
  }
]
