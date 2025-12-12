'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  joined: string
  bookings_count: number
  avatar: string
  email_verified?: boolean
  phone_verified?: boolean
  identity_verified?: boolean
}

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  Suspended: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
}

const roleColors: Record<string, string> = {
  Admin: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
  Host: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
  User: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
}

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/admin/users')
      const data = await res.json()
      setUsers(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async (userId: number, data: { role?: string; status?: string }) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...data }),
      })
      if (res.ok) {
        fetchUsers()
        setEditingUser(null)
      }
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  const deleteUser = async (userId: number) => {
    if (!confirm('Bạn có chắc muốn xóa người dùng này?')) return
    try {
      const res = await fetch(`/api/admin/users?id=${userId}`, { method: 'DELETE' })
      if (res.ok) fetchUsers()
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const toggleSelectAll = () => setSelectedItems(selectedItems.length === users.length ? [] : users.map(u => u.id))
  const toggleSelect = (id: number) => setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  if (loading) return <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Đang tải...</div>


  return (
    <>
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
                <th className="py-3 px-4 text-left"><input type="checkbox" checked={selectedItems.length === users.length && users.length > 0} onChange={toggleSelectAll} className="rounded border-gray-300" /></th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Người dùng</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Vai trò</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Trạng thái</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Xác minh</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Ngày tham gia</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Đặt chỗ</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                  <td className="py-4 px-4"><input type="checkbox" checked={selectedItems.includes(user.id)} onChange={() => toggleSelect(user.id)} className="rounded border-gray-300" /></td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <Image src={user.avatar} alt={user.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-500">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${roleColors[user.role] || ''}`}>{user.role}</span></td>
                  <td className="py-4 px-4"><span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[user.status] || ''}`}>{user.status}</span></td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      <span title="Email" className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${user.email_verified ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>✉</span>
                      <span title="Phone" className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${user.phone_verified ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>📱</span>
                      <span title="Identity" className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${user.identity_verified ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>🪪</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">{user.joined}</td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">{user.bookings_count}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/users/${user.id}`} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500" title="Xem chi tiết">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </Link>
                      <button onClick={() => setEditingUser(user)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500" title="Chỉnh sửa">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button onClick={() => deleteUser(user.id)} className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500" title="Xóa">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 dark:border-neutral-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Hiển thị {users.length} kết quả</p>
        </div>
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Chỉnh sửa người dùng</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vai trò</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700"
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                >
                  <option value="User">User</option>
                  <option value="Host">Host</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Trạng thái</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700"
                  value={editingUser.status}
                  onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setEditingUser(null)} className="flex-1 px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700">
                  Hủy
                </button>
                <button onClick={() => updateUser(editingUser.id, { role: editingUser.role, status: editingUser.status })} className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
