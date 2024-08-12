import { Header } from './_components/Header';
import { MovieList } from './_components/MovieList';
import { Toolbar } from './_components/Toolbar';
import { movies } from '@/data/movies';

export default function MoviesPage() {
  return (
    <div className="container relative mx-auto flex min-h-screen max-w-screen-lg flex-col px-4 sm:px-8">
      <Header />
      <main className="flex-1">
        <Toolbar />
        <MovieList movies={movies} />
      </main>
    </div>
  );
}
