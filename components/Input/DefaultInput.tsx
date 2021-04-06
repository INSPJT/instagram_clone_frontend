import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import type { STATE } from 'components/Input/StateIcon';
import StateIcon from 'components/Input/StateIcon';
import PasswordToggleButton from 'components/Input/PasswordToggleButton';

export type DefaultInputProps = {
  theme: 'gray' | 'white';
  placeholder: string;
  state: keyof typeof STATE;
  type: 'text' | 'number' | 'password';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function DefaultInput({ theme, placeholder, state, type, value, onChange }: DefaultInputProps): ReactElement {
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');
  const inputType = useMemo(() => {
    if (type !== 'password') {
      return type;
    }
    return isPassword ? 'password' : 'text';
  }, [type, isPassword]);
  const handleToggle = useCallback(() => setIsPassword((prev) => !prev), []);
  return (
    <Container theme={theme}>
      <Input type={inputType} placeholder={placeholder} value={value} onChange={onChange} />
      <InfoContainer>
        {state !== 'default' && <StateIcon state={state} />}
        {type === 'password' && <PasswordToggleButton isPassword={isPassword} onClick={handleToggle} />}
      </InfoContainer>
    </Container>
  );
}

export default DefaultInput;

type ContainerProps = {
  theme: 'white' | 'gray';
};
const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => (theme === 'white' ? 'white' : ' rgb(240, 240, 240)')};
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  font-size: 14px;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  height: 36px;
  width: 100%;
  padding: 0 10px;
  font: 400 16px Arial;
`;

const InfoContainer = styled.div`
  display: flex;
  padding-right: 8px;
`;
