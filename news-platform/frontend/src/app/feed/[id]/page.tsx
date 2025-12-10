import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getFeedPostById } from '@/lib/feed';
import { FeedPostDetail } from './FeedPostDetail';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const post = await getFeedPostById(parseInt(params.id));
  
  if (!post) {
    return { title: 'Không tìm thấy bài viết' };
  }

  return {
    title: post.title || `Bài viết của ${post.author.name}`,
    description: post.content.slice(0, 160),
  };
}

export default async function FeedPostPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? parseInt(session.user.id as string) : undefined;
  
  const post = await getFeedPostById(parseInt(params.id), userId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back link */}
        <Link 
          href="/feed"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại Newsfeed
        </Link>

        <FeedPostDetail post={post} />
      </div>
    </div>
  );
}
