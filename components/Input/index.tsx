import React from 'react';
import styled from '@emotion/styled';

export type InputType = {
    placeholder?: string;
    value?: string;
    name?: string;
    onChange?: Function;
}

function Input({placeholder, value, name, onChange}:InputType):React.ReactElement {
    return(
        <StyledInput
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={(e)=>{onChange && onChange(e)}}
        />
    )
}

export default Input;

const StyledInput = styled.input`
  height: 38px;
  width: 270px;
  margin: 2px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 10px;
`;