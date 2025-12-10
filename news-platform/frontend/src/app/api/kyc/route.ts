import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

// GET /api/kyc - Get current user's KYC status
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const kycRequest = await queryOne(
      `SELECT id, status, rejection_reason, created_at, reviewed_at
       FROM kyc_requests WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1`,
      [session.userId]
    );

    const user = await queryOne<{ kyc_verified: boolean; kyc_verified_at: string | null }>(
      'SELECT kyc_verified, kyc_verified_at FROM users WHERE id = $1',
      [session.userId]
    );

    return NextResponse.json({
      kycVerified: user?.kyc_verified || false,
      kycVerifiedAt: user?.kyc_verified_at,
      latestRequest: kycRequest,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/kyc - Submit KYC request
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if already verified
    const user = await queryOne<{ kyc_verified: boolean }>('SELECT kyc_verified FROM users WHERE id = $1', [session.userId]);
    if (user?.kyc_verified) {
      return NextResponse.json({ error: 'Bạn đã được xác minh KYC' }, { status: 400 });
    }

    // Check if has pending request
    const pending = await queryOne(
      "SELECT id FROM kyc_requests WHERE user_id = $1 AND status = 'pending'",
      [session.userId]
    );
    if (pending) {
      return NextResponse.json({ error: 'Bạn đã có yêu cầu KYC đang chờ xử lý' }, { status: 400 });
    }

    const body = await req.json();
    const { full_name, date_of_birth, id_type, id_number, id_front_image, id_back_image, selfie_image, address, phone } = body;

    // Validate required fields
    if (!full_name || !date_of_birth || !id_type || !id_number || !id_front_image || !selfie_image) {
      return NextResponse.json({ error: 'Vui lòng điền đầy đủ thông tin bắt buộc' }, { status: 400 });
    }

    const result = await query(
      `INSERT INTO kyc_requests (user_id, full_name, date_of_birth, id_type, id_number, id_front_image, id_back_image, selfie_image, address, phone)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING id, status, created_at`,
      [session.userId, full_name, date_of_birth, id_type, id_number, id_front_image, id_back_image || null, selfie_image, address || null, phone || null]
    );

    return NextResponse.json({ success: true, request: result[0] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
