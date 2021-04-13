import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

export type LayoutProps = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactElement;
};

function Layout({ header, footer, children }: LayoutProps): ReactElement {
  return (
    <Container>
      {header}
      <ChildrenContainer>{children}</ChildrenContainer>
      {footer}
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  flex: 1 1 auto;
`;
