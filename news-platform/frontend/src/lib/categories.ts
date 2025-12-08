/**
 * Category Management Module
 * Requirements: 11.1, 11.5
 */

import { query, queryOne, transaction, generateSlug, generateUniqueSlug } from './db';
import { PoolClient } from 'pg';

// Types
export interface CategoryInput {
  name: string;
  description?: string;
  parentId?: number;
  discourseCategoryId?: number;
}

export interface CategoryRecord {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  discourse_category_id: number | null;
  parent_id: number | null;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================
// CREATE CATEGORY
// Requirements: 11.2 - Generate unique slug from name
// ============================================
export async function createCategory(input: CategoryInput): Promise<CategoryRecord> {
  const baseSlug = generateSlug(input.name);
  const slug = await generateUniqueSlug('categories', baseSlug);

  const result = await query<CategoryRecord>(
    `INSERT INTO categories (name, slug, description, parent_id, discourse_category_id)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [
      input.name,
      slug,
      input.description || null,
      input.parentId || null,
      input.discourseCategoryId || null,
    ]
  );

  return result[0];
}

// ============================================
// GET CATEGORY
// ============================================
export async function getCategoryById(id: number): Promise<CategoryRecord | null> {
  return queryOne<CategoryRecord>('SELECT * FROM categories WHERE id = $1', [id]);
}

export async function getCategoryBySlug(slug: string): Promise<CategoryRecord | null> {
  return queryOne<CategoryRecord>('SELECT * FROM categories WHERE slug = $1', [slug]);
}

export async function getAllCategories(): Promise<CategoryRecord[]> {
  return query<CategoryRecord>('SELECT * FROM categories ORDER BY name');
}

export async function getDefaultCategory(): Promise<CategoryRecord | null> {
  return queryOne<CategoryRecord>('SELECT * FROM categories WHERE is_default = TRUE LIMIT 1');
}

// ============================================
// UPDATE CATEGORY
// ============================================
export async function updateCategory(
  id: number,
  input: Partial<CategoryInput>
): Promise<CategoryRecord> {
  return transaction(async (client: PoolClient) => {
    const current = await client.query<CategoryRecord>(
      'SELECT * FROM categories WHERE id = $1 FOR UPDATE',
      [id]
    );

    if (current.rows.length === 0) {
      throw new Error('Category not found');
    }

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (input.name !== undefined) {
      updates.push(`name = $${paramIndex++}`);
      values.push(input.name);

      // Regenerate slug if name changed
      const baseSlug = generateSlug(input.name);
      const existingSlug = await client.query(
        'SELECT id FROM categories WHERE slug = $1 AND id != $2',
        [baseSlug, id]
      );
      
      let slug = baseSlug;
      if (existingSlug.rows.length > 0) {
        let counter = 1;
        while (true) {
          const testSlug = `${baseSlug}-${counter}`;
          const exists = await client.query(
            'SELECT id FROM categories WHERE slug = $1 AND id != $2',
            [testSlug, id]
          );
          if (exists.rows.length === 0) {
            slug = testSlug;
            break;
          }
          counter++;
        }
      }
      updates.push(`slug = $${paramIndex++}`);
      values.push(slug);
    }

    if (input.description !== undefined) {
      updates.push(`description = $${paramIndex++}`);
      values.push(input.description);
    }

    if (input.parentId !== undefined) {
      updates.push(`parent_id = $${paramIndex++}`);
      values.push(input.parentId);
    }

    if (input.discourseCategoryId !== undefined) {
      updates.push(`discourse_category_id = $${paramIndex++}`);
      values.push(input.discourseCategoryId);
    }

    if (updates.length === 0) {
      return current.rows[0];
    }

    values.push(id);
    const result = await client.query<CategoryRecord>(
      `UPDATE categories SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    return result.rows[0];
  });
}

// ============================================
// DELETE CATEGORY
// Requirements: 11.5 - Reassign articles to default category
// ============================================
export async function deleteCategory(id: number): Promise<boolean> {
  return transaction(async (client: PoolClient) => {
    // Check if category exists
    const category = await client.query<CategoryRecord>(
      'SELECT * FROM categories WHERE id = $1',
      [id]
    );

    if (category.rows.length === 0) {
      throw new Error('Category not found');
    }

    // Cannot delete default category
    if (category.rows[0].is_default) {
      throw new Error('Cannot delete default category');
    }

    // Get default category for reassignment
    const defaultCategory = await client.query<CategoryRecord>(
      'SELECT id FROM categories WHERE is_default = TRUE LIMIT 1'
    );

    if (defaultCategory.rows.length === 0) {
      throw new Error('No default category found for reassignment');
    }

    const defaultCategoryId = defaultCategory.rows[0].id;

    // Reassign all articles to default category
    // Requirements: 11.5 - Reassign articles on category deletion
    await client.query(
      'UPDATE articles SET category_id = $1 WHERE category_id = $2',
      [defaultCategoryId, id]
    );

    // Delete the category
    await client.query('DELETE FROM categories WHERE id = $1', [id]);

    return true;
  });
}

// ============================================
// SET DEFAULT CATEGORY
// ============================================
export async function setDefaultCategory(id: number): Promise<CategoryRecord> {
  return transaction(async (client: PoolClient) => {
    // Remove default from all categories
    await client.query('UPDATE categories SET is_default = FALSE');

    // Set new default
    const result = await client.query<CategoryRecord>(
      'UPDATE categories SET is_default = TRUE WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      throw new Error('Category not found');
    }

    return result.rows[0];
  });
}

// ============================================
// CATEGORY VALIDATION
// Requirements: 11.1 - Article must have at least one category
// ============================================
export async function validateArticleCategory(categoryId: number): Promise<boolean> {
  const category = await getCategoryById(categoryId);
  return category !== null;
}

// ============================================
// GET CATEGORY STATS
// ============================================
export async function getCategoryStats(): Promise<Array<CategoryRecord & { article_count: number }>> {
  return query<CategoryRecord & { article_count: number }>(
    `SELECT c.*, COUNT(a.id)::integer as article_count
     FROM categories c
     LEFT JOIN articles a ON c.id = a.category_id AND a.status = 'published'
     GROUP BY c.id
     ORDER BY c.name`
  );
}
