import { query } from './db';

export interface HomepageSection {
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
  articles: HomepageArticle[];
}

export interface HomepageArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
  view_count: number;
  reading_time: number;
  category_name: string;
  category_slug: string;
  author_name: string | null;
}

export async function getHomepageSections(): Promise<{
  mainSections: HomepageSection[];
  sidebarSections: HomepageSection[];
}> {
  try {
    // Get visible sections
    const sections = await query<Omit<HomepageSection, 'articles'>>(`
      SELECT * FROM homepage_sections
      WHERE is_visible = true
      ORDER BY position, sort_order ASC
    `);

    // Fetch articles for each section
    const sectionsWithArticles = await Promise.all(
      sections.map(async (section) => {
        let articles: HomepageArticle[] = [];

        switch (section.selection_type) {
          case 'manual':
            articles = await query<HomepageArticle>(`
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
              articles = await query<HomepageArticle>(`
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
              articles = await query<HomepageArticle>(`
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
            articles = await query<HomepageArticle>(`
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
            articles = await query<HomepageArticle>(`
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
            articles = await query<HomepageArticle>(`
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

    return {
      mainSections: sectionsWithArticles.filter(s => s.position === 'main'),
      sidebarSections: sectionsWithArticles.filter(s => s.position === 'sidebar'),
    };
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return { mainSections: [], sidebarSections: [] };
  }
}
