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

      if (!response.ok) {
        throw new Error('Failed to process moderation action');
      }

      router.refresh();
    } catch (error) {
      console.error('Moderation action error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ghi chú (tùy chọn)
        </label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Thêm ghi chú cho hành động này..."
          className="w-full px-3 py-2 border rounded-lg text-sm"
          disabled={loading}
        />
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => handleAction('approve')}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          ✓ Phê duyệt
        </button>
        <button
          onClick={() => handleAction('reject')}
          disabled={loading}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50"
        >
          ✗ Từ chối
        </button>
        <button
          onClick={() => handleAction('delete')}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          🗑 Xóa
        </button>
        <a
          href={contentType === 'community_post' ? '/community' : '/'}
          target="_blank"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          👁 Xem
        </a>
      </div>
    </div>
  );
}
