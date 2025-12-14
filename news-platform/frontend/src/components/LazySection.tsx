'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  placeholder?: ReactNode;
  rootMargin?: string;
}

/**
 * LazySection - Only renders children when visible in viewport
 * Helps reduce initial load on mobile by deferring off-screen content
 */
export function LazySection({ 
  children, 
  className = '',
  placeholder,
  rootMargin = '200px' // Start loading 200px before visible
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (placeholder || <SectionPlaceholder />)}
    </div>
  );
}

function SectionPlaceholder() {
  return (
    <div className="bg-white rounded-lg p-4 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="aspect-video bg-gray-200 rounded-lg mb-2" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Hook to detect if user is on mobile
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Hook to detect slow connection
 */
export function useSlowConnection() {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    // Check Network Information API
    const connection = (navigator as any).connection || 
                       (navigator as any).mozConnection || 
                       (navigator as any).webkitConnection;
    
    if (connection) {
      const checkConnection = () => {
        // Consider slow if: 2g, slow-2g, or saveData is enabled
        const slowTypes = ['slow-2g', '2g', '3g'];
        setIsSlow(
          slowTypes.includes(connection.effectiveType) || 
          connection.saveData === true
        );
      };
      
      checkConnection();
      connection.addEventListener('change', checkConnection);
      return () => connection.removeEventListener('change', checkConnection);
    }
  }, []);

  return isSlow;
}
