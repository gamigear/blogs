import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Debug API - should be removed in production
export async function GET() {
  try {
    const users = await query<{
      id: number;
      username: string;
      email: string;
      display_name: string;
      role: string;
    }>('SELECT id, username, email, display_name, role FROM users LIMIT 10');
    
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
