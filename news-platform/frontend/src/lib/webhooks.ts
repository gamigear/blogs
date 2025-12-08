/**
 * Webhook System Module
 * Requirements: 8.1, 8.3, 8.4, 8.5
 */

import crypto from 'crypto';
import { query, queryOne, transaction } from './db';
import { PoolClient } from 'pg';

// ============================================
// WEBHOOK SIGNATURE VALIDATION
// Requirements: 8.5
// ============================================

const WEBHOOK_SECRET = process.env.DISCOURSE_WEBHOOK_SECRET || '';

/**
 * Validate webhook signature using HMAC-SHA256
 * Requirements: 8.5 - Validate HMAC signature on incoming webhooks
 */
export function validateWebhookSignature(
  payload: string,
  signature: string,
  secret: string = WEBHOOK_SECRET
): boolean {
  if (!signature || !secret) {
    return false;
  }

  // Discourse uses sha256 HMAC
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(`sha256=${expectedSignature}`)
    );
  } catch {
    // If signatures have different lengths, timingSafeEqual throws
    return false;
  }
}

// ============================================
// WEBHOOK RETRY LOGIC
// Requirements: 8.3, 8.4
// ============================================

interface WebhookJob {
  id: number;
  webhook_type: string;
  payload: Record<string, any>;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'dlq';
  attempts: number;
  max_attempts: number;
  next_retry_at: string | null;
  error_message: string | null;
  created_at: string;
  updated_at: string;
}

const MAX_RETRY_ATTEMPTS = 5;
const INITIAL_RETRY_DELAY_MS = 1000; // 1 second

/**
 * Calculate exponential backoff delay
 * Requirements: 8.3 - Exponential backoff up to 5 attempts
 */
export function calculateBackoffDelay(attempt: number): number {
  // Exponential backoff: 1s, 2s, 4s, 8s, 16s
  return INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt - 1);
}

/**
 * Queue a webhook for processing
 */
export async function queueWebhook(
  webhookType: string,
  payload: Record<string, any>
): Promise<WebhookJob> {
  const result = await query<WebhookJob>(
    `INSERT INTO webhook_jobs (webhook_type, payload, status, attempts, max_attempts)
     VALUES ($1, $2, 'pending', 0, $3)
     RETURNING *`,
    [webhookType, JSON.stringify(payload), MAX_RETRY_ATTEMPTS]
  );
  return result[0];
}

/**
 * Process a webhook job with retry logic
 * Requirements: 8.3, 8.4
 */
export async function processWebhookJob(
  jobId: number,
  processor: (payload: Record<string, any>) => Promise<void>
): Promise<{ success: boolean; error?: string }> {
  return transaction(async (client: PoolClient) => {
    // Lock the job for processing
    const jobResult = await client.query<WebhookJob>(
      `SELECT * FROM webhook_jobs WHERE id = $1 FOR UPDATE`,
      [jobId]
    );

    if (jobResult.rows.length === 0) {
      return { success: false, error: 'Job not found' };
    }

    const job = jobResult.rows[0];

    if (job.status === 'completed' || job.status === 'dlq') {
      return { success: false, error: `Job already ${job.status}` };
    }

    // Update status to processing
    await client.query(
      `UPDATE webhook_jobs SET status = 'processing', attempts = attempts + 1 WHERE id = $1`,
      [jobId]
    );

    try {
      // Process the webhook
      await processor(job.payload);

      // Mark as completed
      await client.query(
        `UPDATE webhook_jobs SET status = 'completed', updated_at = CURRENT_TIMESTAMP WHERE id = $1`,
        [jobId]
      );

      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const newAttempts = job.attempts + 1;

      if (newAttempts >= job.max_attempts) {
        // Move to DLQ after all retries fail
        // Requirements: 8.4 - Move to DLQ after all retries fail
        await client.query(
          `UPDATE webhook_jobs 
           SET status = 'dlq', error_message = $1, updated_at = CURRENT_TIMESTAMP 
           WHERE id = $2`,
          [errorMessage, jobId]
        );
        return { success: false, error: `Moved to DLQ: ${errorMessage}` };
      }

      // Schedule retry with exponential backoff
      const retryDelay = calculateBackoffDelay(newAttempts);
      const nextRetryAt = new Date(Date.now() + retryDelay);

      await client.query(
        `UPDATE webhook_jobs 
         SET status = 'pending', error_message = $1, next_retry_at = $2, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $3`,
        [errorMessage, nextRetryAt, jobId]
      );

      return { success: false, error: `Retry scheduled: ${errorMessage}` };
    }
  });
}

