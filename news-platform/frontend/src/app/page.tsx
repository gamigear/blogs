import Link from 'next/link';
import { getArticles, getCategories, getFeaturedArticles, getArticlesByCategory } from '@/lib/strapi';
import { getHomepageSections, HomepageSection as SectionType } from '@/lib/homepage';
import { getFeedPosts } from '@/lib/feed';
import { HeroSlider } from '@/components/HeroSlider';
import { TopFeatured } from '@/components/TopFeatured';
import { NewsSidebar, SidebarWithImage } from '@/components/NewsSidebar';
import { CategorySection } from '@/components/CategorySection';
import { ArticleListItem } from '@/components/ArticleListItem';
import { FeedPreview } from '@/components/FeedPreview';
import { SearchWidget } from '@/components/SearchWidget';
import { LazySection } from '@/components/LazySection';
import { FeaturedUsers } from '@/components/FeaturedUsers';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

// Helper to convert section articles to component format
function convertArticles(articles: any[]) {
  return articles.map(a => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt || '',
    content: '',
    featuredImage: a.featured_image ? { url: a.featured_image, alt: a.title } : undefined,
    category: { id: 0, name: a.category_name || '', slug: a.category_slug || '' },
    author: { id: 0, name: a.author_name || '' },
    publishedAt: a.published_at,
    createdAt: a.published_at,
    updatedAt: a.published_at,
    readingTime: a.reading_time,
    viewCount: a.view_count,
  }));
}

// Get section by name
function getSection(sections: SectionType[], name: string) {
  return sections.find(s => s.name === name && s.is_visible);
}

