import App from 'next/app';
import { createContext } from 'react';
import type { AppProps } from 'next/app';
import { fetchAPI } from '../lib/api';
import '../styles/globals.css';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global.attributes}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  });
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
