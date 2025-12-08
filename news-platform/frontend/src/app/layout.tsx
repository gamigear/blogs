import './globals.css';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthProvider } from '@/components/AuthProvider';

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
      <body className="min-h-screen flex flex-col bg-gray-50">
        <AuthProvider>
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
