import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticlesByCategory, getCategories, getCategoryBySlug } from '@/lib/strapi';
import { ArticleCard } from '@/components/ArticleCard';

interface Props {
  params: { slug: string };
  searchParams: { page?: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';
const PAGE_SIZE = 12;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

/**
 * Generate SEO metadata for category page
 * Requirements: 4.3
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return {};
  
  const title = `${category.name} - Tin tức mới nhất`;
  const description = category.description || `Đọc tin tức mới nhất về ${category.name}. Cập nhật liên tục các bài viết chất lượng.`;
  
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/category/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/category/${params.slug}`,
      siteName: 'News Platform',
      type: 'website',
    },
  };
}

// ISR: Revalidate every 5 minutes
export const revalidate = 300;

/**
 * Category listing page
 * Requirements: 11.3 - Articles sorted by published_at desc
 */
export default async function CategoryPage({ params, searchParams }: Props) {
  const page = parseInt(searchParams.page || '1');
  
  const [articles, category] = await Promise.all([
    getArticlesByCategory(params.slug, page, PAGE_SIZE),
    getCategoryBySlug(params.slug),
  ]);

  if (!category) notFound();

  // JSON-LD for category page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description || `Tin tức về ${category.name}`,
    url: `${SITE_URL}/category/${params.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/article/${article.slug}`,
        name: article.title,
      })),
    },
  };

  const hasMore = articles.length === PAGE_SIZE;
  const hasPrev = page > 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4">
        {/* Category Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span>{category.name}</span>
          </nav>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          {category.description && (
            <p className="text-gray-600 mt-2">{category.description}</p>
          )}
        </div>
        
        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa có bài viết nào trong danh mục này.</p>
            <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
              ← Quay về trang chủ
            </Link>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              {hasPrev && (
                <Link
                  href={`/category/${params.slug}?page=${page - 1}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  ← Trang trước
                </Link>
              )}
              <span className="px-4 py-2 text-gray-600">Trang {page}</span>
              {hasMore && (
                <Link
                  href={`/category/${params.slug}?page=${page + 1}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  Trang sau →
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
