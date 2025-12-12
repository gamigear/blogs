'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import Image from 'next/image'

export default function UserMenu() {
  const { user, loading, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
    window.location.href = '/'
  }

  if (loading) {
    return <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-700 animate-pulse" />
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Đăng nhập
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700"
        >
          Đăng ký
        </Link>
      </div>
    )
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
      >
        {user.avatar ? (
          <Image src={user.avatar} alt={user.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-neutral-700">
            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>

          <div className="py-1">
            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Tài khoản của tôi
            </Link>
            <Link
              href="/account-savelists"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Danh sách đã lưu
            </Link>
            <Link
              href="/account-verification"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Xác minh tài khoản
            </Link>
          </div>

          {user.role === 'Admin' && (
            <div className="py-1 border-t border-gray-200 dark:border-neutral-700">
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                Quản trị viên
              </Link>
            </div>
          )}

          <div className="py-1 border-t border-gray-200 dark:border-neutral-700">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
