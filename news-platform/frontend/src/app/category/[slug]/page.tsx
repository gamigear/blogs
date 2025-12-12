import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticlesByCategory, getCategories, getCategoryBySlug, getArticles } from '@/lib/strapi';
import { ArticleListItem } from '@/components/ArticleListItem';
import { NewsSidebar, SidebarWithImage } from '@/components/NewsSidebar';

interface Props {
  params: { slug: string };
  searchParams: { page?: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';
const PAGE_SIZE = 12;

export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    return categories.map((cat) => ({ slug: cat.slug }));
  } catch (error) {
    console.log('Skipping static params generation - database not available during build');
    return [];
  }
}

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

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params, searchParams }: Props) {
  const page = parseInt(searchParams.page || '1');
  
  const [articles, category, categories, latestArticles] = await Promise.all([
    getArticlesByCategory(params.slug, page, PAGE_SIZE),
    getCategoryBySlug(params.slug),
    getCategories(),
    getArticles(1, 10),
  ]);

  if (!category) notFound();

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
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Category Header with Image */}
              {category.image ? (
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h1 className="text-3xl font-bold text-white">{category.name}</h1>
                    {category.description && (
                      <p className="text-white/80 mt-2">{category.description}</p>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="section-header">
                    <h1 className="section-title text-2xl">{category.name}</h1>
                  </div>
                  {category.description && (
                    <p className="text-gray-600 mb-6">{category.description}</p>
                  )}
                </>
              )}
              
              {/* Articles List */}
              {articles.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center border border-gray-100">
                  <p className="text-gray-500 mb-4">Chưa có bài viết nào trong danh mục này.</p>
                  <Link href="/" className="text-primary hover:underline">
                    ← Quay về trang chủ
                  </Link>
                </div>
              ) : (
                <>
                  <div className="bg-white rounded-lg border border-gray-100">
                    {articles.map((article) => (
                      <ArticleListItem 
                        key={article.id} 
                        article={article} 
                        showCategory={false}
                        imageSize="medium"
                      />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex justify-center items-center gap-2 mt-8">
                    {hasPrev && (
                      <Link
                        href={`/category/${params.slug}?page=${page - 1}`}
                        className="px-4 py-2 bg-white border border-gray-200 hover:border-primary hover:text-primary rounded-lg transition-colors"
                      >
                        ← Trước
                      </Link>
                    )}
                    
                    {/* Page numbers */}
                    {Array.from({ length: Math.min(5, Math.ceil(articles.length / PAGE_SIZE) + page) }, (_, i) => {
                      const pageNum = Math.max(1, page - 2) + i;
                      return (
                        <Link
                          key={pageNum}
                          href={`/category/${params.slug}?page=${pageNum}`}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                            pageNum === page 
                              ? 'bg-primary text-white' 
                              : 'bg-white border border-gray-200 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}
                    
                    {hasMore && (
                      <Link
                        href={`/category/${params.slug}?page=${page + 1}`}
                        className="px-4 py-2 bg-white border border-gray-200 hover:border-primary hover:text-primary rounded-lg transition-colors"
                      >
                        Sau →
                      </Link>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Latest news */}
              <NewsSidebar articles={latestArticles} title="Tin mới nhất" />

              {/* Categories */}
              <aside className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="sidebar-title">Chuyên mục khác</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.filter(c => c.slug !== params.slug).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </aside>

              {/* Most read */}
              <SidebarWithImage articles={latestArticles.slice(0, 5)} title="Đọc nhiều" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
