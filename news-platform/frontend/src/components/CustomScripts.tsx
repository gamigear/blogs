'use client';

import { useEffect, useState } from 'react';

interface Script {
  id: number;
  position: string;
  code: string;
}

interface CustomScriptsProps {
  position: 'header' | 'footer' | 'body_top' | 'body_bottom';
}

export function CustomScripts({ position }: CustomScriptsProps) {
  const [scripts, setScripts] = useState<Script[]>([]);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const res = await fetch(`/api/custom-scripts?position=${position}`);
        if (res.ok) {
          const data = await res.json();
          setScripts(data);
        }
      } catch (error) {
        console.error('Error fetching custom scripts:', error);
      }
    };

    fetchScripts();
  }, [position]);

  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((script) => (
        <div
          key={script.id}
          dangerouslySetInnerHTML={{ __html: script.code }}
        />
      ))}
    </>
  );
}

// Server component version for head scripts
export async function CustomScriptsServer({ position }: CustomScriptsProps) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/custom-scripts?position=${position}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) return null;
    
    const scripts: Script[] = await res.json();
    
    if (scripts.length === 0) return null;

    return (
      <>
        {scripts.map((script) => (
          <div
            key={script.id}
            dangerouslySetInnerHTML={{ __html: script.code }}
          />
        ))}
      </>
    );
  } catch (error) {
    console.error('Error fetching custom scripts:', error);
    return null;
  }
}
