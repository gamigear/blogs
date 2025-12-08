'use client';

import { useEffect, useRef } from 'react';

interface Props {
  articleSlug: string;
}

export function DiscourseComments({ articleSlug }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const discourseUrl = process.env.NEXT_PUBLIC_DISCOURSE_URL || 'http://localhost:3000';
    
    // Discourse embed script
    (window as any).DiscourseEmbed = {
      discourseUrl,
      discourseEmbedUrl: `${window.location.origin}/article/${articleSlug}`,
    };

    const script = document.createElement('script');
    script.src = `${discourseUrl}/javascripts/embed.js`;
    script.async = true;
    containerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, [articleSlug]);

  return (
    <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-xl font-bold mb-6">Thảo luận</h2>
      <div ref={containerRef} id="discourse-comments" />
    </div>
  );
}
