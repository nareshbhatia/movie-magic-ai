'use client';

import { ModeToggle } from './ModeToggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Film, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="flex items-center justify-between border-b pb-4 dark:border-muted">
      <Sheet onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
        <SheetTrigger asChild>
          <Button
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 min-[500px]:hidden"
            variant="ghost"
          >
            <Menu className="size-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full" side="left">
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
      <div className="hidden items-center space-x-4 min-[500px]:flex">
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
        <ModeToggle />
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
