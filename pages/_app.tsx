import React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
            margin: 0;
          }
        `}
      />
      <CookiesProvider>
        <Component {...pageProps}>_App</Component>
      </CookiesProvider>
    </>
  );
}
