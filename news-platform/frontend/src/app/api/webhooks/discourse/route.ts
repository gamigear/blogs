import { NextRequest, NextResponse } from 'next/server';
import { 
  validateWebhookSignature, 
  queueWebhook, 
  processWebhookJob,
  routeDiscourseWebhook 
} from '@/lib/webhooks';
import { createAuditLog } from '@/lib/moderation';

/**
 * POST /api/webhooks/discourse - Handle Discourse webhooks
 * Requirements: 8.1, 8.5
 */
export async function POST(req: NextRequest) {
  try {
    // Get raw body for signature validation
    const rawBody = await req.text();
    
    // Get signature from header
    const signature = req.headers.get('x-discourse-event-signature') || '';
    const eventType = req.headers.get('x-discourse-event') || '';
    const eventId = req.headers.get('x-discourse-event-id') || '';

    // Validate webhook signature
    // Requirements: 8.5 - Validate HMAC signature, reject invalid
    if (!validateWebhookSignature(rawBody, signature)) {
      console.error('Invalid webhook signature');
      
      // Log failed webhook attempt
      await createAuditLog({
        action: 'webhook.signature_invalid',
        resourceType: 'webhook',
        details: { 
          source: 'discourse', 
          eventType, 
          eventId,
          ip: req.headers.get('x-forwarded-for')?.split(',')[0],
        },
      });

      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Parse payload
    let payload: Record<string, any>;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    // Queue webhook for processing with retry logic
    const job = await queueWebhook(`discourse:${eventType}`, payload);

    // Process immediately (in production, use a background worker)
    const result = await processWebhookJob(job.id, async (jobPayload) => {
      await routeDiscourseWebhook(eventType, jobPayload);
    });

    // Log successful webhook
    await createAuditLog({
      action: 'webhook.received',
      resourceType: 'webhook',
      details: { 
        source: 'discourse', 
        eventType, 
        eventId,
        jobId: job.id,
        success: result.success,
      },
    });

    return NextResponse.json({
      success: true,
      jobId: job.id,
      processed: result.success,
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/webhooks/discourse - Health check
 */
export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'discourse-webhook' });
}
