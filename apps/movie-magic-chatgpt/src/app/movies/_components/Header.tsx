'use client';

import { ModeToggle } from './ModeToggle';
import { cn } from '@/lib/utils';
import { Film } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const mainNavItems = [
  {
    title: 'Movies',
    href: '/movies',
  },
  {
    title: 'Watchlist',
    href: '/watchlist',
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-14 max-w-screen-lg items-center px-4 sm:px-8">
        <div className="hidden gap-4 min-[500px]:flex lg:gap-6">
          <div className="flex items-center gap-x-2">
            <Film className="size-6" />
            <span className="font-semibold dark:font-bold">Movie Magic</span>
          </div>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {mainNavItems.map((item) => (
              <Link
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname.startsWith(item.href)
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
                href={item.href}
                key={item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <nav className="flex flex-1 items-center justify-end gap-3">
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
