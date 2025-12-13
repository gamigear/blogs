'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface Comment {
  id: number;
  article_id: number;
  user_id: number | null;
  parent_id: number | null;
  content: string;
  status: string;
  likes_count: number;
  replies_count: number;
  is_pinned: boolean;
  created_at: string;
  user_name?: string;
  user_avatar?: string;
  replies?: Comment[];
  is_liked?: boolean;
}

interface Props {
  articleId: number;
  articleSlug: string;
  defaultAvatar?: string;
}

function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Vừa xong';
  if (diffMins < 60) return `${diffMins} phút`;
  if (diffHours < 24) return `${diffHours} giờ`;
  if (diffDays < 7) return `${diffDays} ngày`;
  return date.toLocaleDateString('vi-VN');
}

// Default avatar fallback
const DEFAULT_AVATAR = '/images/default-avatar.png';

export function CommentSection({ articleId, articleSlug, defaultAvatar }: Props) {
  const { data: session, status } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [totalComments, setTotalComments] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [siteDefaultAvatar, setSiteDefaultAvatar] = useState<string>(defaultAvatar || DEFAULT_AVATAR);

  // Fetch default avatar from settings
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          // API trả về { general: { default_avatar: '...' }, ... }
          const avatar = data.general?.default_avatar;
          if (avatar) {
            setSiteDefaultAvatar(avatar);
          }
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    fetchSettings();
  }, []);

  const fetchComments = useCallback(async (pageNum: number = 1, append: boolean = false) => {
    try {
      const res = await fetch(`/api/comments?article_id=${articleId}&page=${pageNum}&pageSize=20`);
      const data = await res.json();
      
      if (data.data) {
        if (append) {
          setComments(prev => [...prev, ...data.data]);
        } else {
          setComments(data.data);
        }
        setTotalComments(data.meta?.total || 0);
        setHasMore(pageNum < (data.meta?.totalPages || 1));
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          article_id: articleId,
          content: newComment.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setNewComment('');
        if (data.data?.status === 'approved') {
          fetchComments();
        } else {
          alert('Bình luận của bạn đang chờ duyệt');
        }
      } else {
        alert(data.error || 'Có lỗi xảy ra');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Có lỗi xảy ra');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitReply = async (parentId: number) => {
    if (!replyContent.trim() || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          article_id: articleId,
          parent_id: parentId,
          content: replyContent.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setReplyContent('');
        setReplyTo(null);
        fetchComments();
      } else {
        alert(data.error || 'Có lỗi xảy ra');
      }
    } catch (error) {
      console.error('Error posting reply:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLikeComment = async (commentId: number, isLiked: boolean) => {
    if (!session) {
      alert('Vui lòng đăng nhập để thích bình luận');
      return;
    }

    try {
      const res = await fetch(`/api/comments/${commentId}/like`, {
        method: isLiked ? 'DELETE' : 'POST',
      });

      if (res.ok) {
        const data = await res.json();
        setComments(prev => updateCommentLike(prev, commentId, data.likes_count, !isLiked));
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  const updateCommentLike = (
    comments: Comment[],
    commentId: number,
    likesCount: number,
    isLiked: boolean
  ): Comment[] => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes_count: likesCount, is_liked: isLiked };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: updateCommentLike(comment.replies, commentId, likesCount, isLiked),
        };
      }
      return comment;
    });
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchComments(nextPage, true);
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      {/* Comment input */}
      <div className="flex gap-3 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || ''}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          ) : siteDefaultAvatar ? (
            <Image
              src={siteDefaultAvatar}
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-300 to-gray-400">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmitComment} className="flex-1">
          {status === 'authenticated' ? (
            <>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Đăng nhập một phát, tha hồ bình luận (^ 3^)"
                className="w-full px-4 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white border border-transparent focus:border-primary/30"
              />
              {newComment.trim() && (
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-1.5 bg-primary text-white text-sm rounded-full hover:bg-primary/90 disabled:opacity-50"
                  >
                    {submitting ? 'Đang gửi...' : 'Gửi'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/auth/signin"
              className="block w-full px-4 py-3 bg-gray-100 rounded-full text-sm text-gray-500 hover:bg-gray-200"
            >
              Đăng nhập để bình luận...
            </Link>
          )}
        </form>
      </div>

      {/* Comments list */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center text-gray-500 py-8">Chưa có bình luận nào</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={(id, name) => setReplyTo({ id, name })}
              onLike={handleLikeComment}
              replyTo={replyTo}
              replyContent={replyContent}
              setReplyContent={setReplyContent}
              onSubmitReply={handleSubmitReply}
              onCancelReply={() => setReplyTo(null)}
              submitting={submitting}
              isAuthenticated={status === 'authenticated'}
              defaultAvatar={siteDefaultAvatar}
            />
          ))}
          
          {hasMore && (
            <button
              onClick={loadMore}
              className="w-full py-3 text-primary text-sm hover:bg-gray-50 rounded-lg"
            >
              Xem thêm bình luận
            </button>
          )}
        </div>
      )}
    </div>
  );
}


