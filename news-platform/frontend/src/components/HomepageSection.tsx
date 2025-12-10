'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HomepageSection as SectionType, HomepageArticle } from '@/lib/homepage';

interface Props {
  section: SectionType;
}

export function HomepageSection({ section }: Props) {
  if (!section.articles || section.articles.length === 0) {
    return null;
  }

  const renderArticles = () => {
    switch (section.display_layout) {
      case 'slider':
        return <SliderLayout articles={section.articles} />;
      case 'grid':
        return <GridLayout articles={section.articles} />;
      case 'list':
        return <ListLayout articles={section.articles} />;
      case 'featured_large':
        return <FeaturedLargeLayout articles={section.articles} />;
      case 'sidebar':
        return <SidebarLayout articles={section.articles} />;
      case 'compact':
        return <CompactLayout articles={section.articles} />;
      case 'cards':
        return <CardsLayout articles={section.articles} />;
      case 'magazine':
        return <MagazineLayout articles={section.articles} />;
      default:
        return <GridLayout articles={section.articles} />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      {section.title && (
        <div className="section-header mb-4">
          <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
        </div>
      )}
      {renderArticles()}
    </div>
  );
}

// Slider Layout
function SliderLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex-shrink-0 w-full md:w-[calc(50%-8px)] snap-start"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              {article.featured_image ? (
                <Image
                  src={article.featured_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs text-orange-400 font-medium">{article.category_name}</span>
                <h3 className="text-white font-bold text-lg mt-1 line-clamp-2">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Grid Layout
function GridLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {articles.map((article) => (
        <Link key={article.id} href={`/article/${article.slug}`} className="group">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
            {article.featured_image ? (
              <Image
                src={article.featured_image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <span className="text-xs text-orange-600 font-medium">{article.category_name}</span>
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {article.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

// List Layout
function ListLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="divide-y">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="flex gap-4 py-3 group first:pt-0 last:pb-0"
        >
          <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
            {article.featured_image ? (
              <Image
                src={article.featured_image}
                alt={article.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs text-orange-600 font-medium">{article.category_name}</span>
            <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
              {article.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Featured Large Layout
function FeaturedLargeLayout({ articles }: { articles: HomepageArticle[] }) {
  const [main, ...rest] = articles;
  if (!main) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link href={`/article/${main.slug}`} className="group">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          {main.featured_image ? (
            <Image
              src={main.featured_image}
              alt={main.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-xs text-orange-400 font-medium">{main.category_name}</span>
            <h3 className="text-white font-bold text-xl mt-1">{main.title}</h3>
          </div>
        </div>
      </Link>
      <div className="space-y-3">
        {rest.slice(0, 4).map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex gap-3 group"
          >
            <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden">
              {article.featured_image ? (
                <Image
                  src={article.featured_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-orange-600">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Sidebar Layout
function SidebarLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="space-y-3">
      {articles.map((article, index) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="flex items-start gap-3 group"
        >
          <span className="text-2xl font-bold text-gray-300 w-6">{index + 1}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-orange-600 transition-colors">
              {article.title}
            </h3>
            <span className="text-xs text-gray-500">{article.category_name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Compact Layout
function CompactLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="space-y-2">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="block py-2 border-b last:border-0 group"
        >
          <h3 className="font-medium text-gray-900 text-sm line-clamp-1 group-hover:text-orange-600">
            {article.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

// Cards Layout
function CardsLayout({ articles }: { articles: HomepageArticle[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="flex gap-3 p-3 rounded-lg border hover:shadow-md transition-shadow group"
        >
          <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
            {article.featured_image ? (
              <Image
                src={article.featured_image}
                alt={article.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs text-orange-600 font-medium">{article.category_name}</span>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600">
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{article.reading_time} phút đọc</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Magazine Layout
function MagazineLayout({ articles }: { articles: HomepageArticle[] }) {
  const [first, second, ...rest] = articles;

  return (
    <div className="grid grid-cols-12 gap-4">
      {first && (
        <Link href={`/article/${first.slug}`} className="col-span-12 md:col-span-8 group">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {first.featured_image ? (
              <Image
                src={first.featured_image}
                alt={first.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-xs text-orange-400 font-medium">{first.category_name}</span>
              <h3 className="text-white font-bold text-xl mt-1">{first.title}</h3>
            </div>
          </div>
        </Link>
      )}
      <div className="col-span-12 md:col-span-4 space-y-3">
        {second && (
          <Link href={`/article/${second.slug}`} className="block group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
              {second.featured_image ? (
                <Image
                  src={second.featured_image}
                  alt={second.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600">
              {second.title}
            </h3>
          </Link>
        )}
        {rest.slice(0, 2).map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex gap-2 group"
          >
            <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
              {article.featured_image ? (
                <Image
                  src={article.featured_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
            <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-orange-600">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Sidebar Section Component
export function SidebarSection({ section }: Props) {
  if (!section.articles || section.articles.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-4">
      {section.title && (
        <h3 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h3>
      )}
      <SidebarLayout articles={section.articles} />
    </div>
  );
}
