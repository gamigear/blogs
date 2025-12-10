'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FeedPost } from '@/lib/feed';

interface Props {
  post: FeedPost;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getTrustLevelBadge(level: number): { text: string; color: string } | null {
  if (level >= 4) return { text: 'Leader', color: 'bg-purple-100 text-purple-700' };
  if (level >= 3) return { text: 'Regular', color: 'bg-blue-100 text-blue-700' };
  if (level >= 2) return { text: 'Member', color: 'bg-green-100 text-green-700' };
  return null;
}

export function FeedPostDetail({ post }: Props) {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(post.is_liked || false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [isBookmarked, setIsBookmarked] = useState(post.is_bookmarked || false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const badge = getTrustLevelBadge(post.author.trust_level);

  const handleLike = async () => {
    if (!session) {
      window.location.href = `/auth/signin?callbackUrl=/feed/${post.id}`;
      return;
    }

    try {
      const res = await fetch(`/api/feed/${post.id}/like`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setIsLiked(data.liked);
        setLikesCount(data.count);
      }
    } catch (err) {
      console.error('Like failed:', err);
    }
  };

  const handleBookmark = async () => {
    if (!session) {
      window.location.href = `/auth/signin?callbackUrl=/feed/${post.id}`;
      return;
    }

    try {
      const res = await fetch(`/api/feed/${post.id}/bookmark`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setIsBookmarked(data.bookmarked);
      }
    } catch (err) {
      console.error('Bookmark failed:', err);
    }
  };

  return (
    <>
      <article className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Link href={`/user/${post.author.username}`} className="flex-shrink-0">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {post.author.name[0]?.toUpperCase() || '?'}
                    </span>
                  </div>
                )}
              </Link>

              <div>
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/user/${post.author.username}`}
                    className="font-bold text-lg text-gray-900 hover:text-primary transition-colors"
                  >
                    {post.author.name}
                  </Link>
                  {badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${badge.color}`}>
                      {badge.text}
                    </span>
                  )}
                </div>
                <time className="text-gray-500" dateTime={post.created_at}>
                  {formatDate(post.created_at)}
                </time>
              </div>
            </div>

            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-4">
          {post.title && (
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
          )}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg">
              {post.content}
            </p>
          </div>
        </div>

        {/* Images */}
        {post.images && post.images.length > 0 && (
          <div className="px-6 pb-4">
            <div className={`grid gap-2 ${
              post.images.length === 1 ? 'grid-cols-1' :
              post.images.length === 2 ? 'grid-cols-2' :
              'grid-cols-2 md:grid-cols-3'
            }`}>
              {post.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative rounded-xl overflow-hidden ${
                    post.images.length === 1 ? 'aspect-video' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Ảnh ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="px-6 py-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {likesCount > 0 && (
              <span>{likesCount} lượt thích</span>
            )}
            {post.comments_count > 0 && (
              <span>{post.comments_count} bình luận</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors ${
                  isLiked 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="font-medium">Thích</span>
              </button>

              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium">Bình luận</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleBookmark}
                className={`p-2.5 rounded-full transition-colors ${
                  isBookmarked 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>

              <button className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Comments section placeholder */}
        <div id="comments" className="px-6 py-6 border-t border-gray-100 bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-4">Bình luận</h3>
          <p className="text-gray-500 text-center py-8">
            Tính năng bình luận đang được phát triển
          </p>
        </div>
      </article>

      {/* Image lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={selectedImage}
            alt="Full size"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
