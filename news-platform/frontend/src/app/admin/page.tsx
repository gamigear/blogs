import { query } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface DashboardStats {
  total_articles: number;
  published_articles: number;
  draft_articles: number;
  total_users: number;
  pending_moderation: number;
  total_community_posts: number;
}

interface RecentArticle {
  id: number;
  title: string;
  slug: string;
  status: string;
  created_at: string;
  author_name: string;
  view_count: number;
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [articles, users, moderation, posts] = await Promise.all([
      query<{ status: string; count: string }>(`SELECT status, COUNT(*) as count FROM articles GROUP BY status`),
      query<{ count: string }>(`SELECT COUNT(*) as count FROM users`),
      query<{ count: string }>(`SELECT COUNT(*) as count FROM moderation_queue WHERE status = 'pending'`),
      query<{ count: string }>(`SELECT COUNT(*) as count FROM community_posts`),
    ]);
    const articleStats = articles.reduce((acc, row) => {
      acc[row.status] = parseInt(row.count);
      return acc;
    }, {} as Record<string, number>);
    return {
      total_articles: Object.values(articleStats).reduce((a, b) => a + b, 0),
      published_articles: articleStats['published'] || 0,
      draft_articles: articleStats['draft'] || 0,
      total_users: parseInt(users[0]?.count || '0'),
      pending_moderation: parseInt(moderation[0]?.count || '0'),
      total_community_posts: parseInt(posts[0]?.count || '0'),
    };
  } catch {
    return { total_articles: 0, published_articles: 0, draft_articles: 0, total_users: 0, pending_moderation: 0, total_community_posts: 0 };
  }
}

async function getRecentArticles(): Promise<RecentArticle[]> {
  try {
    return await query<RecentArticle>(`
      SELECT a.id, a.title, a.slug, a.status, a.created_at, u.display_name as author_name, COALESCE(a.view_count, 0) as view_count
      FROM articles a LEFT JOIN users u ON a.author_id = u.id ORDER BY a.created_at DESC LIMIT 5
    `);
  } catch { return []; }
}

export default async function AdminDashboard() {
  const [stats, recentArticles] = await Promise.all([getDashboardStats(), getRecentArticles()]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Tổng quan hệ thống quản trị</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Tổng bài viết" value={stats.total_articles} icon="document" />
        <StatCard title="Đã xuất bản" value={stats.published_articles} icon="check" />
        <StatCard title="Bản nháp" value={stats.draft_articles} icon="draft" />
        <StatCard title="Người dùng" value={stats.total_users} icon="users" />
        <StatCard title="Chờ duyệt" value={stats.pending_moderation} icon="clock" highlight={stats.pending_moderation > 0} />
        <StatCard title="Bài cộng đồng" value={stats.total_community_posts} icon="chat" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-md bg-white dark:bg-[#1A1D1F] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Bài viết gần đây</h2>
            <Link href="/admin/articles" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">Xem tất cả →</Link>
          </div>
          <div className="space-y-2">
            {recentArticles.map((article) => (
              <div key={article.id} className="flex items-center gap-4 p-4 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="w-12 h-12 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/admin/articles/${article.id}/edit`} className="font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 truncate block">{article.title}</Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{article.author_name} • {new Date(article.created_at).toLocaleDateString('vi-VN')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-md ${article.status === 'published' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                    {article.status === 'published' ? 'Đã xuất bản' : article.status === 'draft' ? 'Nháp' : article.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.view_count} views</span>
                </div>
              </div>
            ))}
            {recentArticles.length === 0 && <div className="text-center py-8 text-gray-500 dark:text-gray-400">Chưa có bài viết nào</div>}
          </div>
        </div>

        <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Thao tác nhanh</h2>
          <div className="space-y-2">
            <Link href="/admin/articles/new" className="flex items-center gap-4 p-4 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors">
              <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <span className="font-semibold">Tạo bài viết mới</span>
            </Link>
            <Link href="/admin/moderation" className="flex items-center gap-4 p-4 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div><span className="font-semibold text-gray-900 dark:text-white block">Kiểm duyệt</span><span className="text-sm text-gray-500 dark:text-gray-400">{stats.pending_moderation} đang chờ</span></div>
            </Link>
            <Link href="/admin/users" className="flex items-center gap-4 p-4 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div><span className="font-semibold text-gray-900 dark:text-white block">Người dùng</span><span className="text-sm text-gray-500 dark:text-gray-400">{stats.total_users} thành viên</span></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


function StatCard({ title, value, icon, highlight = false }: {
  title: string; value: number; icon: string; highlight?: boolean;
}) {
  const iconSvgs: Record<string, JSX.Element> = {
    document: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    draft: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    chat: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  };
  return (
    <div className={`rounded-md bg-white dark:bg-[#1A1D1F] p-6 ${highlight ? 'ring-2 ring-orange-400' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{iconSvgs[icon]}</svg>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value.toLocaleString()}</p>
        <p className="text-gray-500 dark:text-gray-400 mt-1">{title}</p>
      </div>
    </div>
  );
}
