import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';

interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  content: string;
  is_read: boolean;
  created_at: string;
  sender_name: string;
  sender_avatar: string | null;
}

interface User {
  id: number;
  name: string;
  username: string;
  avatar: string | null;
}

// GET - Get messages in a conversation
export async function GET(
  request: NextRequest,
  { params }: { params: { conversationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.userId;
    const conversationId = params.conversationId;

    // If conversationId is a number, it's a conversation ID
    // If it's a string starting with 'user_', it's a user ID
    let otherUserId: number;
    
    if (conversationId.startsWith('user_')) {
      otherUserId = parseInt(conversationId.replace('user_', ''));
    } else {
      // Get conversation and verify user is part of it
      const conv = await queryOne<{ user1_id: number; user2_id: number }>(`
        SELECT user1_id, user2_id FROM conversations WHERE id = $1
      `, [conversationId]);

      if (!conv) {
        return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
      }

      if (conv.user1_id !== userId && conv.user2_id !== userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }

      otherUserId = conv.user1_id === userId ? conv.user2_id : conv.user1_id;
    }

    // Get other user info
    const otherUser = await queryOne<User>(`
      SELECT id, display_name as name, username, avatar FROM users WHERE id = $1
    `, [otherUserId]);

    if (!otherUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get messages between the two users
    // Use AT TIME ZONE to ensure UTC timestamp is returned as ISO string
    const messages = await query<Message>(`
      SELECT 
        m.id, m.sender_id, m.receiver_id, m.content, m.is_read, 
        to_char(m.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as created_at,
        u.display_name as sender_name, u.avatar as sender_avatar
      FROM messages m
      JOIN users u ON u.id = m.sender_id
      WHERE (m.sender_id = $1 AND m.receiver_id = $2) 
         OR (m.sender_id = $2 AND m.receiver_id = $1)
      ORDER BY m.created_at ASC
      LIMIT 100
    `, [userId, otherUserId]);

    // Mark messages as read
    await query(`
      UPDATE messages SET is_read = true, updated_at = NOW()
      WHERE receiver_id = $1 AND sender_id = $2 AND is_read = false
    `, [userId, otherUserId]);

    return NextResponse.json({
      messages,
      otherUser
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
