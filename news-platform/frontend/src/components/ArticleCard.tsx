import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Article } from '@/types';

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  return (
    <article className="card hover:shadow-md transition-shadow">
      {article.featuredImage && (
        <div className="relative h-48">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt || article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        {article.category && (
          <Link
            href={`/category/${article.category.slug}`}
            className="badge bg-primary/10 text-primary text-xs mb-2"
          >
            {article.category.name}
          </Link>
        )}
        <h3 className="font-semibold mb-2 line-clamp-2">
          <Link href={`/article/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author?.name}</span>
          <time dateTime={article.publishedAt}>
            {format(new Date(article.publishedAt), 'dd MMM yyyy', { locale: vi })}
          </time>
        </div>
      </div>
    </article>
  );
}
