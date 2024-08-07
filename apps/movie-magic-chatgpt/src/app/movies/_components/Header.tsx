'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';

function Header() {
  const [theme, setTheme] = React.useState('dark');

  return (
    <header className="flex h-14 items-center justify-between px-4">
      {/* Icon + Logo */}
      <div className="flex items-center space-x-2">
        <div className="icon">🎬</div>
        <h1 className="font-bold">Movie Magic</h1>
      </div>

      {/* Navigation */}
      <nav className="hidden space-x-4 md:flex">
        <a className="hover:underline" href="/movies">
          Movies
        </a>
        <a className="hover:underline" href="/watchlist">
          Watchlist
        </a>
      </nav>

      {/* Mode Toggle and User Menu */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
