/**
 * Moderation Queue Management Module
 * Requirements: 7.1, 7.2, 7.3, 7.4, 10.2
 */

import { query, queryOne, transaction } from './db';
import { PoolClient } from 'pg';

// Types
export interface ModerationQueueItem {
  id: number;
  resource_type: 'community_post' | 'article' | 'comment' | 'user';
  resource_id: number;
  reason: string;
  reported_by: number | null;
  status: 'pending' | 'assigned' | 'resolved' | 'escalated';
  assigned_to: number | null;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  resolution: string | null;
  resolved_by: number | null;
  assigned_at: string | null;
  resolved_at: string | null;
  escalated_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuditLogEntry {
  id: number;
  user_id: number | null;
  action: string;
  resource_type: string;
  resource_id: number | null;
  details: Record<string, any>;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

// ============================================
// MODERATION QUEUE OPERATIONS
// Requirements: 7.1, 7.2, 7.4
// ============================================

/**
 * Add item to moderation queue
 * Requirements: 7.1 - Add with priority and timestamp
 */
export async function addToModerationQueue(
  resourceType: ModerationQueueItem['resource_type'],
  resourceId: number,
  reason: string,
  reportedBy?: number,
  priority: ModerationQueueItem['priority'] = 'normal'
): Promise<ModerationQueueItem> {
  const result = await query<ModerationQueueItem>(
    `INSERT INTO moderation_queue (resource_type, resource_id, reason, reported_by, priority, status)
     VALUES ($1, $2, $3, $4, $5, 'pending')
     RETURNING *`,
    [resourceType, resourceId, reason, reportedBy || null, priority]
  );
  return result[0];
}

/**
 * Get moderation queue sorted by priority then created_at
 * Requirements: 7.2 - Display items sorted by priority and creation time
 */
export async function getModerationQueue(
  page = 1,
  pageSize = 20,
  filters?: {
    status?: string;
    resourceType?: string;
    assignedTo?: number;
    priority?: string;
  }
): Promise<{ items: ModerationQueueItem[]; total: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (filters?.status) {
    conditions.push(`mq.status = $${paramIndex++}`);
    values.push(filters.status);
  }

  if (filters?.resourceType) {
    conditions.push(`mq.resource_type = $${paramIndex++}`);
    values.push(filters.resourceType);
  }

  if (filters?.assignedTo) {
    conditions.push(`mq.assigned_to = $${paramIndex++}`);
    values.push(filters.assignedTo);
  }

  if (filters?.priority) {
    conditions.push(`mq.priority = $${paramIndex++}`);
    values.push(filters.priority);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const [items, countResult] = await Promise.all([
    query<ModerationQueueItem>(
      `SELECT mq.*, 
              u_reporter.display_name as reporter_name,
              u_assigned.display_name as assigned_name
       FROM moderation_queue mq
       LEFT JOIN users u_reporter ON mq.reported_by = u_reporter.id
       LEFT JOIN users u_assigned ON mq.assigned_to = u_assigned.id
       ${whereClause}
       ORDER BY 
         CASE mq.priority 
           WHEN 'urgent' THEN 1 
           WHEN 'high' THEN 2 
           WHEN 'normal' THEN 3 
           WHEN 'low' THEN 4 
         END ASC,
         mq.created_at ASC
       LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
      [...values, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM moderation_queue mq ${whereClause}`,
      values
    ),
  ]);

  return {
    items,
    total: parseInt(countResult?.count || '0'),
  };
}

/**
 * Get pending items in queue
 */
export async function getPendingModerationItems(page = 1, pageSize = 20) {
  return getModerationQueue(page, pageSize, { status: 'pending' });
}

/**
 * Assign queue item to moderator
 * Requirements: 7.4 - Mark as assigned and prevent duplicate processing
 */
export async function assignToModerator(
  queueItemId: number,
  moderatorId: number
): Promise<ModerationQueueItem> {
  return transaction(async (client: PoolClient) => {
    // Lock the row to prevent race conditions
    const result = await client.query<ModerationQueueItem>(
      `SELECT * FROM moderation_queue WHERE id = $1 FOR UPDATE`,
      [queueItemId]
    );

    if (result.rows.length === 0) {
      throw new Error('Queue item not found');
    }

    const item = result.rows[0];

    // Check if already assigned to someone else
    if (item.status === 'assigned' && item.assigned_to !== moderatorId) {
      throw new Error('Item is already assigned to another moderator');
    }

    if (item.status === 'resolved') {
      throw new Error('Item is already resolved');
    }

    // Assign to moderator
    const updateResult = await client.query<ModerationQueueItem>(
      `UPDATE moderation_queue 
       SET status = 'assigned', 
           assigned_to = $1, 
           assigned_at = CURRENT_TIMESTAMP
       WHERE id = $2
       RETURNING *`,
      [moderatorId, queueItemId]
    );

    // Create audit log
    await createAuditLogInTransaction(client, {
      userId: moderatorId,
      action: 'moderation.assign',
      resourceType: 'moderation_queue',
      resourceId: queueItemId,
      details: { assigned_to: moderatorId },
    });

    return updateResult.rows[0];
  });
}

/**
 * Resolve queue item
 * Requirements: 7.3 - Log action with moderator ID and timestamp
 */
export async function resolveQueueItem(
  queueItemId: number,
  moderatorId: number,
  resolution: string
): Promise<ModerationQueueItem> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<ModerationQueueItem>(
      `UPDATE moderation_queue 
       SET status = 'resolved', 
           resolved_by = $1, 
           resolution = $2,
           resolved_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
      [moderatorId, resolution, queueItemId]
    );

    if (result.rows.length === 0) {
      throw new Error('Queue item not found');
    }

    // Create audit log
    await createAuditLogInTransaction(client, {
      userId: moderatorId,
      action: 'moderation.resolve',
      resourceType: 'moderation_queue',
      resourceId: queueItemId,
      details: { resolution },
    });

    return result.rows[0];
  });
}

/**
 * Escalate queue item
 */
export async function escalateQueueItem(
  queueItemId: number,
  moderatorId: number,
  reason: string
): Promise<ModerationQueueItem> {
  return transaction(async (client: PoolClient) => {
    const result = await client.query<ModerationQueueItem>(
      `UPDATE moderation_queue 
       SET status = 'escalated', 
           priority = 'urgent',
           escalated_at = CURRENT_TIMESTAMP
       WHERE id = $1
       RETURNING *`,
      [queueItemId]
    );

    if (result.rows.length === 0) {
      throw new Error('Queue item not found');
    }

    // Create audit log
    await createAuditLogInTransaction(client, {
      userId: moderatorId,
      action: 'moderation.escalate',
      resourceType: 'moderation_queue',
      resourceId: queueItemId,
      details: { reason },
    });

    return result.rows[0];
  });
}

/**
 * Unassign queue item
 */
export async function unassignQueueItem(queueItemId: number): Promise<ModerationQueueItem> {
  const result = await query<ModerationQueueItem>(
    `UPDATE moderation_queue 
     SET status = 'pending', 
         assigned_to = NULL, 
         assigned_at = NULL
     WHERE id = $1
     RETURNING *`,
    [queueItemId]
  );

  if (result.length === 0) {
    throw new Error('Queue item not found');
  }

  return result[0];
}

// ============================================
// AUDIT LOGGING
// Requirements: 10.2 - Immutable audit logs
// ============================================

interface AuditLogInput {
  userId?: number;
  action: string;
  resourceType: string;
  resourceId?: number;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Create audit log entry
 * Requirements: 10.2 - Log all sensitive actions
 */
export async function createAuditLog(input: AuditLogInput): Promise<AuditLogEntry> {
  const result = await query<AuditLogEntry>(
    `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [
      input.userId || null,
      input.action,
      input.resourceType,
      input.resourceId || null,
      JSON.stringify(input.details || {}),
      input.ipAddress || null,
      input.userAgent || null,
    ]
  );
  return result[0];
}

/**
 * Create audit log within transaction
 */
async function createAuditLogInTransaction(
  client: PoolClient,
  input: AuditLogInput
): Promise<void> {
  await client.query(
    `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      input.userId || null,
      input.action,
      input.resourceType,
      input.resourceId || null,
      JSON.stringify(input.details || {}),
      input.ipAddress || null,
      input.userAgent || null,
    ]
  );
}

/**
 * Get audit logs with filters
 */
export async function getAuditLogs(
  page = 1,
  pageSize = 50,
  filters?: {
    userId?: number;
    action?: string;
    resourceType?: string;
    resourceId?: number;
    startDate?: Date;
    endDate?: Date;
  }
): Promise<{ logs: AuditLogEntry[]; total: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (filters?.userId) {
    conditions.push(`al.user_id = $${paramIndex++}`);
    values.push(filters.userId);
  }

  if (filters?.action) {
    conditions.push(`al.action = $${paramIndex++}`);
    values.push(filters.action);
  }

  if (filters?.resourceType) {
    conditions.push(`al.resource_type = $${paramIndex++}`);
    values.push(filters.resourceType);
  }

  if (filters?.resourceId) {
    conditions.push(`al.resource_id = $${paramIndex++}`);
    values.push(filters.resourceId);
  }

  if (filters?.startDate) {
    conditions.push(`al.created_at >= $${paramIndex++}`);
    values.push(filters.startDate);
  }

  if (filters?.endDate) {
    conditions.push(`al.created_at <= $${paramIndex++}`);
    values.push(filters.endDate);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const [logs, countResult] = await Promise.all([
    query<AuditLogEntry>(
      `SELECT al.*, u.display_name as user_name
       FROM audit_logs al
       LEFT JOIN users u ON al.user_id = u.id
       ${whereClause}
       ORDER BY al.created_at DESC
       LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
      [...values, pageSize, offset]
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM audit_logs al ${whereClause}`,
      values
    ),
  ]);

  return {
    logs,
    total: parseInt(countResult?.count || '0'),
  };
}

/**
 * Get audit logs for a specific resource
 */
export async function getResourceAuditLogs(
  resourceType: string,
  resourceId: number
): Promise<AuditLogEntry[]> {
  return query<AuditLogEntry>(
    `SELECT al.*, u.display_name as user_name
     FROM audit_logs al
     LEFT JOIN users u ON al.user_id = u.id
     WHERE al.resource_type = $1 AND al.resource_id = $2
     ORDER BY al.created_at DESC`,
    [resourceType, resourceId]
  );
}

// ============================================
// QUEUE STATISTICS
// ============================================
export async function getQueueStats(): Promise<{
  pending: number;
  assigned: number;
  resolved_today: number;
  escalated: number;
}> {
  const result = await queryOne<{
    pending: string;
    assigned: string;
    resolved_today: string;
    escalated: string;
  }>(`
    SELECT 
      COUNT(*) FILTER (WHERE status = 'pending') as pending,
      COUNT(*) FILTER (WHERE status = 'assigned') as assigned,
      COUNT(*) FILTER (WHERE status = 'resolved' AND resolved_at >= CURRENT_DATE) as resolved_today,
      COUNT(*) FILTER (WHERE status = 'escalated') as escalated
    FROM moderation_queue
  `);

  return {
    pending: parseInt(result?.pending || '0'),
    assigned: parseInt(result?.assigned || '0'),
    resolved_today: parseInt(result?.resolved_today || '0'),
    escalated: parseInt(result?.escalated || '0'),
  };
}
