'use client';

import { useEffect, useState } from 'react';

export function CustomCSSLoader() {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // Tạo link element để load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/api/custom-css';
    link.id = 'custom-css-loader';
    
    // Kiểm tra nếu đã có thì không thêm nữa
    if (!document.getElementById('custom-css-loader')) {
      document.head.appendChild(link);
    }

    setCssLoaded(true);

    return () => {
      // Cleanup khi unmount
      const existingLink = document.getElementById('custom-css-loader');
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return null;
}
