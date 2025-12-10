import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne, transaction } from '@/lib/db';
import { PoolClient } from 'pg';

// GET /api/admin/kyc/[id] - Get KYC request details
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const request = await queryOne(
      `SELECT k.*, u.username, u.email, u.display_name, u.avatar
       FROM kyc_requests k
       JOIN users u ON k.user_id = u.id
       WHERE k.id = $1`,
      [id]
    );

    if (!request) {
      return NextResponse.json({ error: 'KYC request not found' }, { status: 404 });
    }

    return NextResponse.json({ request });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH /api/admin/kyc/[id] - Approve or reject KYC
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.roles?.some((r) => ['admin', 'superadmin'].includes(r))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();
    const { action, rejection_reason } = body; // action: 'approve' | 'reject'

    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    if (action === 'reject' && !rejection_reason) {
      return NextResponse.json({ error: 'Rejection reason is required' }, { status: 400 });
    }

    const result = await transaction(async (client: PoolClient) => {
      // Get KYC request
      const kycResult = await client.query(
        'SELECT * FROM kyc_requests WHERE id = $1 FOR UPDATE',
        [id]
      );

      if (kycResult.rows.length === 0) {
        throw new Error('KYC request not found');
      }

      const kycRequest = kycResult.rows[0];

      if (kycRequest.status !== 'pending') {
        throw new Error('KYC request already processed');
      }

      const newStatus = action === 'approve' ? 'approved' : 'rejected';

      // Update KYC request
      await client.query(
        `UPDATE kyc_requests SET 
          status = $1, 
          reviewed_by = $2, 
          reviewed_at = CURRENT_TIMESTAMP,
          rejection_reason = $3,
          updated_at = CURRENT_TIMESTAMP
         WHERE id = $4`,
        [newStatus, session.userId, action === 'reject' ? rejection_reason : null, id]
      );

      if (action === 'approve') {
        // Update user kyc_verified
        await client.query(
          'UPDATE users SET kyc_verified = true, kyc_verified_at = CURRENT_TIMESTAMP WHERE id = $1',
          [kycRequest.user_id]
        );

        // Grant KYC badge
        const kycBadge = await client.query(
          "SELECT id FROM badges WHERE slug = 'kyc-verified'"
        );

        if (kycBadge.rows.length > 0) {
          await client.query(
            `INSERT INTO user_badges (user_id, badge_id, granted_by, note)
             VALUES ($1, $2, $3, 'KYC verified')
             ON CONFLICT (user_id, badge_id) DO NOTHING`,
            [kycRequest.user_id, kycBadge.rows[0].id, session.userId]
          );
        }
      }

      return { success: true, status: newStatus };
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
