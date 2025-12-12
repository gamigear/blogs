// Type Imports
import type { ContactType } from '@/types/apps/contactTypes'

export const db: ContactType[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '0901234567',
    subject: 'Hỏi về mini game Shopee',
    message: 'Cho mình hỏi mini game Shopee Lắc Xu có còn hoạt động không ạ? Mình không thấy trong app.',
    status: 'new',
    createdAt: '2025-12-12 10:30'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    email: 'tranthib@gmail.com',
    phone: '0912345678',
    subject: 'Góp ý giao diện',
    message: 'Website rất hay, nhưng mình nghĩ nên thêm chế độ dark mode để dễ nhìn hơn vào ban đêm.',
    status: 'read',
    createdAt: '2025-12-11 15:45'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    email: 'levanc@gmail.com',
    phone: '',
    subject: 'Báo lỗi code game',
    message: 'Code Liên Quân ABC123 không hoạt động, báo lỗi "Code đã hết hạn". Mong admin kiểm tra lại.',
    status: 'replied',
    createdAt: '2025-12-10 09:15'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    email: 'phamthid@gmail.com',
    phone: '0923456789',
    subject: 'Hợp tác quảng cáo',
    message: 'Mình là admin của fanpage game với 50k followers. Muốn hợp tác quảng cáo với website. Liên hệ mình qua email nhé.',
    status: 'new',
    createdAt: '2025-12-12 08:00'
  }
]
