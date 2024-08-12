import type { Movie } from '@/models/Movie';
import Image from 'next/image';

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="h-[39px] border-b">
            <th className="w-8 px-3 text-right font-medium">Rank</th>
            <th className="px-3 text-left font-medium">Title</th>
            <th className="w-24 px-3 text-center font-medium">Rating</th>
            <th className="w-24 px-3 text-right font-medium">Year</th>
            <th className="w-24 px-3 text-right font-medium">Runtime</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr className="h-28 border-b" key={movie.id}>
              <td className="px-3 text-right">{movie.rank}</td>
              <td className="px-3">
                <div className="flex items-center space-x-3">
                  {movie.image ? (
                    <Image
                      alt={movie.name}
                      className="rounded"
                      height={96}
                      src={movie.image.url}
                      width={64}
                    />
                  ) : undefined}
                  <div>
                    <h3 className="line-clamp-2 font-medium">{movie.name}</h3>
                    <p className="text-sm text-gray-500">
                      {movie.genres
                        .slice(0, 3)
                        .map((genre) => genre.toLowerCase())
                        .join(' • ')}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-3 text-center">
                {movie.ratingsSummary.aggregateRating.toFixed(1)}
              </td>
              <td className="px-3 text-right">{movie.releaseYear}</td>
              <td className="px-3 text-right">{`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
