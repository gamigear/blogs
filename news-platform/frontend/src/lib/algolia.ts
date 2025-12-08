/**
 * Algolia Search Module
 * Requirements: 5.1, 5.2, 5.3, 5.4
 */

import algoliasearch, { SearchIndex } from 'algoliasearch';
import { Article } from '@/types';

// Admin client for indexing operations
const adminClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.ALGOLIA_ADMIN_KEY || ''
);

// Search-only client for frontend
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ''
);

const articlesIndex = adminClient.initIndex('articles');

// Configure index settings
export async function configureIndex(): Promise<void> {
  await articlesIndex.setSettings({
    searchableAttributes: [
      'title',
      'excerpt',
      'content',
      'category',
      'author',
    ],
    attributesForFaceting: [
      'filterOnly(category)',
      'filterOnly(author)',
    ],
    customRanking: [
      'desc(publishedAt)',
    ],
    attributesToRetrieve: [
      'title',
      'excerpt',
      'slug',
      'category',
      'author',
      'publishedAt',
      'featuredImage',
    ],
    attributesToHighlight: [
      'title',
      'excerpt',
    ],
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>',
  });
}

interface AlgoliaArticle {
  objectID: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  slug: string;
  featuredImage?: string;
}

/**
 * Index a single article
 * Requirements: 5.3 - Add/update article in Algolia
 */
export async function indexArticle(article: Article): Promise<void> {
  try {
    const record: AlgoliaArticle = {
      objectID: String(article.id),
      title: article.title,
      excerpt: article.excerpt || '',
      content: article.content.substring(0, 5000), // Limit content size
      category: article.category?.name || '',
      author: article.author?.name || '',
      publishedAt: article.publishedAt,
      slug: article.slug,
      featuredImage: article.featuredImage?.url,
    };

    await articlesIndex.saveObject(record);
    console.log(`Indexed article: ${article.slug}`);
  } catch (error) {
    console.error(`Failed to index article ${article.id}:`, error);
    throw error;
  }
}

/**
 * Remove article from index
 * Requirements: 5.4 - Remove from Algolia
 */
export async function removeArticle(articleId: number): Promise<void> {
  try {
    await articlesIndex.deleteObject(String(articleId));
    console.log(`Removed article from index: ${articleId}`);
  } catch (error) {
    console.error(`Failed to remove article ${articleId}:`, error);
    throw error;
  }
}

/**
 * Bulk index multiple articles
 */
export async function bulkIndexArticles(articles: Article[]): Promise<void> {
  try {
    const records: AlgoliaArticle[] = articles.map((article) => ({
      objectID: String(article.id),
      title: article.title,
      excerpt: article.excerpt || '',
      content: article.content.substring(0, 5000),
      category: article.category?.name || '',
      author: article.author?.name || '',
      publishedAt: article.publishedAt,
      slug: article.slug,
      featuredImage: article.featuredImage?.url,
    }));

    await articlesIndex.saveObjects(records);
    console.log(`Bulk indexed ${articles.length} articles`);
  } catch (error) {
    console.error('Failed to bulk index articles:', error);
    throw error;
  }
}

/**
 * Search articles
 * Requirements: 5.1, 5.2 - Return results with title, excerpt, category, published_at
 */
export interface SearchResult {
  hits: Array<{
    objectID: string;
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    author: string;
    publishedAt: string;
    featuredImage?: string;
    _highlightResult?: {
      title?: { value: string };
      excerpt?: { value: string };
    };
  }>;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  query: string;
}

export async function searchArticles(
  query: string,
  options: {
    page?: number;
    hitsPerPage?: number;
    filters?: string;
  } = {}
): Promise<SearchResult> {
  const { page = 0, hitsPerPage = 10, filters } = options;

  const result = await articlesIndex.search<AlgoliaArticle>(query, {
    page,
    hitsPerPage,
    filters,
    attributesToRetrieve: ['title', 'excerpt', 'slug', 'category', 'author', 'publishedAt', 'featuredImage'],
    attributesToHighlight: ['title', 'excerpt'],
  });

  return {
    hits: result.hits.map((hit) => ({
      objectID: hit.objectID,
      title: hit.title,
      excerpt: hit.excerpt,
      slug: hit.slug,
      category: hit.category,
      author: hit.author,
      publishedAt: hit.publishedAt,
      featuredImage: hit.featuredImage,
      _highlightResult: hit._highlightResult as any,
    })),
    nbHits: result.nbHits,
    page: result.page,
    nbPages: result.nbPages,
    hitsPerPage: result.hitsPerPage,
    query: result.query,
  };
}

/**
 * Clear all articles from index
 */
export async function clearIndex(): Promise<void> {
  await articlesIndex.clearObjects();
  console.log('Cleared articles index');
}

/**
 * Check if Algolia is configured
 */
export function isAlgoliaConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID &&
    process.env.ALGOLIA_ADMIN_KEY
  );
}
