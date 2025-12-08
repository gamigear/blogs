import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { UserEditForm } from '@/components/admin/UserEditForm';
import { UserActivityLog } from '@/components/admin/UserActivityLog';

export const dynamic = 'force-dynamic';

interface Props {
  params: { id: string };
}

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
      SELECT 
        id, keycloak_id, email, username, display_name, role, 
        trust_level, posts_created, likes_received, flagged_count,
        banned_until, created_at, last_login_at, avatar
      FROM users WHERE id = $1
    `, [id]);
    return users[0] || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export default async function UserDetailPage({ params }: Props) {
  const userId = parseInt(params.id);
  if (isNaN(userId)) notFound();

  const user = await getUser(userId);
  if (!user) notFound();

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/admin/users" className="text-blue-600 hover:underline">
          ← Quay lại
        </a>
        <h1 className="text-2xl font-bold">Chi tiết người dùng</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center mb-4">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.display_name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-3xl">
                  {user.display_name?.charAt(0) || '?'}
                </div>
              )}
              <h2 className="text-xl font-semibold mt-3">{user.display_name}</h2>
              <p className="text-gray-600">@{user.username}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vai trò:</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                  {user.role}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cấp độ tin cậy:</span>
                <span>Level {user.trust_level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bài viết:</span>
                <span>{user.posts_created}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lượt thích nhận:</span>
                <span>{user.likes_received}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bị báo cáo:</span>
                <span className={user.flagged_count > 0 ? 'text-red-600' : ''}>
                  {user.flagged_count}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ngày tham gia:</span>
                <span>{new Date(user.created_at).toLocaleDateString('vi-VN')}</span>
              </div>
              {user.banned_until && (
                <div className="bg-red-50 border border-red-200 rounded p-2 mt-3">
                  <p className="text-red-800 text-sm font-medium">
                    ⚠️ Bị cấm đến: {new Date(user.banned_until).toLocaleString('vi-VN')}
                  </p>
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