/**
 * Get pending webhook jobs ready for processing
 */
export async function getPendingWebhookJobs(limit = 10): Promise<WebhookJob[]> {
  return query<WebhookJob>(
    `SELECT * FROM webhook_jobs 
     WHERE status = 'pending' 
       AND (next_retry_at IS NULL OR next_retry_at <= CURRENT_TIMESTAMP)
     ORDER BY created_at ASC
     LIMIT $1`,
    [limit]
  );
}

/**
 * Get jobs in dead letter queue
 */
export async function getDLQJobs(limit = 50): Promise<WebhookJob[]> {
  return query<WebhookJob>(
    `SELECT * FROM webhook_jobs WHERE status = 'dlq' ORDER BY updated_at DESC LIMIT $1`,
    [limit]
  );
}

/**
 * Retry a DLQ job
 */
export async function retryDLQJob(jobId: number): Promise<void> {
  await query(
    `UPDATE webhook_jobs 
     SET status = 'pending', attempts = 0, next_retry_at = NULL, error_message = NULL 
     WHERE id = $1 AND status = 'dlq'`,
    [jobId]
  );
}

// ============================================
// DISCOURSE WEBHOOK HANDLERS
// Requirements: 8.1
// ============================================

interface DiscourseTopicPayload {
  topic: {
    id: number;
    title: string;
    slug: string;
    category_id: number;
    user_id: number;
    created_at: string;
    posts_count: number;
    like_count: number;
    visible: boolean;
    closed: boolean;
    archived: boolean;
  };
}

/**
 * Handle Discourse topic_approved webhook
 * Requirements: 8.1 - Process topic_approved events, create CommunityPost
 */
export async function handleDiscourseTopicApproved(
  payload: DiscourseTopicPayload
): Promise<void> {
  const { topic } = payload;

  // Check if community post already exists for this topic
  const existing = await queryOne(
    `SELECT id FROM community_posts WHERE discourse_topic_id = $1`,
    [topic.id]
  );

  if (existing) {
    console.log(`Community post already exists for topic ${topic.id}`);
    return;
  }

  // Create community post from approved Discourse topic
  await query(
    `INSERT INTO community_posts (
      title, content, excerpt, status, discourse_topic_id, created_at
    ) VALUES ($1, $2, $3, 'approved', $4, $5)`,
    [
      topic.title,
      `Xem thảo luận đầy đủ tại Discourse: /t/${topic.slug}/${topic.id}`,
      topic.title.substring(0, 200),
      topic.id,
      topic.created_at,
    ]
  );

  console.log(`Created community post from Discourse topic ${topic.id}`);
}

/**
 * Handle Discourse topic_created webhook
 */
export async function handleDiscourseTopicCreated(
  payload: DiscourseTopicPayload
): Promise<void> {
  // Log topic creation for monitoring
  console.log(`Discourse topic created: ${payload.topic.id} - ${payload.topic.title}`);
}

/**
 * Route webhook to appropriate handler
 */
export async function routeDiscourseWebhook(
  eventType: string,
  payload: Record<string, any>
): Promise<void> {
  switch (eventType) {
    case 'topic_approved':
      await handleDiscourseTopicApproved(payload as DiscourseTopicPayload);
      break;
    case 'topic_created':
      await handleDiscourseTopicCreated(payload as DiscourseTopicPayload);
      break;
    default:
      console.log(`Unhandled Discourse webhook event: ${eventType}`);
  }
}
