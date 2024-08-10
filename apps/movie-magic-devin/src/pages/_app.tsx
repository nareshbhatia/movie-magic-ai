import Toolbar from '@/components/Toolbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