export default async function HomePage() {
  // Get dynamic sections and base data
  // Reduced data fetching for better mobile performance
  const [{ mainSections, sidebarSections }, articles, categories, featuredArticles, feedData] = await Promise.all([
    getHomepageSections(),
    getArticles(1, 20), // Reduced from 30 to 20
    getCategories(),
    getFeaturedArticles(5), // Reduced from 10 to 5
    getFeedPosts(1, 8), // Reduced from 12 to 8
  ]);

  // Get sections by name (if configured in admin)
  const heroSection = getSection(mainSections, 'hero');
  const topFeaturedSection = getSection(mainSections, 'top_featured');
  const latestSidebarSection = getSection(sidebarSections, 'latest_sidebar');
  const popularSidebarSection = getSection(sidebarSections, 'popular_sidebar');
  
  // Check if search widget is enabled in sidebar sections
  const searchWidgetSection = sidebarSections.find(s => s.section_type === 'search_widget' && s.is_visible);
  const showSearchWidget = searchWidgetSection !== undefined;

  // Use section data if available, otherwise fallback to default
  // Limit slider to 3 articles for better mobile performance
  const sliderArticles = heroSection?.articles?.length 
    ? convertArticles(heroSection.articles).slice(0, 3)
    : (featuredArticles.length > 0 ? featuredArticles.slice(0, 3) : articles.slice(0, 3));

  const topFeaturedArticles = topFeaturedSection?.articles?.length
    ? convertArticles(topFeaturedSection.articles)
    : articles.slice(0, 6);

  const latestArticles = latestSidebarSection?.articles?.length
    ? convertArticles(latestSidebarSection.articles).slice(0, 6)
    : articles.slice(0, 6);

  const popularArticles = popularSidebarSection?.articles?.length
    ? convertArticles(popularSidebarSection.articles)
    : articles.slice(0, 5);

  // Category sections - get from admin config or default
  const categorySections = mainSections.filter(s => 
    s.section_type === 'category_articles' && s.is_visible && s.articles?.length
  );

  let categoryArticles: { category: any; articles: any[] }[] = [];
  
  if (categorySections.length > 0) {
    // Use admin-configured category sections
    categoryArticles = categorySections.map(section => ({
      category: { 
        id: section.id, 
        name: section.title || '', 
        slug: section.selection_data?.category_slug || '' 
      },
      articles: convertArticles(section.articles),
    }));
  } else {
    // Fallback to default categories
    categoryArticles = await Promise.all(
      categories.slice(0, 4).map(async (cat) => ({
        category: cat,
        articles: await getArticlesByCategory(cat.slug, 1, 5),
      }))
    );
  }

  const listArticles = articles.slice(6, 12); // Reduced from 16 to 12

  // Convert feed posts for preview
  const feedPosts = feedData.posts.map(p => ({
    id: p.id,
    content: p.content,
    images: p.images,
    author: {
      name: p.author.name,
      username: p.author.username,
      avatar: p.author.avatar,
    },
    likes_count: p.likes_count,
    created_at: p.created_at,
  }));

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Feed Preview - Full width at top */}
        {feedPosts.length > 0 && (
          <FeedPreview posts={feedPosts} />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Slider */}
            {sliderArticles.length > 0 && (
              <div className="bg-white rounded-lg p-4">
                <HeroSlider articles={sliderArticles} autoPlayInterval={5000} />
              </div>
            )}

            {/* Top Featured Articles */}
            {topFeaturedArticles.length > 0 && (
              <div className="bg-white rounded-lg p-4">
                <TopFeatured articles={topFeaturedArticles} />
              </div>
            )}

            {/* Category sections - lazy loaded for better mobile performance */}
            {categoryArticles.map(({ category, articles: catArticles }, index) => (
              catArticles.length > 0 && (
                <LazySection key={category.id}>
                  <div className="bg-white rounded-lg p-4">
                    <CategorySection
                      title={category.name}
                      slug={category.slug}
                      articles={catArticles}
                    />
                  </div>
                </LazySection>
              )
            ))}

            {/* More articles list - lazy loaded */}
            {listArticles.length > 0 && (
              <LazySection>
                <div className="bg-white rounded-lg p-4">
                  <div className="section-header">
                    <h2 className="section-title">Tin tức khác</h2>
                  </div>
                  <div>
                    {listArticles.map((article) => (
                      <ArticleListItem key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              </LazySection>
            )}

            {/* Featured Users in main area - from homepage sections */}
            {mainSections
              .filter(s => s.section_type === 'featured_users' && s.is_visible)
              .map(section => (
                <LazySection key={section.id}>
                  <FeaturedUsers
                    title={section.title || undefined}
                    userType={section.selection_data?.user_type || section.selection_type}
                    userIds={section.selection_data?.user_ids}
                    limit={section.display_limit}
                    fromApi={false}
                  />
                </LazySection>
              ))
            }
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search Widget - controlled by admin */}
            {showSearchWidget && (
              <SearchWidget categories={categories} />
            )}

            {/* Latest news */}
            <div className="bg-white rounded-lg p-4">
              <NewsSidebar articles={latestArticles} title="Xem nhanh" />
            </div>

            {/* Most read */}
            <div className="bg-white rounded-lg p-4">
              <SidebarWithImage articles={popularArticles} title="Đọc nhiều" />
            </div>

            {/* Featured Users - from homepage sections */}
            {sidebarSections
              .filter(s => s.section_type === 'featured_users' && s.is_visible)
              .map(section => (
                <FeaturedUsers
                  key={section.id}
                  title={section.title || undefined}
                  userType={section.selection_data?.user_type || section.selection_type}
                  userIds={section.selection_data?.user_ids}
                  limit={section.display_limit}
                  fromApi={false}
                />
              ))
            }
            
            {/* Fallback: Show default FeaturedUsers if no section configured */}
            {!sidebarSections.some(s => s.section_type === 'featured_users' && s.is_visible) && (
              <FeaturedUsers />
            )}

            {/* Categories */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Chuyên mục</h3>
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
            </div>

            {/* Newsfeed CTA */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                Newsfeed
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                Xem bài viết mới từ cộng đồng thành viên
              </p>
              <Link 
                href="/feed" 
                className="inline-block px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Xem Newsfeed
              </Link>
            </div>

            {/* Community CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Tham gia cộng đồng</h3>
              <p className="text-sm text-orange-100 mb-4">
                Chia sẻ ý kiến và thảo luận cùng mọi người
              </p>
              <Link 
                href="/community" 
                className="inline-block px-4 py-2 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors"
              >
                Tham gia ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
