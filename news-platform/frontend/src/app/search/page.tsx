import Link from 'next/link';
import { searchArticles } from '@/lib/algolia';
import { ArticleListItem } from '@/components/ArticleListItem';
import { NewsSidebar } from '@/components/NewsSidebar';
import { getArticles, getCategories } from '@/lib/strapi';

interface Props {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || '';
  const [results, latestArticles, categories] = await Promise.all([
    query ? searchArticles(query) : Promise.resolve({ hits: [] }),
    getArticles(1, 10),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Tìm kiếm</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="section-header">
              <h1 className="section-title">Tìm kiếm</h1>
            </div>

            {/* Search form */}
            <form action="/search" method="GET" className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Nhập từ khóa tìm kiếm..."
                  className="w-full px-4 py-3 pr-12 text-base border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {query && (
              <div>
                <p className="text-gray-600 mb-4">
                  Tìm thấy <span className="font-semibold text-primary">{results.hits.length}</span> kết quả cho "<span className="font-medium">{query}</span>"
                </p>
                
                {results.hits.length === 0 ? (
                  <div className="bg-white rounded-lg border border-gray-100 p-8 text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <p className="text-gray-500 mb-4">Không tìm thấy kết quả nào.</p>
                    <p className="text-sm text-gray-400">Thử từ khóa khác hoặc kiểm tra lại chính tả.</p>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg border border-gray-100">
                    {results.hits.map((hit: any) => (
                      <ArticleListItem
                        key={hit.objectID}
                        article={{
                          id: hit.objectID,
                          slug: hit.slug,
                          title: hit.title,
                          excerpt: hit.excerpt,
                          content: '',
                          publishedAt: hit.publishedAt,
                          featuredImage: hit.featuredImage ? { url: hit.featuredImage, alt: hit.title } : undefined,
                          category: { id: 0, name: hit.category, slug: hit.categorySlug || '' },
                          author: { id: 0, name: hit.author },
                          createdAt: '',
                          updatedAt: '',
                        }}
                        imageSize="medium"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {!query && (
              <div className="bg-white rounded-lg border border-gray-100 p-8 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-600 mb-2">Nhập từ khóa để tìm kiếm bài viết</p>
                <p className="text-sm text-gray-400">Ví dụ: công nghệ, kinh tế, thể thao...</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <NewsSidebar articles={latestArticles} title="Tin mới nhất" />

            {/* Categories */}
            <aside className="bg-white rounded-lg p-4 border border-gray-100">
              <h3 className="sidebar-title">Chuyên mục</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
