import { Article, Category, CommunityPost, Author } from '@/types';
import { query, queryOne } from './db';

// Database row types
interface ArticleRow {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  category_id: number;
  category_name: string;
  category_slug: string;
  author_id: number;
  author_name: string;
  author_bio: string | null;
  author_avatar: string | null;
  status: string;
  source_type: string;
  discourse_topic_id: number | null;
  reading_time: number | null;
  view_count: number;
  is_featured: boolean;
  seo: Record<string, any>;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface CategoryRow {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  is_default: boolean;
}

interface CommunityPostRow {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  user_id: number;
  author_name: string | null;
  author_username: string | null;
  status: string;
  discourse_topic_id: number | null;
  created_at: string;
}

interface AuthorRow {
  id: number;
  name: string;
  slug: string;
  email: string;
  bio: string | null;
  avatar: string | null;
}

function mapArticle(row: ArticleRow): Article {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    content: row.content,
    featuredImage: row.featured_image ? { url: row.featured_image, alt: row.title } : undefined,
    category: {
      id: row.category_id,
      name: row.category_name,
      slug: row.category_slug,
    },
    author: {
      id: row.author_id,
      name: row.author_name,
      bio: row.author_bio || undefined,
      avatar: row.author_avatar || undefined,
    },
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    seo: row.seo,
    readingTime: row.reading_time || undefined,
    viewCount: row.view_count,
    isFeatured: row.is_featured,
    discourseTopicId: row.discourse_topic_id || undefined,
  };
}

// ============================================
// ARTICLE QUERIES
// ============================================

export async function getArticles(page = 1, pageSize = 10): Promise<Article[]> {
  const offset = (page - 1) * pageSize;
  const rows = await query<ArticleRow>(
    `SELECT a.*, 
            c.name as category_name, c.slug as category_slug,
            au.name as author_name, au.bio as author_bio, au.avatar as author_avatar
     FROM articles a
     LEFT JOIN categories c ON a.category_id = c.id
     LEFT JOIN authors au ON a.author_id = au.id
     WHERE a.status = 'published'
     ORDER BY a.published_at DESC NULLS LAST
     LIMIT $1 OFFSET $2`,
    [pageSize, offset]
  );
  return rows.map(mapArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const row = await queryOne<ArticleRow>(
    `SELECT a.*, 
            c.name as category_name, c.slug as category_slug,
            au.name as author_name, au.bio as author_bio, au.avatar as author_avatar
     FROM articles a
     LEFT JOIN categories c ON a.category_id = c.id
     LEFT JOIN authors au ON a.author_id = au.id
     WHERE a.slug = $1 AND a.status = 'published'`,
    [slug]
  );
  return row ? mapArticle(row) : null;
}

export async function getArticlesByCategory(categorySlug: string, page = 1, pageSize = 10): Promise<Article[]> {
  const offset = (page - 1) * pageSize;
  const rows = await query<ArticleRow>(
    `SELECT a.*, 
            c.name as category_name, c.slug as category_slug,
            au.name as author_name, au.bio as author_bio, au.avatar as author_avatar
     FROM articles a
     LEFT JOIN categories c ON a.category_id = c.id
     LEFT JOIN authors au ON a.author_id = au.id
     WHERE c.slug = $1 AND a.status = 'published'
     ORDER BY a.published_at DESC NULLS LAST
     LIMIT $2 OFFSET $3`,
    [categorySlug, pageSize, offset]
  );
  return rows.map(mapArticle);
}

export async function getFeaturedArticles(limit = 5): Promise<Article[]> {
  const rows = await query<ArticleRow>(
    `SELECT a.*, 
            c.name as category_name, c.slug as category_slug,
            au.name as author_name, au.bio as author_bio, au.avatar as author_avatar
     FROM articles a
     LEFT JOIN categories c ON a.category_id = c.id
     LEFT JOIN authors au ON a.author_id = au.id
     WHERE a.status = 'published' AND a.is_featured = TRUE
     ORDER BY a.published_at DESC NULLS LAST
     LIMIT $1`,
    [limit]
  );
  return rows.map(mapArticle);
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const rows = await query<{ slug: string }>(
    "SELECT slug FROM articles WHERE status = 'published'"
  );
  return rows.map((r) => r.slug);
}

export async function getArticleCount(): Promise<number> {
  const row = await queryOne<{ count: string }>(
    "SELECT COUNT(*) as count FROM articles WHERE status = 'published'"
  );
  return parseInt(row?.count || '0');
}

// ============================================
// CATEGORY QUERIES
// ============================================

export async function getCategories(): Promise<Category[]> {
  const rows = await query<CategoryRow>('SELECT id, name, slug, description, is_default FROM categories ORDER BY name');
  return rows.map(row => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || undefined,
    is_default: row.is_default,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const row = await queryOne<CategoryRow>('SELECT id, name, slug, description, image, is_default FROM categories WHERE slug = $1', [slug]);
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || undefined,
    image: row.image || undefined,
    is_default: row.is_default,
  };
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const rows = await query<{ slug: string }>('SELECT slug FROM categories');
  return rows.map((r) => r.slug);
}

// ============================================
// COMMUNITY POST QUERIES
// ============================================

export async function getCommunityPosts(status = 'approved', page = 1, pageSize = 10): Promise<(CommunityPost & { author: CommunityPost['author'] & { username?: string } })[]> {
  const offset = (page - 1) * pageSize;
  const rows = await query<CommunityPostRow>(
    `SELECT cp.*, u.display_name as author_name, u.username as author_username
     FROM community_posts cp
     LEFT JOIN users u ON cp.user_id = u.id
     WHERE cp.status = $1
     ORDER BY cp.created_at DESC
     LIMIT $2 OFFSET $3`,
    [status, pageSize, offset]
  );
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    content: row.content,
    author: { 
      id: row.user_id, 
      name: row.author_name || 'Anonymous',
      username: row.author_username || undefined,
    },
    status: row.status as 'pending' | 'approved' | 'rejected',
    discourseTopicId: row.discourse_topic_id || undefined,
    createdAt: row.created_at,
  }));
}

