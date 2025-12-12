'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Divider } from '@/shared/divider'

interface Review {
  id: number
  listing_name: string
  rating: number
  comment: string
  status: string
  created_at: string
}

const statusColors: Record<string, string> = {
  Published: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Flagged: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function AccountReviewsPage() {
  const router = useRouter()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const userRes = await fetch('/api/auth/me')
      const userData = await userRes.json()
      if (!userData.user) {
        router.push('/login')
        return
      }

      const res = await fetch('/api/user/reviews')
      const data = await res.json()
      setReviews(Array.isArray(data) ? data : [])
    } catch {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">Đang tải...</div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Đánh giá của tôi</h1>
      <Divider className="my-8 w-14!" />

      {reviews.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-neutral-800 rounded-xl">
          <p className="text-gray-500 dark:text-gray-400">Bạn chưa có đánh giá nào</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{review.listing_name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(review.rating)}
                    <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[review.status]}`}>
                      {review.status === 'Published' ? 'Đã đăng' : review.status === 'Pending' ? 'Chờ duyệt' : 'Bị gắn cờ'}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.created_at).toLocaleDateString('vi-VN')}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
