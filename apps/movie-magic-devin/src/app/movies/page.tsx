import MovieList from '@/components/MovieList';
import React from 'react';

// Sample movie data
const movies = [
  {
    id: '1',
    name: 'Inception',
    image: 'https://example.com/inception.jpg',
    genres: ['Sci-Fi', 'Action'],
    releaseYear: 2010,
    runtime: 148,
    ratingsSummary: {
      aggregateRating: 8.8,
    },
  },
  {
    id: '2',
    name: 'The Shawshank Redemption',
    image: 'https://example.com/shawshank.jpg',
    genres: ['Drama'],
    releaseYear: 1994,
    runtime: 142,
    ratingsSummary: {
      aggregateRating: 9.3,
    },
  },
  // Add more sample movies as needed
];

function MoviesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
