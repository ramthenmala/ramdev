import '/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import PageHeader from '../components/Header/PageHeader';

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
