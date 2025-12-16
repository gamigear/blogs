'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { ChatWindow } from './ChatWindow';
import { useSettings } from '@/contexts/SettingsContext';
import { formatRelativeTime } from '@/lib/timezone';

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

interface ChatButtonProps {
  // For direct chat with a specific user
  targetUserId?: number;
  targetUsername?: string;
  targetAvatar?: string;
  // Display variants
  variant?: 'default' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ChatButton({ 
  targetUserId, 
  targetUsername, 
  targetAvatar,
  variant = 'default',
  size = 'md',
  className = ''
}: ChatButtonProps) {
  const { data: session } = useSession();
  const settings = useSettings();
  const timezoneOffset = settings.general.timezone_offset || 7;
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [totalUnread, setTotalUnread] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<{ userId: number; userName: string; userAvatar?: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchConversations = async () => {
    if (!session?.user) return;
    try {
      const res = await fetch('/api/messages');
      if (res.ok) {
        const data = await res.json();
        setConversations(data.conversations);
        setTotalUnread(data.totalUnread);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  useEffect(() => {
    fetchConversations();
    const interval = setInterval(fetchConversations, 30000);
    return () => clearInterval(interval);
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openChat = (conv: Conversation) => {
    setActiveChat({
      userId: conv.other_user_id,
      userName: conv.other_user_name,
      userAvatar: conv.other_user_avatar || undefined
    });
    setIsOpen(false);
  };

  const formatTime = (dateStr: string | null) => {
    if (!dateStr) return '';
    return formatRelativeTime(dateStr, timezoneOffset);
  };

  if (!session?.user) return null;

  // Direct chat button - opens chat with specific user
  if (targetUserId) {
    const handleDirectChat = () => {
      setActiveChat({
        userId: targetUserId,
        userName: targetUsername || 'User',
        userAvatar: targetAvatar
      });
    };

    const sizeClasses = {
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
      lg: 'w-11 h-11'
    };

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    if (variant === 'icon') {
      return (
        <>
          <button
            onClick={handleDirectChat}
            className={`${sizeClasses[size]} rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors ${className}`}
            title={`Nhắn tin cho ${targetUsername}`}
          >
            <svg className={iconSizes[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </button>
          {activeChat && (
            <ChatWindow
              userId={activeChat.userId}
              userName={activeChat.userName}
              userAvatar={activeChat.userAvatar}
              onClose={() => {
                setActiveChat(null);
                fetchConversations();
              }}
            />
          )}
        </>
      );
    }

    if (variant === 'text') {
      return (
        <>
          <button
            onClick={handleDirectChat}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors ${className}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
            Nhắn tin
          </button>
          {activeChat && (
            <ChatWindow
              userId={activeChat.userId}
              userName={activeChat.userName}
              userAvatar={activeChat.userAvatar}
              onClose={() => {
                setActiveChat(null);
                fetchConversations();
              }}
            />
          )}
        </>
      );
    }
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-gray-600 hover:text-gray-900"
          aria-label="Messages"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
          {totalUnread > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalUnread > 9 ? '9+' : totalUnread}
            </span>
          )}
        </button>

        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <div className="fixed inset-0 bg-black/20 sm:hidden z-40" onClick={() => setIsOpen(false)} />
            
            <div className="fixed bottom-0 left-0 right-0 sm:absolute sm:bottom-auto sm:left-auto sm:right-0 sm:top-full sm:mt-2 w-full sm:w-80 bg-white rounded-t-2xl sm:rounded-xl shadow-xl border z-50 max-h-[70vh] sm:max-h-[400px] flex flex-col">
              <div className="p-3 border-b flex items-center justify-between flex-shrink-0">
                <h3 className="font-semibold">Tin nhắn</h3>
                <a href="/messages" className="text-sm text-primary hover:underline" onClick={() => setIsOpen(false)}>
                  Xem tất cả
                </a>
              </div>

              <div className="flex-1 overflow-y-auto">
                {conversations.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    Chưa có tin nhắn nào
                  </div>
                ) : (
                  conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => openChat(conv)}
                      className={`w-full p-3 border-b hover:bg-gray-50 flex items-center gap-3 text-left active:bg-gray-100 ${
                        conv.unread_count > 0 ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="w-11 h-11 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                        {conv.other_user_avatar ? (
                          <img src={conv.other_user_avatar} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                            {conv.other_user_name?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">{conv.other_user_name}</p>
                          <span className="text-xs text-gray-400 ml-2">{formatTime(conv.last_message_at)}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {conv.last_message_sender_id === (session as any)?.userId && 'Bạn: '}
                          {conv.last_message || 'Bắt đầu cuộc trò chuyện'}
                        </p>
                      </div>
                      {conv.unread_count > 0 && (
                        <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conv.unread_count}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
              
              {/* Safe area padding for mobile */}
              <div className="sm:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
            </div>
          </>
        )}
      </div>

      {activeChat && (
        <ChatWindow
          userId={activeChat.userId}
          userName={activeChat.userName}
          userAvatar={activeChat.userAvatar}
          onClose={() => {
            setActiveChat(null);
            fetchConversations();
          }}
        />
      )}
    </>
  );
}
