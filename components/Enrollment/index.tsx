import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as logo from 'asset/Instagram_logo.png';

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
  const enrollmentValidation = (): void => {
    //각 정규식 추가 예정
    let value = false;
    if (email.length > 0 && name.length > 0 && nickname.length > 0 && password.length > 6) value = true;
    setButtonActive(value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    enrollmentValidation();
  };
  return (
    <Container>
      <SignUpContainer>
        <HeaderText>친구들의 사진과 동영상을 보려면 가입하세요.</HeaderText>
        <Form>
          <Input
            placeholder="휴대폰 번호 또는 이메일 주소"
            value={email}
            name={email}
            onChange={onChangeHandler}
          ></Input>
          <Input placeholder="성명" value={name} name={name} onChange={onChangeHandler}></Input>
          <Input placeholder="사용자 이름" value={nickname} name={nickname} onChange={onChangeHandler}></Input>
          <Input placeholder="비밀번호" value={password} name={password} onChange={onChangeHandler}></Input>
        </Form>
        <Button type={'submit'} buttonActive={buttonActive}>
          가입
        </Button>

        <Text>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</Text>
      </SignUpContainer>

      <IsLoginContainer>
        <h5>계정이 있으신가요?</h5>
        <LoginButton>로그인</LoginButton>
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
  color: rgba(105, 105, 105, 1);
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
  background-color: rgba(220, 220, 220, 0.3);
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

const LoginButton = styled.button`
  all: unset;
  font-size: 15px;
  margin-left: 5px;
  color: rgba(0, 149, 246, 1);
`;

export default Enrollment;
