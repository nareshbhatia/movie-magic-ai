import { AppProvider } from '@/providers';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './globals.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Movie Magic v0',
  description: 'Movie Magic v0',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  noStore();

  const baseApiUrl = process.env.BASE_API_URL ?? '';

  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AppProvider baseApiUrl={baseApiUrl}>{children}</AppProvider>
      </body>
    </html>
  );
}
