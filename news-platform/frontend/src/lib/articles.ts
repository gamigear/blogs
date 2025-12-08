/**
 * Article Management Module
 * Requirements: 2.1, 2.2, 2.3, 2.5, 11.1
 */

import { query, queryOne, transaction, generateSlug, generateUniqueSlug } from './db';
import { PoolClient } from 'pg';

// Types
export interface ArticleInput {
  title: string;
  content: string;
  excerpt?: string;
  categoryId: number;
  authorId?: number;
  featuredImage?: string;
  tags?: number[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonical?: string;
  };
  readingTime?: number;
  isFeatured?: boolean;
  isSticky?: boolean;
}

export interface ArticleUpdateInput extends Partial<ArticleInput> {
  status?: 'draft' | 'pending_review' | 'published' | 'archived';
}

export interface ArticleRecord {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  category_id: number;
  author_id: number | null;
  status: string;
  source_type: string;
  discourse_topic_id: number | null;
  reading_time: number | null;
  seo: Record<string, any>;
  is_featured: boolean;
  is_sticky: boolean;
  view_count: number;
  version: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// ============================================
// CREATE ARTICLE
// Requirements: 2.1 - Create with status 'draft', generate unique slug
// ============================================
export async function createArticle(input: ArticleInput, editorId?: number): Promise<ArticleRecord> {
  return transaction(async (client: PoolClient) => {
    // Validate category exists
    const category = await client.query('SELECT id FROM categories WHERE id = $1', [input.categoryId]);
    if (category.rows.length === 0) {
      throw new Error('Category not found');
    }

    // Generate unique slug from title
    const baseSlug = generateSlug(input.title);
    const slug = await generateUniqueSlugInTransaction(client, 'articles', baseSlug);

    // Calculate reading time if not provided (approx 200 words per minute)
    const readingTime = input.readingTime || Math.ceil(input.content.split(/\s+/).length / 200);

    // Insert article with default status 'draft'
    const result = await client.query<ArticleRecord>(
      `INSERT INTO articles (
        title, slug, excerpt, content, featured_image, 
        category_id, author_id, status, reading_time, 
        seo, is_featured, is_sticky
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, 'draft', $8, $9, $10, $11)
      RETURNING *`,
      [
        input.title,
        slug,
        input.excerpt || input.content.substring(0, 200),
        input.content,
        input.featuredImage || null,
        input.categoryId,
        input.authorId || null,
        readingTime,
        JSON.stringify(input.seo || {}),
        input.isFeatured || false,
        input.isSticky || false,
      ]
    );

    const article = result.rows[0];

    // Add tags if provided
    if (input.tags && input.tags.length > 0) {
      const tagValues = input.tags.map((tagId, i) => `($1, $${i + 2})`).join(', ');
      await client.query(
        `INSERT INTO article_tags (article_id, tag_id) VALUES ${tagValues}`,
        [article.id, ...input.tags]
      );
    }

    // Create initial version record
    await client.query(
      `INSERT INTO article_versions (article_id, editor_id, title, content, excerpt, version, change_summary)
       VALUES ($1, $2, $3, $4, $5, 1, 'Initial creation')`,
      [article.id, editorId || null, article.title, article.content, article.excerpt]
    );

    return article;
  });
}

// ============================================
// GET ARTICLE BY ID
// ============================================
export async function getArticleById(id: number): Promise<ArticleRecord | null> {
  return queryOne<ArticleRecord>('SELECT * FROM articles WHERE id = $1', [id]);
}

// ============================================
// UPDATE ARTICLE
// Requirements: 2.5 - Create version record on each update
// ============================================
export async function updateArticle(
  id: number,
  input: ArticleUpdateInput,
  editorId?: number,
  changeSummary?: string
): Promise<ArticleRecord> {
  return transaction(async (client: PoolClient) => {
    // Get current article
    const current = await client.query<ArticleRecord>('SELECT * FROM articles WHERE id = $1 FOR UPDATE', [id]);
    if (current.rows.length === 0) {
      throw new Error('Article not found');
    }
    const currentArticle = current.rows[0];

    // Build update fields
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (input.title !== undefined) {
      updates.push(`title = $${paramIndex++}`);
      values.push(input.title);
      
      // Regenerate slug if title changed
      const baseSlug = generateSlug(input.title);
      const slug = await generateUniqueSlugInTransaction(client, 'articles', baseSlug, id);
      updates.push(`slug = $${paramIndex++}`);
      values.push(slug);
    }

    if (input.content !== undefined) {
      updates.push(`content = $${paramIndex++}`);
      values.push(input.content);
    }

    if (input.excerpt !== undefined) {
      updates.push(`excerpt = $${paramIndex++}`);
      values.push(input.excerpt);
    }

    if (input.categoryId !== undefined) {
      updates.push(`category_id = $${paramIndex++}`);
      values.push(input.categoryId);
    }

    if (input.authorId !== undefined) {
      updates.push(`author_id = $${paramIndex++}`);
      values.push(input.authorId);
    }

    if (input.featuredImage !== undefined) {
      updates.push(`featured_image = $${paramIndex++}`);
      values.push(input.featuredImage);
    }

    if (input.seo !== undefined) {
      updates.push(`seo = $${paramIndex++}`);
      values.push(JSON.stringify(input.seo));
    }

    if (input.readingTime !== undefined) {
      updates.push(`reading_time = $${paramIndex++}`);
      values.push(input.readingTime);
    }

    if (input.isFeatured !== undefined) {
      updates.push(`is_featured = $${paramIndex++}`);
      values.push(input.isFeatured);
    }

    if (input.isSticky !== undefined) {
      updates.push(`is_sticky = $${paramIndex++}`);
      values.push(input.isSticky);
    }

    if (input.status !== undefined) {
      updates.push(`status = $${paramIndex++}`);
      values.push(input.status);
      
      // Set published_at when publishing
      if (input.status === 'published' && currentArticle.status !== 'published') {
        updates.push(`published_at = CURRENT_TIMESTAMP`);
      }
    }

    // Increment version
    updates.push(`version = version + 1`);

    if (updates.length === 0) {
      return currentArticle;
    }

    values.push(id);
    const result = await client.query<ArticleRecord>(
      `UPDATE articles SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    const updatedArticle = result.rows[0];

    // Create version record (Requirements: 2.5)
    await client.query(
      `INSERT INTO article_versions (article_id, editor_id, title, content, excerpt, version, change_summary)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        id,
        editorId || null,
        currentArticle.title,
        currentArticle.content,
        currentArticle.excerpt,
        currentArticle.version,
        changeSummary || 'Update',
      ]
    );

    // Update tags if provided
    if (input.tags !== undefined) {
      await client.query('DELETE FROM article_tags WHERE article_id = $1', [id]);
      if (input.tags.length > 0) {
        const tagValues = input.tags.map((_, i) => `($1, $${i + 2})`).join(', ');
        await client.query(
          `INSERT INTO article_tags (article_id, tag_id) VALUES ${tagValues}`,
          [id, ...input.tags]
        );
      }
    }

    return updatedArticle;
  });
}

