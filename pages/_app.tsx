import React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { CookiesProvider } from 'react-cookie';
import MemberProvider from 'components/MemberProvider/MemberProvider';
import Layout from 'components/Layout/Layout';
import Footer from 'components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const footer = <Footer />;
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
          <Layout header={null} footer={footer}>
            <Component {...pageProps}>_App</Component>
          </Layout>
        </MemberProvider>
      </CookiesProvider>
    </>
  );
}
