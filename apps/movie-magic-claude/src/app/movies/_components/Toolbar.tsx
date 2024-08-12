'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ListFilter } from 'lucide-react';
import { useState } from 'react';

export function Toolbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-14 z-50 flex h-14 w-full items-center justify-between bg-background">
      <Sheet onOpenChange={setOpen} open={open}>
        <SheetTrigger asChild>
          <Button className="flex items-center space-x-2" variant="outline">
            <span>Filter & Sort</span>
            <ListFilter className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full" side="left">
          <SheetHeader>
            <SheetTitle>Filter & Sort Movies</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Search</h3>
              <Input placeholder="Search movies..." />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Genre</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  {/* Add more genres as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Sort By</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="year">Release Year</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Apply Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Badge variant="secondary">250 Movies</Badge>
    </div>
  );
}
