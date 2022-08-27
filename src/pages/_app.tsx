import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Group, MantineProvider } from '@mantine/core';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Planner</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        theme={{
          colorScheme: 'light', //dark if you want
          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },
          headings: {
            fontFamily: 'Open Sans, sans serif',
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
