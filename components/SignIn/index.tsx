import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Router from 'next/router'
import Input from '../Input';
import axios from 'axios';
import * as logo from 'asset/instagramLogo.png';

export type SignUpInputList = {
  displayId: string,
  email: string,
  nickname: string,
  password: string
};

export const SignIn = () => {
  const [inputs, setInputs] = useState<SignUpInputList>({
    displayId: "",
    email: "",
    nickname: "",
    password: ""
  });
  const { displayId, email, nickname, password } = inputs;
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [showSignUpValidResult, setShowSignUpValidResult] = useState<boolean>(false);
  const enrollmentValidation = (): void => {
    let value = false;
    if (email && displayId && nickname && password.length > 6) value = true;
    setButtonActive(value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    enrollmentValidation();
  };

  const onClickHandler = (): void => {

    let displayIdRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(displayId);
    let nicknameRegex = /^[a-zA-Z0-9_.-ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(nickname);
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
    console.log(`이름 형식 : ${displayIdRegex}, 닉네임 형식 : ${nicknameRegex}, 이메일 형식 : ${emailRegex}`);
    if (displayIdRegex && nicknameRegex && emailRegex) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/auth/signup',
        data: {
          displayId,
          email,
          nickname,
          password
        }
      })
        .then(() => {
          console.log('회원가입 완료');
          Router.push({
            pathname: '/login',
          });
        })
        .catch((error) => console.log(error));
    } else {
      setShowSignUpValidResult(true);
    }
  }
  return (
    <Container>
      <SignUpContainer>
        <Logo src={logo}></Logo>
        <HeaderText>친구들의 사진과 동영상을 보려면 가입하세요.</HeaderText>
        <Form>
          <Input
            label="이메일 주소"
            value={email}
            theme="gray"
            name={'email'}
            onChange={onChangeHandler}
          />
          <Input label="성명" theme="gray" value={displayId} name={'displayId'} onChange={onChangeHandler} />
          <Input label="사용자 이름" theme="gray" value={nickname} name={'nickname'} onChange={onChangeHandler} />
          <Input label="비밀번호" inputType="password" theme="gray" value={password} name={'password'} onChange={onChangeHandler} />
        </Form>
        {showSignUpValidResult && <IsValidText>가입 형식에 맞지 않습니다.</IsValidText>}
        <Button disabled={!buttonActive} onClick={onClickHandler} type={'submit'} buttonActive={buttonActive}>
          가입
        </Button>
        <Text>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</Text>
      </SignUpContainer>
      <LoginContainer>
        <h5>계정이 있으신가요?</h5>
        <Link href="/home">
          <LoginButton>로그인</LoginButton>
        </Link>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SignUpContainer = styled.div`
  height: 542px;
  width: 358px;
  border: 0.5px solid rgb(220, 220, 220);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  padding: 0 15px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 358px;
  height: 70px;
  border: 0.5px solid rgb(220, 220, 220);
  margin-top: 10px;
  padding: 0 15px;
`;
const HeaderText = styled.text`
  font-size: 17px;
  color: #8e8e8e;
  font-weight:600;
`;
const Image = styled.img`
  width: 175px;
  height: 51px;
`;

const Form = styled.form``;

type ButtonType = {
  buttonActive?: boolean;
};

const Button = styled.button<ButtonType>`
  border: unset;
  border-radius: 10px;

  height: 33px;
  width: 270px;
  background-color: ${({ buttonActive }) => (buttonActive ? 'rgba(0, 149, 246, 1)' : 'rgba(0, 149, 246, 0.5)')};
  color: white;
`;

const Text = styled.text`
  font-size: 12px;
  color: rgb(192, 192, 192);
`;

const IsValidText = styled.text`
border:1px solid red;
font-size:15px;
color:red;
`

const LoginButton = styled.span`
  all: unset;
  font-size: 15px;
  margin-left: 5px;
  color: rgba(0, 149, 246, 1);
  &:hover {
    cursor:pointer;
  }
`;

export default SignIn;

const Logo = styled.img`
width:175px;
height:50px;
resize-mode:cover;
`