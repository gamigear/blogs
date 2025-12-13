'use client';

import Link from 'next/link';

interface FeaturedArticle {
  id: number;
  title: string;
  slug: string;
  author?: {
    name: string;
  };
}

interface Props {
  articles: FeaturedArticle[];
  title?: string;
}

export function FeaturedArticlesSidebar({ articles, title = 'Bài nổi bật' }: Props) {
  // Always render container to avoid hydration mismatch
  if (!articles || articles.length === 0) {
    return (
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-sm text-gray-500">Chưa có bài viết</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {articles.slice(0, 6).map((article, index) => (
          <div key={article.id} className="group">
            <Link href={`/article/${article.slug}`} className="block">
              <div className="flex items-start gap-2">
                <span className={`text-2xl font-bold ${
                  index < 3 ? 'text-primary' : 'text-gray-400'
                }`}>
                  #{index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2 leading-tight">
                    {article.title}
                  </h4>
                  {article.author && (
                    <p className="text-xs text-gray-500 mt-1">{article.author.name}</p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
