import { searchArticles } from '@/lib/algolia';
import { ArticleCard } from '@/components/ArticleCard';
import { SearchBox } from '@/components/SearchBox';

interface Props {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || '';
  const results = query ? await searchArticles(query) : { hits: [] };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tìm kiếm</h1>
      <SearchBox />

      {query && (
        <div className="mt-8">
          <p className="text-gray-600 mb-6">
            Tìm thấy {results.hits.length} kết quả cho "{query}"
          </p>
          
          {results.hits.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Không tìm thấy kết quả nào. Thử từ khóa khác?
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {results.hits.map((hit: any) => (
                <ArticleCard
                  key={hit.objectID}
                  article={{
                    id: hit.objectID,
                    slug: hit.slug,
                    title: hit.title,
                    excerpt: hit.excerpt,
                    content: '',
                    publishedAt: hit.publishedAt,
                    category: { id: 0, name: hit.category, slug: '' },
                    author: { id: 0, name: hit.author },
                    createdAt: '',
                    updatedAt: '',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
