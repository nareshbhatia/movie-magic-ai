'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { ListFilter } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="sticky top-14 z-50 flex h-14 w-full items-center justify-between bg-background">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center space-x-2" variant="outline">
            <span>Filter & Sort</span>
            <ListFilter className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full" side="left">
          <h1 className="flex-1 text-center text-lg">Filter & Sort</h1>
        </SheetContent>
      </Sheet>
      <Badge variant="secondary">250 Movies</Badge>
    </div>
  );
}
