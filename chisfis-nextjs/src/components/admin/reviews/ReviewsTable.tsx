'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Review {
  id: number
  user_name: string
  user_avatar: string
  listing_name: string
  rating: number
  comment: string
  status: string
  created_at: string
}

const statusColors: Record<string, string> = {
  Published: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  Flagged: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
}

export default function ReviewsTable() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/admin/reviews')
      const data = await res.json()
      setReviews(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleSelectAll = () => setSelectedItems(selectedItems.length === reviews.length ? [] : reviews.map(r => r.id))
  const toggleSelect = (id: number) => setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  if (loading) return <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Loading...</div>

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
              <th className="py-3 px-4 text-left"><input type="checkbox" checked={selectedItems.length === reviews.length && reviews.length > 0} onChange={toggleSelectAll} className="rounded border-gray-300" /></th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">User</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Listing</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Rating</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Comment</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {reviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td className="py-4 px-4"><input type="checkbox" checked={selectedItems.includes(review.id)} onChange={() => toggleSelect(review.id)} className="rounded border-gray-300" /></td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Image src={review.user_avatar} alt={review.user_name} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{review.user_name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{review.created_at}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">{review.listing_name}</td>
                <td className="py-4 px-4">{renderStars(review.rating)}</td>
                <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate">{review.comment}</td>
                <td className="py-4 px-4"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[review.status] || ''}`}>{review.status}</span></td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600" title="Approve"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></button>
                    <button className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500" title="Delete"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-neutral-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">Showing {reviews.length} results</p>
      </div>
    </div>
  )
}
