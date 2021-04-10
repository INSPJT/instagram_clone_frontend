import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import StateIcon from 'components/Input/StateIcon';
import type { STATE } from 'components/Input/StateIcon';
import PasswordToggleButton from 'components/Input/PasswordToggleButton';

export type LabelInputProps = {
  theme: 'gray' | 'white';
  label: string;
  state: keyof typeof STATE;
  type: 'text' | 'number' | 'password';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

function LabelInput({
  theme,
  label,
  state,
  type,
  value: defaultValue,
  onChange,
  onBlur,
}: LabelInputProps): ReactElement {
  const [value, setValue] = useState<string>(defaultValue || '');
  useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue]);
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');
  const inputType = useMemo(() => {
    if (type !== 'password') {
      return type;
    }
    return isPassword ? 'password' : 'text';
  }, [type, isPassword]);
  const handleToggle = useCallback(() => setIsPassword((prev) => !prev), []);
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setValue(e.target.value);
      onChange?.(e);
    },
    [onChange],
  );
  return (
    <Container theme={theme}>
      <Label>
        <Span value={value}>{label}</Span>
        <Input value={value} onChange={handleChange} type={inputType} onBlur={onBlur} />
      </Label>
      <InfoContainer>
        {state !== 'default' && <StateIcon state={state} />}
        {type === 'password' && <PasswordToggleButton isPassword={isPassword} onClick={handleToggle} />}
      </InfoContainer>
    </Container>
  );
}

export default LabelInput;

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

const Label = styled.label`
  height: 36px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

type SpanProps = {
  value?: string;
};

const Span = styled.span<SpanProps>`
  position: absolute;
  color: rgb(142, 142, 142);
  height: 36px;
  font-size: 12px;
  line-height: 36px;
  left: 8px;
  transition: transform ease-out 0.1s;
  transform: ${({ value }) => value && 'scale(.83333) translateY(-10px)'};
  user-select: none;
  cursor: text;
`;

type InputProps = {
  value?: string;
};
const Input = styled.input<InputProps>`
  all: unset;
  padding: ${({ value }) => (value ? '14px 0 2px 8px' : '9px 0 7px 8px')};
  cursor: text;
  width: 100%;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  display: flex;
  padding-right: 8px;
`;
