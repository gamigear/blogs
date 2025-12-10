'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface Props {
  mainArticle: Article;
  sideArticles: Article[];
}

export function HeroSection({ mainArticle, sideArticles }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      {/* Main featured article */}
      <div className="lg:col-span-2">
        <article className="relative group">
          <Link href={`/article/${mainArticle.slug}`}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              {mainArticle.featuredImage ? (
                <Image
                  src={mainArticle.featuredImage.url}
                  alt={mainArticle.featuredImage.alt || mainArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <span className="text-white text-6xl">📰</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                {mainArticle.category && (
                  <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-medium rounded mb-2">
                    {mainArticle.category.name}
                  </span>
                )}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-2">
                  {mainArticle.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-base line-clamp-2 hidden sm:block">
                  {mainArticle.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </article>
      </div>

      {/* Side articles grid */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
        {sideArticles.slice(0, 4).map((article) => (
          <article key={article.id} className="group">
            <Link href={`/article/${article.slug}`} className="flex flex-col lg:flex-row gap-3">
              <div className="relative aspect-[16/9] lg:aspect-square lg:w-24 lg:h-24 flex-shrink-0 overflow-hidden rounded-lg">
                {article.featuredImage ? (
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 50vw, 100px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary line-clamp-2 lg:line-clamp-3">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-500 mt-1 block">
                  {article.category?.name}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
