import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import pool from '@/lib/db';

/**
 * POST /api/admin/migrate/homepage - Run homepage sections migration
 */
export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || userRole !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized - Admin only' }, { status: 401 });
    }

    const client = await pool.connect();
    
    try {
      // Create homepage_sections table
      await client.query(`
        CREATE TABLE IF NOT EXISTS homepage_sections (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          title VARCHAR(200),
          section_type VARCHAR(50) NOT NULL,
          selection_type VARCHAR(50) DEFAULT 'auto',
          selection_data JSONB DEFAULT '{}',
          display_limit INTEGER DEFAULT 5,
          display_layout VARCHAR(50) DEFAULT 'grid',
          display_settings JSONB DEFAULT '{}',
          sort_order INTEGER DEFAULT 0,
          is_visible BOOLEAN DEFAULT TRUE,
          position VARCHAR(20) DEFAULT 'main',
          created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
          updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create indexes
      await client.query(`CREATE INDEX IF NOT EXISTS idx_homepage_sections_sort ON homepage_sections(sort_order)`);
      await client.query(`CREATE INDEX IF NOT EXISTS idx_homepage_sections_visible ON homepage_sections(is_visible)`);
      await client.query(`CREATE INDEX IF NOT EXISTS idx_homepage_sections_position ON homepage_sections(position)`);

      // Insert default sections
      await client.query(`
        INSERT INTO homepage_sections (name, title, section_type, selection_type, display_limit, display_layout, sort_order, position) 
        SELECT * FROM (VALUES
          ('hero', 'Tin nổi bật', 'hero_slider', 'featured', 5, 'slider', 1, 'main'),
          ('top_featured', 'Tin mới nhất', 'featured_grid', 'auto', 6, 'grid', 2, 'main'),
          ('latest_sidebar', 'Xem nhanh', 'sidebar_widget', 'auto', 10, 'sidebar', 1, 'sidebar'),
          ('popular_sidebar', 'Đọc nhiều', 'sidebar_widget', 'popular', 5, 'sidebar', 2, 'sidebar')
        ) AS v(name, title, section_type, selection_type, display_limit, display_layout, sort_order, position)
        WHERE NOT EXISTS (SELECT 1 FROM homepage_sections LIMIT 1)
      `);

      // Create homepage_section_articles table
      await client.query(`
        CREATE TABLE IF NOT EXISTS homepage_section_articles (
          id SERIAL PRIMARY KEY,
          section_id INTEGER NOT NULL REFERENCES homepage_sections(id) ON DELETE CASCADE,
          article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
          sort_order INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(section_id, article_id)
        )
      `);

      await client.query(`CREATE INDEX IF NOT EXISTS idx_homepage_section_articles_section ON homepage_section_articles(section_id)`);

      // Check result
      const result = await client.query(`SELECT COUNT(*) as count FROM homepage_sections`);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Migration completed!',
        sectionsCount: result.rows[0].count
      });
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ 
      error: 'Migration failed', 
      details: error.message 
    }, { status: 500 });
  }
}

/**
 * GET /api/admin/migrate/homepage - Check migration status
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as any)?.role || '';
    if (!session?.user || userRole !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const client = await pool.connect();
    try {
      const tableCheck = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'homepage_sections'
        ) as exists
      `);

      if (!tableCheck.rows[0].exists) {
        return NextResponse.json({ migrated: false, message: 'Table not found' });
      }

      const countResult = await client.query(`SELECT COUNT(*) as count FROM homepage_sections`);
      
      return NextResponse.json({ 
        migrated: true, 
        sectionsCount: countResult.rows[0].count 
      });
    } finally {
      client.release();
    }
  } catch (error: any) {
    return NextResponse.json({ migrated: false, error: error.message });
  }
}
