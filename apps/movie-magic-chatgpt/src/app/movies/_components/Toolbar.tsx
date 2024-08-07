import React from 'react';

function Toolbar() {
  return (
    <div className="flex h-14 items-center justify-between px-4">
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
