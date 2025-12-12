// Type Imports
import type { CategoryType } from '@/types/apps/categoryTypes'

export const db: CategoryType[] = [
  {
    id: 1,
    title: 'Facebook',
    description: 'Mini games từ Facebook',
    icon: 'tabler-brand-facebook',
    color: 'primary',
    coursesCount: 5,
    status: 'active',
    createdAt: '2025-12-01'
  },
  {
    id: 2,
    title: 'TikTok',
    description: 'Mini games từ TikTok',
    icon: 'tabler-brand-tiktok',
    color: 'secondary',
    coursesCount: 3,
    status: 'active',
    createdAt: '2025-12-01'
  },
  {
    id: 3,
    title: 'Zalo',
    description: 'Mini games từ Zalo',
    icon: 'tabler-message-circle',
    color: 'success',
    coursesCount: 4,
    status: 'active',
    createdAt: '2025-12-01'
  },
  {
    id: 4,
    title: 'Shopee',
    description: 'Mini games từ Shopee',
    icon: 'tabler-shopping-cart',
    color: 'error',
    coursesCount: 6,
    status: 'active',
    createdAt: '2025-12-01'
  },
  {
    id: 5,
    title: 'Lazada',
    description: 'Mini games từ Lazada',
    icon: 'tabler-shopping-bag',
    color: 'info',
    coursesCount: 2,
    status: 'active',
    createdAt: '2025-12-01'
  },
  {
    id: 6,
    title: 'MoMo',
    description: 'Mini games từ MoMo',
    icon: 'tabler-wallet',
    color: 'warning',
    coursesCount: 4,
    status: 'active',
    createdAt: '2025-12-01'
  }
]
