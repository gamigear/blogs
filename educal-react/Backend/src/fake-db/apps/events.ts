// Type Imports
import type { EventType } from '@/types/apps/eventTypes'

export const db: EventType[] = [
  {
    id: 1,
    title: 'Sự kiện Tết Nguyên Đán 2025',
    description: 'Chương trình khuyến mãi đặc biệt nhân dịp Tết Nguyên Đán với nhiều phần quà hấp dẫn.',
    image: '/images/events/event-1.jpg',
    date: '2025-01-25',
    startTime: '00:00',
    endTime: '23:59',
    location: 'Online',
    status: 'upcoming',
    featured: true,
    createdAt: '2025-12-01'
  },
  {
    id: 2,
    title: 'Flash Sale 12.12',
    description: 'Ngày hội mua sắm lớn nhất năm với hàng ngàn voucher giảm giá.',
    image: '/images/events/event-2.jpg',
    date: '2025-12-12',
    startTime: '00:00',
    endTime: '23:59',
    location: 'Online',
    status: 'active',
    featured: true,
    createdAt: '2025-12-01'
  },
  {
    id: 3,
    title: 'Giáng Sinh An Lành 2025',
    description: 'Chương trình đặc biệt mừng Giáng Sinh với nhiều mini game thú vị.',
    image: '/images/events/event-3.jpg',
    date: '2025-12-25',
    startTime: '08:00',
    endTime: '22:00',
    location: 'Online',
    status: 'upcoming',
    featured: true,
    createdAt: '2025-12-05'
  },
  {
    id: 4,
    title: 'Countdown 2026',
    description: 'Đếm ngược chào đón năm mới 2026 cùng nhiều phần quà giá trị.',
    image: '/images/events/event-4.jpg',
    date: '2025-12-31',
    startTime: '20:00',
    endTime: '02:00',
    location: 'Online',
    status: 'upcoming',
    featured: false,
    createdAt: '2025-12-10'
  }
]
