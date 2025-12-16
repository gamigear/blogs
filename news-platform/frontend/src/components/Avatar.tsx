'use client';

import { useSettings } from '@/contexts/SettingsContext';
import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const sizePx = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const settings = useSettings();
  const defaultAvatar = settings.general?.default_avatar;
  
  // Use provided src, or default avatar from settings, or fallback to initials
  const avatarSrc = src || defaultAvatar;
  const initial = alt?.charAt(0)?.toUpperCase() || '?';

  if (avatarSrc) {
    return (
      <Image
        src={avatarSrc}
        alt={alt}
        width={sizePx[size]}
        height={sizePx[size]}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  // Fallback to initials
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center ${className}`}
    >
      <span className="text-white font-semibold" style={{ fontSize: sizePx[size] * 0.4 }}>
        {initial}
      </span>
    </div>
  );
}

// Simple avatar without Next.js Image (for places where img tag is preferred)
export function SimpleAvatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const settings = useSettings();
  const defaultAvatar = settings.general?.default_avatar;
  
  const avatarSrc = src || defaultAvatar;
  const initial = alt?.charAt(0)?.toUpperCase() || '?';

  if (avatarSrc) {
    return (
      <img
        src={avatarSrc}
        alt={alt}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center ${className}`}
    >
      <span className="text-white font-semibold" style={{ fontSize: sizePx[size] * 0.4 }}>
        {initial}
      </span>
    </div>
  );
}

// Hook to get default avatar URL
export function useDefaultAvatar() {
  const settings = useSettings();
  return settings.general?.default_avatar || '';
}
