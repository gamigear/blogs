import { MetadataRoute } from 'next';
import { query } from '@/lib/db';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

interface ArticleRow {
  slug: string;
  updated_at: string;
}

interface CategoryRow {
  slug: string;
}

/**
 * Dynamic sitemap generation
 * Requirements: 4.4 - Include all published articles, exclude unpublished
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all published articles
  const articles = await query<ArticleRow>(
    `SELECT slug, updated_at FROM articles WHERE status = 'published' ORDER BY published_at DESC`
  );

  // Get all categories
  const categories = await query<CategoryRow>(
    `SELECT slug FROM categories`
  );

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/community`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Article pages (only published articles)
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/article/${article.slug}`,
    lastModified: new Date(article.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
