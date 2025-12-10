import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { checkContentAgainstFilters, getCommentSettings } from '@/lib/comments';
import { addSecurityHeaders } from '@/lib/security';

interface Comment {
  id: number;
  article_id: number;
  user_id: number | null;
  parent_id: number | null;
  content: string;
  status: string;
  likes_count: number;
  replies_count: number;
  is_pinned: boolean;
  created_at: string;
  user_name?: string;
  user_avatar?: string;
}

/**
 * GET /api/comments - Lấy danh sách comments của bài viết
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const article_id = searchParams.get('article_id');
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '20'), 50);
    const sort = searchParams.get('sort') || 'newest';

    if (!article_id) {
      return NextResponse.json({ error: 'article_id is required' }, { status: 400 });
    }

    const offset = (page - 1) * pageSize;
    const orderBy = sort === 'oldest' ? 'ASC' : sort === 'popular' ? 'DESC' : 'DESC';
    const orderColumn = sort === 'popular' ? 'likes_count' : 'created_at';

    // Chỉ lấy comments đã được duyệt
    const [comments, countResult] = await Promise.all([
      query<Comment>(
        `SELECT c.id, c.article_id, c.user_id, c.parent_id, c.content, c.status,
          c.likes_count, c.replies_count, c.is_pinned, c.created_at,
          u.display_name as user_name, u.avatar as user_avatar
        FROM comments c
        LEFT JOIN users u ON c.user_id = u.id
        WHERE c.article_id = $1 AND c.status = 'approved' AND c.parent_id IS NULL
        ORDER BY c.is_pinned DESC, c.${orderColumn} ${orderBy}
        LIMIT $2 OFFSET $3`,
        [parseInt(article_id), pageSize, offset]
      ),
      queryOne<{ count: string }>(
        `SELECT COUNT(*) as count FROM comments 
        WHERE article_id = $1 AND status = 'approved' AND parent_id IS NULL`,
        [parseInt(article_id)]
      ),
    ]);

    // Lấy replies cho mỗi comment
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        if (comment.replies_count > 0) {
          const replies = await query<Comment>(
            `SELECT c.id, c.article_id, c.user_id, c.parent_id, c.content, c.status,
              c.likes_count, c.replies_count, c.is_pinned, c.created_at,
              u.display_name as user_name, u.avatar as user_avatar
            FROM comments c
            LEFT JOIN users u ON c.user_id = u.id
            WHERE c.parent_id = $1 AND c.status = 'approved'
            ORDER BY c.created_at ASC
            LIMIT 10`,
            [comment.id]
          );
          return { ...comment, replies };
        }
        return { ...comment, replies: [] };
      })
    );

    const response = NextResponse.json({
      data: commentsWithReplies,
      meta: {
        page,
        pageSize,
        total: parseInt(countResult?.count || '0'),
        totalPages: Math.ceil(parseInt(countResult?.count || '0') / pageSize),
      },
    });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/comments - Đăng comment mới
 */
export async function POST(req: NextRequest) {
  try {
    const settings = await getCommentSettings();

    // Kiểm tra xem comment có được bật không
    if (!settings.general.enabled) {
      return NextResponse.json({ error: 'Comments are disabled' }, { status: 403 });
    }

    // Kiểm tra đăng nhập nếu yêu cầu
    const session = await getServerSession(authOptions);
    if (settings.general.require_login && !session) {
      return NextResponse.json({ error: 'Login required' }, { status: 401 });
    }

    const body = await req.json();
    const { article_id, parent_id, content } = body;

    if (!article_id || !content) {
      return NextResponse.json({ error: 'article_id and content are required' }, { status: 400 });
    }

    // Kiểm tra độ dài
    if (content.length < settings.general.min_comment_length) {
      return NextResponse.json({ 
        error: `Comment must be at least ${settings.general.min_comment_length} characters` 
      }, { status: 400 });
    }

    if (content.length > settings.general.max_comment_length) {
      return NextResponse.json({ 
        error: `Comment must not exceed ${settings.general.max_comment_length} characters` 
      }, { status: 400 });
    }

    // Kiểm tra từ khóa
    const filterResult = await checkContentAgainstFilters(content);

    if (filterResult.hasBannedKeywords) {
      return NextResponse.json({ 
        error: 'Your comment contains prohibited content',
        matchedFilters: filterResult.matchedFilters.filter(f => f.type === 'banned'),
      }, { status: 400 });
    }

    // Xác định trạng thái comment
    let status = 'approved';
    
    if (settings.general.require_approval) {
      status = 'pending';
    } else if (filterResult.needsReview) {
      status = 'pending';
    } else if (settings.moderation.new_user_moderation && session?.user?.id) {
      // Kiểm tra người dùng mới
      const user = await queryOne<{ created_at: string }>(
        'SELECT created_at FROM users WHERE id = $1',
        [parseInt(session.user.id)]
      );
      if (user) {
        const daysSinceCreation = Math.floor(
          (Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysSinceCreation < settings.moderation.new_user_threshold_days) {
          status = 'pending';
        }
      }
    }

    // Áp dụng replacements nếu có
    let finalContent = content;
    for (const replacement of filterResult.replacements) {
      const regex = new RegExp(replacement.keyword, 'gi');
      finalContent = finalContent.replace(regex, replacement.replacement);
    }

    // Lấy IP và user agent
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || null;
    const userAgent = req.headers.get('user-agent') || null;

    // Tạo comment
    const comment = await queryOne<Comment>(
      `INSERT INTO comments (article_id, user_id, parent_id, content, status, ip_address, user_agent, auto_moderation_result)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [
        article_id,
        session?.user?.id ? parseInt(session.user.id) : null,
        parent_id || null,
        finalContent,
        status,
        ip,
        userAgent,
        JSON.stringify({
          needsReview: filterResult.needsReview,
          matchedFilters: filterResult.matchedFilters,
          replacementsApplied: filterResult.replacements.length > 0,
        }),
      ]
    );

    const response = NextResponse.json({
      data: comment,
      message: status === 'pending' 
        ? 'Your comment is pending moderation' 
        : 'Comment posted successfully',
    }, { status: 201 });

    return addSecurityHeaders(response);
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
