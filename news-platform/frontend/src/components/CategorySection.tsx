'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface Props {
  title: string;
  slug: string;
  articles: Article[];
  layout?: 'default' | 'horizontal' | 'compact';
}

export function CategorySection({ title, slug, articles, layout = 'default' }: Props) {
  if (articles.length === 0) return null;

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <Link href={`/category/${slug}`} className="text-sm text-gray-500 hover:text-primary">
          Xem thêm →
        </Link>
      </div>

      {layout === 'horizontal' ? (
        <HorizontalLayout articles={articles} />
      ) : layout === 'compact' ? (
        <CompactLayout articles={articles} />
      ) : (
        <DefaultLayout mainArticle={mainArticle} sideArticles={sideArticles} />
      )}
    </section>
  );
}

function DefaultLayout({ mainArticle, sideArticles }: { mainArticle: Article; sideArticles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main article */}
      <article className="md:col-span-2 group">
        <Link href={`/article/${mainArticle.slug}`}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-3">
            {mainArticle.featuredImage ? (
              <Image
                src={mainArticle.featuredImage.url}
                alt={mainArticle.featuredImage.alt || mainArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">📄</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary mb-2 line-clamp-2">
            {mainArticle.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{mainArticle.excerpt}</p>
        </Link>
      </article>

      {/* Side articles */}
      <div className="space-y-4">
        {sideArticles.map((article) => (
          <article key={article.id} className="group">
            <Link href={`/article/${article.slug}`} className="flex gap-3">
              <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                {article.featuredImage ? (
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg">📄</span>
                  </div>
                )}
              </div>
              <h4 className="flex-1 text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-3">
                {article.title}
              </h4>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function HorizontalLayout({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {articles.slice(0, 4).map((article) => (
        <article key={article.id} className="group">
          <Link href={`/article/${article.slug}`}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-2">
              {article.featuredImage ? (
                <Image
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt || article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
              )}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary line-clamp-2">
              {article.title}
            </h3>
          </Link>
        </article>
      ))}
    </div>
  );
}

function CompactLayout({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-3">
      {articles.slice(0, 6).map((article) => (
        <article key={article.id} className="group flex gap-3 py-2">
          <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded">
            {article.featuredImage ? (
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt || article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="80px"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm">📄</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <Link href={`/article/${article.slug}`}>
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                {article.title}
              </h4>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
