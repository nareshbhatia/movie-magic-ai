import type React from 'react';

interface Movie {
  id: string;
  name: string;
  image: string;
  genres: string[];
  releaseYear: number;
  runtime: number;
  ratingsSummary: {
    aggregateRating: number;
  };
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <div className="flex flex-col">
    {/* Table Header */}
    <div className="flex bg-gray-100 p-4 font-bold sm:hidden">
      <div className="w-1/4">Image</div>
      <div className="w-3/4">Title</div>
    </div>
    <div className="hidden bg-gray-100 p-4 font-bold sm:flex">
      <div className="w-1/6">Image</div>
      <div className="w-1/4">Title</div>
      <div className="w-1/6">Year</div>
      <div className="w-1/6">Runtime</div>
      <div className="w-1/6">Rating</div>
    </div>

    {/* Movie Rows */}
    {movies.map((movie) => (
      <div className="flex items-center border-b p-4" key={movie.id}>
        <div className="w-1/4 sm:w-1/6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={movie.name} className="h-auto w-full" src={movie.image} />
        </div>
        <div className="w-3/4 sm:w-1/4">
          <h3 className="font-semibold">{movie.name}</h3>
          <p className="text-sm text-gray-600">{movie.genres.join(', ')}</p>
        </div>
        <div className="hidden w-1/6 sm:block">{movie.releaseYear}</div>
        <div className="hidden w-1/6 sm:block">{movie.runtime} min</div>
        <div className="hidden w-1/6 sm:block">
          {movie.ratingsSummary.aggregateRating}
        </div>
      </div>
    ))}
  </div>
);

export default MovieList;
