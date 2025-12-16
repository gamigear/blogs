'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSettings } from '@/contexts/SettingsContext';
import { formatTime as formatTimeUtil, formatRelativeTime } from '@/lib/timezone';

interface Conversation {
  id: number;
  other_user_id: number;
  other_user_name: string;
  other_user_username: string;
  other_user_avatar: string | null;
  last_message: string | null;
  last_message_sender_id: number | null;
  last_message_at: string | null;
  unread_count: number;
}

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

export default function MessagesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <MessagesContent />
    </Suspense>
  );
}

function MessagesContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const settings = useSettings();
  const timezoneOffset = settings.general.timezone_offset || 7;
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [showMobileList, setShowMobileList] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Common emojis
  const EMOJI_LIST = [
    '😀', '😂', '🥰', '😍', '😘', '😊', '🤗', '😎',
    '😢', '😭', '😤', '😡', '🤔', '😴', '🤮', '🤯',
    '👍', '👎', '👏', '🙏', '💪', '🤝', '✌️', '🤟',
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔',
    '🔥', '⭐', '✨', '🎉', '🎊', '💯', '💢', '💥',
  ];

  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    inputRef.current?.focus();
  };

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

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  const fetchConversations = async () => {
    try {
      const res = await fetch('/api/messages');
      if (res.ok) {
        const data = await res.json();
        setConversations(data.conversations);
        
        // Auto-select from URL param
        const userId = searchParams.get('user');
        if (userId && !selectedConv) {
          const conv = data.conversations.find((c: Conversation) => c.other_user_id === parseInt(userId));
          if (conv) {
            selectConversation(conv);
          } else {
            // Start new conversation with user - fetch user info
            const userRes = await fetch(`/api/messages/user-info/${userId}`);
            if (userRes.ok) {
              const userData = await userRes.json();
              setSelectedConv({
                id: 0,
                other_user_id: userData.id,
                other_user_name: userData.name,
                other_user_username: userData.username,
                other_user_avatar: userData.avatar,
                last_message: null,
                last_message_sender_id: null,
                last_message_at: null,
                unread_count: 0
              });
              setShowMobileList(false);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user) {
      fetchConversations();
      const interval = setInterval(fetchConversations, 30000);
      return () => clearInterval(interval);
    }
  }, [session]);

  const selectConversation = async (conv: Conversation) => {
    setSelectedConv(conv);
    setShowMobileList(false);
    
    try {
      const res = await fetch(`/api/messages/user_${conv.other_user_id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        // Update unread count
        setConversations(prev => prev.map(c => 
          c.id === conv.id ? { ...c, unread_count: 0 } : c
        ));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (selectedConv) {
      const interval = setInterval(async () => {
        const res = await fetch(`/api/messages/user_${selectedConv.other_user_id}`);
        if (res.ok) {
          const data = await res.json();
          setMessages(data.messages);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedConv]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConv || sending) return;

    setSending(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receiverId: selectedConv.other_user_id, content: newMessage.trim() })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, {
          ...data.message,
          sender_name: session?.user?.name || '',
          sender_avatar: null
        }]);
        setNewMessage('');
        fetchConversations();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 60000) return 'Vừa xong';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút`;
    if (diff < 86400000) {
      return formatTimeUtil(dateStr, timezoneOffset);
    }
    return formatRelativeTime(dateStr, timezoneOffset);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-sm flex h-[100dvh] md:h-[calc(100vh-72px)]">
          {/* Conversations List */}
          <div className={`w-full md:w-80 border-r flex flex-col ${!showMobileList && selectedConv ? 'hidden md:flex' : ''}`}>
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold">Tin nhắn</h1>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  Chưa có cuộc trò chuyện nào
                </div>
              ) : (
                conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => selectConversation(conv)}
                    className={`w-full p-3 flex items-center gap-3 hover:bg-gray-50 border-b ${
                      selectedConv?.other_user_id === conv.other_user_id ? 'bg-blue-50' : ''
                    } ${conv.unread_count > 0 ? 'bg-blue-50/50' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                      {conv.other_user_avatar ? (
                        <img src={conv.other_user_avatar} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                          {conv.other_user_name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between">
                        <p className={`font-medium truncate ${conv.unread_count > 0 ? 'text-black' : 'text-gray-900'}`}>
                          {conv.other_user_name}
                        </p>
                        <span className="text-xs text-gray-400">{formatTime(conv.last_message_at || '')}</span>
                      </div>
                      <p className={`text-sm truncate ${conv.unread_count > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                        {conv.last_message_sender_id === (session as any)?.userId && 'Bạn: '}
                        {conv.last_message || 'Bắt đầu trò chuyện'}
                      </p>
                    </div>
                    {conv.unread_count > 0 && (
                      <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {conv.unread_count}
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className={`flex-1 flex flex-col ${showMobileList && !selectedConv ? 'hidden md:flex' : ''}`}>
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center gap-3">
                  <button 
                    onClick={() => setShowMobileList(true)}
                    className="md:hidden p-1 hover:bg-gray-100 rounded"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {selectedConv.other_user_avatar ? (
                      <img src={selectedConv.other_user_avatar} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        {selectedConv.other_user_name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{selectedConv.other_user_name}</p>
                    <a href={`/user/${selectedConv.other_user_username}`} className="text-sm text-blue-600 hover:underline">
                      @{selectedConv.other_user_username}
                    </a>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((msg) => {
                    const isMe = msg.sender_id === (session as any)?.userId;
                    return (
                      <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%]`}>
                          <div className={`px-4 py-2 rounded-2xl ${
                            isMe 
                              ? 'bg-primary text-white rounded-br-md' 
                              : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                          }`}>
                            <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                          </div>
                          <p className={`text-xs text-gray-400 mt-1 ${isMe ? 'text-right' : ''}`}>
                            {formatTime(msg.created_at)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={sendMessage} className="p-3 md:p-4 border-t bg-white safe-area-bottom relative">
                  {/* Emoji Picker */}
                  {showEmoji && (
                    <div 
                      ref={emojiRef}
                      className="absolute bottom-full left-0 right-0 mb-2 mx-3 p-3 bg-white rounded-xl shadow-lg border max-h-48 overflow-y-auto"
                    >
                      <div className="grid grid-cols-8 gap-1">
                        {EMOJI_LIST.map((emoji, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => addEmoji(emoji)}
                            className="p-2 text-xl hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 md:gap-3 items-center">
                    {/* Emoji button */}
                    <button
                      type="button"
                      onClick={() => setShowEmoji(!showEmoji)}
                      className={`p-2 rounded-full transition-colors flex-shrink-0 ${showEmoji ? 'text-primary bg-primary/10' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    
                    <input
                      ref={inputRef}
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Nhập tin nhắn..."
                      className="flex-1 px-4 py-2.5 border rounded-full text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                      disabled={sending}
                      onFocus={() => setShowEmoji(false)}
                    />
                    
                    {/* Like button or Send button */}
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
                        className="p-2 text-primary hover:bg-gray-100 rounded-full flex-shrink-0"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/>
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={sending}
                        className="px-4 md:px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 flex-shrink-0"
                      >
                        <span className="hidden md:inline">Gửi</span>
                        <svg className="w-5 h-5 md:hidden" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Chọn một cuộc trò chuyện để bắt đầu
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
