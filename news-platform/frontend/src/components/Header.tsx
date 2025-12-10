'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { NotificationBell } from './NotificationBell';
import { useSettings } from '@/contexts/SettingsContext';

const defaultMenuItems = [
  { name: 'Trang chủ', href: '/', icon: '🏠' },
  { name: 'Thời sự', href: '/category/thoi-su', icon: '📰' },
  { name: 'Kinh doanh', href: '/category/kinh-doanh', icon: '💼' },
  { name: 'Công nghệ', href: '/category/cong-nghe', icon: '💻' },
  { name: 'Thể thao', href: '/category/the-thao', icon: '⚽' },
  { name: 'Giải trí', href: '/category/giai-tri', icon: '🎬' },
  { name: 'Sức khỏe', href: '/category/suc-khoe', icon: '🏥' },
  { name: 'Đời sống', href: '/category/doi-song', icon: '🏡' },
  { name: 'Giáo dục', href: '/category/giao-duc', icon: '📚' },
  { name: 'Du lịch', href: '/category/du-lich', icon: '✈️' },
  { name: 'Xe', href: '/category/xe', icon: '🚗' },
];

export function Header() {
  const settings = useSettings();
  const menuItems = settings.header.menu_items?.length > 0 ? settings.header.menu_items : defaultMenuItems;
  const { data: session, status } = useSession();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const isAdmin = session?.user?.role && ['admin', 'editor', 'moderator'].includes(session.user.role);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showSidebar]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 h-[72px]">
        <div className="h-full px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {settings.general.logo_header_url ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={settings.general.logo_header_url}
                alt={settings.general.site_name || 'Logo'}
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/logo.png"
                alt={settings.general.site_name || 'Logo'}
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            )}
            <span className="hidden text-2xl font-bold text-primary">{settings.general.site_name || 'Bangiaiphap.com'}</span>
          </Link>

          {/* Search - Center */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4 md:mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tin siêu phẩm công nghệ, cộng đồng hỏi đáp..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {status === 'loading' ? (
              <div className="w-9 h-9 bg-gray-100 rounded-full animate-pulse" />
            ) : session ? (
              <>
                <NotificationBell />
                {isAdmin && (
                  <Link href="/admin" className="hidden sm:block text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                    Admin
                  </Link>
                )}
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                        <p className="text-xs text-gray-500">{session.user?.email}</p>
                      </div>
                      <Link 
                        href={(session.user as any)?.username ? `/user/${(session.user as any).username}` : '/profile'} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" 
                        onClick={() => setShowUserMenu(false)}
                      >
                        Trang cá nhân
                      </Link>
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setShowUserMenu(false)}>
                        Cài đặt tài khoản
                      </Link>
                      <button onClick={() => { setShowUserMenu(false); signOut(); }} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link href="/auth/signin" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            )}
            
            {/* Menu button */}
            <button 
              onClick={() => setShowSidebar(true)}
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Sidebar Header */}
        <div className="h-[72px] px-4 flex items-center justify-between border-b">
          <span className="font-bold text-lg">Menu</span>
          <button 
            onClick={() => setShowSidebar(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-72px)]">
          {/* Main Menu */}
          <nav className="py-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowSidebar(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t my-2" />

          {/* Newsfeed */}
          <Link
            href="/feed"
            onClick={() => setShowSidebar(false)}
            className="flex items-center gap-3 px-4 py-3 text-primary hover:bg-primary/5 transition-colors"
          >
            <span className="text-lg">📝</span>
            <span className="font-medium">Newsfeed</span>
          </Link>

          {/* Community */}
          <Link
            href="/community"
            onClick={() => setShowSidebar(false)}
            className="flex items-center gap-3 px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
          >
            <span className="text-lg">💬</span>
            <span className="font-medium">Cộng đồng</span>
          </Link>

          {/* User section if logged in */}
          {session && (
            <>
              <div className="border-t my-2" />
              <div className="px-4 py-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Tài khoản</p>
                <Link
                  href={(session.user as any)?.username ? `/user/${(session.user as any).username}` : '/profile'}
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary"
                >
                  <span>🏠</span>
                  <span>Trang cá nhân</span>
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setShowSidebar(false)}
                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary"
                >
                  <span>⚙️</span>
                  <span>Cài đặt tài khoản</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
