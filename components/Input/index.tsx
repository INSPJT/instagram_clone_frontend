import React, {useState} from 'react';
import styled from '@emotion/styled';

export type InputType = {
    placeholder?: string
    value?: string
    name?: string
    onChange?: React.ChangeEvent<HTMLInputElement>
    label?: string
    theme?: string
    inputType?: 'text' | 'password' | 'number'
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
            {inputType === 'password' && <IsDisplayPassword type="button" onClick={onClickHandler}>{toggle ? '비밀번호 표시' : '숨기기'}</IsDisplayPassword>}
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
const IsDisplayPassword = styled.button`
    all:unset;
    padding:10px;
    position:absolute;
    right:0;
    top:0;
    opacity:1;
    font-weight: 900;
`

const Inn = styled.input`
    background:${props=>props.theme === 'white' ? 'white' : ' rgba(240, 240, 240, 1)'};
    padding:10px;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    &:focus + span{
        opacity:1;
        transform: scale(0.75) translateY(-100%) translateX(-20px);
        
    }
    &:not(:placeholder-shown) + span{
        opacity:1;
        transform: scale(0.75) translateY(-100%) translateX(-20px);
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