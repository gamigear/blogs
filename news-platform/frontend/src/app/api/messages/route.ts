import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

interface Conversation {
  id: number;
  last_message_at: string;
  other_user_id: number;
  other_user_name: string;
  other_user_username: string;
  other_user_avatar: string | null;
  last_message: string | null;
  last_message_sender_id: number | null;
  unread_count: string;
}

// GET - Get all conversations for current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.userId;

    // Get all conversations with last message and other user info
    const conversations = await query<Conversation>(`
      SELECT 
        c.id,
        to_char(c.last_message_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as last_message_at,
        c.created_at,
        CASE 
          WHEN c.user1_id = $1 THEN c.user2_id 
          ELSE c.user1_id 
        END as other_user_id,
        u.display_name as other_user_name,
        u.username as other_user_username,
        u.avatar as other_user_avatar,
        m.content as last_message,
        m.sender_id as last_message_sender_id,
        (SELECT COUNT(*) FROM messages WHERE 
          ((sender_id = c.user1_id AND receiver_id = c.user2_id) OR 
           (sender_id = c.user2_id AND receiver_id = c.user1_id))
          AND receiver_id = $1 AND is_read = false
        ) as unread_count
      FROM conversations c
      JOIN users u ON u.id = CASE WHEN c.user1_id = $1 THEN c.user2_id ELSE c.user1_id END
      LEFT JOIN messages m ON m.id = c.last_message_id
      WHERE c.user1_id = $1 OR c.user2_id = $1
      ORDER BY c.last_message_at DESC NULLS LAST
    `, [userId]);

    // Get total unread count
    const unreadResult = await queryOne<{ count: string }>(`
      SELECT COUNT(*) as count FROM messages 
      WHERE receiver_id = $1 AND is_read = false
    `, [userId]);

    return NextResponse.json({
      conversations,
      totalUnread: parseInt(unreadResult?.count || '0')
    });
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Start new conversation or send message
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.userId;
    const { receiverId, content } = await request.json();

    if (!receiverId || !content?.trim()) {
      return NextResponse.json({ error: 'Missing receiverId or content' }, { status: 400 });
    }

    if (receiverId === userId) {
      return NextResponse.json({ error: 'Cannot message yourself' }, { status: 400 });
    }

    // Check if receiver exists
    const receiver = await queryOne<{ id: number }>('SELECT id FROM users WHERE id = $1', [receiverId]);
    if (!receiver) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find or create conversation
    let conversation = await queryOne<{ id: number }>(`
      SELECT id FROM conversations 
      WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
    `, [userId, receiverId]);

    let conversationId: number;
    if (!conversation) {
      // Create new conversation
      const newConv = await queryOne<{ id: number }>(`
        INSERT INTO conversations (user1_id, user2_id, created_at)
        VALUES ($1, $2, NOW())
        RETURNING id
      `, [userId, receiverId]);
      conversationId = newConv!.id;
    } else {
      conversationId = conversation.id;
    }

    // Insert message
    const message = await queryOne<{
      id: number;
      sender_id: number;
      receiver_id: number;
      content: string;
      is_read: boolean;
      created_at: string;
    }>(`
      INSERT INTO messages (sender_id, receiver_id, content, is_read, created_at, updated_at)
      VALUES ($1, $2, $3, false, NOW(), NOW())
      RETURNING id, sender_id, receiver_id, content, is_read, 
        to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as created_at
    `, [userId, receiverId, content.trim()]);

    // Update conversation last_message
    await query(`
      UPDATE conversations 
      SET last_message_id = $1, last_message_at = NOW()
      WHERE id = $2
    `, [message!.id, conversationId]);

    return NextResponse.json({
      message,
      conversationId
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
