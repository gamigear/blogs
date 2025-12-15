-- Migration: Add private messaging system
-- Run this migration to enable direct messages between users

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    receiver_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create conversations table for grouping messages
CREATE TABLE IF NOT EXISTS conversations (
    id SERIAL PRIMARY KEY,
    user1_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user2_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    last_message_id INTEGER REFERENCES messages(id) ON DELETE SET NULL,
    last_message_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user1_id, user2_id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_receiver ON messages(receiver_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_unread ON messages(receiver_id, is_read) WHERE is_read = FALSE;
CREATE INDEX IF NOT EXISTS idx_conversations_user1 ON conversations(user1_id);
CREATE INDEX IF NOT EXISTS idx_conversations_user2 ON conversations(user2_id);
CREATE INDEX IF NOT EXISTS idx_conversations_last_message ON conversations(last_message_at DESC);

-- Function to get or create conversation
CREATE OR REPLACE FUNCTION get_or_create_conversation(p_user1_id INTEGER, p_user2_id INTEGER)
RETURNS INTEGER AS $$
DECLARE
    v_conversation_id INTEGER;
    v_min_id INTEGER;
    v_max_id INTEGER;
BEGIN
    -- Always store with smaller user_id first for consistency
    v_min_id := LEAST(p_user1_id, p_user2_id);
    v_max_id := GREATEST(p_user1_id, p_user2_id);
    
    -- Try to find existing conversation
    SELECT id INTO v_conversation_id 
    FROM conversations 
    WHERE user1_id = v_min_id AND user2_id = v_max_id;
    
    -- Create if not exists
    IF v_conversation_id IS NULL THEN
        INSERT INTO conversations (user1_id, user2_id)
        VALUES (v_min_id, v_max_id)
        RETURNING id INTO v_conversation_id;
    END IF;
    
    RETURN v_conversation_id;
END;
$$ LANGUAGE plpgsql;
