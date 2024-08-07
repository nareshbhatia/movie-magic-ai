import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import React from 'react';

function Toolbar() {
  return (
    <div className="container flex h-14 max-w-screen-lg items-center justify-between px-4 sm:px-8">
      <Button variant="outline">
        Filter & Sort <ListFilter className="ml-2 size-4" />
      </Button>
      <Badge variant="secondary">250 movies</Badge>
    </div>
  );
}

export default Toolbar;
