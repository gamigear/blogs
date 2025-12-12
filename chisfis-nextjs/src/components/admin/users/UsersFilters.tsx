'use client'

import { useState } from 'react'

export default function UsersFilters() {
  const [role, setRole] = useState('all')
  const [status, setStatus] = useState('all')

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tìm kiếm</label>
          <input
            type="text"
            placeholder="Tìm theo tên, email..."
            className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="w-40">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vai trò</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
          >
            <option value="all">Tất cả</option>
            <option value="Admin">Admin</option>
            <option value="Host">Host</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="w-40">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Trạng thái</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
          >
            <option value="all">Tất cả</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
    </div>
  )
}
