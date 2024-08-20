import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { movies } from '@/data/movies';
import { Film, ListFilter } from 'lucide-react';

export default function MoviesPage() {
  return (
    <div className="flex h-screen flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="flex h-[56px] items-center justify-between border-b border-gray-800 px-4">
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-xl font-bold">
            <Film className="mr-2" size={24} />
            Movie Magic
          </span>
          <nav className="flex space-x-4">
            <a className="font-medium" href="/movies">
              Movies
            </a>
            <a className="text-gray-400" href="/watchlist">
              Watchlist
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Add dark mode toggle and user profile icon here */}
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex h-[56px] items-center justify-between px-4">
        <Button variant="outline">
          <span className="mr-2">Filter & Sort</span>
          <ListFilter size={16} />
        </Button>
        <span className="text-gray-400">250 movies</span>
      </div>

      {/* Movie List */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Rating</TableHead>
              <TableHead className="text-right">Year</TableHead>
              <TableHead className="text-right">Runtime</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie) => (
              <TableRow className="h-[100px]" key={movie.id}>
                <TableCell className="text-xl font-medium">
                  {movie.rank}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={movie.name}
                      className="h-24 w-16 object-cover"
                      src={movie.image.url}
                    />
                    <div>
                      <div className="text-lg font-bold">{movie.name}</div>
                      <div className="text-sm text-gray-400">
                        {movie.genres.join(' • ')}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {movie.certificate}
                </TableCell>
                <TableCell className="text-right">
                  {movie.releaseYear}
                </TableCell>
                <TableCell className="text-right">{movie.runtime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
