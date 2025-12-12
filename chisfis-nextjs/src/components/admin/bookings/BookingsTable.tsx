'use client'

import { useState, useEffect } from 'react'

interface Booking {
  id: string
  guest_name: string
  guest_email: string
  listing_name: string
  listing_type: string
  check_in: string
  check_out: string
  total: string
  status: string
}

const statusColors: Record<string, string> = {
  Confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  Completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
}

export default function BookingsTable() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/admin/bookings')
      const data = await res.json()
      setBookings(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleSelectAll = () => {
    setSelectedItems(selectedItems.length === bookings.length ? [] : bookings.map(b => b.id))
  }

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  if (loading) {
    return <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Loading...</div>
  }

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
              <th className="py-3 px-4 text-left"><input type="checkbox" checked={selectedItems.length === bookings.length && bookings.length > 0} onChange={toggleSelectAll} className="rounded border-gray-300" /></th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Booking ID</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Guest</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Listing</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Dates</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Total</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td className="py-4 px-4"><input type="checkbox" checked={selectedItems.includes(booking.id)} onChange={() => toggleSelect(booking.id)} className="rounded border-gray-300" /></td>
                <td className="py-4 px-4 text-sm font-medium text-primary-600 dark:text-primary-400">{booking.id}</td>
                <td className="py-4 px-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{booking.guest_name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{booking.guest_email}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-gray-900 dark:text-white">{booking.listing_name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{booking.listing_type}</p>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">{booking.check_in} → {booking.check_out}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">{booking.total}</td>
                <td className="py-4 px-4"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[booking.status] || ''}`}>{booking.status}</span></td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-neutral-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">Showing {bookings.length} results</p>
      </div>
    </div>
  )
}
