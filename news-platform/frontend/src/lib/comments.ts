import { query, queryOne } from './db';

// ============================================
// TYPES
// ============================================
export interface Comment {
  id: number;
  article_id: number;
  user_id: number | null;
  parent_id: number | null;
  content: string;
  status: 'pending' | 'approved' | 'rejected' | 'spam';
  rejection_reason: string | null;
  moderated_by: number | null;
  moderated_at: string | null;
  ip_address: string | null;
  likes_count: number;
  replies_count: number;
  is_pinned: boolean;
  is_edited: boolean;
  flagged_count: number;
  auto_moderation_result: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  // Joined fields
  user_name?: string;
  user_avatar?: string;
  article_title?: string;
  moderator_name?: string;
}

export interface KeywordFilter {
  id: number;
  keyword: string;
  filter_type: 'banned' | 'review' | 'replace';
  replacement_text: string | null;
  is_regex: boolean;
  is_case_sensitive: boolean;
  is_active: boolean;
  match_count: number;
  created_by: number | null;
  created_at: string;
  updated_at: string;
}

export interface CommentFlag {
  id: number;
  comment_id: number;
  user_id: number | null;
  reason: 'spam' | 'offensive' | 'harassment' | 'misinformation' | 'other';
  description: string | null;
  status: 'pending' | 'reviewed' | 'dismissed';
  created_at: string;
}

export interface CommentSettings {
  enabled: boolean;
  require_login: boolean;
  require_approval: boolean;
  auto_approve_trusted_users: boolean;
  trusted_user_min_trust_level: number;
  max_comment_length: number;
  min_comment_length: number;
  allow_links: boolean;
  allow_images: boolean;
  allow_html: boolean;
  nested_replies_depth: number;
  comments_per_page: number;
  sort_order: 'newest' | 'oldest' | 'popular';
}

export interface ModerationSettings {
  auto_moderation_enabled: boolean;
  spam_detection_enabled: boolean;
  profanity_filter_enabled: boolean;
  link_moderation: 'allow' | 'review' | 'block';
  new_user_moderation: boolean;
  new_user_threshold_days: number;
  flag_threshold_for_review: number;
  flag_threshold_for_hide: number;
}

