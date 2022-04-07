import '/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import PageLoader from '../components/NPgrogress';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <PageLoader />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id="G-3BX5WR2Y2Q"`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "G-3BX5WR2Y2Q");
        `}
      </Script>
    </>
  );
}

export default MyApp;
