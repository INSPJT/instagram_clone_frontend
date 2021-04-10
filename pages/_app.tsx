import React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { CookiesProvider } from 'react-cookie';
import MemberProvider from 'components/MemberProvider/MemberProvider';

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
        <MemberProvider>
          <Component {...pageProps}>_App</Component>
        </MemberProvider>
      </CookiesProvider>
    </>
  );
}
