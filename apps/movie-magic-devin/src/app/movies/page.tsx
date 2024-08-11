import Header from './_components/Header';
import MovieList from './_components/MovieList';
import Toolbar from './_components/Toolbar';
import React from 'react';

function MoviesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <Toolbar />
      <MovieList />
    </div>
  );
}

export default MoviesPage;
