import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

export type InputType = {
    placeholder?: string
    value?: string
    name?: string
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    label?: string
    theme?: 'gray' | 'white'
    inputType?: 'text' | 'password' | 'number'
}

function Input({ value, name, onChange, label = '', theme = 'white', inputType = "text", placeholder = "" }: InputType): React.ReactElement {
    const [toggle, setToggle] = useState(false);
    const [type, setType] = useState(inputType);
    const onClickToggle = useCallback(() => {
        setType(!toggle ? 'text' : 'password');
        setToggle(!toggle);
    }, [toggle]);

    return (
        <>
            {label ?
                <Container theme={theme}>
                    <StyledInput type={type} placeholder=" " value={value} name={name} onChange={e => { onChange && onChange(e) }} />
                    <Label>{label}</Label>
                    {inputType === 'password' && <ToggleButton type="button" onClick={onClickToggle}>{toggle ? '숨기기' : '비밀번호 표시'}</ToggleButton>}
                </Container> :
                <Container theme={theme}>
                    <StyledInput type={type} placeholder={placeholder} value={value} name={name} onChange={e => { onChange && onChange(e) }} />
                    {inputType === 'password' && <ToggleButton type="button" onClick={onClickToggle}>{toggle ? '숨기기' : '비밀번호 표시'}</ToggleButton>}
                </Container>
            }

        </>
    )
}

export default Input;


const Container = styled.div`
    border: 3px solid rgb(220, 220, 220);
    border-radius: 5px;
    background:${props => props.theme === 'white' ? 'white' : ' rgba(240, 240, 240, 1)'};
    height: 38px;
    width: 270px;
    margin: 5px 0;
    position:relative;
    display:inline-block;
`

const Label = styled.span`
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
const ToggleButton = styled.button`
    all:unset;
    padding:10px;
    position:absolute;
    right:0;
    top:0;
    opacity:1;
    font-weight: 900;
`

const StyledInput = styled.input`
    all:unset;
    width:50%;
    height:100%;
    
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
