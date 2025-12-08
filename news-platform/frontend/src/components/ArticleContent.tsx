import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Article } from '@/types';
import { renderMarkdown, extractTableOfContents } from '@/lib/markdown';

interface Props {
  article: Article;
  showToc?: boolean;
}

/**
 * Article Content Component
 * Requirements: 4.5 - Markdown rendering with heading hierarchy
 */
export function ArticleContent({ article, showToc = true }: Props) {
  const htmlContent = renderMarkdown(article.content);
  const toc = extractTableOfContents(article.content);

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      {/* Article Header */}
      <header className="mb-8">
        <Link 
          href={`/category/${article.category?.slug}`}
          className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4 hover:bg-blue-200 transition"
        >
          {article.category?.name}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          {article.author && (
            <>
              <div className="flex items-center gap-2">
                {article.author.avatar && (
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">{article.author.name}</span>
              </div>
              <span>•</span>
            </>
          )}
          <time dateTime={article.publishedAt}>
            {format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: vi })}
          </time>
          {article.readingTime && (
            <>
              <span>•</span>
              <span>{article.readingTime} phút đọc</span>
            </>
          )}
          {article.viewCount !== undefined && article.viewCount > 0 && (
            <>
              <span>•</span>
              <span>{article.viewCount.toLocaleString()} lượt xem</span>
            </>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {article.featuredImage && (
        <figure className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt || article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </figure>
      )}

      {/* Table of Contents */}
      {showToc && toc.length > 2 && (
        <nav className="bg-gray-50 rounded-lg p-4 mb-8">
          <h2 className="font-semibold mb-3 text-gray-700">Mục lục</h2>
          <ul className="space-y-1">
            {toc.map((item, index) => (
              <li 
                key={index} 
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              >
                <a 
                  href={`#${item.slug}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-a:text-blue-600 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Article Footer */}
      <footer className="mt-8 pt-8 border-t border-gray-200">
        {article.author?.bio && (
          <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            {article.author.avatar && (
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{article.author.name}</p>
              <p className="text-gray-600 text-sm mt-1">{article.author.bio}</p>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
