import Link from 'next/link';
import { getCommunityPosts, getArticles } from '@/lib/strapi';
import { CommunityPostCard } from '@/components/CommunityPostCard';
import { NewsSidebar } from '@/components/NewsSidebar';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function CommunityPage() {
  const [posts, latestArticles] = await Promise.all([
    getCommunityPosts('approved'),
    getArticles(1, 10),
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Cộng đồng</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cộng đồng</h1>
                <p className="text-gray-600 mt-1">Chia sẻ và thảo luận cùng mọi người</p>
              </div>
              <Link 
                href="/community/new" 
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Đăng bài
              </Link>
            </div>

            {/* Trust level info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Hệ thống cấp bậc</h3>
                  <p className="text-sm text-blue-700 mb-2">
                    Tham gia tích cực để nâng cấp bậc. Thành viên từ cấp 2 trở lên có thể đăng bài không cần duyệt.
                  </p>
                  <Link href="/community/trust-levels" className="text-sm text-blue-600 hover:underline font-medium">
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
            </div>

            {/* Posts list */}
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-100 p-8 text-center">
                  <svg className="w-10 h-10 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  <p className="text-gray-600 mb-4">Chưa có bài viết nào.</p>
                  <Link 
                    href="/community/new" 
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Hãy là người đầu tiên đăng bài!
                  </Link>
                </div>
              ) : (
                posts.map((post) => <CommunityPostCard key={post.id} post={post} />)
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick actions */}
            <aside className="bg-white rounded-lg p-4 border border-gray-100">
              <h3 className="sidebar-title">Thao tác nhanh</h3>
              <div className="space-y-2">
                <Link 
                  href="/community/new" 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  <span className="font-medium">Viết bài mới</span>
                </Link>
                <Link 
                  href="/community/my-posts" 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <span className="font-medium">Bài viết của tôi</span>
                </Link>
              </div>
            </aside>

            {/* Latest news */}
            <NewsSidebar articles={latestArticles} title="Tin mới nhất" />

            {/* Community guidelines */}
            <aside className="bg-white rounded-lg p-4 border border-gray-100">
              <h3 className="sidebar-title">Quy định cộng đồng</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Tôn trọng ý kiến của người khác</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Không spam hoặc quảng cáo</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Nội dung phải phù hợp</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Sử dụng ngôn ngữ văn minh</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
