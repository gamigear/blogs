'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FeedPost } from '@/lib/feed';

interface Props {
  post: FeedPost;
  onLike?: (postId: number) => Promise<void>;
  onBookmark?: (postId: number) => Promise<void>;
}

function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Vừa xong';
  if (diffMins < 60) return `${diffMins} phút trước`;
  if (diffHours < 24) return `${diffHours} giờ trước`;
  if (diffDays < 7) return `${diffDays} ngày trước`;
  
  return date.toLocaleDateString('vi-VN');
}

function getTrustLevelBadge(level: number): { text: string; color: string } | null {
  if (level >= 4) return { text: 'Leader', color: 'bg-purple-100 text-purple-700' };
  if (level >= 3) return { text: 'Regular', color: 'bg-blue-100 text-blue-700' };
  if (level >= 2) return { text: 'Member', color: 'bg-green-100 text-green-700' };
  return null;
}

export function FeedPostCard({ post, onLike, onBookmark }: Props) {
  const [isLiked, setIsLiked] = useState(post.is_liked || false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [isBookmarked, setIsBookmarked] = useState(post.is_bookmarked || false);
  const [isLiking, setIsLiking] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  const badge = getTrustLevelBadge(post.author.trust_level);
  const images = Array.isArray(post.images) ? post.images : [];
  const hasImages = images.length > 0;
  const displayImages = showAllImages ? images : images.slice(0, 4);
  const remainingImages = images.length - 4;

  const handleLike = async () => {
    if (isLiking || !onLike) return;
    setIsLiking(true);
    try {
      await onLike(post.id);
      setIsLiked(!isLiked);
      setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    } finally {
      setIsLiking(false);
    }
  };

  const handleBookmark = async () => {
    if (!onBookmark) return;
    await onBookmark(post.id);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <Link href={`/user/${post.author.username}`} className="flex-shrink-0">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {post.author.name[0]?.toUpperCase() || '?'}
                  </span>
                </div>
              )}
            </Link>

            {/* Author info */}
            <div>
              <div className="flex items-center gap-2">
                <Link 
                  href={`/user/${post.author.username}`}
                  className="font-semibold text-gray-900 hover:text-primary transition-colors"
                >
                  {post.author.name}
                </Link>
                {badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${badge.color}`}>
                    {badge.text}
                  </span>
                )}
              </div>
              <time className="text-sm text-gray-500" dateTime={post.created_at}>
                {formatTimeAgo(post.created_at)}
              </time>
            </div>
          </div>

          {/* More options */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        {post.title && (
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            <Link href={`/feed/${post.id}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>
        )}
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {post.content.length > 500 ? (
            <>
              {post.content.slice(0, 500)}...
              <Link href={`/feed/${post.id}`} className="text-primary hover:underline ml-1">
                Xem thêm
              </Link>
            </>
          ) : (
            post.content
          )}
        </p>
      </div>

      {/* Images */}
      {hasImages && (
        <div className="px-4 pb-3">
          <div className={`grid gap-1 rounded-xl overflow-hidden ${
            post.images.length === 1 ? 'grid-cols-1' :
            post.images.length === 2 ? 'grid-cols-2' :
            post.images.length === 3 ? 'grid-cols-2' :
            'grid-cols-2'
          }`}>
            {displayImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative ${
                  post.images.length === 3 && idx === 0 ? 'row-span-2' : ''
                } ${
                  post.images.length === 1 ? 'aspect-video' : 'aspect-square'
                }`}
              >
                <Image
                  src={img}
                  alt={`Ảnh ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Show remaining count on last image */}
                {idx === 3 && remainingImages > 0 && !showAllImages && (
                  <button
                    onClick={() => setShowAllImages(true)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold"
                  >
                    +{remainingImages}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {/* Like */}
            <button
              onClick={handleLike}
              disabled={isLiking}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                isLiked 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              {likesCount > 0 && <span className="text-sm font-medium">{likesCount}</span>}
            </button>

            {/* Dislike */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
            </button>

            {/* Comment */}
            <Link
              href={`/feed/${post.id}#comments`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {post.comments_count > 0 && <span className="text-sm font-medium">{post.comments_count}</span>}
            </Link>
          </div>

          <div className="flex items-center gap-1">
            {/* Bookmark */}
            <button
              onClick={handleBookmark}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>

            {/* Share */}
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
