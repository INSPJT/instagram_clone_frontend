import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';

export type AnchorProps = {
  children: ReactNode;
} & LinkProps;

function Anchor({ children, ...linkProps }: AnchorProps): ReactElement {
  return (
    <Link {...linkProps}>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  );
}

export default Anchor;

const StyledAnchor = styled.a`
  cursor: pointer;
  font-weight: 600;
`;
