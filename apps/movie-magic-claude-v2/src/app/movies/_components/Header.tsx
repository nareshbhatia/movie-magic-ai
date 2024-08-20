'use client';

import { ModeToggle } from './ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mainNavItems } from '@/config/main-nav';
import { cn } from '@/lib/utils';
import { Film, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage alt="User" src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  return (
    <header className="flex h-14 items-center justify-between bg-black px-4 text-white">
      {isMobile ? (
        <>
          <Button size="icon" variant="ghost">
            <Menu className="size-6" />
          </Button>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <UserMenu />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <Film className="size-6" />
            <h1 className="text-lg font-semibold">Movie Magic</h1>
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
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <UserMenu />
          </div>
        </>
      )}
    </header>
  );
}
