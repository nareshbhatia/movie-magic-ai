import Header from './_components/Header';
import MovieList from './_components/MovieList';
import Toolbar from './_components/Toolbar';

export default function MoviesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <Toolbar />
      <MovieList />
    </div>
  );
}
