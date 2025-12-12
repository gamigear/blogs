import { query } from '@/lib/db';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Author {
  id: number;
  name: string;
}

async function getCategories(): Promise<Category[]> {
  try {
    return await query<Category>(`SELECT id, name, slug FROM categories ORDER BY name`);
  } catch { return []; }
}

async function getAuthors(): Promise<Author[]> {
  try {
    return await query<Author>(`SELECT id, name FROM authors ORDER BY name`);
  } catch { return []; }
}

export default async function NewArticlePage() {
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as any)?.role || '';
  const isAdmin = ['admin', 'editor', 'superadmin'].includes(userRole);
  
  const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/articles" className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tạo bài viết mới</h1>
          <p className="text-gray-500">Điền thông tin để tạo bài viết</p>
        </div>
      </div>
      <ArticleEditor categories={categories} authors={authors} isAdmin={isAdmin} />
    </div>
  );
}
