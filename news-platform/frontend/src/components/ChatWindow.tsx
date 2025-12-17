'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useSettings } from '@/contexts/SettingsContext';
import { formatTime as formatTimeUtil, formatDate as formatDateUtil } from '@/lib/timezone';

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

interface ChatWindowProps {
  userId: number;
  userName: string;
  userAvatar?: string;
  onClose: () => void;
}

// Common emojis for quick access
const EMOJI_LIST = [
  '😀', '😂', '🥰', '😍', '😘', '😊', '🤗', '😎',
  '😢', '😭', '😤', '😡', '🤔', '😴', '🤮', '🤯',
  '👍', '👎', '👏', '🙏', '💪', '🤝', '✌️', '🤟',
  '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔',
  '🔥', '⭐', '✨', '🎉', '🎊', '💯', '💢', '💥',
  '👀', '🙈', '🙉', '🙊', '💀', '👻', '🤖', '👽',
];

export function ChatWindow({ userId, userName, userAvatar, onClose }: ChatWindowProps) {
  const { data: session } = useSession();
  const settings = useSettings();
  const timezoneOffset = settings.general.timezone_offset || 7;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
        setShowEmoji(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    inputRef.current?.focus();
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`/api/messages/user_${userId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receiverId: userId, content: newMessage.trim() })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, {
          ...data.message,
          sender_name: session?.user?.name || '',
          sender_avatar: null
        }]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateStr: string) => formatTimeUtil(dateStr, timezoneOffset);
  const formatDate = (dateStr: string) => formatDateUtil(dateStr, timezoneOffset);

  // Group messages by date
  const groupedMessages: { date: string; messages: Message[] }[] = [];
  messages.forEach(msg => {
    const dateStr = formatDate(msg.created_at);
    const lastGroup = groupedMessages[groupedMessages.length - 1];
    if (lastGroup && lastGroup.date === dateStr) {
      lastGroup.messages.push(msg);
    } else {
      groupedMessages.push({ date: dateStr, messages: [msg] });
    }
  });

  return (
    <div className="fixed bottom-0 right-0 left-0 sm:left-auto sm:bottom-4 sm:right-4 w-full sm:w-80 md:w-96 h-[70vh] sm:h-[420px] bg-white rounded-t-2xl sm:rounded-xl shadow-2xl border z-50 flex flex-col">
      {/* Header */}
      <div className="p-2.5 sm:p-3 border-b flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-t-2xl sm:rounded-t-xl">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex-shrink-0 overflow-hidden">
          {userAvatar ? (
            <img src={userAvatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-medium text-sm">
              {userName?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate text-sm sm:text-base">{userName}</p>
        </div>
        {/* Minimize button - mobile only */}
        <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-full sm:hidden">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Close button */}
        <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-full">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-gray-50">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            Bắt đầu cuộc trò chuyện với {userName}
          </div>
        ) : (
          groupedMessages.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="text-center mb-3">
                <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded">{group.date}</span>
              </div>
              <div className="space-y-2">
                {group.messages.map((msg) => {
                  const isMe = msg.sender_id === (session as any)?.userId;
                  return (
                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] ${isMe ? 'order-2' : ''}`}>
                        <div className={`px-3 py-2 rounded-2xl ${
                          isMe 
                            ? 'bg-primary text-white rounded-br-md' 
                            : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                        </div>
                        <p className={`text-xs text-gray-400 mt-1 ${isMe ? 'text-right' : ''}`}>
                          {formatTime(msg.created_at)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-2 sm:p-3 border-t bg-white rounded-b-xl relative" style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
        {/* Emoji Picker */}
        {showEmoji && (
          <div 
            ref={emojiRef}
            className="absolute bottom-full left-0 right-0 mb-2 mx-2 p-2 bg-white rounded-xl shadow-lg border max-h-48 overflow-y-auto"
          >
            <div className="grid grid-cols-8 gap-1">
              {EMOJI_LIST.map((emoji, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => addEmoji(emoji)}
                  className="p-1.5 text-xl hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-1 items-center">
          {/* Emoji button */}
          <button
            type="button"
            onClick={() => setShowEmoji(!showEmoji)}
            className={`p-2 rounded-full transition-colors ${showEmoji ? 'text-primary bg-primary/10' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Aa"
            className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={sending}
            onFocus={() => setShowEmoji(false)}
            autoComplete="off"
          />
          
          {/* Like button (quick send) */}
          {!newMessage.trim() ? (
            <button
              type="button"
              onClick={() => {
                setNewMessage('👍');
                setTimeout(() => {
                  const form = inputRef.current?.closest('form');
                  form?.requestSubmit();
                }, 50);
              }}
              className="p-2 text-primary hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/>
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={sending}
              className="p-2 text-primary hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}


