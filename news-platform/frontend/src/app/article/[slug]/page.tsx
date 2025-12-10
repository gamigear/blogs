import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleBySlug, getAllArticleSlugs, getArticles, getArticlesByCategory } from '@/lib/strapi';
import { ArticleContent } from '@/components/ArticleContent';
import { DiscourseComments } from '@/components/DiscourseComments';

interface Props {
  params: { slug: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.log('Skipping static params generation - database not available during build');
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  const title = article.seo?.metaTitle || article.title;
  const description = article.seo?.metaDescription || article.excerpt;
  const imageUrl = article.featuredImage?.url;
  const canonicalUrl = article.seo?.canonical || `${SITE_URL}/article/${params.slug}`;

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

export const revalidate = 300;

// Trending tags
const trendingTags = ['#ces25', '#ai', '#iphone 16', '#goclamviec', '#trên tay'];

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  // Fetch related content
  const [latestArticles, relatedArticles] = await Promise.all([
    getArticles(1, 10),
    article.category ? getArticlesByCategory(article.category.slug, 1, 6) : Promise.resolve([]),
  ]);

  // Filter out current article from related
  const filteredRelated = relatedArticles.filter(a => a.slug !== params.slug).slice(0, 5);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            <ArticleContent article={article} />
            
            {/* Comments */}
            {article.discourseTopicId && (
              <div className="mt-8">
                <DiscourseComments articleSlug={params.slug} />
              </div>
            )}

            {/* Related articles */}
            {filteredRelated.length > 0 && (
              <section className="mt-8 pt-8 border-t">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Bài viết liên quan</h2>
                <div className="space-y-4">
                  {filteredRelated.map((relatedArticle) => (
                    <article key={relatedArticle.id} className="group flex gap-4">
                      {relatedArticle.featuredImage && (
                        <Link href={`/article/${relatedArticle.slug}`} className="flex-shrink-0">
                          <div className="relative w-32 h-20 overflow-hidden rounded">
                            <Image
                              src={relatedArticle.featuredImage.url}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                              sizes="128px"
                            />
                          </div>
                        </Link>
                      )}
                      <div className="flex-1 min-w-0">
                        <Link href={`/article/${relatedArticle.slug}`}>
                          <h3 className="font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                        </Link>
                        <span className="text-sm text-gray-500">{relatedArticle.author?.name}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending tags */}
            <aside className="bg-white rounded-lg p-4">
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
            </aside>

            {/* Latest articles */}
            <aside className="bg-white rounded-lg p-4">
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
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
