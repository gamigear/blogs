import Link from 'next/link';
import { CommunityPost } from '@/types';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

interface ExtendedCommunityPost extends CommunityPost {
  author: CommunityPost['author'] & { username?: string };
}

interface Props {
  post: ExtendedCommunityPost;
}

export function CommunityPostCard({ post }: Props) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const authorUsername = post.author?.username;

  return (
    <article className="bg-white rounded-lg border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Author avatar */}
        {authorUsername ? (
          <Link href={`/user/${authorUsername}`} className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:ring-2 hover:ring-primary/30 transition-all">
              <span className="text-primary font-semibold">
                {post.author?.name?.[0]?.toUpperCase() || '?'}
              </span>
            </div>
          </Link>
        ) : (
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-semibold">
              {post.author?.name?.[0]?.toUpperCase() || '?'}
            </span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            {authorUsername ? (
              <Link href={`/user/${authorUsername}`} className="font-medium text-gray-900 hover:text-primary transition-colors">
                {post.author?.name || 'Ẩn danh'}
              </Link>
            ) : (
              <span className="font-medium text-gray-900">{post.author?.name || 'Ẩn danh'}</span>
            )}
            <span className="text-gray-300">•</span>
            <time className="text-sm text-gray-500" dateTime={post.createdAt} suppressHydrationWarning>
              {formatDate(post.createdAt)}
            </time>
            {post.status !== 'approved' && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[post.status]}`}>
                {post.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-primary transition-colors">
            <Link href={`/community/${post.id}`}>
              {post.title}
            </Link>
          </h3>

          {/* Content preview */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {post.content}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              href={`/community/${post.id}`}
              className="text-sm text-gray-500 hover:text-primary flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Xem chi tiết
            </Link>
            {post.discourseTopicId && (
              <Link
                href={`${process.env.NEXT_PUBLIC_DISCOURSE_URL}/t/${post.discourseTopicId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Thảo luận
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
