import Link from 'next/link';
import { getCommunityPosts } from '@/lib/strapi';
import { CommunityPostCard } from '@/components/CommunityPostCard';

export const revalidate = 60;

export default async function CommunityPage() {
  const posts = await getCommunityPosts('approved');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Cộng đồng</h1>
          <p className="text-gray-600 mt-2">Chia sẻ và thảo luận cùng cộng đồng</p>
        </div>
        <Link href="/community/new" className="btn-primary">
          + Đăng bài
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <h3 className="font-semibold text-blue-800 mb-2">📊 Hệ thống cấp bậc</h3>
        <p className="text-sm text-blue-700">
          Tham gia tích cực để nâng cấp bậc. Thành viên từ cấp 2 trở lên có thể đăng bài không cần duyệt.
        </p>
        <Link href="/community/trust-levels" className="text-sm text-blue-600 hover:underline">
          Tìm hiểu thêm →
        </Link>
      </div>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!
          </div>
        ) : (
          posts.map((post) => <CommunityPostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
