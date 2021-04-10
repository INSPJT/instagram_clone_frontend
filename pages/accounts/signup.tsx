import React, { ReactElement, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import SignupForm from 'components/SignupForm';
import SignupResult from 'components/SignupResult';
import Logo from 'components/Common/Logo';
import Link from 'next/link';

function Signup(): ReactElement {
  const [displayId, setDisplayId] = useState('');
  const handleNext = useCallback((newDisplayId) => setDisplayId(newDisplayId), []);
  return (
    <Section>
      <Main>
        <Logo />
        {displayId ? (
          <SignupResult displayId={displayId} />
        ) : (
          <>
            <SignupForm next={handleNext} />
            <Paragraph>
              계정이 있으신가요?
              <Link href="/accounts/signin">
                <Anchor> 로그인</Anchor>
              </Link>
            </Paragraph>
          </>
        )}
      </Main>
    </Section>
  );
}

export default Signup;

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

const Paragraph = styled.h2`
  text-align: center;
  margin: 15px;
  font-size: 14px;
  color: rgb(38, 38, 38);
`;

const Anchor = styled.a`
  &,
  &:visited,
  &:active,
  &:hover {
    color: rgb(0, 149, 246);
  }
`;
