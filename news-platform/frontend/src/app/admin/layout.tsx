import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '@/lib/auth';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  // Check if user is admin or editor
  const userRole = (session?.user as any)?.role || '';
  if (!session?.user || !['admin', 'editor', 'moderator'].includes(userRole)) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-xl font-bold text-gray-900">
              Admin Panel
            </Link>
            <nav className="flex gap-4">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/admin/articles" className="text-gray-600 hover:text-gray-900">
                Bài viết
              </Link>
              <Link href="/admin/moderation" className="text-gray-600 hover:text-gray-900">
                Kiểm duyệt
              </Link>
              <Link href="/admin/users" className="text-gray-600 hover:text-gray-900">
                Người dùng
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{session.user.name}</span>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Về trang chủ
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
