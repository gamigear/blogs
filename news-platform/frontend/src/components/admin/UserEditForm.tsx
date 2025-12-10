'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User { id: number; display_name: string; role: string; trust_level: number; banned_until: string | null; }
interface Props { user: User; }

export function UserEditForm({ user }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ display_name: user.display_name, role: user.role, trust_level: user.trust_level });
  const [banDuration, setBanDuration] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error('Failed to update user');
      alert('Cập nhật thành công!');
      router.refresh();
    } catch (error) { console.error('Error updating user:', error); alert('Có lỗi xảy ra. Vui lòng thử lại.'); }
    finally { setLoading(false); }
  };

  const handleBan = async () => {
    if (!banDuration) { alert('Vui lòng chọn thời gian cấm'); return; }
    if (!confirm('Bạn có chắc muốn cấm người dùng này?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/ban`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ duration: banDuration }) });
      if (!res.ok) throw new Error('Failed to ban user');
      alert('Đã cấm người dùng!');
      router.refresh();
    } catch (error) { console.error('Error banning user:', error); alert('Có lỗi xảy ra. Vui lòng thử lại.'); }
    finally { setLoading(false); }
  };

  const handleUnban = async () => {
    if (!confirm('Bạn có chắc muốn gỡ cấm người dùng này?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/ban`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to unban user');
      alert('Đã gỡ cấm người dùng!');
      router.refresh();
    } catch (error) { console.error('Error unbanning user:', error); alert('Có lỗi xảy ra. Vui lòng thử lại.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Chỉnh sửa thông tin</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tên hiển thị</label>
          <input type="text" value={formData.display_name} onChange={(e) => setFormData({ ...formData, display_name: e.target.value })} disabled={loading}
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Vai trò</label>
          <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} disabled={loading}
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
            <option value="reader">Reader</option>
            <option value="contributor">Contributor</option>
            <option value="moderator">Moderator</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Cấp độ tin cậy (0-4)</label>
          <input type="number" min="0" max="4" value={formData.trust_level} onChange={(e) => setFormData({ ...formData, trust_level: parseInt(e.target.value) })} disabled={loading}
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
        </div>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold disabled:opacity-50">
          {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </form>

      {/* Ban/Unban Section */}
      <div className="mt-6 pt-6 bg-gray-100 dark:bg-gray-800 -mx-6 -mb-6 px-6 pb-6">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quản lý truy cập</h4>
        {user.banned_until && new Date(user.banned_until) > new Date() ? (
          <button onClick={handleUnban} disabled={loading}
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors font-semibold disabled:opacity-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            Gỡ cấm người dùng
          </button>
        ) : (
          <div className="flex flex-wrap gap-3">
            <select value={banDuration} onChange={(e) => setBanDuration(e.target.value)} disabled={loading}
              className="px-4 py-3 rounded-md bg-white dark:bg-[#1A1D1F] text-gray-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-gray-800">
              <option value="">Chọn thời gian cấm</option>
              <option value="1h">1 giờ</option>
              <option value="24h">24 giờ</option>
              <option value="7d">7 ngày</option>
              <option value="30d">30 ngày</option>
              <option value="permanent">Vĩnh viễn</option>
            </select>
            <button onClick={handleBan} disabled={loading || !banDuration}
              className="flex items-center gap-2 px-5 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors font-semibold disabled:opacity-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Cấm người dùng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
