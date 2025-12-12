'use client'

import { useAuth } from '@/contexts/AuthContext'
import Avatar from '@/shared/Avatar'
import { Divider } from '@/shared/divider'
import { Link } from '@/shared/link'
import SwitchDarkMode2 from '@/shared/SwitchDarkMode2'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {
  BulbChargingIcon,
  FavouriteIcon,
  Idea01Icon,
  Logout01Icon,
  Task01Icon,
  UserIcon,
  SecurityCheckIcon,
  Settings01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

interface Props {
  className?: string
}

export default function AvatarDropdown({ className }: Props) {
  const { user, loading, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    window.location.href = '/'
  }

  // Show login/signup buttons if not logged in
  if (!loading && !user) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Link
          href="/login"
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
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

  // Loading state
  if (loading) {
    return (
      <div className={className}>
        <div className="size-8 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
      </div>
    )
  }

  return (
    <div className={className}>
      <Popover>
        <PopoverButton className="-m-1.5 flex cursor-pointer items-center justify-center rounded-full p-1.5 hover:bg-neutral-100 focus-visible:outline-hidden dark:hover:bg-neutral-800">
          {user?.avatar ? (
            <Avatar src={user.avatar} className="size-8" />
          ) : (
            <div className="size-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium text-sm">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </PopoverButton>

        <PopoverPanel
          transition
          anchor={{
            to: 'bottom end',
            gap: 16,
          }}
          className="z-40 w-80 rounded-3xl shadow-lg ring-1 ring-black/5 transition duration-200 ease-in-out data-closed:translate-y-1 data-closed:opacity-0"
        >
          <div className="relative grid grid-cols-1 gap-6 bg-white px-6 py-7 dark:bg-neutral-800">
            <div className="flex items-center space-x-3">
              {user?.avatar ? (
                <Avatar src={user.avatar} className="size-12" />
              ) : (
                <div className="size-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium text-lg">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="grow">
                <h4 className="font-semibold">{user?.name}</h4>
                <p className="mt-0.5 text-xs text-neutral-500">{user?.email}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                  user?.role === 'Admin' 
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                    : user?.role === 'Host'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                }`}>
                  {user?.role}
                </span>
              </div>
            </div>

            <Divider />


            {/* My Account */}
            <Link
              href="/account"
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
            >
              <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                <HugeiconsIcon icon={UserIcon} size={24} strokeWidth={1.5} />
              </div>
              <p className="ms-4 text-sm font-medium">Tài khoản của tôi</p>
            </Link>

            {/* My Listings - for Host/Admin */}
            {(user?.role === 'Host' || user?.role === 'Admin') && (
              <Link
                href="/account-savelists"
                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
              >
                <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                  <HugeiconsIcon icon={Task01Icon} size={24} strokeWidth={1.5} />
                </div>
                <p className="ms-4 text-sm font-medium">Listings của tôi</p>
              </Link>
            )}

            {/* Wishlist */}
            <Link
              href="/account-savelists"
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
            >
              <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                <HugeiconsIcon icon={FavouriteIcon} size={24} strokeWidth={1.5} />
              </div>
              <p className="ms-4 text-sm font-medium">Danh sách yêu thích</p>
            </Link>

            {/* Verification */}
            <Link
              href="/account-verification"
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
            >
              <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                <HugeiconsIcon icon={SecurityCheckIcon} size={24} strokeWidth={1.5} />
              </div>
              <div className="ms-4 flex items-center gap-2">
                <p className="text-sm font-medium">Xác minh tài khoản</p>
                {!user?.identity_verified && (
                  <span className="px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded">
                    Chưa xác minh
                  </span>
                )}
              </div>
            </Link>

            <Divider />

            {/* Dark theme toggle */}
            <div className="focus-visible:ring-opacity-50 -m-3 flex items-center justify-between rounded-lg p-2 hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 dark:hover:bg-neutral-700">
              <div className="flex items-center">
                <div className="flex flex-shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                  <HugeiconsIcon icon={Idea01Icon} size={24} strokeWidth={1.5} />
                </div>
                <p className="ms-4 text-sm font-medium">Chế độ tối</p>
              </div>
              <SwitchDarkMode2 />
            </div>

            {/* Admin Panel - only for Admin */}
            {user?.role === 'Admin' && (
              <>
                <Divider />
                <Link
                  href="/admin"
                  className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
                >
                  <div className="flex shrink-0 items-center justify-center text-primary-500">
                    <HugeiconsIcon icon={Settings01Icon} size={24} strokeWidth={1.5} />
                  </div>
                  <p className="ms-4 text-sm font-medium text-primary-600 dark:text-primary-400">Quản trị viên</p>
                </Link>
              </>
            )}

            <Divider />

            {/* Help */}
            <Link
              href="#"
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
            >
              <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                <HugeiconsIcon icon={BulbChargingIcon} size={24} strokeWidth={1.5} />
              </div>
              <p className="ms-4 text-sm font-medium">Trợ giúp</p>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700 w-full text-left"
            >
              <div className="flex shrink-0 items-center justify-center text-red-500">
                <HugeiconsIcon icon={Logout01Icon} size={24} strokeWidth={1.5} />
              </div>
              <p className="ms-4 text-sm font-medium text-red-500">Đăng xuất</p>
            </button>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}
