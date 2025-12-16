'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types';
import { renderMarkdown, extractTableOfContents } from '@/lib/markdown';
import { EditArticleButton } from './EditArticleButton';
import { ChatButton } from './ChatButton';

interface Props {
  article: Article;
  showToc?: boolean;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function ArticleContent({ article, showToc = true }: Props) {
  const { data: session } = useSession();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  // Session stores userId at session.userId (from NextAuth callback)
  const currentUserId = (session as { userId?: number } | null)?.userId;
  const authorUserId = article.author?.userId;

  // Check if current user is following the author
  useEffect(() => {
    if (!currentUserId || !authorUserId || currentUserId === authorUserId) return;
    
    fetch(`/api/users/by-id/${authorUserId}/follow-status`)
      .then(res => res.json())
      .then(data => {
        if (data.isFollowing !== undefined) {
          setIsFollowing(data.isFollowing);
        }
      })
      .catch(() => {});
  }, [currentUserId, authorUserId]);

  const handleFollow = async () => {
    if (!session) {
      window.location.href = '/auth/signin';
      return;
    }
    if (!authorUserId || currentUserId === authorUserId) return;

    setFollowLoading(true);
    try {
      const res = await fetch(`/api/users/by-id/${authorUserId}/follow`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        setIsFollowing(data.isFollowing);
      }
    } catch (error) {
      console.error('Follow error:', error);
    } finally {
      setFollowLoading(false);
    }
  };
  const htmlContent = renderMarkdown(article.content);
  const toc = extractTableOfContents(article.content);

  return (
    <div>
      {/* Breadcrumb - styled like Tinhte */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
          Diễn đàn
        </Link>
        <span className="text-gray-400">›</span>
        {article.category && (
          <Link 
            href={`/category/${article.category.slug}`} 
            className="text-[#1a73e8] font-medium hover:underline"
          >
            {article.category.name}
          </Link>
        )}
      </nav>

      {/* Title - large and bold */}
      <h1 className="text-[26px] md:text-[32px] font-bold text-[#1a2b4a] mb-6 leading-tight tracking-tight">
        {article.title}
      </h1>

      {/* Author info bar */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Avatar with border */}
          {article.author?.username ? (
            <Link href={`/user/${article.author.username}`} className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100 block hover:ring-primary transition-all">
              {article.author?.avatar ? (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {article.author?.name?.charAt(0) || 'A'}
                  </span>
                </div>
              )}
            </Link>
          ) : (
            <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100">
              {article.author?.avatar ? (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {article.author?.name?.charAt(0) || 'A'}
                  </span>
                </div>
              )}
            </div>
          )}
          
          {/* Author name & meta */}
          <div>
            <div className="flex items-center gap-2">
              {article.author?.username ? (
                <Link href={`/user/${article.author.username}`} className="font-semibold text-gray-900 hover:text-primary transition-colors">
                  {article.author?.name || 'Admin'}
                </Link>
              ) : (
                <span className="font-semibold text-gray-900">{article.author?.name || 'Admin'}</span>
              )}
              {/* Verified badge */}
              <span className="w-5 h-5 bg-[#1a73e8] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {/* Follow button - show if author exists and not own article */}
              {authorUserId && (!currentUserId || currentUserId !== authorUserId) && (
                <button 
                  onClick={handleFollow}
                  disabled={followLoading}
                  className={`ml-1 text-xs px-3 py-1 rounded-full font-medium transition-colors disabled:opacity-50 flex items-center gap-1 ${
                    isFollowing 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-[#e8f0fe] text-[#1a73e8] hover:bg-[#d2e3fc]'
                  }`}
                >
                  {followLoading ? (
                    <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : isFollowing ? (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Đang theo dõi
                    </>
                  ) : (
                    '+ Theo dõi'
                  )}
                </button>
              )}
              {/* Message button - show if logged in and not own article */}
              {session && authorUserId && currentUserId !== authorUserId && (
                <ChatButton 
                  targetUserId={authorUserId} 
                  targetUsername={article.author?.username || article.author?.name || 'User'}
                  variant="icon"
                  size="sm"
                />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5" suppressHydrationWarning>
              <time suppressHydrationWarning>{formatDate(article.publishedAt)}</time>
              <span>•</span>
              <span>Phản hồi: {article.viewCount || 0}</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <EditArticleButton articleId={article.id} authorUserId={article.author?.userId} />
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors" title="Chia sẻ">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table of Contents */}
      {showToc && toc.length > 1 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Xem nhanh</h2>
            <button className="text-sm text-gray-500 hover:text-primary">Ẩn ▲</button>
          </div>
          <ul className="space-y-2 text-sm">
            {toc.map((item, index) => (
              <li key={index} style={{ paddingLeft: `${(item.level - 1) * 16}px` }}>
                <a href={`#${item.slug}`} className="text-gray-700 hover:text-primary">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Featured Image */}
      {article.featuredImage && (
        <figure className="mb-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt || article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </figure>
      )}

      {/* Article Content */}
      <div
        className="prose max-w-none prose-sm"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Tags */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex flex-wrap gap-2 justify-center">
          {article.category && (
            <Link 
              href={`/category/${article.category.slug}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              #{article.category.name}
            </Link>
          )}
        </div>
      </div>

      {/* Author bio - Hidden */}
      {/* {article.author?.bio && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              {article.author.avatar ? (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <span className="text-primary text-lg font-bold">
                  {article.author.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{article.author.name}</p>
              <p className="text-gray-600 text-sm mt-1">{article.author.bio}</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
