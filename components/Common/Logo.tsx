import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

function Logo(): ReactElement {
  return <StyledLogo />;
}

export default Logo;

const StyledLogo = styled.h1`
  background-image: url('/img/sprite_core.png');
  height: 51px;
  width: 175px;
  background-size: 440px 411px;
  background-position: 0 -129px;
`;
