'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {
  articleSlug: string;
  articleId?: number;
  authorUserId?: number;
  initialLikesCount?: number;
  initialDislikesCount?: number;
  commentsCount?: number;
}

export function ArticleActions({
  articleSlug,
  articleId,
  authorUserId,
  initialLikesCount = 0,
  initialDislikesCount = 0,
  commentsCount = 0,
}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [dislikesCount, setDislikesCount] = useState(initialDislikesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if current user can edit (admin/editor or author)
  // Wait for session to be loaded before checking permissions
  const sessionLoaded = status === 'authenticated';
  const userRole = (session?.user as any)?.role || '';
  const sessionUserId = (session as any)?.userId; // userId is stored at session level, not session.user
  const isAdmin = sessionLoaded && ['admin', 'editor', 'superadmin'].includes(userRole);
  const isAuthor = sessionLoaded && sessionUserId && authorUserId && sessionUserId === authorUserId;
  const canEdit = isAdmin || isAuthor;

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const [likeRes, dislikeRes] = await Promise.all([
          fetch(`/api/articles/${articleSlug}/like`),
          fetch(`/api/articles/${articleSlug}/dislike`),
        ]);

        if (likeRes.ok) {
          const data = await likeRes.json();
          setLikesCount(data.likes_count);
          setIsLiked(data.is_liked);
        }
        if (dislikeRes.ok) {
          const data = await dislikeRes.json();
          setDislikesCount(data.dislikes_count);
          setIsDisliked(data.is_disliked);
        }
      } catch (error) {
        console.error('Error checking status:', error);
      }
    };

    checkStatus();
  }, [articleSlug]);

  const handleLike = async () => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/articles/${articleSlug}/like`, {
        method: isLiked ? 'DELETE' : 'POST',
      });

      if (res.ok) {
        const data = await res.json();
        setLikesCount(data.likes_count);
        setIsLiked(data.is_liked);
        // If liked, remove dislike
        if (data.is_liked) {
          setIsDisliked(false);
          if (data.dislikes_count !== undefined) {
            setDislikesCount(data.dislikes_count);
          }
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDislike = async () => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/articles/${articleSlug}/dislike`, {
        method: isDisliked ? 'DELETE' : 'POST',
      });

      if (res.ok) {
        const data = await res.json();
        setDislikesCount(data.dislikes_count);
        setIsDisliked(data.is_disliked);
        // If disliked, remove like
        if (data.is_disliked) {
          setIsLiked(false);
          if (data.likes_count !== undefined) {
            setLikesCount(data.likes_count);
          }
        }
      }
    } catch (error) {
      console.error('Error toggling dislike:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: url,
        });
      } catch (error) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      alert('Đã sao chép link!');
    }
  };

  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="border-t border-b border-gray-200 py-2 mt-8">
      {/* Actions - Evenly distributed */}
      <div className="flex items-center justify-around">
        {/* Like button */}
        <button
          onClick={handleLike}
          disabled={loading}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
            isLiked ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span className="text-xs">{likesCount || 'Thích'}</span>
        </button>

        {/* Dislike button */}
        <button
          onClick={handleDislike}
          disabled={loading}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
            isDisliked ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <svg className="w-5 h-5 rotate-180" fill={isDisliked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span className="text-xs">{dislikesCount || ''}</span>
        </button>

        {/* Comment button */}
        <button
          onClick={scrollToComments}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs">{commentsCount || 'Bình luận'}</span>
        </button>

        {/* Share button */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="text-xs">Chia sẻ</span>
        </button>

        {/* Edit button - only for admin or author */}
        {canEdit && articleId && (
          <a
            href={`/admin/articles/${articleId}/edit`}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-xs">Sửa</span>
          </a>
        )}
      </div>
    </div>
  );
}
