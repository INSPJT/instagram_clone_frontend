import React from 'react';
import LabelInput from 'components/Input/LabelInput';
import DefaultInput from 'components/Input/DefaultInput';
import type { STATE } from 'components/Input/StateIcon';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  theme?: 'gray' | 'white';
  type?: 'text' | 'password' | 'number';
  state?: keyof typeof STATE;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const defaultProps = {
  theme: 'white',
  type: 'text',
  state: 'default',
  placeholder: '',
};

function Input({
  value,
  onChange,
  label,
  theme,
  type,
  placeholder,
  state,
  onBlur,
}: InputProps & typeof defaultProps): React.ReactElement {
  if (label) {
    return (
      <LabelInput
        theme={theme}
        label={label}
        type={type}
        state={state}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
  return (
    <DefaultInput
      theme={theme}
      placeholder={placeholder}
      type={type}
      state={state}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

Input.defaultProps = defaultProps;

export default Input;
