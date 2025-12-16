'use client';

import Link from 'next/link';

export default function TestLinkPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Link Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Next.js Link:</h2>
          <Link href="/" className="text-blue-600 underline">
            Go to Home (Link)
          </Link>
        </div>
        
        <div>
          <h2 className="font-semibold">Native a tag:</h2>
          <a href="/" className="text-green-600 underline">
            Go to Home (native a)
          </a>
        </div>
        
        <div>
          <h2 className="font-semibold">Button with window.location:</h2>
          <button 
            onClick={() => { window.location.href = '/'; }}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Go to Home (button)
          </button>
        </div>
      </div>
    </div>
  );
}
