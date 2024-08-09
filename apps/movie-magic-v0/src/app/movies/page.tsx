import { Header } from './_components/Header';
import { MovieList } from './_components/MovieList';
import { Toolbar } from './_components/Toolbar';

export default function MoviesPage() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <Header />
      <main className="mt-4 flex flex-1 flex-col gap-4">
        <Toolbar />
        <MovieList />
      </main>
    </div>
  );
}
