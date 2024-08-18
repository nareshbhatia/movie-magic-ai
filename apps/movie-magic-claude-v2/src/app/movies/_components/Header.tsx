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
import { Film, Menu } from 'lucide-react';
import Link from 'next/link';
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
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/movies" legacyBehavior passHref>
                    <Button as="a" variant="ghost">
                      Movies
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/watchlist" legacyBehavior passHref>
                    <Button as="a" variant="ghost">
                      Watchlist
                    </Button>
                  </Link>
                </li>
              </ul>
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
