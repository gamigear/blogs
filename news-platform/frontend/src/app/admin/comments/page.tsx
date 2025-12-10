'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Comment {
  id: number;
  article_id: number;
  content: string;
  status: 'pending' | 'approved' | 'rejected' | 'spam';
  user_name: string | null;
  user_avatar: string | null;
  article_title: string | null;
  likes_count: number;
  replies_count: number;
  flagged_count: number;
  created_at: string;
}

interface Stats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  spam: number;
  today: number;
  flagged: number;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  approved: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  spam: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
};

const statusLabels: Record<string, string> = {
  pending: 'Chờ duyệt',
  approved: 'Đã duyệt',
  rejected: 'Từ chối',
  spam: 'Spam',
};

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchComments = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: page.toString(), pageSize: '20' });
      if (filter) params.set('status', filter);
      if (search) params.set('search', search);

      const res = await fetch(`/api/admin/comments?${params}`);
      const data = await res.json();
      setComments(data.data || []);
      setStats(data.stats || null);
      setTotalPages(data.meta?.totalPages || 1);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  }, [page, filter, search]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(comments.map((c) => c.id));
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

  const handleBulkAction = async (status: string) => {
    if (selectedIds.length === 0) return;
    
    try {
      await fetch('/api/admin/comments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, status }),
      });
      setSelectedIds([]);
      fetchComments();
    } catch (error) {
      console.error('Error updating comments:', error);
    }
  };

  const handleSingleAction = async (id: number, status: string) => {
    try {
      await fetch(`/api/admin/comments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchComments();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa comment này?')) return;
    
    try {
      await fetch(`/api/admin/comments/${id}`, { method: 'DELETE' });
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý bình luận</h1>
          <p className="text-gray-500 mt-1">Xét duyệt và quản lý bình luận của người dùng</p>
        </div>
        <Link
          href="/admin/comments/keywords"
          className="px-4 py-2 bg-[#2A85FF] text-white rounded-lg hover:bg-[#2A85FF]/90 transition-colors"
        >
          Quản lý từ khóa
        </Link>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { label: 'Tổng', value: stats.total, color: 'bg-gray-100 dark:bg-gray-800' },
            { label: 'Chờ duyệt', value: stats.pending, color: 'bg-yellow-100 dark:bg-yellow-900/30' },
            { label: 'Đã duyệt', value: stats.approved, color: 'bg-green-100 dark:bg-green-900/30' },
            { label: 'Từ chối', value: stats.rejected, color: 'bg-red-100 dark:bg-red-900/30' },
            { label: 'Spam', value: stats.spam, color: 'bg-gray-100 dark:bg-gray-800' },
            { label: 'Hôm nay', value: stats.today, color: 'bg-blue-100 dark:bg-blue-900/30' },
            { label: 'Bị báo cáo', value: stats.flagged, color: 'bg-orange-100 dark:bg-orange-900/30' },
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
          {['', 'pending', 'approved', 'rejected', 'spam'].map((status) => (
            <button
              key={status}
              onClick={() => { setFilter(status); setPage(1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-[#2A85FF] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {status === '' ? 'Tất cả' : statusLabels[status]}
            </button>
          ))}
        </div>
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Tìm kiếm nội dung..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchComments()}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Đã chọn {selectedIds.length} comment
          </span>
          <button
            onClick={() => handleBulkAction('approved')}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          >
            Duyệt
          </button>
          <button
            onClick={() => handleBulkAction('rejected')}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            Từ chối
          </button>
          <button
            onClick={() => handleBulkAction('spam')}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
          >
            Đánh dấu spam
          </button>
        </div>
      )}

      {/* Comments List */}
      <div className="bg-white dark:bg-[#1A1D1F] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {loading ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">Đang tải...</div>
        ) : comments.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#1A1D1F]">Không có bình luận nào</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedIds.length === comments.length && comments.length > 0}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="rounded"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Nội dung
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Bài viết
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Trạng thái
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Thời gian
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {comments.map((comment) => (
                    <tr key={comment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(comment.id)}
                          onChange={(e) => handleSelect(comment.id, e.target.checked)}
                          className="rounded"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                            {comment.user_avatar ? (
                              <img src={comment.user_avatar} alt="" className="w-8 h-8 rounded-full" />
                            ) : (
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {(comment.user_name || 'A')[0].toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {comment.user_name || 'Ẩn danh'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {comment.content}
                            </p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                              <span>👍 {comment.likes_count}</span>
                              <span>💬 {comment.replies_count}</span>
                              {comment.flagged_count > 0 && (
                                <span className="text-red-500">🚩 {comment.flagged_count}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 max-w-[200px]">
                          {comment.article_title || 'N/A'}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[comment.status]}`}>
                          {statusLabels[comment.status]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {new Date(comment.created_at).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-2">
                          {comment.status !== 'approved' && (
                            <button
                              onClick={() => handleSingleAction(comment.id, 'approved')}
                              className="p-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded"
                              title="Duyệt"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                          {comment.status !== 'rejected' && (
                            <button
                              onClick={() => handleSingleAction(comment.id, 'rejected')}
                              className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                              title="Từ chối"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className="p-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 disabled:opacity-50"
                >
                  Trước
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Trang {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 disabled:opacity-50"
                >
                  Sau
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
