'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, MouseEvent, AnchorHTMLAttributes } from 'react';

interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
}

/**
 * Custom navigation link that uses router.push instead of Next.js Link
 * to work around navigation issues in Next.js 16
 */
export function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
