'use client';

import React, { useState } from 'react';

function Toolbar() {
  const [totalMovies, _] = useState(0); // This should be replaced with actual data
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex items-center justify-between border-b bg-background p-4">
      <div className="relative">
        <button
          className="rounded border px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleFilter}
        >
          Filter & Sort
        </button>
        {isFilterOpen ? (
          <div className="absolute left-0 mt-2 w-64 rounded border bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">
              Filter & Sort Options
            </h2>
            {/* Add your filter and sort UI elements here */}
          </div>
        ) : undefined}
      </div>

      <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
        Total Movies: {totalMovies}
      </span>
    </div>
  );
}

export default Toolbar;
