import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface User {
  id: number;
  keycloak_id: string;
  email: string;
  display_name: string;
  role: string;
  trust_level: number;
  created_at: string;
  last_login: string | null;
  post_count: number;
}

async function getUsers(): Promise<User[]> {
  try {
    const users = await query<User>(`
      SELECT 
        u.id,
        u.keycloak_id,
        u.email,
        u.display_name,
        u.role,
        u.trust_level,
        u.created_at,
        u.last_login,
        (SELECT COUNT(*) FROM community_posts WHERE author_id = u.id) as post_count
      FROM users u
      ORDER BY u.created_at DESC
      LIMIT 100
    `);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export default async function UsersPage() {
  const users = await getUsers();

  const roleColors: Record<string, string> = {
    admin: 'bg-red-100 text-red-800',
    editor: 'bg-purple-100 text-purple-800',
    moderator: 'bg-blue-100 text-blue-800',
    user: 'bg-gray-100 text-gray-800',
  };

  const trustLevelLabels: Record<number, string> = {
    0: 'Mới',
    1: 'Cơ bản',
    2: 'Thành viên',
    3: 'Thường xuyên',
    4: 'Lãnh đạo',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Quản lý người dùng</h1>
        <div className="text-sm text-gray-600">
          Tổng: {users.length} người dùng
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tên</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Vai trò</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Cấp độ</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Bài viết</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ngày tham gia</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Đăng nhập cuối</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{user.display_name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded">
                    Lv.{user.trust_level} - {trustLevelLabels[user.trust_level]}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.post_count}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {new Date(user.created_at).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.last_login 
                    ? new Date(user.last_login).toLocaleDateString('vi-VN')
                    : 'Chưa đăng nhập'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Chưa có người dùng nào.
          </div>
        )}
      </div>
    </div>
  );
}
