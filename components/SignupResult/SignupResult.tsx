import React, { ReactElement, useCallback } from 'react';
import styled from '@emotion/styled';
import Button from 'components/Button';
import { useRouter } from 'next/router';

export type SignupResultProps = {
  displayId: string;
};

function SignupResult({ displayId }: SignupResultProps): ReactElement {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push('/accounts/signin');
  }, []);
  return (
    <Container>
      <Paragraph>{displayId}님, Instagram에 오신것을 환영합니다!</Paragraph>
      <Button theme="blue" full onClick={handleClick}>
        로그인 하러 가기
      </Button>
    </Container>
  );
}

export default SignupResult;

const Container = styled.div`
  margin: 10px 40px;
`;

const Paragraph = styled.h2`
  text-align: center;
`;
