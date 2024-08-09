'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Film, Menu, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [_, setIsDrawerOpen] = useState(false);
  return (
    <header className="flex items-center justify-between border-b pb-4 dark:border-muted">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={`rounded-full p-2 transition-colors sm:hidden ${
              isDarkMode
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground hover:bg-muted/90'
            }`}
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <Menu className="size-6" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-[300px] p-4" side="left">
          <div className="flex items-center space-x-4">
            <Film className="size-6" />
            <h1 className="text-xl font-bold">Movie Magic</h1>
          </div>
          <nav className="mt-6 flex flex-col space-y-4">
            <Link className="font-medium" href="/movies" prefetch={false}>
              Movies
            </Link>
            <Link className="font-medium" href="/watchlist" prefetch={false}>
              Watchlist
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden items-center space-x-4 sm:flex">
        <div className="flex items-center space-x-4">
          <Film className="size-6" />
          <h1 className="text-xl font-semibold">Movie Magic</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link className="font-medium" href="/movies" prefetch={false}>
            Movies
          </Link>
          <Link className="font-medium" href="/watchlist" prefetch={false}>
            Watchlist
          </Link>
        </nav>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`rounded-full p-2 transition-colors ${
                isDarkMode
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-muted-foreground hover:bg-muted/90'
              }`}
            >
              <div>
                <Sun className="size-6" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              onClick={() => {
                setIsDarkMode(false);
              }}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setIsDarkMode(true);
              }}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setIsDarkMode(true);
              }}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-muted-foreground">
                john@example.com
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
