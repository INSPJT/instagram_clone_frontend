import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

export const STATE = {
  default: 'default',
  accepted: 'accepted',
  error: 'error',
};

export type CheckIconProps = {
  state: keyof typeof STATE;
};

function StateIcon({ state }: CheckIconProps): ReactElement {
  return <Span state={state} />;
}

export default StateIcon;

type SpanProps = {
  state: keyof typeof STATE;
};

const Span = styled.span<SpanProps>`
  background-image: url('/img/sprite_core.png');
  width: 22px;
  height: 22px;
  ${({ state }) => {
    switch (state) {
      case 'accepted':
        return `background-size: 440px 411px; background-position: -402px -330px`;
      case 'error':
        return `background-size: 440px 411px; background-position: -402px -353px`;
      default:
        return '';
    }
  }}
`;
