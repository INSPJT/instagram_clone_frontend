import React, { ReactElement } from 'react';
import Logo from 'components/Common/Logo';
import styled from '@emotion/styled';
import SigninForm from 'components/SigninForm/SigninForm';

function Signin(): ReactElement {
  return (
    <Section>
      <Main>
        <Logo />
        <SigninForm />
      </Main>
    </Section>
  );
}

export default Signin;

const Section = styled.section`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
