import { query, execute } from './db';

export interface Notification {
  id: number;
  user_id: number;
  type: string;
  title: string;
  message: string;
  link: string | null;
  is_read: boolean;
  created_at: string;
}

/**
 * Get notifications for a user
 */
export async function getUserNotifications(
  userId: number,
  limit = 20,
  unreadOnly = false
): Promise<Notification[]> {
  const whereClause = unreadOnly ? 'AND is_read = false' : '';
  
  return query<Notification>(`
    SELECT id, user_id, type, title, message, link, is_read, created_at
    FROM notifications
    WHERE user_id = $1 ${whereClause}
    ORDER BY created_at DESC
    LIMIT $2
  `, [userId, limit]);
}

/**
 * Get unread notification count
 */
export async function getUnreadCount(userId: number): Promise<number> {
  const result = await query<{ count: string }>(`
    SELECT COUNT(*) as count FROM notifications
    WHERE user_id = $1 AND is_read = false
  `, [userId]);
  
  return parseInt(result[0]?.count || '0');
}

/**
 * Mark notification as read
 */
export async function markAsRead(notificationId: number, userId: number): Promise<boolean> {
  const count = await execute(`
    UPDATE notifications SET is_read = true
    WHERE id = $1 AND user_id = $2
  `, [notificationId, userId]);
  
  return count > 0;
}

/**
 * Mark all notifications as read
 */
export async function markAllAsRead(userId: number): Promise<number> {
  return execute(`
    UPDATE notifications SET is_read = true
    WHERE user_id = $1 AND is_read = false
  `, [userId]);
}

/**
 * Create a notification
 */
export async function createNotification(
  userId: number,
  type: string,
  title: string,
  message: string,
  link?: string
): Promise<number> {
  const result = await query<{ id: number }>(`
    INSERT INTO notifications (user_id, type, title, message, link)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `, [userId, type, title, message, link || null]);
  
  return result[0]?.id || 0;
}

/**
 * Send notification to multiple users
 */
export async function sendBulkNotification(
  userIds: number[],
  type: string,
  title: string,
  message: string,
  link?: string
): Promise<number> {
  if (userIds.length === 0) return 0;
  
  const values = userIds.map((_, i) => 
    `($${i * 5 + 1}, $${i * 5 + 2}, $${i * 5 + 3}, $${i * 5 + 4}, $${i * 5 + 5})`
  ).join(', ');
  
  const params = userIds.flatMap(userId => [userId, type, title, message, link || null]);
  
  return execute(`
    INSERT INTO notifications (user_id, type, title, message, link)
    VALUES ${values}
  `, params);
}

/**
 * Notification types
 */
export const NotificationTypes = {
  POST_APPROVED: 'post_approved',
  POST_REJECTED: 'post_rejected',
  NEW_COMMENT: 'new_comment',
  MENTION: 'mention',
  TRUST_LEVEL_UP: 'trust_level_up',
  SYSTEM: 'system',
} as const;

/**
 * Send post approval notification
 */
export async function notifyPostApproved(userId: number, postTitle: string, postSlug: string) {
  return createNotification(
    userId,
    NotificationTypes.POST_APPROVED,
    'Bài viết đã được duyệt',
    `Bài viết "${postTitle}" của bạn đã được phê duyệt và xuất bản.`,
    `/community/${postSlug}`
  );
}

/**
 * Send post rejection notification
 */
export async function notifyPostRejected(userId: number, postTitle: string, reason?: string) {
  return createNotification(
    userId,
    NotificationTypes.POST_REJECTED,
    'Bài viết bị từ chối',
    `Bài viết "${postTitle}" của bạn đã bị từ chối.${reason ? ` Lý do: ${reason}` : ''}`,
  );
}

/**
 * Send trust level up notification
 */
export async function notifyTrustLevelUp(userId: number, newLevel: number) {
  const levelNames: Record<number, string> = {
    1: 'Cơ bản',
    2: 'Thành viên',
    3: 'Thường xuyên',
    4: 'Lãnh đạo',
  };
  
  return createNotification(
    userId,
    NotificationTypes.TRUST_LEVEL_UP,
    'Chúc mừng! Bạn đã lên cấp',
    `Bạn đã đạt cấp độ ${newLevel} - ${levelNames[newLevel]}. Tiếp tục đóng góp để mở khóa thêm quyền lợi!`,
    '/community/trust-levels'
  );
}
