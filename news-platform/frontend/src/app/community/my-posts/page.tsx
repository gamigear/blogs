'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  status: 'pending' | 'approved' | 'rejected';
  rejection_reason: string | null;
  created_at: string;
}

export default function MyPostsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.userId) {
      fetchMyPosts();
    }
  }, [session]);

  const fetchMyPosts = async () => {
    try {
      const res = await fetch('/api/community/my-posts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId: number) => {
    if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return;

    try {
      const res = await fetch(`/api/community/${postId}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== postId));
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!session) return null;

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    pending: 'Chờ duyệt',
    approved: 'Đã duyệt',
    rejected: 'Bị từ chối',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link href="/community" className="text-indigo-600 hover:underline text-sm">← Cộng đồng</Link>
            <h1 className="text-2xl font-bold mt-2">Bài viết của tôi</h1>
          </div>
          <Link
            href="/community/new"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            + Viết bài mới
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Bạn chưa có bài viết nào.</p>
            <Link
              href="/community/new"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Viết bài đầu tiên
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded ${statusColors[post.status]}`}>
                        {statusLabels[post.status]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    )}
                    {post.status === 'rejected' && post.rejection_reason && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-sm text-red-700">
                          <strong>Lý do từ chối:</strong> {post.rejection_reason}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    {post.status === 'pending' && (
                      <Link
                        href={`/community/edit/${post.id}`}
                        className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
                      >
                        Sửa
                      </Link>
                    )}
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1 text-sm text-red-600 border border-red-200 rounded hover:bg-red-50"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
