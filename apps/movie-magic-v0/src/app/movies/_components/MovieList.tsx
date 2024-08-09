import { movies } from '@/data/movies';

export function MovieList() {
  return (
    <>
      <header className="sticky top-14 z-50 hidden w-full border-b bg-background sm:top-28 sm:block">
        <div className="flex items-center gap-x-3 px-2 py-3 text-sm leading-none text-muted-foreground">
          <div className="mr-2 hidden w-8 shrink-0 text-right sm:block">#</div>
          <div className="w-16 flex-1 shrink-0 ">Title</div>
          <div className="hidden w-12 shrink-0 text-center sm:block">
            Rating
          </div>
          <div className="hidden w-12 shrink-0 text-right sm:block">Year</div>
          <div className="hidden w-12 shrink-0 text-right sm:block">
            Runtime
          </div>
        </div>
      </header>
      {movies.map((movie) => (
        <div
          className="flex items-center gap-x-3 rounded-md p-2 text-sm text-muted-foreground hover:bg-muted/50"
          key={movie.id}
        >
          <div className="mr-2 hidden w-8 shrink-0 text-right text-base sm:block">
            {movie.rank}
          </div>
          <div className="relative flex h-24 w-16 shrink-0 overflow-hidden rounded-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={movie.name}
              className="aspect-[2/3] w-full object-cover"
              height={movie.image.height}
              src="/placeholder.svg"
              width={movie.image.width}
            />
          </div>
          <div className="mr-6 min-w-0 flex-1 overflow-hidden">
            <p className="line-clamp-2 text-base leading-5 text-accent-foreground">
              {movie.name}
            </p>
            <div className="flex items-center gap-x-1">
              {movie.genres.join(', ')}
            </div>
          </div>
          <div className="hidden w-12 shrink-0 text-center sm:block">
            {movie.certificate}
          </div>
          <div className="hidden w-12 shrink-0 text-right sm:block">
            {movie.releaseYear}
          </div>
          <div className="hidden w-12 shrink-0 text-right sm:block">
            {movie.runtime}
          </div>
        </div>
      ))}
    </>
  );
}