// ============================================
// DELETE ARTICLE
// ============================================
export async function deleteArticle(id: number): Promise<boolean> {
  const result = await query('DELETE FROM articles WHERE id = $1', [id]);
  return true;
}

// ============================================
// ARTICLE STATUS TRANSITIONS
// Requirements: 2.2, 2.3
// ============================================

/**
 * Submit article for review: draft → pending_review
 */
export async function submitForReview(id: number, editorId?: number): Promise<ArticleRecord> {
  const article = await getArticleById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  if (article.status !== 'draft') {
    throw new Error('Only draft articles can be submitted for review');
  }
  return updateArticle(id, { status: 'pending_review' }, editorId, 'Submitted for review');
}

/**
 * Approve article: pending_review → published
 */
export async function approveArticle(id: number, editorId?: number): Promise<ArticleRecord> {
  const article = await getArticleById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  if (article.status !== 'pending_review') {
    throw new Error('Only pending articles can be approved');
  }
  return updateArticle(id, { status: 'published' }, editorId, 'Approved and published');
}

/**
 * Reject article: pending_review → archived
 */
export async function rejectArticle(id: number, editorId?: number, reason?: string): Promise<ArticleRecord> {
  const article = await getArticleById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  if (article.status !== 'pending_review') {
    throw new Error('Only pending articles can be rejected');
  }
  return updateArticle(id, { status: 'archived' }, editorId, `Rejected: ${reason || 'No reason provided'}`);
}

