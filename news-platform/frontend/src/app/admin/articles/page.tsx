import Link from 'next/link';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface Article {
  id: number;
  title: string;
  slug: string;
  status: string;
  published_at: string | null;
  created_at: string;
  author_name: string;
  category_name: string;
  view_count: number;
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await query<Article>(`
      SELECT 
        a.id,
        a.title,
        a.slug,
        a.status,
        a.published_at,
        a.created_at,
        u.display_name as author_name,
        c.name as category_name,
        COALESCE(a.view_count, 0) as view_count
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.id
      LEFT JOIN categories c ON a.category_id = c.id
      ORDER BY a.created_at DESC
      LIMIT 100
    `);
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  const statusColors: Record<string, string> = {
    published: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800',
  };

  const statusLabels: Record<string, string> = {
    published: 'Đã xuất bản',
    draft: 'Bản nháp',
    archived: 'Đã lưu trữ',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Quản lý bài viết</h1>
        <Link
          href="/admin/articles/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Tạo bài viết mới
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tiêu đề</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tác giả</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Danh mục</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trạng thái</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Lượt xem</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ngày tạo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link
                    href={`/article/${article.slug}`}
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                  >
                    {article.title}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{article.author_name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{article.category_name}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded ${statusColors[article.status]}`}>
                    {statusLabels[article.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{article.view_count}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {new Date(article.created_at).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/articles/${article.id}/edit`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Sửa
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {articles.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Chưa có bài viết nào.
          </div>
        )}
      </div>
    </div>
  );
}
