'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeedPost {
  id: number;
  content: string;
  images: string[];
  author: {
    name: string;
    username: string;
    avatar: string | null;
  };
  likes_count: number;
  created_at: string;
}

interface Props {
  posts: FeedPost[];
}

export function FeedPreview({ posts }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!posts || posts.length === 0) return null;

  // Limit posts on mobile to reduce memory usage
  const displayPosts = isMobile ? posts.slice(0, 5) : posts.slice(0, 10);

  return (
    <div className="bg-white rounded-lg p-4 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-900 text-lg">Fact</h2>
        <Link
          href="/feed"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          Xem tất cả
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Cards container - simplified for mobile */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {displayPosts.map((post, index) => {
          // On mobile, disable hover effects to save memory
          const isHovered = !isMobile && hoveredIndex === index;
          const isFirst = index === 0 && hoveredIndex === null;
          
          // Mobile: fixed width, Desktop: dynamic width
          const cardWidth = isMobile ? '140px' : (isHovered ? '240px' : isFirst ? '240px' : '120px');
          const cardHeight = isMobile ? '200px' : '280px';
          
          return (
            <Link
              key={post.id}
              href={`/feed/${post.id}`}
              className="relative rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-300 ease-out"
              style={{
                width: cardWidth,
                minWidth: cardWidth,
                height: cardHeight,
              }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              {post.images[0] ? (
                <Image
                  src={post.images[0]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={isMobile ? '140px' : '240px'}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600" />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content - always visible on mobile */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 ${!isMobile && isHovered ? 'opacity-0' : 'opacity-100'}`}
              >
                <p className="text-white font-medium text-sm line-clamp-2">
                  {post.author.name}
                </p>
              </div>

              {/* Content - expanded state (desktop hover only) */}
              {!isMobile && (
                <div 
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-white/70 text-xs mb-1">Xem bài viết</p>
                  <p className="text-white font-semibold text-base line-clamp-2 mb-3">
                    {post.content.slice(0, 80)}
                  </p>
                  <div className="flex items-center gap-2">
                    {post.author.avatar ? (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {post.author.name[0]?.toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="text-white text-sm">{post.author.name}</span>
                  </div>
                </div>
              )}

              {/* Arrow - desktop only */}
              {!isMobile && (
                <div 
                  className={`absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              )}
            </Link>
          );
        })}

        {/* View all card */}
        <Link
          href="/feed"
          className="flex-shrink-0 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3 hover:from-gray-200 hover:to-gray-300 transition-colors"
          style={{
            width: isMobile ? '100px' : '120px',
            minWidth: isMobile ? '100px' : '120px',
            height: isMobile ? '200px' : '280px',
          }}
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium text-sm">Xem thêm</span>
        </Link>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
