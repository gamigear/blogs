'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Divider } from '@/shared/divider'

interface Booking {
  id: string
  listing_name: string
  listing_type: string
  check_in: string
  check_out: string
  total: string
  status: string
  created_at: string
}

const statusColors: Record<string, string> = {
  Confirmed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function AccountBookingsPage() {
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const userRes = await fetch('/api/auth/me')
      const userData = await userRes.json()
      if (!userData.user) {
        router.push('/login')
        return
      }

      const res = await fetch(`/api/user/bookings`)
      const data = await res.json()
      setBookings(Array.isArray(data) ? data : [])
    } catch {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filter)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">Đang tải...</div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Đặt chỗ của tôi</h1>
      <Divider className="my-8 w-14!" />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600'
            }`}
          >
            {status === 'all' ? 'Tất cả' : status === 'Pending' ? 'Chờ xác nhận' : status === 'Confirmed' ? 'Đã xác nhận' : status === 'Completed' ? 'Hoàn thành' : 'Đã hủy'}
          </button>
        ))}
      </div>

      {filteredBookings.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-neutral-800 rounded-xl">
          <p className="text-gray-500 dark:text-gray-400">Chưa có đặt chỗ nào</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="p-4 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">#{booking.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[booking.status]}`}>
                      {booking.status === 'Pending' ? 'Chờ xác nhận' : booking.status === 'Confirmed' ? 'Đã xác nhận' : booking.status === 'Completed' ? 'Hoàn thành' : booking.status === 'Cancelled' ? 'Đã hủy' : booking.status}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{booking.listing_name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{booking.listing_type}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary-600">{booking.total}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(booking.check_in).toLocaleDateString('vi-VN')} - {new Date(booking.check_out).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
