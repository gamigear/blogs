import { Suspense } from 'react';
import { getFeedPosts } from '@/lib/feed';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { FeedList } from './FeedList';
import { CreatePostButton } from '@/components/CreatePostButton';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Newsfeed - Bài viết từ cộng đồng',
  description: 'Xem và chia sẻ bài viết từ cộng đồng thành viên',
};

async function FeedContent() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? parseInt(session.user.id as string) : undefined;
  
  // Reduced from 20 to 10 for better mobile performance
  const { posts, total, hasMore } = await getFeedPosts(1, 10, userId);

  return (
    <FeedList 
      initialPosts={posts} 
      initialHasMore={hasMore}
      totalPosts={total}
    />
  );
}

export default async function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Newsfeed</h1>
                <p className="text-gray-500 text-sm mt-1">Bài viết mới từ cộng đồng</p>
              </div>
              <Link 
                href="/"
                className="text-primary hover:underline text-sm"
              >
                ← Về trang chủ
              </Link>
            </div>

            {/* Create post */}
            <div className="mb-6">
              <CreatePostButton />
            </div>

            {/* Feed */}
            <Suspense fallback={<FeedSkeleton />}>
              <FeedContent />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Về Newsfeed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nơi thành viên chia sẻ những điều thú vị, kinh nghiệm và câu chuyện của mình với cộng đồng.
              </p>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Quy định đăng bài</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Nội dung phải phù hợp, không vi phạm pháp luật</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Không spam, quảng cáo trái phép</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Tôn trọng người khác, không xúc phạm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Thành viên cấp 2+ được đăng bài không cần duyệt</span>
                </li>
              </ul>
            </div>

            {/* Trust levels */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-5">
              <h3 className="font-bold text-blue-900 mb-3">Hệ thống cấp bậc</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Cấp 0 - Mới</span>
                  <span className="text-blue-500">Cần duyệt bài</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Cấp 1 - Cơ bản</span>
                  <span className="text-blue-500">Cần duyệt bài</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-medium">Cấp 2 - Member</span>
                  <span className="text-green-600">Tự động duyệt</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 font-medium">Cấp 3 - Regular</span>
                  <span className="text-green-600">Tự động duyệt</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-700 font-medium">Cấp 4 - Leader</span>
                  <span className="text-green-600">Tự động duyệt</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Liên kết nhanh</h3>
              <div className="space-y-2">
                <Link 
                  href="/community" 
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <span>💬</span>
                  <span>Cộng đồng thảo luận</span>
                </Link>
                <Link 
                  href="/community/my-posts" 
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <span>📝</span>
                  <span>Bài viết của tôi</span>
                </Link>
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <span>📰</span>
                  <span>Tin tức mới nhất</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
          <div className="h-48 bg-gray-200 rounded-xl" />
        </div>
      ))}
    </div>
  );
}
