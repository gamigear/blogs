'use client'

import { useState, useEffect } from 'react'

interface Stats {
  listings: { total: number; active: number }
  bookings: { total: number; confirmed: number }
  users: { total: number }
  reviews: { total: number; avgRating: string }
}

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      const data = await res.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statItems = [
    {
      title: 'Total Bookings',
      value: stats?.bookings?.total || 0,
      sub: `${stats?.bookings?.confirmed || 0} confirmed`,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    },
    {
      title: 'Active Listings',
      value: stats?.listings?.active || 0,
      sub: `${stats?.listings?.total || 0} total`,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    },
    {
      title: 'Total Users',
      value: stats?.users?.total || 0,
      sub: 'registered users',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    },
    {
      title: 'Reviews',
      value: stats?.reviews?.total || 0,
      sub: `${stats?.reviews?.avgRating || '0'} avg rating`,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 animate-pulse">
            <div className="h-10 w-10 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div>
            <div className="mt-4 h-8 w-20 bg-gray-200 dark:bg-neutral-700 rounded"></div>
            <div className="mt-2 h-4 w-24 bg-gray-200 dark:bg-neutral-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((stat) => (
        <div key={stat.title} className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
              {stat.icon}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
