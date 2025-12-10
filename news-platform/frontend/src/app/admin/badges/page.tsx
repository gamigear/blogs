'use client';

import { useState, useEffect } from 'react';

interface Badge {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string;
  type: string;
  is_active: boolean;
  sort_order: number;
}

export default function AdminBadgesPage() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBadge, setEditingBadge] = useState<Badge | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    icon: '',
    color: '#3B82F6',
    type: 'achievement',
    is_active: true,
    sort_order: 0,
  });

  useEffect(() => {
    fetchBadges();
  }, []);

  const fetchBadges = async () => {
    try {
      const res = await fetch('/api/admin/badges');
      const data = await res.json();
      setBadges(data.badges || []);
    } catch (error) {
      console.error('Error fetching badges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingBadge ? `/api/admin/badges/${editingBadge.id}` : '/api/admin/badges';
      const method = editingBadge ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchBadges();
        closeModal();
      } else {
        const data = await res.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error saving badge:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa huy hiệu này?')) return;
    try {
      await fetch(`/api/admin/badges/${id}`, { method: 'DELETE' });
      fetchBadges();
    } catch (error) {
      console.error('Error deleting badge:', error);
    }
  };

  const openModal = (badge?: Badge) => {
    if (badge) {
      setEditingBadge(badge);
      setFormData({
        name: badge.name,
        slug: badge.slug,
        description: badge.description || '',
        icon: badge.icon || '',
        color: badge.color,
        type: badge.type,
        is_active: badge.is_active,
        sort_order: badge.sort_order,
      });
    } else {
      setEditingBadge(null);
      setFormData({ name: '', slug: '', description: '', icon: '', color: '#3B82F6', type: 'achievement', is_active: true, sort_order: 0 });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingBadge(null);
  };

  const typeLabels: Record<string, string> = {
    achievement: 'Thành tích',
    kyc: 'Xác minh',
    special: 'Đặc biệt',
    role: 'Vai trò',
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Quản lý Huy hiệu</h1>
        <button onClick={() => openModal()} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          + Tạo huy hiệu
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">Đang tải...</div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Huy hiệu</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Slug</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Loại</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trạng thái</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {badges.map((badge) => (
                <tr key={badge.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: badge.color }}>
                        {badge.icon || badge.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-medium">{badge.name}</p>
                        <p className="text-xs text-gray-500">{badge.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{badge.slug}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100">{typeLabels[badge.type] || badge.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${badge.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {badge.is_active ? 'Hoạt động' : 'Tắt'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => openModal(badge)} className="text-indigo-600 hover:underline text-sm mr-3">Sửa</button>
                    <button onClick={() => handleDelete(badge.id)} className="text-red-600 hover:underline text-sm">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">{editingBadge ? 'Sửa huy hiệu' : 'Tạo huy hiệu mới'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tên huy hiệu *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required disabled={!!editingBadge} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={2} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Icon (emoji/text)</label>
                  <input type="text" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="🏆" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Màu sắc</label>
                  <input type="color" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })} className="w-full h-10 border rounded-lg cursor-pointer" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Loại</label>
                  <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-3 py-2 border rounded-lg">
                    <option value="achievement">Thành tích</option>
                    <option value="kyc">Xác minh</option>
                    <option value="special">Đặc biệt</option>
                    <option value="role">Vai trò</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Thứ tự</label>
                  <input type="number" value={formData.sort_order} onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) })} className="w-full px-3 py-2 border rounded-lg" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="is_active" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} />
                <label htmlFor="is_active" className="text-sm">Kích hoạt</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={closeModal} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Hủy</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
