'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { ChatWindow } from './ChatWindow';

interface ChatUser {
  userId: number;
  userName: string;
  userAvatar?: string;
}

interface ChatContextType {
  openChat: (user: ChatUser) => void;
  closeChat: () => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider');
  }
  return context;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const [activeChat, setActiveChat] = useState<ChatUser | null>(null);

  const openChat = (user: ChatUser) => {
    if (session?.user) {
      setActiveChat(user);
    }
  };

  const closeChat = () => {
    setActiveChat(null);
  };

  // Listen for custom events to open chat
  useEffect(() => {
    const handleOpenChat = (e: CustomEvent<ChatUser>) => {
      openChat(e.detail);
    };

    window.addEventListener('openChat', handleOpenChat as EventListener);
    return () => {
      window.removeEventListener('openChat', handleOpenChat as EventListener);
    };
  }, [session]);

  return (
    <ChatContext.Provider value={{ openChat, closeChat }}>
      {children}
      {activeChat && session?.user && (
        <ChatWindow
          userId={activeChat.userId}
          userName={activeChat.userName}
          userAvatar={activeChat.userAvatar}
          onClose={closeChat}
        />
      )}
    </ChatContext.Provider>
  );
}

// Helper function to open chat from anywhere
export function openChatWithUser(userId: number, userName: string, userAvatar?: string) {
  window.dispatchEvent(new CustomEvent('openChat', {
    detail: { userId, userName, userAvatar }
  }));
}
