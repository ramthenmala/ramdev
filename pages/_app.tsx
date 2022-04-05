import '/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import PageLoader from '../components/NPgrogress';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PageLoader />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
