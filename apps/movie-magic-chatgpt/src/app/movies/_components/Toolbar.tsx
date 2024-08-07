import React from 'react';

function Toolbar() {
  return (
    <div className="container flex h-14 max-w-screen-lg items-center justify-between px-4 sm:px-8">
      <button className="button rounded-md bg-blue-500 px-3 py-2 text-white">
        Filter & Sort
      </button>
      <span className="badge rounded-full bg-gray-200 px-2 py-1 text-gray-700">
        250 Movies
      </span>
    </div>
  );
}

export default Toolbar;
