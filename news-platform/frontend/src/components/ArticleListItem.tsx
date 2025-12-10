import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface Props {
  article: Article;
  showCategory?: boolean;
  showExcerpt?: boolean;
  imageSize?: 'small' | 'medium' | 'large';
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function formatShortDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
}

export function ArticleListItem({ 
  article, 
  showCategory = true, 
  showExcerpt = true,
  imageSize = 'medium' 
}: Props) {
  const imageSizes = {
    small: 'w-20 h-14',
    medium: 'w-32 h-20 md:w-40 md:h-24',
    large: 'w-40 h-24 md:w-48 md:h-32',
  };

  return (
    <article className="group flex gap-4 py-4">
      <Link href={`/article/${article.slug}`} className={`relative ${imageSizes[imageSize]} flex-shrink-0 overflow-hidden rounded-lg`}>
        {article.featuredImage ? (
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt || article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={imageSize === 'large' ? '200px' : imageSize === 'medium' ? '160px' : '80px'}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl">📄</span>
          </div>
        )}
      </Link>

      <div className="flex-1 min-w-0">
        {showCategory && article.category && (
          <Link href={`/category/${article.category.slug}`} className="category-tag inline-block mb-1">
            {article.category.name}
          </Link>
        )}
        
        <h3 className="news-title mb-1">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        
        {showExcerpt && article.excerpt && (
          <p className="news-excerpt mb-2 hidden sm:block">{article.excerpt}</p>
        )}
        
        <div className="news-meta flex items-center gap-2">
          {article.author && <span>{article.author.name}</span>}
          {article.author && <span>•</span>}
          <time dateTime={article.publishedAt} suppressHydrationWarning>
            {formatDate(article.publishedAt)}
          </time>
          {article.viewCount !== undefined && article.viewCount > 0 && (
            <>
              <span>•</span>
              <span>{article.viewCount.toLocaleString()} lượt xem</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleGridItem key={article.id} article={article} />
      ))}
    </div>
  );
}

function ArticleGridItem({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden">
      <Link href={`/article/${article.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          {article.featuredImage ? (
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt || article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        {article.category && (
          <Link href={`/category/${article.category.slug}`} className="category-tag inline-block mb-2">
            {article.category.name}
          </Link>
        )}
        <h3 className="font-semibold text-gray-900 group-hover:text-primary line-clamp-2 mb-2">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span>{article.author?.name}</span>
          <span>•</span>
          <time dateTime={article.publishedAt} suppressHydrationWarning>
            {formatShortDate(article.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
}
