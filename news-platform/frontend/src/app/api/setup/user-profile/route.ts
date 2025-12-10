import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

/**
 * GET /api/setup/user-profile - Add cover column to users table
 */
export async function GET() {
  try {
    // Add cover column to users table
    await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS cover VARCHAR(500)`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'User profile migration completed' 
    });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
