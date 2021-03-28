import React, {useState} from 'react';
import styled from '@emotion/styled';

export type InputType = {
    placeholder?: string
    value?: string
    name?: string
    onChange?: Function
    label?: string
    theme?: string
    inputType?: string
}

function Input({placeholder, value, name, onChange, label, theme}:InputType):React.ReactElement {
    return(
        <StyledInput
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={(e)=>{onChange && onChange(e)}}
        />
    )
}

export function Input2({value, name, onChange, label='', theme='white', inputType="text"}:InputType):React.ReactElement {
    const [toggle, setToggle] = useState(false);
    const [type, setType] = useState(inputType);

    const onClickHandler = () => {
        setType(toggle ? 'text' : 'password');
        setToggle(!toggle);
    }
    return(
        <Div>
            <Inn type={type} theme={theme} placeholder=" " value={value} name={name} onChange={e=>{onChange && onChange(e)}} />
            <Span>{label}</Span>
            {inputType !== 'password' && <Pass onClick={onClickHandler}>{toggle ? '숨기기' : '비밀번호 표시'}</Pass>}
        </Div>
    )
}

export default Input;

  
const Div = styled.div`
    margin:20px 0;
    position:relative;
    display:inline-block;
`

const Span = styled.span`
    padding:10px;
    pointer-events: none;
    position:absolute;
    left:0;
    top:0;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity:0.5;
`
const Pass = styled.button`
    all:unset;
    padding:10px;
    position:absolute;
    right:0;
    top:0;
    opacity:1;
    font-weight: 900;
`

const Inn = styled.input`
    padding:10px;
    &:focus + span{
        opacity:1;
        transform: scale(0.75) translateY(-100%) translateX(-30px);
    }
    &:not(:placeholder-shown) + span{
        opacity:1;
        transform: scale(0.75) translateY(-100%) translateX(-30px);
    }
`

const StyledInput = styled.input`
  height: 38px;
  width: 270px;
  margin: 2px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 10px;
`;