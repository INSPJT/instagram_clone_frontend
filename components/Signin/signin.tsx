import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Router from 'next/router';
// import Input from '../input'
// import Input from '../Input'
import axios from 'axios';
// import * as logo from 'asset/instagramLogo.png'

export type SignInInputList = {
  email: string,
  password: string,
};

export const Signin = () => {
  const [inputs, setInputs] = useState<SignInInputList>({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [showSignInValidResult, setShowSignInValidResult] = useState<boolean>(false);
  const signinValidation = () : void => {
    let value = false;
    if (email && password.length > 6) value = true;
    setButtonActive(value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setInputs({
      ...inputs,
      [event.target.name]: event?.target.value,
    });
    signinValidation();
  };

  
}












return (
  <Container>
    <SignInContainer>
      {/* <Logo src={logo}></Logo> */}
      <HeaderText>친구들의 사진과 동영상을 보려면 가입하세요.</HeaderText>
      <Form>
        <Input
          placeholder="이메일 주소"
          label="이메일 주소"
          value={email}
          theme="gray"
          name={'email'}
          onChange={onChangeHandler}
        />
        <Input placeholder="비밀번호" value={password} name={'password'} onChange={onChangeHandler} />
        <Input label="비밀번호" inputType="password" theme="gray" value={password} name={'password'} onChange={onChangeHandler} />
      </Form>
      {/* {showSignUpValidResult && <IsValidText>가입 형식에 맞지 않습니다.</IsValidText>} */}
      <Button disabled={!buttonActive} onClick={onClickHandler} type={'submit'} buttonActive={buttonActive}>
        로그인
      </Button>
    </SignInContainer>
    <SignUpContainer>
      <h5>계정이 없으신가요?</h5>
      <Link href="/signup">
        <SignUpButton>가입하기</SignUpButton>
      </Link>
    </SignUpContainer>
  </Container>
);
};