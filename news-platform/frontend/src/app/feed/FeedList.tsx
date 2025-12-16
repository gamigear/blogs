'use client';

import { useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { FeedPostCard } from '@/components/FeedPostCard';
import { FeedPost } from '@/lib/feed';

interface Props {
  initialPosts: FeedPost[];
  initialHasMore: boolean;
  totalPosts: number;
}

export function FeedList({ initialPosts, initialHasMore, totalPosts }: Props) {
  const { data: session } = useSession();
  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`/api/feed?page=${page + 1}`);
      const data = await res.json();
      
      setPosts(prev => [...prev, ...data.posts]);
      setHasMore(data.hasMore);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error('Failed to load more posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = useCallback(async (postId: number) => {
    if (!session) {
      window.location.href = '/auth/signin?callbackUrl=/feed';
      return;
    }

    try {
      const res = await fetch(`/api/feed/${postId}/like`, {
        method: 'POST',
      });
      
      if (!res.ok) throw new Error('Failed to like');
      
      const data = await res.json();
      
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, is_liked: data.liked, likes_count: data.count }
          : post
      ));
    } catch (err) {
      console.error('Like failed:', err);
    }
  }, [session]);

  const handleBookmark = useCallback(async (postId: number) => {
    if (!session) {
      window.location.href = '/auth/signin?callbackUrl=/feed';
      return;
    }

    try {
      const res = await fetch(`/api/feed/${postId}/bookmark`, {
        method: 'POST',
      });
      
      if (!res.ok) throw new Error('Failed to bookmark');
      
      const data = await res.json();
      
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, is_bookmarked: data.bookmarked }
          : post
      ));
    } catch (err) {
      console.error('Bookmark failed:', err);
    }
  }, [session]);

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
        <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Chưa có bài viết nào</h3>
        <p className="text-gray-500">Hãy là người đầu tiên chia sẻ với cộng đồng!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Posts count */}
      <p className="text-sm text-gray-500">{totalPosts} bài viết</p>

      {/* Posts */}
      {posts.map((post) => (
        <FeedPostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onBookmark={handleBookmark}
        />
      ))}

      {/* Load more */}
      {hasMore && (
        <div className="text-center py-4">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Đang tải...
              </span>
            ) : (
              'Xem thêm bài viết'
            )}
          </button>
        </div>
      )}

      {/* End message */}
      {!hasMore && posts.length > 0 && (
        <p className="text-center text-gray-400 text-sm py-4">
          Bạn đã xem hết bài viết 🎉
        </p>
      )}
    </div>
  );
}
