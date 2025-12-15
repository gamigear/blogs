import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET /api/messages/[conversationId] - Get messages in a conversation
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const { conversationId } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id as string);
    const convId = parseInt(conversationId);

    // Verify user is part of this conversation
    const conv = await query<{ id: number; user1_id: number; user2_id: number }>(
      'SELECT id, user1_id, user2_id FROM conversations WHERE id = $1 AND (user1_id = $2 OR user2_id = $2)',
      [convId, userId]
    );

    if (conv.length === 0) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    // Get other user info
    const conversation = conv[0];
    const otherUserId = conversation.user1_id === userId ? conversation.user2_id : conversation.user1_id;
    const otherUser = await query(
      'SELECT id, username, display_name, avatar FROM users WHERE id = $1',
      [otherUserId]
    );

    // Get messages
    const messages = await query(`
      SELECT 
        m.id,
        m.sender_id,
        m.receiver_id,
        m.content,
        m.is_read,
        m.created_at,
        u.username as sender_username,
        u.display_name as sender_name,
        u.avatar as sender_avatar
      FROM messages m
      JOIN users u ON u.id = m.sender_id
      WHERE (m.sender_id = $1 AND m.receiver_id = $2)
         OR (m.sender_id = $2 AND m.receiver_id = $1)
      ORDER BY m.created_at ASC
      LIMIT 100
    `, [userId, otherUserId]);

    // Mark messages as read
    await query(`
      UPDATE messages 
      SET is_read = TRUE 
      WHERE receiver_id = $1 AND sender_id = $2 AND is_read = FALSE
    `, [userId, otherUserId]);

    return NextResponse.json({
      conversation,
      otherUser: otherUser[0],
      messages,
    });
  } catch (error: any) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
