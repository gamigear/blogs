'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Listing {
  id: number
  name: string
  type: string
  location: string
  price: string
  rating: number
  reviews_count: number
  status: string
  image: string
}

interface ListingsTableProps {
  filterType?: string
}

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  Inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
}

export default function ListingsTable({ filterType }: ListingsTableProps) {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  useEffect(() => {
    fetchListings()
  }, [filterType])

  const fetchListings = async () => {
    try {
      const params = new URLSearchParams()
      if (filterType) params.set('type', filterType)
      const res = await fetch(`/api/admin/listings?${params}`)
      const data = await res.json()
      setListings(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching listings:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleSelectAll = () => {
    setSelectedItems(selectedItems.length === listings.length ? [] : listings.map(l => l.id))
  }

  const toggleSelect = (id: number) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  if (loading) {
    return <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-8 text-center text-gray-500">Loading...</div>
  }

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
              <th className="py-3 px-4 text-left"><input type="checkbox" checked={selectedItems.length === listings.length && listings.length > 0} onChange={toggleSelectAll} className="rounded border-gray-300" /></th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Listing</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Type</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Price</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Rating</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td className="py-4 px-4"><input type="checkbox" checked={selectedItems.includes(listing.id)} onChange={() => toggleSelect(listing.id)} className="rounded border-gray-300" /></td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-700 flex-shrink-0">
                      <Image src={listing.image} alt={listing.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{listing.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{listing.location}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">{listing.type}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">{listing.price}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{listing.rating}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">({listing.reviews_count})</span>
                  </div>
                </td>
                <td className="py-4 px-4"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[listing.status] || statusColors.Inactive}`}>{listing.status}</span></td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-neutral-700 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Showing {listings.length} results</p>
      </div>
    </div>
  )
}
