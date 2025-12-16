'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { forwardRef, MouseEvent, ReactNode } from 'react';

interface AppLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Custom Link component that handles navigation more reliably
 * Uses router.push as fallback if Link navigation fails
 */
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, children, className, onClick, prefetch = false, ...props }, ref) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      // Call custom onClick if provided
      if (onClick) {
        onClick(e);
      }

      // If not prevented, use router.push as backup
      if (!e.defaultPrevented) {
        e.preventDefault();
        router.push(href);
      }
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={className}
        prefetch={prefetch}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

AppLink.displayName = 'AppLink';
