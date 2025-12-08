'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NotificationBell } from './NotificationBell';

export function Header() {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role && ['admin', 'editor', 'moderator'].includes(session.user.role);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          📰 Bobatea
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/category/tin-tuc" className="hover:text-primary">Tin tức</Link>
          <Link href="/community" className="hover:text-primary">Cộng đồng</Link>
          
          {status === 'loading' ? (
            <span className="text-gray-400">...</span>
          ) : session ? (
            <div className="flex items-center gap-3">
              <NotificationBell />
              {isAdmin && (
                <Link href="/admin" className="text-sm text-purple-600 hover:underline">
                  Admin
                </Link>
              )}
              <span className="text-sm text-gray-600">{session.user?.name}</span>
              <button onClick={() => signOut()} className="btn-secondary text-sm">
                Đăng xuất
              </button>
            </div>
          ) : (
            <button onClick={() => signIn('keycloak')} className="btn-primary text-sm">
              Đăng nhập
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
