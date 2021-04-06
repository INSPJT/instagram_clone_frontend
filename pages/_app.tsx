import React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';

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
      <Component {...pageProps}>_App</Component>
    </>
  );
}