interface CommentItemProps {
  comment: Comment;
  onReply: (id: number, name: string) => void;
  onLike: (id: number, isLiked: boolean) => void;
  replyTo: { id: number; name: string } | null;
  replyContent: string;
  setReplyContent: (content: string) => void;
  onSubmitReply: (parentId: number) => void;
  onCancelReply: () => void;
  submitting: boolean;
  isAuthenticated: boolean;
  isReply?: boolean;
  defaultAvatar?: string;
}

function CommentItem({
  comment,
  onReply,
  onLike,
  replyTo,
  replyContent,
  setReplyContent,
  onSubmitReply,
  onCancelReply,
  submitting,
  isAuthenticated,
  isReply = false,
  defaultAvatar,
}: CommentItemProps) {
  const showReplyForm = replyTo?.id === comment.id;
  const avatarSize = isReply ? 40 : 48;

  return (
    <div className={`${isReply ? 'ml-14' : ''}`}>
      <div className="flex gap-3">
        {/* Avatar - larger size */}
        <div className={`${isReply ? 'w-10 h-10' : 'w-12 h-12'} rounded-full overflow-hidden bg-gray-200 flex-shrink-0`}>
          {comment.user_avatar ? (
            <Image
              src={comment.user_avatar}
              alt={comment.user_name || ''}
              width={avatarSize}
              height={avatarSize}
              className="object-cover w-full h-full"
            />
          ) : defaultAvatar ? (
            <Image
              src={defaultAvatar}
              alt={comment.user_name || 'User'}
              width={avatarSize}
              height={avatarSize}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {comment.user_name?.charAt(0) || 'U'}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-gray-900 text-sm">
                {comment.user_name || 'Ẩn danh'}
              </span>
              {/* Badge example - can be customized */}
              {comment.is_pinned && (
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  Ghim
                </span>
              )}
              <span className="text-gray-400 text-xs">
                {formatTimeAgo(comment.created_at)}
              </span>
            </div>
            <p className="text-gray-800 text-sm whitespace-pre-wrap break-words">
              {comment.content}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2 ml-2">
            <button
              onClick={() => onLike(comment.id, comment.is_liked || false)}
              className={`flex items-center gap-1 text-xs ${
                comment.is_liked ? 'text-primary' : 'text-gray-500 hover:text-primary'
              }`}
            >
              <svg className="w-4 h-4" fill={comment.is_liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              {comment.likes_count > 0 && <span>{comment.likes_count}</span>}
            </button>

            {isAuthenticated && !isReply && (
              <button
                onClick={() => onReply(comment.id, comment.user_name || 'Ẩn danh')}
                className="text-xs text-gray-500 hover:text-primary"
              >
                Trả lời
              </button>
            )}
          </div>

          {/* Reply form */}
          {showReplyForm && (
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder={`Trả lời @${replyTo.name}...`}
                className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                autoFocus
              />
              <button
                onClick={() => onSubmitReply(comment.id)}
                disabled={!replyContent.trim() || submitting}
                className="px-4 py-2 bg-primary text-white text-sm rounded-full hover:bg-primary/90 disabled:opacity-50"
              >
                Gửi
              </button>
              <button
                onClick={onCancelReply}
                className="px-3 py-2 text-gray-500 text-sm hover:text-gray-700"
              >
                Hủy
              </button>
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3 space-y-3">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  onReply={onReply}
                  onLike={onLike}
                  replyTo={replyTo}
                  replyContent={replyContent}
                  setReplyContent={setReplyContent}
                  onSubmitReply={onSubmitReply}
                  onCancelReply={onCancelReply}
                  submitting={submitting}
                  isAuthenticated={isAuthenticated}
                  isReply
                  defaultAvatar={defaultAvatar}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
