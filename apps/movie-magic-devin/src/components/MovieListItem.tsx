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

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => (
  <div className="flex items-center border-b p-4">
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
);

export default MovieListItem;
