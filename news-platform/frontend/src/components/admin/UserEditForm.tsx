'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  display_name: string;
  role: string;
  trust_level: number;
  banned_until: string | null;
}

interface Props {
  user: User;
}

export function UserEditForm({ user }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    display_name: user.display_name,
    role: user.role,
    trust_level: user.trust_level,
  });
  const [banDuration, setBanDuration] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update user');
      
      alert('Cập nhật thành công!');
      router.refresh();
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleBan = async () => {
    if (!banDuration) {
      alert('Vui lòng chọn thời gian cấm');
      return;
    }

    if (!confirm('Bạn có chắc muốn cấm người dùng này?')) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/ban`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ duration: banDuration }),
      });

      if (!res.ok) throw new Error('Failed to ban user');
      
      alert('Đã cấm người dùng!');
      router.refresh();
    } catch (error) {
      console.error('Error banning user:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnban = async () => {
    if (!confirm('Bạn có chắc muốn gỡ cấm người dùng này?')) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/ban`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to unban user');
      
      alert('Đã gỡ cấm người dùng!');
      router.refresh();
    } catch (error) {
      console.error('Error unbanning user:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Chỉnh sửa thông tin</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tên hiển thị
          </label>
          <input
            type="text"
            value={formData.display_name}
            onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vai trò
          </label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            disabled={loading}
          >
            <option value="reader">Reader</option>
            <option value="contributor">Contributor</option>
            <option value="moderator">Moderator</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cấp độ tin cậy (0-4)
          </label>
          <input
            type="number"
            min="0"
            max="4"
            value={formData.trust_level}
            onChange={(e) => setFormData({ ...formData, trust_level: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border rounded-lg"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </form>

      {/* Ban/Unban Section */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium text-gray-900 mb-3">Quản lý truy cập</h4>
        
        {user.banned_until ? (
          <button
            onClick={handleUnban}
            disabled={loading}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            Gỡ cấm người dùng
          </button>
        ) : (
          <div className="flex gap-3">
            <select
              value={banDuration}
              onChange={(e) => setBanDuration(e.target.value)}
              className="px-3 py-2 border rounded-lg"
              disabled={loading}
            >
              <option value="">Chọn thời gian cấm</option>
              <option value="1h">1 giờ</option>
              <option value="24h">24 giờ</option>
              <option value="7d">7 ngày</option>
              <option value="30d">30 ngày</option>
              <option value="permanent">Vĩnh viễn</option>
            </select>
            <button
              onClick={handleBan}
              disabled={loading || !banDuration}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
            >
              Cấm người dùng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
