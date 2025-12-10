import { NextResponse } from 'next/server';
import { execute } from '@/lib/db';

/**
 * GET /api/setup/category-image - Run migration to add image column to categories
 */
export async function GET() {
  try {
    // Add image column to categories table
    await execute(`
      ALTER TABLE categories ADD COLUMN IF NOT EXISTS image VARCHAR(500)
    `);

    return NextResponse.json({ 
      success: true, 
      message: 'Migration completed: Added image column to categories table' 
    });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
