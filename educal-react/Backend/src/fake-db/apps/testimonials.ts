// Type Imports
import type { TestimonialType } from '@/types/apps/testimonialTypes'

export const db: TestimonialType[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    title: 'Game thủ',
    company: '',
    avatar: '/images/avatars/1.png',
    content: 'Website rất hữu ích, tổng hợp đầy đủ các mini game hot nhất. Mình đã nhận được rất nhiều quà từ các sự kiện.',
    rating: 5,
    status: 'active',
    featured: true,
    createdAt: '2025-12-01'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    title: 'Sinh viên',
    company: '',
    avatar: '/images/avatars/2.png',
    content: 'Cập nhật code game nhanh chóng, chính xác. Đã theo dõi website từ lâu và rất hài lòng.',
    rating: 5,
    status: 'active',
    featured: true,
    createdAt: '2025-12-02'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    title: 'Nhân viên văn phòng',
    company: '',
    avatar: '/images/avatars/3.png',
    content: 'Giao diện đẹp, dễ sử dụng. Thông tin các sự kiện khuyến mãi rất chi tiết và đầy đủ.',
    rating: 4,
    status: 'active',
    featured: false,
    createdAt: '2025-12-03'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    title: 'Streamer',
    company: '',
    avatar: '/images/avatars/4.png',
    content: 'Mình thường xuyên giới thiệu website này cho viewers. Rất tiện lợi để tìm các mini game mới.',
    rating: 5,
    status: 'active',
    featured: true,
    createdAt: '2025-12-04'
  }
]
