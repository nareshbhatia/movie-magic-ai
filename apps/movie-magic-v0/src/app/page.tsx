import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome to Movie Magic</h1>
      <Link href="/movies" prefetch={false}>
        Explore our movie collection <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
