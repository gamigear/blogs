'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface User {
  id: number;
  keycloak_id: string;
  email: string;
  username: string;
  display_name: string;
  role: string;
  trust_level: number;
  created_at: string;
  last_login_at: string | null;
  banned_until: string | null;
  post_count: number;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const roleColors: Record<string, { bg: string; text: string }> = {
  admin: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-800 dark:text-red-400' },
  editor: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-800 dark:text-blue-400' },
  moderator: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-800 dark:text-purple-400' },
  contributor: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-400' },
  reader: { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' },
};

const trustLevelLabels: Record<number, string> = {
  0: 'Mới', 1: 'Cơ bản', 2: 'Thành viên', 3: 'Thường xuyên', 4: 'Lãnh đạo',
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [trustLevelFilter, setTrustLevelFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(pagination.page), limit: String(pagination.limit) });
      if (search) params.set('search', search);
      if (roleFilter) params.set('role', roleFilter);
      if (trustLevelFilter) params.set('trustLevel', trustLevelFilter);
      if (statusFilter) params.set('status', statusFilter);
      const res = await fetch(`/api/admin/users?${params}`);
      const data = await res.json();
      if (res.ok) { setUsers(data.users); setPagination(data.pagination); }
    } catch (error) { console.error('Error fetching users:', error); }
    finally { setLoading(false); }
  }, [pagination.page, pagination.limit, search, roleFilter, trustLevelFilter, statusFilter]);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); setPagination(prev => ({ ...prev, page: 1 })); };
  const isBanned = (user: User) => user.banned_until && new Date(user.banned_until) > new Date();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý người dùng</h1>
          <p className="text-gray-500 mt-1">Tổng cộng {pagination.total} người dùng</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2 px-5 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tạo người dùng
        </button>
      </div>

      {/* Filters */}
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-4">
        <form onSubmit={handleSearch} className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <input type="text" placeholder="Tìm kiếm theo tên, email..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <select value={roleFilter} onChange={(e) => { setRoleFilter(e.target.value); setPagination(prev => ({ ...prev, page: 1 })); }}
            className="px-4 py-2.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
            <option value="">Tất cả vai trò</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="moderator">Moderator</option>
            <option value="contributor">Contributor</option>
            <option value="reader">Reader</option>
          </select>
          <select value={trustLevelFilter} onChange={(e) => { setTrustLevelFilter(e.target.value); setPagination(prev => ({ ...prev, page: 1 })); }}
            className="px-4 py-2.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
            <option value="">Tất cả cấp độ</option>
            <option value="0">Lv.0 - Mới</option>
            <option value="1">Lv.1 - Cơ bản</option>
            <option value="2">Lv.2 - Thành viên</option>
            <option value="3">Lv.3 - Thường xuyên</option>
            <option value="4">Lv.4 - Lãnh đạo</option>
          </select>
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPagination(prev => ({ ...prev, page: 1 })); }}
            className="px-4 py-2.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="banned">Bị cấm</option>
          </select>
          <button type="submit" className="px-5 py-2.5 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold">Tìm kiếm</button>
        </form>
      </div>

      {/* Table */}
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <div className="w-10 h-10 border-4 border-[#2A85FF] border-t-transparent animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-500">Đang tải...</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#EFEFEF] dark:border-[#272B30]">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Người dùng</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Vai trò</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Cấp độ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Trạng thái</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Ngày tham gia</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-[#EFEFEF] dark:border-[#272B30] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-700 dark:text-white font-bold text-sm">{user.display_name?.charAt(0) || user.username?.charAt(0) || '?'}</span>
                          </div>
                          <div>
                            <Link href={`/admin/users/${user.id}`} className="font-semibold text-gray-900 dark:text-white hover:text-gray-600">{user.display_name}</Link>
                            <p className="text-xs text-gray-500">@{user.username}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><span className="text-sm text-gray-900 dark:text-white">{user.email}</span></td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-semibold ${roleColors[user.role]?.bg || roleColors.reader.bg} ${roleColors[user.role]?.text || roleColors.reader.text}`}>{user.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Lv.{user.trust_level} - {trustLevelLabels[user.trust_level]}</span>
                      </td>
                      <td className="px-6 py-4">
                        {isBanned(user) ? (
                          <span className="px-3 py-1 text-xs font-semibold rounded-md bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Bị cấm</span>
                        ) : (
                          <span className="px-3 py-1 text-xs font-semibold rounded-md bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">Hoạt động</span>
                        )}
                      </td>
                      <td className="px-6 py-4"><span className="text-sm text-gray-500">{new Date(user.created_at).toLocaleDateString('vi-VN')}</span></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/users/${user.id}`} className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-900/10 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {users.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <p className="text-gray-500">Không tìm thấy người dùng nào</p>
              </div>
            )}
            {pagination.totalPages > 1 && (
              <div className="px-6 py-4 bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
                <p className="text-sm text-gray-500">Hiển thị {(pagination.page - 1) * pagination.limit + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} / {pagination.total}</p>
                <div className="flex gap-2">
                  <button onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))} disabled={pagination.page === 1}
                    className="px-4 py-2 rounded-md bg-white dark:bg-[#1A1D1F] text-gray-900 dark:text-white disabled:opacity-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">Trước</button>
                  <span className="px-4 py-2 text-gray-500">{pagination.page} / {pagination.totalPages}</span>
                  <button onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))} disabled={pagination.page === pagination.totalPages}
                    className="px-4 py-2 rounded-md bg-white dark:bg-[#1A1D1F] text-gray-900 dark:text-white disabled:opacity-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">Sau</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {showCreateModal && <CreateUserModal onClose={() => setShowCreateModal(false)} onSuccess={() => { setShowCreateModal(false); fetchUsers(); }} />}
    </div>
  );
}


function CreateUserModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ username: '', email: '', displayName: '', password: '', role: 'reader', trustLevel: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      onSuccess();
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Có lỗi xảy ra'); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] shadow-xl w-full max-w-md">
        <div className="p-6 bg-gray-100 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tạo người dùng mới</h2>
            <button onClick={onClose} className="w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && <div className="p-3 bg-gray-800/10 text-[#FF6A55] text-sm">{error}</div>}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tên đăng nhập</label>
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tên hiển thị</label>
            <input type="text" value={formData.displayName} onChange={(e) => setFormData({ ...formData, displayName: e.target.value })} required
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Mật khẩu</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
            <p className="text-xs text-gray-500 mt-1">Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Vai trò</label>
              <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                <option value="reader">Reader</option>
                <option value="contributor">Contributor</option>
                <option value="moderator">Moderator</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Cấp độ</label>
              <select value={formData.trustLevel} onChange={(e) => setFormData({ ...formData, trustLevel: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                <option value={0}>Lv.0 - Mới</option>
                <option value={1}>Lv.1 - Cơ bản</option>
                <option value={2}>Lv.2 - Thành viên</option>
                <option value={3}>Lv.3 - Thường xuyên</option>
                <option value={4}>Lv.4 - Lãnh đạo</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} disabled={loading}
              className="flex-1 px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold">Hủy</button>
            <button type="submit" disabled={loading}
              className="flex-1 px-4 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold disabled:opacity-50">
              {loading ? 'Đang tạo...' : 'Tạo người dùng'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
