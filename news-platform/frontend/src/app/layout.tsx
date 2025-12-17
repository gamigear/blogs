import './globals.css';
import { Metadata } from 'next';
import { AuthProvider } from '@/components/AuthProvider';
import { MainLayout } from '@/components/MainLayout';
import { CustomScriptsHead, CustomScriptsFooter } from '@/components/CustomScriptsSSR';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { DynamicFavicon } from '@/components/DynamicFavicon';
import { ChatProvider } from '@/components/ChatProvider';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'News Platform', template: '%s | News Platform' },
  description: 'Tin tức và cộng đồng thảo luận',
  // Icons are managed dynamically by DynamicFavicon component
  // to support custom favicon from admin settings
  openGraph: { 
    type: 'website', 
    locale: 'vi_VN', 
    siteName: 'News Platform',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        {/* Temporarily disabled to debug navigation issue */}
        {/* <CustomScriptsHead /> */}
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <AuthProvider>
          <SettingsProvider>
            <ChatProvider>
              <DynamicFavicon />
              <MainLayout>{children}</MainLayout>
            </ChatProvider>
          </SettingsProvider>
        </AuthProvider>
        {/* <CustomScriptsFooter /> */}
      </body>
    </html>
  );
}
