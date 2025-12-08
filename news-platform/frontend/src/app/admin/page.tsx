import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface DashboardStats {
  total_articles: number;
  published_articles: number;
  draft_articles: number;
  total_users: number;
  pending_moderation: number;
  total_community_posts: number;
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [articles, users, moderation, posts] = await Promise.all([
      query<{ status: string; count: string }>(`
        SELECT status, COUNT(*) as count FROM articles GROUP BY status
      `),
      query<{ count: string }>(`SELECT COUNT(*) as count FROM users`),
      query<{ count: string }>(`
        SELECT COUNT(*) as count FROM moderation_queue WHERE status = 'pending'
      `),
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
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return {
      total_articles: 0,
      published_articles: 0,
      draft_articles: 0,
      total_users: 0,
      pending_moderation: 0,
      total_community_posts: 0,
    };
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Tổng bài viết"
          value={stats.total_articles}
          icon="📝"
          color="blue"
        />
        <StatCard
          title="Đã xuất bản"
          value={stats.published_articles}
          icon="✅"
          color="green"
        />
        <StatCard
          title="Bản nháp"
          value={stats.draft_articles}
          icon="📋"
          color="yellow"
        />
        <StatCard
          title="Người dùng"
          value={stats.total_users}
          icon="👥"
          color="purple"
        />
        <StatCard
          title="Chờ duyệt"
          value={stats.pending_moderation}
          icon="⏳"
          color="orange"
          highlight={stats.pending_moderation > 0}
        />
        <StatCard
          title="Bài cộng đồng"
          value={stats.total_community_posts}
          icon="💬"
          color="indigo"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Thao tác nhanh</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="/admin/articles/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Tạo bài viết mới
          </a>
          <a
            href="/admin/moderation"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Xem hàng đợi duyệt ({stats.pending_moderation})
          </a>
          <a
            href="/admin/users"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Quản lý người dùng
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
  highlight = false,
}: {
  title: string;
  value: number;
  icon: string;
  color: string;
  highlight?: boolean;
}) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
    indigo: 'bg-indigo-50 border-indigo-200',
  };

  return (
    <div
      className={`p-6 rounded-lg border-2 ${colorClasses[color]} ${
        highlight ? 'ring-2 ring-orange-400' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </div>
  );
}
