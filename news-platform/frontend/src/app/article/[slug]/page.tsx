import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleBySlug, getAllArticleSlugs, getArticles, getArticlesByCategory, getFeaturedArticles } from '@/lib/strapi';
import { ArticleContent } from '@/components/ArticleContent';
import { CommentSection } from '@/components/CommentSection';
import { ArticleActions } from '@/components/ArticleActions';
import { FeaturedArticlesSidebar } from '@/components/FeaturedArticlesSidebar';
import { query, queryOne } from '@/lib/db';

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

// Removed generateStaticParams - using force-dynamic instead

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seo?.metaTitle || article.title;
  const description = article.seo?.metaDescription || article.excerpt;
  const imageUrl = article.featuredImage?.url;
  const canonicalUrl = article.seo?.canonical || `${SITE_URL}/article/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Bobatea',
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: article.title }] : [],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.author?.name ? [article.author.name] : [],
      section: article.category?.name,
    },
  };
}

export const dynamic = 'force-dynamic';

// Trending tags
const trendingTags = ['#ces25', '#ai', '#iphone 16', '#goclamviec', '#trên tay'];

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  // Fetch related content and article stats
  const [latestArticles, relatedArticles, featuredArticles, articleStats] = await Promise.all([
    getArticles(1, 10),
    article.category ? getArticlesByCategory(article.category.slug, 1, 6) : Promise.resolve([]),
    getFeaturedArticles(6),
    queryOne<{ likes_count: number; comments_count: number }>(
      'SELECT COALESCE(likes_count, 0) as likes_count, COALESCE(comments_count, 0) as comments_count FROM articles WHERE id = $1',
      [article.id]
    ).catch(() => ({ likes_count: 0, comments_count: 0 })),
  ]);

  // Filter out current article from related
  const filteredRelated = relatedArticles.filter(a => a.slug !== slug).slice(0, 5);
  const likesCount = articleStats?.likes_count || 0;
  const commentsCount = articleStats?.comments_count || 0;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            <ArticleContent article={article} />
            
            {/* Article Actions - Like, Comment, Share */}
            <ArticleActions 
              articleSlug={slug}
              articleId={article.id}
              authorUserId={article.author?.userId}
              initialLikesCount={likesCount}
              commentsCount={commentsCount}
            />

            {/* Related articles - Grid style like featured */}
            {filteredRelated.length > 0 && (
              <section className="mt-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Bài viết liên quan</h2>
                <div className="grid grid-cols-2 gap-4">
                  {filteredRelated.slice(0, 6).map((relatedArticle, index) => (
                    <article key={relatedArticle.id} className="group">
                      <Link href={`/article/${relatedArticle.slug}`} className="block">
                        <div className="flex items-start gap-2">
                          <span className={`text-2xl font-bold flex-shrink-0 ${
                            index < 3 ? 'text-primary' : 'text-gray-400'
                          }`}>
                            #{index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2 leading-tight">
                              {relatedArticle.title}
                            </h3>
                            {relatedArticle.author && (
                              <p className="text-xs text-gray-500 mt-1">{relatedArticle.author.name}</p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
            
            {/* Comments Section */}
            <div id="comments-section">
              <CommentSection articleId={article.id} articleSlug={slug} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured articles */}
            <FeaturedArticlesSidebar articles={featuredArticles} />

            {/* Trending tags */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Xu hướng</h3>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag.replace('#', ''))}`}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest articles */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Bài mới</h3>
              <div className="space-y-4">
                {latestArticles.slice(0, 6).map((item) => (
                  <article key={item.id} className="group flex gap-3">
                    {item.featuredImage && (
                      <Link href={`/article/${item.slug}`} className="flex-shrink-0">
                        <div className="relative w-20 h-14 overflow-hidden rounded">
                          <Image
                            src={item.featuredImage.url}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                            sizes="80px"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="flex-1 min-w-0">
                      <Link href={`/article/${item.slug}`}>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-3">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
