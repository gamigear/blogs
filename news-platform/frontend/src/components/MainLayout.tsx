'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CustomScripts } from '@/components/CustomScripts';
import { CustomCSSLoader } from '@/components/CustomCSSLoader';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // Admin routes have their own layout, don't show main Header/Footer
  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCSSLoader />
      <CustomScripts position="body_top" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CustomScripts position="body_bottom" />
    </>
  );
}
