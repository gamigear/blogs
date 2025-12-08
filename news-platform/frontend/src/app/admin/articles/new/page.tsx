import { query } from '@/lib/db';
import { ArticleEditor } from '@/components/admin/ArticleEditor';

export const dynamic = 'force-dynamic';

interface Category {
  id: number;
  name: string;
  slug: string;
}

async function getCategories(): Promise<Category[]> {
  try {
    return await query<Category>(`SELECT id, name, slug FROM categories ORDER BY name`);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function NewArticlePage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/admin/articles" className="text-blue-600 hover:underline">
          ← Quay lại
        </a>
        <h1 className="text-2xl font-bold">Tạo bài viết mới</h1>
      </div>

      <ArticleEditor categories={categories} />
    </div>
  );
}
