import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

export type PasswordToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isPassword: boolean;
};

function PasswordToggleButton({ onClick, isPassword }: PasswordToggleButtonProps): ReactElement {
  return (
    <Button onClick={onClick} type="button">
      {isPassword ? '비밀번호 표시' : '숨기기'}
    </Button>
  );
}

export default PasswordToggleButton;

const Button = styled.button`
  all: unset;
  font-weight: 600;
  cursor: pointer;
`;
