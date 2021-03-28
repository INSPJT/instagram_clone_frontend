import React, { useState } from 'react';
import styled from '@emotion/styled';

export type InputType = {
    value?: string
    name?: string
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    label?: string
    theme?: 'gray' | 'white'
    inputType?: 'text' | 'password' | 'number'
}

export function Input({ value, name, onChange, label = '', theme = 'white', inputType = "text" }: InputType): React.ReactElement {
    const [toggle, setToggle] = useState(false);
    const [type, setType] = useState(inputType);

    const onClickHandler = () => {
        setType(!toggle ? 'text' : 'password');
        setToggle(!toggle);
    }
    return (
        <Div>
            <Inn type={type} theme={theme} placeholder=" " value={value} name={name} onChange={e => { onChange && onChange(e) }} />
            <Span>{label}</Span>
            {inputType === 'password' && <IsDisplayPassword type="button" onClick={onClickHandler}>{toggle ? '숨기기' : '비밀번호 표시'}</IsDisplayPassword>}
        </Div>
    )
}

export default Input;


const Div = styled.div`
    height: 38px;
    width: 270px;
    margin: 5px 0;
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
    width:100%;
    height:100%;
    background:${props => props.theme === 'white' ? 'white' : ' rgba(240, 240, 240, 1)'};
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    padding-left:10px;
    &:focus + span{
        opacity:0.5;
        transform: scale(0.75) translateY(-40%) translateX(-15px);
    }
    &:not(:placeholder-shown) + span{
        opacity:0.5;
        transform: scale(0.75) translateY(-40%) translateX(-15px);   
    }
`
