import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface Props {
  articles: Article[];
  title?: string;
}

export function NewsSidebar({ articles, title = 'Xem nhanh' }: Props) {
  return (
    <aside>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <Link href="/category/tin-tuc" className="text-sm text-primary hover:underline">
          Xem tất cả
        </Link>
      </div>

      {/* Timeline list */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-primary/20" />

        {/* Items */}
        <div className="space-y-4">
          {articles.map((article) => (
            <article key={article.id} className="group relative flex gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-3 h-3 bg-primary rounded-full mt-1.5" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex gap-3">
                <div className="flex-1">
                  <Link href={`/article/${article.slug}`}>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-3 leading-snug">
                      {article.title}
                    </h4>
                  </Link>
                </div>

                {/* Thumbnail */}
                {article.featuredImage && (
                  <Link href={`/article/${article.slug}`} className="flex-shrink-0">
                    <div className="relative w-20 h-14 overflow-hidden rounded">
                      <Image
                        src={article.featuredImage.url}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="80px"
                      />
                    </div>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function SidebarWithImage({ articles, title = 'Đọc nhiều' }: Props) {
  return (
    <aside>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {articles.slice(0, 5).map((article, index) => (
          <article key={article.id} className="group flex gap-3">
            {/* Rank */}
            <span className="text-2xl font-bold text-gray-300 w-6 flex-shrink-0">
              {index + 1}
            </span>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <Link href={`/article/${article.slug}`}>
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                  {article.title}
                </h4>
              </Link>
              {article.author && (
                <span className="text-xs text-gray-500 mt-1 block">{article.author.name}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
