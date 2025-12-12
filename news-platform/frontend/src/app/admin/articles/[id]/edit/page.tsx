import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }>; }
interface Category { id: number; name: string; slug: string; }
interface Author { id: number; name: string; }
interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: number;
  author_id?: number;
  status: string;
  featured_image: string;
  seo: { meta_title: string; meta_description: string; };
}

async function getArticle(id: number): Promise<Article | null> {
  try {
    const articles = await query<Article>(`SELECT id, title, slug, excerpt, content, category_id, author_id, status, featured_image, seo FROM articles WHERE id = $1`, [id]);
    return articles[0] || null;
  } catch { return null; }
}

async function getCategories(): Promise<Category[]> {
  try { return await query<Category>(`SELECT id, name, slug FROM categories ORDER BY name`); }
  catch { return []; }
}

async function getAuthors(): Promise<Author[]> {
  try { return await query<Author>(`SELECT id, name FROM authors ORDER BY name`); }
  catch { return []; }
}

async function getArticleTags(articleId: number): Promise<number[]> {
  try {
    const tags = await query<{ id: number }>(`SELECT t.id FROM tags t INNER JOIN article_tags at ON t.id = at.tag_id WHERE at.article_id = $1`, [articleId]);
    return tags.map(t => t.id);
  } catch { return []; }
}

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params;
  const articleId = parseInt(id);
  if (isNaN(articleId)) notFound();

  const [article, categories, authors, tagIds] = await Promise.all([getArticle(articleId), getCategories(), getAuthors(), getArticleTags(articleId)]);
  if (!article) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/articles" className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chỉnh sửa bài viết</h1>
          <p className="text-gray-500">ID: {article.id}</p>
        </div>
      </div>
      <ArticleEditor categories={categories} authors={authors} article={article} initialTags={tagIds} />
    </div>
  );
}
