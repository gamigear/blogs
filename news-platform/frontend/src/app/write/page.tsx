import { redirect } from 'next/navigation';
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

async function getCategories(): Promise<Category[]> {
  try {
    return await query<Category>(`SELECT id, name, slug FROM categories ORDER BY name`);
  } catch { return []; }
}

export default async function WritePage() {
  const session = await getServerSession(authOptions);
  
  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect('/auth/signin?callbackUrl=/write');
  }
  
  const userRole = (session?.user as any)?.role || '';
  const isAdmin = ['admin', 'editor', 'superadmin'].includes(userRole);
  
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-10 h-10 rounded-md bg-white dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Viết bài mới</h1>
              <p className="text-gray-500">Chia sẻ kiến thức và trải nghiệm của bạn</p>
            </div>
          </div>
          <ArticleEditor categories={categories} isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
}
