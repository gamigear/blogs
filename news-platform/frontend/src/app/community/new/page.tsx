'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NewCommunityPost() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (status === 'loading') return <div className="text-center py-12">Đang tải...</div>;
  
  if (!session) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Đăng nhập để đăng bài</h1>
        <p className="text-gray-600 mb-6">Bạn cần đăng nhập để đăng bài viết cộng đồng.</p>
        <button onClick={() => router.push('/api/auth/signin')} className="btn-primary">
          Đăng nhập
        </button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error('Không thể đăng bài');
      
      const data = await res.json();
      router.push(data.needsModeration ? '/community?pending=true' : `/community/${data.id}`);
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Đăng bài mới</h1>
      
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2">Tiêu đề</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={10}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            placeholder="Nhập tiêu đề bài viết..."
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Nội dung</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            minLength={50}
            rows={10}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
            placeholder="Viết nội dung bài viết..."
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? 'Đang đăng...' : 'Đăng bài'}
        </button>
      </form>
    </div>
  );
}
