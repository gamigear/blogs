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
  const [{ mainSections, sidebarSections }, articles, categories, featuredArticles, feedData] = await Promise.all([
    getHomepageSections(),
    getArticles(1, 30),
    getCategories(),
    getFeaturedArticles(10),
    getFeedPosts(1, 12),
  ]);

  // Get sections by name (if configured in admin)
  const heroSection = getSection(mainSections, 'hero');
  const topFeaturedSection = getSection(mainSections, 'top_featured');
  const latestSidebarSection = getSection(sidebarSections, 'latest_sidebar');
  const popularSidebarSection = getSection(sidebarSections, 'popular_sidebar');

  // Use section data if available, otherwise fallback to default
  const sliderArticles = heroSection?.articles?.length 
    ? convertArticles(heroSection.articles)
    : (featuredArticles.length > 0 ? featuredArticles.slice(0, 5) : articles.slice(0, 5));

  const topFeaturedArticles = topFeaturedSection?.articles?.length
    ? convertArticles(topFeaturedSection.articles)
    : articles.slice(0, 6);

  const latestArticles = latestSidebarSection?.articles?.length
    ? convertArticles(latestSidebarSection.articles)
    : articles.slice(0, 10);

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

  const listArticles = articles.slice(6, 16);

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

            {/* Category sections */}
            {categoryArticles.map(({ category, articles: catArticles }) => (
              catArticles.length > 0 && (
                <div key={category.id} className="bg-white rounded-lg p-4">
                  <CategorySection
                    title={category.name}
                    slug={category.slug}
                    articles={catArticles}
                  />
                </div>
              )
            ))}

            {/* More articles list */}
            {listArticles.length > 0 && (
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
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Latest news */}
            <div className="bg-white rounded-lg p-4">
              <NewsSidebar articles={latestArticles} title="Xem nhanh" />
            </div>

            {/* Most read */}
            <div className="bg-white rounded-lg p-4">
              <SidebarWithImage articles={popularArticles} title="Đọc nhiều" />
            </div>

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
              <h3 className="font-bold text-lg mb-2">📝 Newsfeed</h3>
              <p className="text-sm text-blue-100 mb-4">
                Xem bài viết mới từ cộng đồng thành viên
              </p>
              <Link 
                href="/feed" 
                className="inline-block px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Xem Newsfeed →
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
                Tham gia ngay →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
