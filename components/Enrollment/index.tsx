import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import * as logo from 'asset/instagramLogo.png';

export type SignUpInputList = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

export const Enrollment = () => {
  const [inputs, setInputs] = useState<SignUpInputList>({
    email: '',
    name: '',
    nickname: '',
    password: '',
  });
  const { email, name, nickname, password } = inputs;
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [showSignUpValidResult, setShowSignUpValidResult] = useState<boolean>(false);

  const enrollmentValidation = (): void => {
    let value = false;
    if (email && name && nickname && password.length > 6) value = true;
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

    let nameRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name);
    let nicknameRegex = /^[a-zA-Z0-9_.-ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(nickname);
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)

    if (nameRegex && nicknameRegex && emailRegex) {
      //페이지 이동
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
            placeholder="이메일 주소"
            value={email}
            name={'email'}
            onChange={onChangeHandler}
          ></Input>
          <Input placeholder="성명" value={name} name={'name'} onChange={onChangeHandler}></Input>
          <Input placeholder="사용자 이름" value={nickname} name={'nickname'} onChange={onChangeHandler}></Input>
          <Input placeholder="비밀번호" value={password} name={'password'} onChange={onChangeHandler}></Input>
        </Form>
        {showSignUpValidResult && <IsValidText>가입 형식에 맞지 않습니다.</IsValidText>}
        <Button disabled={!buttonActive} onClick={onClickHandler} type={'submit'} buttonActive={buttonActive}>
          가입
        </Button>
        <Text>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</Text>
      </SignUpContainer>
      <IsLoginContainer>
        <h5>계정이 있으신가요?</h5>
        <Link href="/home">
          <LoginButton>로그인</LoginButton>
          </Link>
      </IsLoginContainer>
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

const IsLoginContainer = styled.div`
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

const Input = styled.input`
  height: 38px;
  width: 270px;
  margin: 2px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 10px;
`;

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

const LoginButton = styled.text`
  all: unset;
  font-size: 15px;
  margin-left: 5px;
  color: rgba(0, 149, 246, 1);
`;

export default Enrollment;

const Logo = styled.img`
width:175px;
height:50px;
resize-mode:cover;
`