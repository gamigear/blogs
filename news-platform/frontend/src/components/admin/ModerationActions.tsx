'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  itemId: number;
  contentType: string;
}

export function ModerationActions({ itemId, contentType }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');

  const handleAction = async (action: 'approve' | 'reject' | 'delete') => {
    if (loading) return;
    const confirmMessage = {
      approve: 'Bạn có chắc muốn phê duyệt nội dung này?',
      reject: 'Bạn có chắc muốn từ chối nội dung này?',
      delete: 'Bạn có chắc muốn xóa nội dung này? Hành động này không thể hoàn tác.',
    };
    if (!confirm(confirmMessage[action])) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/moderation/${itemId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, note }),
      });
      if (!response.ok) throw new Error('Failed to process moderation action');
      router.refresh();
    } catch (error) {
      console.error('Moderation action error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-4 bg-gray-100 dark:bg-gray-800 -mx-6 -mb-6 px-6 pb-6 mt-4">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Ghi chú (tùy chọn)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Thêm ghi chú cho hành động này..."
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleAction('approve')}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Phê duyệt
        </button>
        <button
          onClick={() => handleAction('reject')}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-gray-300 text-gray-900 hover:bg-gray-400 disabled:opacity-50 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Từ chối
        </button>
        <button
          onClick={() => handleAction('delete')}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Xóa
        </button>
        <a
          href={contentType === 'community_post' ? '/community' : '/'}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-white dark:bg-[#1A1D1F] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Xem
        </a>
      </div>
    </div>
  );
}
