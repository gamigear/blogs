import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET /api/messages - Get all conversations for current user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id as string);

    // Get all conversations with last message and other user info
    const conversations = await query(`
      SELECT 
        c.id,
        c.last_message_at,
        CASE 
          WHEN c.user1_id = $1 THEN c.user2_id 
          ELSE c.user1_id 
        END as other_user_id,
        u.username as other_username,
        u.display_name as other_display_name,
        u.avatar as other_avatar,
        m.content as last_message,
        m.sender_id as last_sender_id,
        (SELECT COUNT(*) FROM messages WHERE receiver_id = $1 AND is_read = FALSE 
         AND sender_id = CASE WHEN c.user1_id = $1 THEN c.user2_id ELSE c.user1_id END) as unread_count
      FROM conversations c
      JOIN users u ON u.id = CASE WHEN c.user1_id = $1 THEN c.user2_id ELSE c.user1_id END
      LEFT JOIN messages m ON m.id = c.last_message_id
      WHERE c.user1_id = $1 OR c.user2_id = $1
      ORDER BY c.last_message_at DESC NULLS LAST
    `, [userId]);

    return NextResponse.json({ conversations });
  } catch (error: any) {
    console.error('Error fetching conversations:', error);
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
  }
}

// POST /api/messages - Send a new message
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const senderId = parseInt(session.user.id as string);
    const { receiverId, content } = await request.json();

    if (!receiverId || !content?.trim()) {
      return NextResponse.json({ error: 'Missing receiverId or content' }, { status: 400 });
    }

    if (senderId === receiverId) {
      return NextResponse.json({ error: 'Cannot send message to yourself' }, { status: 400 });
    }

    // Check if receiver exists
    const receiver = await query('SELECT id FROM users WHERE id = $1', [receiverId]);
    if (receiver.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get or create conversation
    const convResult = await query<{ id: number }>(
      'SELECT get_or_create_conversation($1, $2) as id',
      [senderId, receiverId]
    );
    const conversationId = convResult[0].id;

    // Insert message
    const messageResult = await query<{ id: number; created_at: string }>(
      `INSERT INTO messages (sender_id, receiver_id, content)
       VALUES ($1, $2, $3)
       RETURNING id, created_at`,
      [senderId, receiverId, content.trim()]
    );

    const msg = messageResult[0];

    // Update conversation last message
    await query(
      `UPDATE conversations 
       SET last_message_id = $1, last_message_at = $2
       WHERE id = $3`,
      [msg.id, msg.created_at, conversationId]
    );

    return NextResponse.json({
      success: true,
      message: {
        id: msg.id,
        content: content.trim(),
        senderId,
        receiverId,
        createdAt: msg.created_at,
      },
      conversationId,
    });
  } catch (error: any) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
