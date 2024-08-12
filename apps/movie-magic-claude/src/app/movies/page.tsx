import { Header } from './_components/Header';
import { MovieList } from './_components/MovieList';
import { Toolbar } from './_components/Toolbar';
import { movies } from '@/data/movies';

export default function MoviesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Toolbar movieCount={movies.length} />
      <MovieList movies={movies} />
    </main>
  );
}
