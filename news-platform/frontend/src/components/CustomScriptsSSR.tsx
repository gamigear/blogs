import { query } from '@/lib/db';

interface Script {
  id: number;
  position: string;
  code: string;
}

async function getScripts(position: string): Promise<Script[]> {
  try {
    const result = await query<Script>(
      'SELECT id, position, code FROM custom_scripts WHERE is_active = true AND position = $1 ORDER BY sort_order ASC',
      [position]
    );
    return result;
  } catch (error) {
    console.error('Error fetching custom scripts:', error);
    return [];
  }
}

// Server component for head scripts
export async function CustomScriptsHead() {
  const scripts = await getScripts('header');
  
  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((script) => (
        <div
          key={script.id}
          dangerouslySetInnerHTML={{ __html: script.code }}
          suppressHydrationWarning
        />
      ))}
    </>
  );
}

// Server component for footer scripts (before </body>)
export async function CustomScriptsFooter() {
  const scripts = await getScripts('footer');
  
  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((script) => (
        <div
          key={script.id}
          dangerouslySetInnerHTML={{ __html: script.code }}
          suppressHydrationWarning
        />
      ))}
    </>
  );
}
