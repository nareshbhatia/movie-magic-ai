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
import { mainNavItems } from '@/config/main-nav';
import { cn } from '@/lib/utils';
import { Film, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between bg-background">
      <Sheet onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
        <SheetTrigger asChild>
          <Button
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 min-[500px]:hidden"
            variant="ghost"
          >
            <Menu className="size-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full" side="left">
          <div className="flex items-center gap-x-2">
            <Film className="size-6" />
            <span className="font-semibold dark:font-bold">Movie Magic</span>
          </div>
          <nav className="my-4 flex flex-col space-y-3 pb-10 pl-6 text-sm">
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
        </SheetContent>
      </Sheet>
      <div className="hidden items-center space-x-4 min-[500px]:flex">
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
      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative size-8 rounded-full" variant="ghost">
              <Avatar className="size-8">
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
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
