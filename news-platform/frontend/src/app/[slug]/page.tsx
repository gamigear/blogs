import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { marked } from 'marked';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  status: string;
  template: string;
  seo: { meta_title?: string; meta_description?: string };
}

async function getPage(slug: string): Promise<Page | null> {
  try {
    const pages = await query<Page>(
      `SELECT * FROM pages WHERE slug = $1 AND status = 'published'`,
      [slug]
    );
    return pages[0] || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return { title: 'Không tìm thấy trang' };
  
  return {
    title: page.seo?.meta_title || page.title,
    description: page.seo?.meta_description || page.excerpt,
  };
}

export default async function StaticPage({ params }: Props) {
  const { slug } = await params;
  
  // Skip if it's a known route
  const reservedSlugs = ['admin', 'api', 'auth', 'article', 'category', 'community', 'profile', 'search'];
  if (reservedSlugs.includes(slug)) {
    notFound();
  }

  const page = await getPage(slug);
  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className={`container mx-auto px-4 py-8 ${page.template === 'full-width' ? 'max-w-none' : 'max-w-4xl'}`}>
          {page.featured_image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={page.featured_image} alt={page.title} className="w-full h-64 object-cover" />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{page.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(page.content || '') }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
