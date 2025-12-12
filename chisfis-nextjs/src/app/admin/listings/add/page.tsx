'use client'

import { useState } from 'react'

export default function AddListingPage() {
  const [listingType, setListingType] = useState('hotel')
  const [formData, setFormData] = useState({ name: '', description: '', price: '', location: '', category: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Listing</h1>
        <p className="text-gray-500 dark:text-gray-400">Create a new listing for your platform</p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Listing Type</label>
          <div className="flex gap-4">
            {['hotel', 'car', 'experience'].map((type) => (
              <button
                key={type}
                onClick={() => setListingType(type)}
                className={`px-4 py-2 rounded-lg border transition-colors ${listingType === type ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 dark:border-neutral-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Listing Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter listing name" className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Enter description" className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
            <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="$0.00" className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Images</label>
            <div className="border-2 border-dashed border-gray-200 dark:border-neutral-600 rounded-lg p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop images here, or click to browse</p>
              <button className="mt-4 px-4 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors">
                Upload Images
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <a href="/admin/listings" className="px-4 py-2 border border-gray-200 dark:border-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
            Cancel
          </a>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Create Listing
          </button>
        </div>
      </div>
    </div>
  )
}
