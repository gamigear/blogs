'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FeaturedUser {
  id: number;
  username: string;
  display_name: string;
  avatar: string | null;
  bio: string | null;
  role: string;
  article_count: number;
  follower_count: number;
}

interface FeaturedUsersConfig {
  enabled: boolean;
  title: string;
  type: 'experts' | 'contributors' | 'admins' | 'custom' | 'custom_users';
  user_ids: number[];
  limit: number;
}

interface FeaturedUsersProps {
  // Props from homepage section (optional)
  title?: string;
  userType?: string;
  userIds?: number[];
  limit?: number;
  // If true, fetch from API; if false, use props
  fromApi?: boolean;
}

export function FeaturedUsers({ title, userType, userIds, limit = 5, fromApi = true }: FeaturedUsersProps) {
  const [users, setUsers] = useState<FeaturedUser[]>([]);
  const [config, setConfig] = useState<FeaturedUsersConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [userType, userIds, limit, fromApi]);

  const fetchData = async () => {
    try {
      // Build query params based on props
      let url = '/api/featured-users';
      if (!fromApi && userType) {
        const params = new URLSearchParams();
        params.set('type', userType);
        params.set('limit', String(limit));
        if (userIds && userIds.length > 0) {
          params.set('user_ids', userIds.join(','));
        }
        url += '?' + params.toString();
      }

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        // Override config with props if provided
        const finalConfig = {
          ...data.config,
          title: title || data.config?.title || 'Featured Users',
          type: userType || data.config?.type || 'contributors',
        };
        setConfig(finalConfig);
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching featured users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm dark:bg-[#1A1D1F]">
        <div className="animate-pulse">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-1"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return null;
  }

  const displayType = userType || config?.type || 'contributors';
  const displayTitle = title || config?.title || 'Featured Users';

  // SVG Icons
  const ExpertIcon = () => (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
  
  const ContributorIcon = () => (
    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
  
  const AdminIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  
  const CustomIcon = () => (
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const getTypeIcon = () => {
    switch (displayType) {
      case 'experts': return <ExpertIcon />;
      case 'contributors': return <ContributorIcon />;
      case 'admins': return <AdminIcon />;
      default: return <CustomIcon />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm dark:bg-[#1A1D1F]">
      <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        {getTypeIcon()}
        {displayTitle}
      </h3>
      
      <div className="space-y-3">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/user/${user.username}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex-shrink-0 overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-medium">
                  {user.display_name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white text-sm truncate">{user.display_name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
                {user.role === 'admin' && (
                  <>
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Quản trị viên
                  </>
                )}
                {user.role === 'moderator' && (
                  <>
                    <svg className="w-3 h-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Điều hành viên
                  </>
                )}
                {user.role === 'user' && (
                  <>
                    {user.article_count > 0 && `${user.article_count} bài viết`}
                    {user.article_count > 0 && user.follower_count > 0 && ' • '}
                    {user.follower_count > 0 && `${user.follower_count} người theo dõi`}
                  </>
                )}
              </p>
            </div>
            {(user.role === 'admin' || user.role === 'moderator') && (
              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                {user.role === 'admin' ? 'Admin' : 'Mod'}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