/**
 * Archive article: any → archived
 */
export async function archiveArticle(id: number, editorId?: number): Promise<ArticleRecord> {
  return updateArticle(id, { status: 'archived' }, editorId, 'Archived');
}

/**
 * Restore to draft: archived → draft
 */
export async function restoreToDraft(id: number, editorId?: number): Promise<ArticleRecord> {
  const article = await getArticleById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  if (article.status !== 'archived') {
    throw new Error('Only archived articles can be restored');
  }
  return updateArticle(id, { status: 'draft' }, editorId, 'Restored to draft');
}

// ============================================
// GET ARTICLE VERSIONS
// ============================================
export async function getArticleVersions(articleId: number): Promise<any[]> {
  return query(
    `SELECT av.*, u.display_name as editor_name
     FROM article_versions av
     LEFT JOIN users u ON av.editor_id = u.id
     WHERE av.article_id = $1
     ORDER BY av.version DESC`,
    [articleId]
  );
}

/**
 * Restore article to a specific version
 */
export async function restoreToVersion(articleId: number, version: number, editorId?: number): Promise<ArticleRecord> {
  const versionRecord = await queryOne<any>(
    'SELECT * FROM article_versions WHERE article_id = $1 AND version = $2',
    [articleId, version]
  );
  
  if (!versionRecord) {
    throw new Error('Version not found');
  }

  return updateArticle(
    articleId,
    {
      title: versionRecord.title,
      content: versionRecord.content,
      excerpt: versionRecord.excerpt,
    },
    editorId,
    `Restored to version ${version}`
  );
}

// ============================================
// HELPER FUNCTIONS
// ============================================
async function generateUniqueSlugInTransaction(
  client: PoolClient,
  table: string,
  baseSlug: string,
  excludeId?: number
): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const result = await client.query(
      `SELECT id FROM ${table} WHERE slug = $1 ${excludeId ? 'AND id != $2' : ''}`,
      excludeId ? [slug, excludeId] : [slug]
    );

    if (result.rows.length === 0) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

// ============================================
// ARTICLE QUERIES FOR ADMIN
// ============================================
export async function getArticlesByStatus(
  status: string,
  page = 1,
  pageSize = 20
): Promise<{ articles: ArticleRecord[]; total: number }> {
  const offset = (page - 1) * pageSize;
  
  const [articles, countResult] = await Promise.all([
    query<ArticleRecord>(
      `SELECT * FROM articles WHERE status = $1 ORDER BY updated_at DESC LIMIT $2 OFFSET $3`,
      [status, pageSize, offset]
    ),
    queryOne<{ count: string }>('SELECT COUNT(*) as count FROM articles WHERE status = $1', [status]),
  ]);

  return {
    articles,
    total: parseInt(countResult?.count || '0'),
  };
}

export async function getPendingArticles(page = 1, pageSize = 20) {
  return getArticlesByStatus('pending_review', page, pageSize);
}

export async function getDraftArticles(page = 1, pageSize = 20) {
  return getArticlesByStatus('draft', page, pageSize);
}
