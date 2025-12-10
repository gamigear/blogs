'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface KeywordFilter {
  id: number;
  keyword: string;
  filter_type: 'banned' | 'review' | 'replace';
  replacement_text: string | null;
  is_regex: boolean;
  is_case_sensitive: boolean;
  is_active: boolean;
  match_count: number;
  created_at: string;
}

interface Stats {
  total: number;
  banned: number;
  review: number;
  replace: number;
  active: number;
}

const typeColors: Record<string, string> = {
  banned: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  review: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  replace: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

const typeLabels: Record<string, string> = {
  banned: 'Cấm',
  review: 'Cần duyệt',
  replace: 'Thay thế',
};

export default function KeywordFiltersPage() {
  const [filters, setFilters] = useState<KeywordFilter[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingFilter, setEditingFilter] = useState<KeywordFilter | null>(null);
  const [formData, setFormData] = useState({
    keyword: '',
    filter_type: 'banned' as 'banned' | 'review' | 'replace',
    replacement_text: '',
    is_regex: false,
    is_case_sensitive: false,
  });

  const fetchFilters = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (typeFilter) params.set('filter_type', typeFilter);
      if (search) params.set('search', search);

      const res = await fetch(`/api/admin/keyword-filters?${params}`);
      const data = await res.json();
      setFilters(data.data || []);
      setStats(data.stats || null);
    } catch (error) {
      console.error('Error fetching filters:', error);
    } finally {
      setLoading(false);
    }
  }, [typeFilter, search]);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(filters.map((f) => f.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelect = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Bạn có chắc muốn xóa ${selectedIds.length} từ khóa?`)) return;

    try {
      await fetch('/api/admin/keyword-filters', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds }),
      });
      setSelectedIds([]);
      fetchFilters();
    } catch (error) {
      console.error('Error deleting filters:', error);
    }
  };

  const handleToggleActive = async (id: number, is_active: boolean) => {
    try {
      await fetch(`/api/admin/keyword-filters/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active }),
      });
      fetchFilters();
    } catch (error) {
      console.error('Error updating filter:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa từ khóa này?')) return;

    try {
      await fetch(`/api/admin/keyword-filters/${id}`, { method: 'DELETE' });
      fetchFilters();
    } catch (error) {
      console.error('Error deleting filter:', error);
    }
  };

  const openModal = (filter?: KeywordFilter) => {
    if (filter) {
      setEditingFilter(filter);
      setFormData({
        keyword: filter.keyword,
        filter_type: filter.filter_type,
        replacement_text: filter.replacement_text || '',
        is_regex: filter.is_regex,
        is_case_sensitive: filter.is_case_sensitive,
      });
    } else {
      setEditingFilter(null);
      setFormData({
        keyword: '',
        filter_type: 'banned',
        replacement_text: '',
        is_regex: false,
        is_case_sensitive: false,
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingFilter) {
        await fetch(`/api/admin/keyword-filters/${editingFilter.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch('/api/admin/keyword-filters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      setShowModal(false);
      fetchFilters();
    } catch (error) {
      console.error('Error saving filter:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/admin/comments" className="hover:text-[#2A85FF]">
              Quản lý bình luận
            </Link>
            <span>/</span>
            <span>Từ khóa lọc</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý từ khóa lọc</h1>
          <p className="text-gray-500 mt-1">Thiết lập từ khóa cấm, cần xét duyệt hoặc thay thế tự động</p>
        </div>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-[#2A85FF] text-white rounded-lg hover:bg-[#2A85FF]/90 transition-colors"
        >
          + Thêm từ khóa
        </button>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Tổng', value: stats.total, color: 'bg-gray-100 dark:bg-gray-800' },
            { label: 'Từ cấm', value: stats.banned, color: 'bg-red-100 dark:bg-red-900/30' },
            { label: 'Cần duyệt', value: stats.review, color: 'bg-yellow-100 dark:bg-yellow-900/30' },
            { label: 'Thay thế', value: stats.replace, color: 'bg-blue-100 dark:bg-blue-900/30' },
            { label: 'Đang hoạt động', value: stats.active, color: 'bg-green-100 dark:bg-green-900/30' },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.color} rounded-lg p-4`}>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-white dark:bg-[#1A1D1F] p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          {['', 'banned', 'review', 'replace'].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                typeFilter === type
                  ? 'bg-[#2A85FF] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {type === '' ? 'Tất cả' : typeLabels[type]}
            </button>
          ))}
        </div>
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Tìm kiếm từ khóa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchFilters()}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#1A1D1F] text-gray-900 dark:text-white placeholder-gray-500"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Đã chọn {selectedIds.length} từ khóa
          </span>
          <button
            onClick={handleBulkDelete}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            Xóa
          </button>
        </div>
      )}

      {/* Filters List */}
      <div className="bg-white dark:bg-[#1A1D1F] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {loading ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">Đang tải...</div>
        ) : filters.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#1A1D1F]">
            <p>Chưa có từ khóa nào</p>
            <button
              onClick={() => openModal()}
              className="mt-4 text-[#2A85FF] hover:underline"
            >
              + Thêm từ khóa đầu tiên
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filters.length && filters.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Từ khóa
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Loại
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Thay thế
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Tùy chọn
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Số lần khớp
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                    Trạng thái
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filters.map((filter) => (
                  <tr key={filter.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(filter.id)}
                        onChange={(e) => handleSelect(filter.id, e.target.checked)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                        {filter.keyword}
                      </code>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[filter.filter_type]}`}>
                        {typeLabels[filter.filter_type]}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {filter.replacement_text || '-'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        {filter.is_regex && (
                          <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded text-xs">
                            Regex
                          </span>
                        )}
                        {filter.is_case_sensitive && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 rounded text-xs">
                            Phân biệt hoa/thường
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {filter.match_count}
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => handleToggleActive(filter.id, !filter.is_active)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          filter.is_active ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            filter.is_active ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openModal(filter)}
                          className="p-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                          title="Sửa"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(filter.id)}
                          className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                          title="Xóa"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {editingFilter ? 'Sửa từ khóa' : 'Thêm từ khóa mới'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Từ khóa *
                </label>
                <input
                  type="text"
                  value={formData.keyword}
                  onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Nhập từ khóa..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Loại lọc *
                </label>
                <select
                  value={formData.filter_type}
                  onChange={(e) => setFormData({ ...formData, filter_type: e.target.value as 'banned' | 'review' | 'replace' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="banned">Cấm - Chặn hoàn toàn</option>
                  <option value="review">Cần duyệt - Đưa vào hàng đợi xét duyệt</option>
                  <option value="replace">Thay thế - Tự động thay thế bằng text khác</option>
                </select>
              </div>
              {formData.filter_type === 'replace' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Thay thế bằng *
                  </label>
                  <input
                    type="text"
                    value={formData.replacement_text}
                    onChange={(e) => setFormData({ ...formData, replacement_text: e.target.value })}
                    required={formData.filter_type === 'replace'}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Ví dụ: ***"
                  />
                </div>
              )}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_regex}
                    onChange={(e) => setFormData({ ...formData, is_regex: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Sử dụng Regex</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_case_sensitive}
                    onChange={(e) => setFormData({ ...formData, is_case_sensitive: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Phân biệt hoa/thường</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2A85FF] text-white rounded-lg hover:bg-[#2A85FF]/90"
                >
                  {editingFilter ? 'Cập nhật' : 'Thêm'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
