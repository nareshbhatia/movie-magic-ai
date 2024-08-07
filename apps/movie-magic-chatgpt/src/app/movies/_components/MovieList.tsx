import { movies } from '@/data/movies';
import React from 'react';

function MovieList() {
  return (
    <div className="container relative flex w-full max-w-screen-lg flex-1 flex-col overflow-auto px-4 py-2 sm:px-8">
      {/* Header Row */}
      <div className="movie-list-header grid h-10 grid-cols-7 gap-4 px-4">
        <div>#</div>
        <div />
        <div>Title</div>
        <div>Genres</div>
        <div>Rating</div>
        <div>Year</div>
        <div>Runtime</div>
      </div>

      {/* Movie Entries */}
      <div className="movie-list-entries flex-1">
        {movies.map((movie) => (
          <div
            className="movie-entry grid h-[112px] grid-cols-7 gap-4 border-b p-2 px-4"
            key={movie.id}
          >
            <div className="flex items-center">{movie.rank}</div>

            <div className="relative flex h-24 w-16 shrink-0 overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={movie.name}
                className="aspect-[2/3] w-full object-cover"
                src={movie.image.url}
                width={movie.image.width}
              />
            </div>

            <div className="flex items-center">{movie.name}</div>

            <div className="flex items-center">{movie.genres.join(', ')}</div>

            <div className="flex items-center">{movie.certificate}</div>

            <div className="flex items-center">{movie.releaseYear}</div>

            <div className="flex items-center">
              {Math.floor(movie.runtime / 3600)}h{' '}
              {Math.floor((movie.runtime % 3600) / 60)}m
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
