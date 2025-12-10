import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

interface HomepageSection {
  id: number;
  name: string;
  title: string | null;
  section_type: string;
  selection_type: string;
  selection_data: any;
  display_limit: number;
  display_layout: string;
  display_settings: any;
  is_visible: boolean;
  position: string;
  sort_order: number;
}

/**
 * GET /api/homepage - Get homepage sections with articles for public display
 */
export async function GET() {
  try {
    // Get visible sections
    const sections = await query<HomepageSection>(`
      SELECT * FROM homepage_sections
      WHERE is_visible = true
      ORDER BY position, sort_order ASC
    `);

    // Fetch articles for each section
    const sectionsWithArticles = await Promise.all(
      sections.map(async (section) => {
        let articles: any[] = [];

        switch (section.selection_type) {
          case 'manual':
            // Get manually selected articles
            articles = await query(`
              SELECT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at, 
                     a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                     au.name as author_name
              FROM homepage_section_articles hsa
              JOIN articles a ON hsa.article_id = a.id
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors au ON a.author_id = au.id
              WHERE hsa.section_id = $1 AND a.status = 'published'
              ORDER BY hsa.sort_order ASC
              LIMIT $2
            `, [section.id, section.display_limit]);
            break;

          case 'category':
          case 'categories':
            const categoryIds = section.selection_data?.category_ids || [];
            if (categoryIds.length > 0) {
              articles = await query(`
                SELECT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at,
                       a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                       au.name as author_name
                FROM articles a
                LEFT JOIN categories c ON a.category_id = c.id
                LEFT JOIN authors au ON a.author_id = au.id
                WHERE a.status = 'published' AND a.category_id = ANY($1)
                ORDER BY a.published_at DESC
                LIMIT $2
              `, [categoryIds, section.display_limit]);
            }
            break;

          case 'tag':
          case 'tags':
            const tagIds = section.selection_data?.tag_ids || [];
            if (tagIds.length > 0) {
              articles = await query(`
                SELECT DISTINCT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at,
                       a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                       au.name as author_name
                FROM articles a
                JOIN article_tags at ON a.id = at.article_id
                LEFT JOIN categories c ON a.category_id = c.id
                LEFT JOIN authors au ON a.author_id = au.id
                WHERE a.status = 'published' AND at.tag_id = ANY($1)
                ORDER BY a.published_at DESC
                LIMIT $2
              `, [tagIds, section.display_limit]);
            }
            break;

          case 'featured':
            articles = await query(`
              SELECT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at,
                     a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                     au.name as author_name
              FROM articles a
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors au ON a.author_id = au.id
              WHERE a.status = 'published' AND a.is_featured = true
              ORDER BY a.published_at DESC
              LIMIT $1
            `, [section.display_limit]);
            break;

          case 'popular':
            articles = await query(`
              SELECT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at,
                     a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                     au.name as author_name
              FROM articles a
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors au ON a.author_id = au.id
              WHERE a.status = 'published'
              ORDER BY a.view_count DESC
              LIMIT $1
            `, [section.display_limit]);
            break;

          case 'auto':
          default:
            articles = await query(`
              SELECT a.id, a.title, a.slug, a.excerpt, a.featured_image, a.published_at,
                     a.view_count, a.reading_time, c.name as category_name, c.slug as category_slug,
                     au.name as author_name
              FROM articles a
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors au ON a.author_id = au.id
              WHERE a.status = 'published'
              ORDER BY a.published_at DESC
              LIMIT $1
            `, [section.display_limit]);
            break;
        }

        return {
          ...section,
          articles,
        };
      })
    );

    const mainSections = sectionsWithArticles.filter(s => s.position === 'main');
    const sidebarSections = sectionsWithArticles.filter(s => s.position === 'sidebar');

    return NextResponse.json({
      mainSections,
      sidebarSections,
    });
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return NextResponse.json({ error: 'Failed to fetch homepage data' }, { status: 500 });
  }
}
