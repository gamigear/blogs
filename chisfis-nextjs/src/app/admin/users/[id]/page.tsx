'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  avatar?: string
  phone?: string
  address?: string
  bio?: string
  gender?: string
  date_of_birth?: string
  email_verified: boolean
  phone_verified: boolean
  identity_verified: boolean
  joined: string
  bookings_count: number
  last_login?: string
}

interface Booking {
  id: string
  listing_name: string
  check_in: string
  check_out: string
  total: string
  status: string
}

interface Review {
  id: number
  listing_name: string
  rating: number
  comment: string
  status: string
  created_at: string
}

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-800',
  Inactive: 'bg-gray-100 text-gray-800',
  Suspended: 'bg-red-100 text-red-800',
  Pending: 'bg-yellow-100 text-yellow-800',
}

const roleColors: Record<string, string> = {
  Admin: 'bg-purple-100 text-purple-800',
  Host: 'bg-blue-100 text-blue-800',
  User: 'bg-gray-100 text-gray-800',
}

export default function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('info')

  useEffect(() => {
    fetchUserData()
  }, [id])

  const fetchUserData = async () => {
    try {
      const [userRes, bookingsRes, reviewsRes] = await Promise.all([
        fetch(`/api/admin/users/${id}`),
        fetch(`/api/admin/users/${id}/bookings`),
        fetch(`/api/admin/users/${id}/reviews`),
      ])

      const userData = await userRes.json()
      if (userData.error) {
        router.push('/admin/users')
        return
      }
      setUser(userData)

      const bookingsData = await bookingsRes.json()
      setBookings(Array.isArray(bookingsData) ? bookingsData : [])

      const reviewsData = await reviewsRes.json()
      setReviews(Array.isArray(reviewsData) ? reviewsData : [])
    } catch (error) {
      console.error('Error fetching user:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async (data: { role?: string; status?: string }) => {
    try {
      await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id, ...data }),
      })
      fetchUserData()
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Đang tải...</div>
  }

  if (!user) {
    return <div className="p-8 text-center text-gray-500">Không tìm thấy người dùng</div>
  }


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/users" className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chi tiết người dùng</h1>
      </div>

      {/* User Card */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            {user.avatar ? (
              <Image src={user.avatar} alt={user.name} width={120} height={120} className="w-30 h-30 rounded-full object-cover" />
            ) : (
              <div className="w-30 h-30 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-4xl text-primary-600">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${roleColors[user.role]}`}>{user.role}</span>
              <span className={`px-3 py-1 rounded-full text-sm ${statusColors[user.status]}`}>{user.status}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{user.email}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs ${user.email_verified ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {user.email_verified ? '✓ Email đã xác minh' : '○ Email chưa xác minh'}
              </span>
              <span className={`px-2 py-1 rounded text-xs ${user.phone_verified ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {user.phone_verified ? '✓ SĐT đã xác minh' : '○ SĐT chưa xác minh'}
              </span>
              <span className={`px-2 py-1 rounded text-xs ${user.identity_verified ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {user.identity_verified ? '✓ Danh tính đã xác minh' : '○ Danh tính chưa xác minh'}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Tham gia: {user.joined}</span>
              <span>Đặt chỗ: {user.bookings_count}</span>
              {user.last_login && <span>Đăng nhập cuối: {new Date(user.last_login).toLocaleString('vi-VN')}</span>}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <select
              value={user.role}
              onChange={(e) => updateUser({ role: e.target.value })}
              className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-neutral-700 dark:border-neutral-600"
            >
              <option value="User">User</option>
              <option value="Host">Host</option>
              <option value="Admin">Admin</option>
            </select>
            <select
              value={user.status}
              onChange={(e) => updateUser({ status: e.target.value })}
              className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-neutral-700 dark:border-neutral-600"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <div className="flex gap-4">
          {['info', 'bookings', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'info' ? 'Thông tin' : tab === 'bookings' ? `Đặt chỗ (${bookings.length})` : `Đánh giá (${reviews.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'info' && (
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500">Số điện thoại</label>
              <p className="font-medium">{user.phone || '-'}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Giới tính</label>
              <p className="font-medium">{user.gender || '-'}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Ngày sinh</label>
              <p className="font-medium">{user.date_of_birth || '-'}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Địa chỉ</label>
              <p className="font-medium">{user.address || '-'}</p>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Giới thiệu</label>
              <p className="font-medium">{user.bio || '-'}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
          {bookings.length === 0 ? (
            <p className="p-6 text-center text-gray-500">Chưa có đặt chỗ nào</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-neutral-700/50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Listing</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Ngày</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Tổng</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-3 px-4 text-sm">{booking.id}</td>
                    <td className="py-3 px-4 text-sm">{booking.listing_name}</td>
                    <td className="py-3 px-4 text-sm">{booking.check_in} - {booking.check_out}</td>
                    <td className="py-3 px-4 text-sm font-medium">{booking.total}</td>
                    <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs ${statusColors[booking.status] || 'bg-gray-100'}`}>{booking.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="bg-white dark:bg-neutral-800 rounded-xl border p-6 text-center text-gray-500">Chưa có đánh giá nào</div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-4">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{review.listing_name}</h4>
                  <span className="text-sm text-gray-500">{review.created_at}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className={`w-4 h-4 ${s <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${review.status === 'Published' ? 'bg-green-100 text-green-700' : review.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {review.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
