import Link from 'next/link';
import { advancedSearchArticles, getCategories, getArticles } from '@/lib/strapi';
import { ArticleListItem } from '@/components/ArticleListItem';
import { NewsSidebar } from '@/components/NewsSidebar';
import { ArticleFilter } from '@/components/ArticleFilter';

interface Props {
  searchParams: Promise<{ 
    q?: string;
    category?: string;
    from?: string;
    to?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const keyword = params.q || '';
  const categorySlug = params.category || '';
  const dateFrom = params.from || '';
  const dateTo = params.to || '';
  const sortBy = (params.sort as 'newest' | 'oldest' | 'popular' | 'views') || 'newest';
  const page = parseInt(params.page || '1');

  const hasFilters = keyword || categorySlug || dateFrom || dateTo;

  // Always search - if no keyword, show all articles with filters
  const [searchResult, latestArticles, categories] = await Promise.all([
    advancedSearchArticles({
      keyword: keyword || undefined,
      categorySlug: categorySlug || undefined,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      sortBy,
      page,
      pageSize: 10,
    }),
    getArticles(1, 10),
    getCategories(),
  ]);

  // Build pagination URL
  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (categorySlug) params.set('category', categorySlug);
    if (dateFrom) params.set('from', dateFrom);
    if (dateTo) params.set('to', dateTo);
    if (sortBy !== 'newest') params.set('sort', sortBy);
    params.set('page', pageNum.toString());
    return `/search?${params.toString()}`;
  };

  // Get active filter labels
  const getActiveFilters = () => {
    const filters: { label: string; value: string }[] = [];
    if (keyword) filters.push({ label: 'Từ khóa', value: keyword });
    if (categorySlug) {
      const cat = categories.find(c => c.slug === categorySlug);
      filters.push({ label: 'Danh mục', value: cat?.name || categorySlug });
    }
    if (dateFrom) filters.push({ label: 'Từ ngày', value: dateFrom });
    if (dateTo) filters.push({ label: 'Đến ngày', value: dateTo });
    return filters;
  };

  const activeFilters = getActiveFilters();

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
              <h1 className="section-title">Tìm kiếm bài viết</h1>
            </div>

            {/* Advanced Filter Component */}
            <ArticleFilter 
              categories={categories}
              initialFilters={{
                keyword,
                category: categorySlug,
                dateFrom,
                dateTo,
                sortBy,
              }}
            />

            {/* Active filters display */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm text-gray-500">Đang lọc:</span>
                {activeFilters.map((filter, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {filter.label}: {filter.value}
                  </span>
                ))}
              </div>
            )}

            {/* Search Results */}
            <div>
              <p className="text-gray-600 mb-4">
                {hasFilters ? (
                  <>
                    Tìm thấy <span className="font-semibold text-primary">{searchResult.total}</span> kết quả
                    {keyword && <> cho "<span className="font-medium">{keyword}</span>"</>}
                  </>
                ) : (
                  <>
                    Hiển thị <span className="font-semibold text-primary">{searchResult.total}</span> bài viết
                  </>
                )}
              </p>
              
              {searchResult.articles.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-100 p-8 text-center">
                  <svg className="w-10 h-10 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <p className="text-gray-500 mb-4">Không tìm thấy kết quả nào.</p>
                  <p className="text-sm text-gray-400">Thử từ khóa khác hoặc điều chỉnh bộ lọc.</p>
                </div>
              ) : (
                  <>
                    <div className="bg-white rounded-lg border border-gray-100">
                      {searchResult.articles.map((article) => (
                        <ArticleListItem
                          key={article.id}
                          article={article}
                          imageSize="medium"
                        />
                      ))}
                    </div>

                    {/* Pagination */}
                    {searchResult.totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-6">
                        {page > 1 && (
                          <Link
                            href={buildPageUrl(page - 1)}
                            className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Trước
                          </Link>
                        )}
                        
                        <div className="flex items-center gap-1">
                          {Array.from({ length: Math.min(5, searchResult.totalPages) }, (_, i) => {
                            let pageNum: number;
                            if (searchResult.totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (page <= 3) {
                              pageNum = i + 1;
                            } else if (page >= searchResult.totalPages - 2) {
                              pageNum = searchResult.totalPages - 4 + i;
                            } else {
                              pageNum = page - 2 + i;
                            }
                            
                            return (
                              <Link
                                key={pageNum}
                                href={buildPageUrl(pageNum)}
                                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                                  pageNum === page
                                    ? 'bg-primary text-white'
                                    : 'bg-white border border-gray-200 hover:bg-gray-50'
                                }`}
                              >
                                {pageNum}
                              </Link>
                            );
                          })}
                        </div>

                        {page < searchResult.totalPages && (
                          <Link
                            href={buildPageUrl(page + 1)}
                            className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Sau
                          </Link>
                        )}
                      </div>
                    )}
                  </>
                )}
            </div>
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
                    href={`/search?category=${cat.slug}`}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      categorySlug === cat.slug
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </aside>

            {/* Search tips */}
            <aside className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                Mẹo tìm kiếm
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Sử dụng từ khóa ngắn gọn, chính xác</li>
                <li>• Lọc theo danh mục để thu hẹp kết quả</li>
                <li>• Chọn khoảng thời gian cụ thể</li>
                <li>• Sắp xếp theo độ phổ biến để xem bài hot</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
