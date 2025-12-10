import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { UserEditForm } from '@/components/admin/UserEditForm';
import { UserActivityLog } from '@/components/admin/UserActivityLog';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }>; }
interface UserDetail {
  id: number;
  keycloak_id: string;
  email: string;
  username: string;
  display_name: string;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  flagged_count: number;
  banned_until: string | null;
  created_at: string;
  last_login_at: string | null;
  avatar: string | null;
}

async function getUser(id: number): Promise<UserDetail | null> {
  try {
    const users = await query<UserDetail>(`
      SELECT id, keycloak_id, email, username, display_name, role, trust_level, posts_created, likes_received, flagged_count, banned_until, created_at, last_login_at, avatar
      FROM users WHERE id = $1
    `, [id]);
    return users[0] || null;
  } catch { return null; }
}

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;
  const userId = parseInt(id);
  if (isNaN(userId)) notFound();
  const user = await getUser(userId);
  if (!user) notFound();

  const trustLevelLabels: Record<number, string> = { 0: 'Mới', 1: 'Cơ bản', 2: 'Thành viên', 3: 'Thường xuyên', 4: 'Lãnh đạo' };
  const roleColors: Record<string, string> = {
    admin: 'bg-gray-300', editor: 'bg-gray-200', moderator: 'bg-gray-200', contributor: 'bg-gray-200', reader: 'bg-gray-100 dark:bg-gray-800'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/users" className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chi tiết người dùng</h1>
          <p className="text-gray-500">ID: {user.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="lg:col-span-1">
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <div className="text-center mb-6">
              {user.avatar ? (
                <img src={user.avatar} alt={user.display_name} className="w-24 h-24 mx-auto object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-md bg-gray-700 mx-auto flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{user.display_name?.charAt(0) || '?'}</span>
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">{user.display_name}</h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 bg-gray-100 dark:bg-gray-800 px-3 mb-1">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-900 dark:text-white text-sm">{user.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-gray-100 dark:bg-gray-800 px-3 mb-1">
                <span className="text-gray-500">Vai trò</span>
                <span className={`px-3 py-1 text-xs font-semibold ${roleColors[user.role] || roleColors.reader} text-gray-900`}>{user.role}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-gray-100 dark:bg-gray-800 px-3 mb-1">
                <span className="text-gray-500">Cấp độ</span>
                <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-200 text-gray-900">Lv.{user.trust_level} - {trustLevelLabels[user.trust_level]}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.posts_created}</p>
                  <p className="text-xs text-gray-500">Bài viết</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.likes_received}</p>
                  <p className="text-xs text-gray-500">Lượt thích</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${user.flagged_count > 0 ? 'text-[#FF6A55]' : 'text-gray-900 dark:text-white'}`}>{user.flagged_count}</p>
                  <p className="text-xs text-gray-500">Báo cáo</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 bg-gray-100 dark:bg-gray-800 px-3 mt-4">
                <span className="text-gray-500">Ngày tham gia</span>
                <span className="text-gray-900 dark:text-white text-sm">{new Date(user.created_at).toLocaleDateString('vi-VN')}</span>
              </div>
              {user.banned_until && new Date(user.banned_until) > new Date() && (
                <div className="bg-gray-800/10 p-4 mt-4">
                  <div className="flex items-center gap-2 text-[#FF6A55]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="font-semibold">Tài khoản bị cấm</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Đến: {new Date(user.banned_until).toLocaleString('vi-VN')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Edit Form & Activity */}
        <div className="lg:col-span-2 space-y-6">
          <UserEditForm user={user} />
          <UserActivityLog userId={user.id} />
        </div>
      </div>
    </div>
  );
}
