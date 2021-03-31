import React from 'react';
import styled from '@emotion/styled';
import ClipLoader from 'react-spinners/ClipLoader';

export type ButtonType = {
  theme?: 'default' | 'blue';
  loading?: boolean;
  children: React.ReactNode;
  full?: boolean;
};

function Button({ theme, loading, children, full }: ButtonType): React.ReactElement {
  return (
    <StyledButton theme={theme} full={full}>
      {loading ? <ClipLoader color={theme === 'default' ? 'black' : 'white'} size={13} /> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  theme: 'default',
  loading: false,
  full: false,
};

export default Button;

type StyledButtonType = {
  theme?: 'default' | 'blue';
  full?: boolean;
};

const StyledButton = styled.button<StyledButtonType>`
  all: unset;
  cursor: pointer;
  border: 1px solid ${({ theme }) => (theme === 'default' ? 'rgba(219, 219, 219, 1)' : 'transparent')};
  background-color: ${({ theme }) => (theme === 'blue' ? 'rgb(0,149,246)' : '')};
  border-radius: 4px;
  color: ${({ theme }) => (theme === 'default' ? 'rgb(38, 38, 38)' : 'rgb(255,255,255)')};
  padding: 5px 9px;
  min-width: 37px;
  width: ${({ full }) => (full ? '100%' : '')};
  display: flex;
  font-size: 14px;
  justify-content: center;
`;
