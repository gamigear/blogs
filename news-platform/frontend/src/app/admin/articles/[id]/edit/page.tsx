import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { ArticleEditor } from '@/components/admin/ArticleEditor';

export const dynamic = 'force-dynamic';

interface Props {
  params: { id: string };
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: number;
  status: string;
  featured_image: string;
  seo: {
    meta_title: string;
    meta_description: string;
  };
}

async function getArticle(id: number): Promise<Article | null> {
  try {
    const articles = await query<Article>(`
      SELECT id, title, slug, excerpt, content, category_id, status, featured_image, seo
      FROM articles WHERE id = $1
    `, [id]);
    return articles[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    return await query<Category>(`SELECT id, name, slug FROM categories ORDER BY name`);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function EditArticlePage({ params }: Props) {
  const articleId = parseInt(params.id);
  if (isNaN(articleId)) notFound();

  const [article, categories] = await Promise.all([
    getArticle(articleId),
    getCategories(),
  ]);

  if (!article) notFound();

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/admin/articles" className="text-blue-600 hover:underline">
          ← Quay lại
        </a>
        <h1 className="text-2xl font-bold">Chỉnh sửa bài viết</h1>
      </div>

      <ArticleEditor categories={categories} article={article} />
    </div>
  );
}