export async function createCommunityPost(
  data: { title: string; content: string; userId: number }
): Promise<CommunityPost> {
  const rows = await query<CommunityPostRow>(
    `INSERT INTO community_posts (title, content, user_id, status)
     VALUES ($1, $2, $3, 'pending')
     RETURNING *`,
    [data.title, data.content, data.userId]
  );
  const row = rows[0];
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    author: { id: row.user_id, name: '' },
    status: 'pending',
    createdAt: row.created_at,
  };
}

// ============================================
// AUTHOR QUERIES
// ============================================

export async function getAuthors(): Promise<Author[]> {
  const rows = await query<AuthorRow>('SELECT id, name, slug, email, bio, avatar FROM authors ORDER BY name');
  return rows.map(row => ({
    id: row.id,
    name: row.name,
    avatar: row.avatar || undefined,
    bio: row.bio || undefined,
  }));
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const row = await queryOne<AuthorRow>('SELECT id, name, slug, email, bio, avatar FROM authors WHERE slug = $1', [slug]);
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    avatar: row.avatar || undefined,
    bio: row.bio || undefined,
  };
}

// ============================================
// SEARCH (fallback to PostgreSQL full-text)
// ============================================

export async function searchArticles(searchQuery: string, limit = 20): Promise<Article[]> {
  const rows = await query<ArticleRow>(
    `SELECT a.*, 
            c.name as category_name, c.slug as category_slug,
            au.name as author_name, au.bio as author_bio, au.avatar as author_avatar
     FROM articles a
     LEFT JOIN categories c ON a.category_id = c.id
     LEFT JOIN authors au ON a.author_id = au.id
     WHERE a.status = 'published'
       AND (
         a.title ILIKE $1 
         OR a.excerpt ILIKE $1 
         OR a.content ILIKE $1
       )
     ORDER BY a.published_at DESC NULLS LAST
     LIMIT $2`,
    [`%${searchQuery}%`, limit]
  );
  return rows.map(mapArticle);
}
