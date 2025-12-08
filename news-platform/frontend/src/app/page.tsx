import Link from 'next/link';
import { getArticles, getCategories } from '@/lib/strapi';
import { ArticleCard } from '@/components/ArticleCard';
import { SearchBox } from '@/components/SearchBox';

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function HomePage() {
  const [articles, categories] = await Promise.all([
    getArticles(1, 12),
    getCategories(),
  ]);

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Tin tức & Cộng đồng</h1>
        <p className="text-gray-600 mb-6">Cập nhật tin tức mới nhất và tham gia thảo luận</p>
        <SearchBox />
      </section>

      <section className="flex gap-2 flex-wrap justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="badge bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Bài viết mới nhất</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <Link href="/community" className="btn-primary">
          Tham gia cộng đồng →
        </Link>
      </section>
    </div>
  );
}
