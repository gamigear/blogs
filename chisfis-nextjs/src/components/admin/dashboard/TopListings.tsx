'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Listing {
  id: number
  name: string
  type: string
  rating: number
  reviews_count: number
  image: string
}

export default function TopListings() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {
      const res = await fetch('/api/admin/listings')
      const data = await res.json()
      const sorted = Array.isArray(data) ? data.sort((a: Listing, b: Listing) => b.rating - a.rating).slice(0, 5) : []
      setListings(sorted)
    } catch (error) {
      console.error('Error fetching listings:', error)
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
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Listings</h2>
      </div>
      <div className="p-6 space-y-4">
        {listings.map((listing, index) => (
          <div key={listing.id} className="flex items-center gap-4">
            <span className="text-lg font-bold text-gray-400 w-6">{index + 1}</span>
            <Image src={listing.image} alt={listing.name} width={48} height={48} className="w-12 h-12 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{listing.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{listing.type}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{listing.rating}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{listing.reviews_count} reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
