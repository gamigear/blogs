import Link from 'next/link';
import { Article } from '@/types';

interface Props {
  articles: Article[];
  title?: string;
}

export function TopFeatured({ articles, title = 'Bài nổi bật' }: Props) {
  if (articles.length === 0) return null;

  // Split into 2 columns
  const leftColumn = articles.filter((_, i) => i % 2 === 0).slice(0, 3);
  const rightColumn = articles.filter((_, i) => i % 2 === 1).slice(0, 3);

  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Left Column */}
        <div className="space-y-6">
          {leftColumn.map((article, index) => (
            <FeaturedItem 
              key={article.id} 
              article={article} 
              rank={index * 2 + 1} 
            />
          ))}
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {rightColumn.map((article, index) => (
            <FeaturedItem 
              key={article.id} 
              article={article} 
              rank={index * 2 + 2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedItem({ article, rank }: { article: Article; rank: number }) {
  return (
    <article className="flex gap-4 group">
      {/* Rank number */}
      <div className="flex-shrink-0">
        <span className="text-4xl font-bold text-gray-300 group-hover:text-primary transition-colors">
          #{rank}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
          <Link href={`/article/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        <span className="text-sm text-gray-500">
          {article.author?.name || 'Admin'}
        </span>
      </div>
    </article>
  );
}
