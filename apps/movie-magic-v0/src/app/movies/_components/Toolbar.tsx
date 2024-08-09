'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { ListFilter } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="flex items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center space-x-2" variant="outline">
            <span>Filter & Sort</span>
            <ListFilter className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] p-4" side="left">
          Filter & Sort
        </SheetContent>
      </Sheet>
      <Badge variant="secondary">250 Movies</Badge>
    </div>
  );
}
