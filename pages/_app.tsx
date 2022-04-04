import '/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
