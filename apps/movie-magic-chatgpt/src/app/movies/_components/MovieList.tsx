import { movies } from '@/data/movies';
import { formatDuration } from '@/lib/utils';
import React from 'react';

function MovieList() {
  return (
    <div className="container relative flex w-full max-w-screen-lg flex-1 flex-col px-4 py-2 sm:px-8">
      {/* Header Row */}
      <div className="hidden h-10 grid-cols-[32px_64px_1fr_48px_48px_48px] gap-4 border-b border-gray-600 px-4 sm:grid">
        <div className="hidden justify-end pr-2 text-sm text-gray-400 sm:flex">
          #
        </div>
        <div className="flex justify-start text-sm text-gray-400">Title</div>
        <div />
        <div className="hidden justify-center text-sm text-gray-400 sm:flex">
          Rating
        </div>
        <div className="hidden justify-end text-sm text-gray-400 sm:flex">
          Year
        </div>
        <div className="hidden justify-end text-sm text-gray-400 sm:flex">
          Runtime
        </div>
      </div>

      {/* Movie Entries */}
      <div className="flex-1 overflow-auto">
        {movies.map((movie) => (
          <div
            className="grid h-[112px] grid-cols-[64px_1fr] gap-4 border-b border-gray-700 p-2 px-4 sm:grid-cols-[32px_64px_1fr_48px_48px_48px]"
            key={movie.id}
          >
            <div className="hidden items-center justify-end pr-2 text-sm text-gray-300 sm:flex">
              {movie.rank}
            </div>

            <div className="relative flex h-24 w-16 shrink-0 overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={movie.name}
                className="aspect-[2/3] w-full object-cover"
                src={movie.image.url}
                width={movie.image.width}
              />
            </div>

            <div className="flex flex-col justify-center overflow-hidden">
              <div className="line-clamp-2 max-w-full truncate whitespace-normal text-base font-medium text-white">
                {movie.name}
              </div>
              <div className="text-sm text-gray-400">
                {movie.genres.join(' · ')}
              </div>
            </div>

            <div className="hidden items-center justify-center text-sm text-gray-300 sm:flex">
              {movie.certificate}
            </div>

            <div className="hidden items-center justify-end text-sm text-gray-300 sm:flex">
              {movie.releaseYear}
            </div>

            <div className="hidden items-center justify-end text-sm text-gray-300 sm:flex">
              {formatDuration(movie.runtime)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
