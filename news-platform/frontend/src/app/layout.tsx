import './globals.css';
import { Metadata } from 'next';
import { AuthProvider } from '@/components/AuthProvider';
import { MainLayout } from '@/components/MainLayout';
import { CustomScriptsHead, CustomScriptsFooter } from '@/components/CustomScriptsSSR';
import { SettingsProvider } from '@/contexts/SettingsContext';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'News Platform', template: '%s | News Platform' },
  description: 'Tin tức và cộng đồng thảo luận',
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
        <CustomScriptsHead />
      </head>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <SettingsProvider>
            <MainLayout>{children}</MainLayout>
          </SettingsProvider>
        </AuthProvider>
        <CustomScriptsFooter />
      </body>
    </html>
  );
}
