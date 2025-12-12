'use client'

import { useState, useEffect } from 'react'

interface MenuItem {
  id: number
  menu_location: string
  title: string
  url: string
  icon: string | null
  sort_order: number
  is_active: boolean
}

export default function HeaderSettingsPage() {
  const [menus, setMenus] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newItem, setNewItem] = useState({ title: '', url: '' })

  useEffect(() => {
    fetchMenus()
  }, [])

  const fetchMenus = async () => {
    try {
      const res = await fetch('/api/admin/menus?location=header')
      const data = await res.json()
      setMenus(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = async () => {
    if (!newItem.title || !newItem.url) return
    try {
      await fetch('/api/admin/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ menu_location: 'header', ...newItem, sort_order: menus.length + 1 })
      })
      setNewItem({ title: '', url: '' })
      fetchMenus()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUpdate = async (item: MenuItem) => {
    try {
      await fetch('/api/admin/menus', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
      setEditingId(null)
      fetchMenus()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this menu item?')) return
    try {
      await fetch(`/api/admin/menus?id=${id}`, { method: 'DELETE' })
      fetchMenus()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Header & Menu Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage header navigation menu items</p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Menu Item</h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Title" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <input type="text" placeholder="URL (e.g. /about)" value={newItem.url} onChange={(e) => setNewItem({ ...newItem, url: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <button onClick={handleAdd} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Add</button>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
        <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Header Menu Items</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-neutral-700">
          {menus.map((item) => (
            <div key={item.id} className="p-4 flex items-center gap-4">
              <div className="cursor-move text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
              </div>
              {editingId === item.id ? (
                <>
                  <input type="text" value={item.title} onChange={(e) => setMenus(menus.map(m => m.id === item.id ? { ...m, title: e.target.value } : m))} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
                  <input type="text" value={item.url} onChange={(e) => setMenus(menus.map(m => m.id === item.id ? { ...m, url: e.target.value } : m))} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
                  <button onClick={() => handleUpdate(item)} className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm">Save</button>
                  <button onClick={() => setEditingId(null)} className="px-3 py-1.5 border border-gray-200 dark:border-neutral-600 rounded-lg text-sm">Cancel</button>
                </>
              ) : (
                <>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.url}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${item.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </span>
                  <button onClick={() => setEditingId(item.id)} className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </>
              )}
            </div>
          ))}
          {menus.length === 0 && (
            <div className="p-8 text-center text-gray-500">No menu items yet. Add one above.</div>
          )}
        </div>
      </div>
    </div>
  )
}
