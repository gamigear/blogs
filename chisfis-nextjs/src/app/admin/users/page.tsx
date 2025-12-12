'use client'

import { useState } from 'react'
import UsersTable from '@/components/admin/users/UsersTable'
import UsersFilters from '@/components/admin/users/UsersFilters'
import AddUserModal from '@/components/admin/users/AddUserModal'

export default function UsersPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleUserAdded = () => {
    setShowAddModal(false)
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý người dùng</h1>
          <p className="text-gray-500 dark:text-gray-400">Quản lý người dùng và phân quyền</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm người dùng
        </button>
      </div>

      <UsersFilters />
      <UsersTable key={refreshKey} />

      {showAddModal && (
        <AddUserModal onClose={() => setShowAddModal(false)} onSuccess={handleUserAdded} />
      )}
    </div>
  )
}
