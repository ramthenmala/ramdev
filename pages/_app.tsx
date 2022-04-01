import '/styles/globals.css';
import type { AppProps } from 'next/app';
import PageHeader from 'components/Header';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <PageHeader />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