// ============================================
// COMMENTS CRUD
// ============================================
export async function getComments(
  page: number = 1,
  pageSize: number = 20,
  filters: {
    status?: string;
    article_id?: number;
    user_id?: number;
    search?: string;
  } = {}
): Promise<{ items: Comment[]; total: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = [];
  const params: (string | number)[] = [];
  let paramIndex = 1;

  if (filters.status) {
    conditions.push(`c.status = $${paramIndex++}`);
    params.push(filters.status);
  }
  if (filters.article_id) {
    conditions.push(`c.article_id = $${paramIndex++}`);
    params.push(filters.article_id);
  }
  if (filters.user_id) {
    conditions.push(`c.user_id = $${paramIndex++}`);
    params.push(filters.user_id);
  }
  if (filters.search) {
    conditions.push(`c.content ILIKE $${paramIndex++}`);
    params.push(`%${filters.search}%`);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const [items, countResult] = await Promise.all([
    query<Comment>(
      `SELECT c.*, 
        u.display_name as user_name, u.avatar as user_avatar,
        a.title as article_title,
        m.display_name as moderator_name
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      LEFT JOIN articles a ON c.article_id = a.id
      LEFT JOIN users m ON c.moderated_by = m.id
      ${whereClause}
      ORDER BY c.created_at DESC
      LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
      [...params, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM comments c ${whereClause}`,
      params
    ),
  ]);

  return {
    items,
    total: parseInt(countResult?.count || '0'),
  };
}

export async function getCommentById(id: number): Promise<Comment | null> {
  return queryOne<Comment>(
    `SELECT c.*, 
      u.display_name as user_name, u.avatar as user_avatar,
      a.title as article_title,
      m.display_name as moderator_name
    FROM comments c
    LEFT JOIN users u ON c.user_id = u.id
    LEFT JOIN articles a ON c.article_id = a.id
    LEFT JOIN users m ON c.moderated_by = m.id
    WHERE c.id = $1`,
    [id]
  );
}

export async function updateCommentStatus(
  id: number,
  status: string,
  moderatorId: number,
  rejectionReason?: string
): Promise<Comment | null> {
  return queryOne<Comment>(
    `UPDATE comments 
    SET status = $1, moderated_by = $2, moderated_at = NOW(), rejection_reason = $3
    WHERE id = $4
    RETURNING *`,
    [status, moderatorId, rejectionReason || null, id]
  );
}

export async function bulkUpdateCommentStatus(
  ids: number[],
  status: string,
  moderatorId: number
): Promise<number> {
  const result = await query(
    `UPDATE comments 
    SET status = $1, moderated_by = $2, moderated_at = NOW()
    WHERE id = ANY($3)`,
    [status, moderatorId, ids]
  );
  return result.length;
}

export async function deleteComment(id: number): Promise<boolean> {
  const result = await query('DELETE FROM comments WHERE id = $1 RETURNING id', [id]);
  return result.length > 0;
}

// ============================================
// KEYWORD FILTERS CRUD
// ============================================
export async function getKeywordFilters(
  page: number = 1,
  pageSize: number = 50,
  filters: { filter_type?: string; is_active?: boolean; search?: string } = {}
): Promise<{ items: KeywordFilter[]; total: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = [];
  const params: (string | number | boolean)[] = [];
  let paramIndex = 1;

  if (filters.filter_type) {
    conditions.push(`filter_type = $${paramIndex++}`);
    params.push(filters.filter_type);
  }
  if (filters.is_active !== undefined) {
    conditions.push(`is_active = $${paramIndex++}`);
    params.push(filters.is_active);
  }
  if (filters.search) {
    conditions.push(`keyword ILIKE $${paramIndex++}`);
    params.push(`%${filters.search}%`);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const [items, countResult] = await Promise.all([
    query<KeywordFilter>(
      `SELECT * FROM keyword_filters ${whereClause}
      ORDER BY filter_type, keyword
      LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
      [...params, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM keyword_filters ${whereClause}`,
      params
    ),
  ]);

  return {
    items,
    total: parseInt(countResult?.count || '0'),
  };
}

export async function getKeywordFilterById(id: number): Promise<KeywordFilter | null> {
  return queryOne<KeywordFilter>('SELECT * FROM keyword_filters WHERE id = $1', [id]);
}

export async function createKeywordFilter(
  data: {
    keyword: string;
    filter_type: string;
    replacement_text?: string;
    is_regex?: boolean;
    is_case_sensitive?: boolean;
  },
  userId: number
): Promise<KeywordFilter | null> {
  return queryOne<KeywordFilter>(
    `INSERT INTO keyword_filters (keyword, filter_type, replacement_text, is_regex, is_case_sensitive, created_by)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [
      data.keyword,
      data.filter_type,
      data.replacement_text || null,
      data.is_regex || false,
      data.is_case_sensitive || false,
      userId,
    ]
  );
}

export async function updateKeywordFilter(
  id: number,
  data: Partial<KeywordFilter>,
  userId: number
): Promise<KeywordFilter | null> {
  const updates: string[] = [];
  const params: (string | number | boolean | null)[] = [];
  let paramIndex = 1;

  if (data.keyword !== undefined) {
    updates.push(`keyword = $${paramIndex++}`);
    params.push(data.keyword);
  }
  if (data.filter_type !== undefined) {
    updates.push(`filter_type = $${paramIndex++}`);
    params.push(data.filter_type);
  }
  if (data.replacement_text !== undefined) {
    updates.push(`replacement_text = $${paramIndex++}`);
    params.push(data.replacement_text);
  }
  if (data.is_regex !== undefined) {
    updates.push(`is_regex = $${paramIndex++}`);
    params.push(data.is_regex);
  }
  if (data.is_case_sensitive !== undefined) {
    updates.push(`is_case_sensitive = $${paramIndex++}`);
    params.push(data.is_case_sensitive);
  }
  if (data.is_active !== undefined) {
    updates.push(`is_active = $${paramIndex++}`);
    params.push(data.is_active);
  }

  updates.push(`updated_by = $${paramIndex++}`);
  params.push(userId);
  params.push(id);

  return queryOne<KeywordFilter>(
    `UPDATE keyword_filters SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
    params
  );
}

export async function deleteKeywordFilter(id: number): Promise<boolean> {
  const result = await query('DELETE FROM keyword_filters WHERE id = $1 RETURNING id', [id]);
  return result.length > 0;
}

export async function bulkDeleteKeywordFilters(ids: number[]): Promise<number> {
  const result = await query('DELETE FROM keyword_filters WHERE id = ANY($1) RETURNING id', [ids]);
  return result.length;
}

// ============================================
// COMMENT MODERATION
// ============================================
export async function checkContentAgainstFilters(content: string): Promise<{
  hasBannedKeywords: boolean;
  needsReview: boolean;
  replacements: { keyword: string; replacement: string }[];
  matchedFilters: { id: number; keyword: string; type: string }[];
}> {
  const filters = await query<KeywordFilter>(
    'SELECT * FROM keyword_filters WHERE is_active = TRUE'
  );

  const result = {
    hasBannedKeywords: false,
    needsReview: false,
    replacements: [] as { keyword: string; replacement: string }[],
    matchedFilters: [] as { id: number; keyword: string; type: string }[],
  };

  for (const filter of filters) {
    let matches = false;

    if (filter.is_regex) {
      try {
        const regex = new RegExp(filter.keyword, filter.is_case_sensitive ? 'g' : 'gi');
        matches = regex.test(content);
      } catch {
        // Invalid regex, skip
      }
    } else {
      if (filter.is_case_sensitive) {
        matches = content.includes(filter.keyword);
      } else {
        matches = content.toLowerCase().includes(filter.keyword.toLowerCase());
      }
    }

    if (matches) {
      result.matchedFilters.push({
        id: filter.id,
        keyword: filter.keyword,
        type: filter.filter_type,
      });

      // Update match count
      await query('UPDATE keyword_filters SET match_count = match_count + 1 WHERE id = $1', [
        filter.id,
      ]);

      switch (filter.filter_type) {
        case 'banned':
          result.hasBannedKeywords = true;
          break;
        case 'review':
          result.needsReview = true;
          break;
        case 'replace':
          if (filter.replacement_text) {
            result.replacements.push({
              keyword: filter.keyword,
              replacement: filter.replacement_text,
            });
          }
          break;
      }
    }
  }

  return result;
}

// ============================================
// COMMENT SETTINGS
// ============================================
export async function getCommentSettings(): Promise<{
  general: CommentSettings;
  moderation: ModerationSettings;
}> {
  const settings = await query<{ key: string; value: Record<string, unknown> }>(
    "SELECT key, value FROM comment_settings WHERE key IN ('general', 'moderation')"
  );

  const result = {
    general: {} as CommentSettings,
    moderation: {} as ModerationSettings,
  };

  for (const setting of settings) {
    if (setting.key === 'general') {
      result.general = setting.value as unknown as CommentSettings;
    } else if (setting.key === 'moderation') {
      result.moderation = setting.value as unknown as ModerationSettings;
    }
  }

  return result;
}

export async function updateCommentSettings(
  key: 'general' | 'moderation' | 'notifications',
  value: Record<string, unknown>,
  userId: number
): Promise<boolean> {
  const result = await query(
    `UPDATE comment_settings SET value = $1, updated_by = $2 WHERE key = $3 RETURNING id`,
    [JSON.stringify(value), userId, key]
  );
  return result.length > 0;
}

// ============================================
// STATISTICS
// ============================================
export async function getCommentStats(): Promise<{
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  spam: number;
  today: number;
  flagged: number;
}> {
  const result = await queryOne<{
    total: string;
    pending: string;
    approved: string;
    rejected: string;
    spam: string;
    today: string;
    flagged: string;
  }>(`
    SELECT 
      COUNT(*) as total,
      COUNT(*) FILTER (WHERE status = 'pending') as pending,
      COUNT(*) FILTER (WHERE status = 'approved') as approved,
      COUNT(*) FILTER (WHERE status = 'rejected') as rejected,
      COUNT(*) FILTER (WHERE status = 'spam') as spam,
      COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today,
      COUNT(*) FILTER (WHERE flagged_count > 0) as flagged
    FROM comments
  `);

  return {
    total: parseInt(result?.total || '0'),
    pending: parseInt(result?.pending || '0'),
    approved: parseInt(result?.approved || '0'),
    rejected: parseInt(result?.rejected || '0'),
    spam: parseInt(result?.spam || '0'),
    today: parseInt(result?.today || '0'),
    flagged: parseInt(result?.flagged || '0'),
  };
}

export async function getKeywordFilterStats(): Promise<{
  total: number;
  banned: number;
  review: number;
  replace: number;
  active: number;
}> {
  const result = await queryOne<{
    total: string;
    banned: string;
    review: string;
    replace: string;
    active: string;
  }>(`
    SELECT 
      COUNT(*) as total,
      COUNT(*) FILTER (WHERE filter_type = 'banned') as banned,
      COUNT(*) FILTER (WHERE filter_type = 'review') as review,
      COUNT(*) FILTER (WHERE filter_type = 'replace') as replace,
      COUNT(*) FILTER (WHERE is_active = TRUE) as active
    FROM keyword_filters
  `);

  return {
    total: parseInt(result?.total || '0'),
    banned: parseInt(result?.banned || '0'),
    review: parseInt(result?.review || '0'),
    replace: parseInt(result?.replace || '0'),
    active: parseInt(result?.active || '0'),
  };
}
