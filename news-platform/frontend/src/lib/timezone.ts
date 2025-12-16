// Default timezone (Vietnam)
const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';

// Timezone name to offset mapping
export const TIMEZONES: Record<string, number> = {
  'UTC': 0,
  'Asia/Ho_Chi_Minh': 7,
  'Asia/Bangkok': 7,
  'Asia/Singapore': 8,
  'Asia/Tokyo': 9,
  'Asia/Seoul': 9,
  'Europe/London': 0,
  'Europe/Paris': 1,
  'America/New_York': -5,
  'America/Los_Angeles': -8,
};

// Offset to timezone name mapping
const OFFSET_TO_TIMEZONE: Record<number, string> = {
  0: 'UTC',
  7: 'Asia/Ho_Chi_Minh',
  8: 'Asia/Singapore',
  9: 'Asia/Tokyo',
  1: 'Europe/Paris',
  [-5]: 'America/New_York',
  [-8]: 'America/Los_Angeles',
};

function getTimezoneFromOffset(offset: number): string {
  return OFFSET_TO_TIMEZONE[offset] || DEFAULT_TIMEZONE;
}

/**
 * Format time as HH:mm in specified timezone
 */
export function formatTime(dateStr: string, offsetHours: number = 7): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    
    const timezone = getTimezoneFromOffset(offsetHours);
    return new Intl.DateTimeFormat('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: timezone,
    }).format(date);
  } catch {
    return '';
  }
}

/**
 * Format date as DD/MM/YYYY or relative (Hôm nay, Hôm qua) in specified timezone
 */
export function formatDate(dateStr: string, offsetHours: number = 7): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    
    const timezone = getTimezoneFromOffset(offsetHours);
    const now = new Date();
    
    // Get date parts in the target timezone
    const dateFormatter = new Intl.DateTimeFormat('en-CA', { 
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    
    const dateParts = dateFormatter.format(date);
    const todayParts = dateFormatter.format(now);
    const yesterdayParts = dateFormatter.format(new Date(now.getTime() - 86400000));
    
    if (dateParts === todayParts) return 'Hôm nay';
    if (dateParts === yesterdayParts) return 'Hôm qua';
    
    // Format as DD/MM/YYYY
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: timezone,
    }).format(date);
  } catch {
    return '';
  }
}

/**
 * Format relative time (Vừa xong, X phút, X giờ, etc.)
 */
export function formatRelativeTime(dateStr: string, offsetHours: number = 7): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 60000) return 'Vừa xong';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ`;
    
    // For older dates, show DD/MM
    const timezone = getTimezoneFromOffset(offsetHours);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      timeZone: timezone,
    }).format(date);
  } catch {
    return '';
  }
}

/**
 * Format full datetime
 */
export function formatDateTime(dateStr: string, offsetHours: number = 7): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    
    const timezone = getTimezoneFromOffset(offsetHours);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: timezone,
    }).format(date);
  } catch {
    return '';
  }
}
