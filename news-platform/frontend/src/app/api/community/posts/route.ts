import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getCommunityPosts } from '@/lib/strapi';
import { createCommunityPost, canAutoApprove } from '@/lib/community';
import { sanitizeInput, sanitizeHtml, checkRateLimit, addSecurityHeaders } from '@/lib/security';
import { createAuditLog } from '@/lib/moderation';
import { queryOne } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * GET /api/community/posts - List approved community posts
 * Requirements: 3.1
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');

    const posts = await getCommunityPosts('approved', page, pageSize);

    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('Error fetching community posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/community/posts - Submit community post
 * Requirements: 3.1, 3.2, 10.4, 10.5
 */
export async function POST(req: NextRequest) {
  try {
    // Check rate limit
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = checkRateLimit(`community-post:${ip}`, { maxRequests: 5, windowMs: 60000 });
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before posting again.' },
        { status: 429 }
      );
    }

    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, content } = body;

    // Validate input
    if (!title || title.length < 10) {
      return NextResponse.json(
        { error: 'Title must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (!content || content.length < 50) {
      return NextResponse.json(
        { error: 'Content must be at least 50 characters' },
        { status: 400 }
      );
    }

    // Sanitize input (Requirements: 10.4)
    const sanitizedTitle = sanitizeInput(title);
    const sanitizedContent = sanitizeHtml(content);

    // Get user ID from database based on session email
    const userEmail = session.user.email;
    const user = await queryOne<{ id: number }>(
      'SELECT id FROM users WHERE email = $1',
      [userEmail]
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please complete your profile first.' },
        { status: 400 }
      );
    }

    // Create post - status determined by trust level (Requirements: 3.1, 3.2)
    const post = await createCommunityPost(
      { title: sanitizedTitle, content: sanitizedContent },
      user.id
    );

    const needsModeration = post.status === 'pending';

    // Create audit log
    await createAuditLog({
      userId: user.id,
      action: 'community_post.create',
      resourceType: 'community_post',
      resourceId: post.id,
      details: { title: post.title, status: post.status },
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    const response = NextResponse.json({
      data: post,
      needsModeration,
      message: needsModeration
        ? 'Your post has been submitted and is awaiting moderation'
        : 'Your post has been published successfully',
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error creating community post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
