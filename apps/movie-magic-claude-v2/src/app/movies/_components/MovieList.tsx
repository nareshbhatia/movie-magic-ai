'use client';

import type { Movie } from '@/models';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface MovieListProps {
  movies: Movie[];
}

function MobileMovieList({ movies }: MovieListProps) {
  return (
    <div className="space-y-4 p-4">
      {movies.map((movie) => (
        <div className="flex h-28 items-center" key={movie.id}>
          <Image
            alt={movie.name}
            className="mr-4 rounded"
            height={96}
            src={movie.image.url}
            width={64}
          />
          <div>
            <h2 className="text-lg font-bold text-white">{movie.name}</h2>
            <p className="text-sm text-gray-400">{movie.genres.join(' • ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopMovieList({ movies }: MovieListProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-700 text-left">
          <th className="p-4">Rank</th>
          <th className="p-4">Title</th>
          <th className="p-4 text-right">Rating</th>
          <th className="p-4 text-right">Year</th>
          <th className="p-4 text-right">Runtime</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr className="h-28 border-b border-gray-700" key={movie.id}>
            <td className="p-4 align-middle">{movie.rank}</td>
            <td className="p-4 align-middle">
              <div className="flex items-center">
                <Image
                  alt={movie.name}
                  className="mr-4 rounded"
                  height={96}
                  src={movie.image.url}
                  width={64}
                />
                <div>
                  <h2 className="font-bold text-white">{movie.name}</h2>
                  <p className="text-sm text-gray-400">
                    {movie.genres.join(' • ')}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-4 text-right align-middle">{movie.certificate}</td>
            <td className="p-4 text-right align-middle">{movie.releaseYear}</td>
            <td className="p-4 text-right align-middle">{movie.runtime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function MovieList({ movies }: MovieListProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  return (
    <div className="bg-black text-white">
      {isMobile ? (
        <MobileMovieList movies={movies} />
      ) : (
        <DesktopMovieList movies={movies} />
      )}
    </div>
  );
}
