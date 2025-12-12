'use client'

import { useState, useEffect } from 'react'

interface Booking {
  id: string
  guest_name: string
  listing_name: string
  listing_type: string
  check_in: string
  total: string
  status: string
}

const statusColors: Record<string, string> = {
  Confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  Completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
}

export default function RecentBookings() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/admin/bookings')
      const data = await res.json()
      setBookings(Array.isArray(data) ? data.slice(0, 5) : [])
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Loading...</div>
  }

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
      <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Bookings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">ID</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Guest</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Listing</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Amount</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td className="py-4 px-6 text-sm font-medium text-primary-600">{booking.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900 dark:text-white">{booking.guest_name}</td>
                <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">{booking.listing_name}</td>
                <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">{booking.check_in}</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">{booking.total}</td>
                <td className="py-4 px-6"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[booking.status] || ''}`}>{booking.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
