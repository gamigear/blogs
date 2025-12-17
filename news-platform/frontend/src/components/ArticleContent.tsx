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

      {/* Author info bar - Compact single row */}
      <div className="flex items-center gap-3 pb-4 mb-6 border-b border-gray-100">
        {/* Avatar */}
        {article.author?.username ? (
          <Link href={`/user/${article.author.username}`} className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            {article.author?.avatar ? (
              <Image src={article.author.avatar} alt={article.author.name} width={40} height={40} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">{article.author?.name?.charAt(0) || 'A'}</span>
              </div>
            )}
          </Link>
        ) : (
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-primary flex items-center justify-center">
            <span className="text-white font-bold">{article.author?.name?.charAt(0) || 'A'}</span>
          </div>
        )}
        
        {/* Author info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            {article.author?.username ? (
              <Link href={`/user/${article.author.username}`} className="font-medium text-gray-900 hover:text-primary text-sm truncate">
                {article.author?.name || 'Admin'}
              </Link>
            ) : (
              <span className="font-medium text-gray-900 text-sm truncate">{article.author?.name || 'Admin'}</span>
            )}
            <svg className="w-4 h-4 text-[#1a73e8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-xs text-gray-500" suppressHydrationWarning>
            <time suppressHydrationWarning>{formatDate(article.publishedAt)}</time>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {authorUserId && (!currentUserId || currentUserId !== authorUserId) && (
            <button 
              onClick={handleFollow}
              disabled={followLoading}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors disabled:opacity-50 ${
                isFollowing ? 'bg-green-100 text-green-700' : 'bg-[#e8f0fe] text-[#1a73e8]'
              }`}
            >
              {followLoading ? '...' : isFollowing ? '✓' : '+'}
            </button>
          )}
          {session && authorUserId && currentUserId !== authorUserId && (
            <ChatButton targetUserId={authorUserId} targetUsername={article.author?.username || article.author?.name || 'User'} variant="icon" size="sm" />
          )}
          <EditArticleButton articleId={article.id} authorUserId={article.author?.userId} />
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
