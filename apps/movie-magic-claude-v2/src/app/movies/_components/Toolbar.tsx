import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="flex items-center justify-between bg-black p-4 text-white">
      <Button variant="outline">
        <SlidersHorizontal className="mr-2 size-4" />
        Filter & Sort
      </Button>
      <Badge variant="secondary">250 movies</Badge>
    </div>
  );
}
