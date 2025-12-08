import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { CommunityPost } from '@/types';

interface Props {
  post: CommunityPost;
}

export function CommunityPostCard({ post }: Props) {
  return (
    <article className="card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">
            <Link href={`/community/${post.id}`} className="hover:text-primary">
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.content}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                {post.author?.name?.[0] || '?'}
              </span>
              {post.author?.name}
            </span>
            <time dateTime={post.createdAt}>
              {format(new Date(post.createdAt), 'dd MMM yyyy', { locale: vi })}
            </time>
          </div>
        </div>
        {post.discourseTopicId && (
          <Link
            href={`${process.env.NEXT_PUBLIC_DISCOURSE_URL}/t/${post.discourseTopicId}`}
            target="_blank"
            className="text-sm text-primary hover:underline"
          >
            Thảo luận →
          </Link>
        )}
      </div>
    </article>
  );
}
