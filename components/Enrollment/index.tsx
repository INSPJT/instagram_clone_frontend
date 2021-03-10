import React, { useState } from 'react';
import styled from '@emotion/styled';

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
    if (email.length > 0 && name.length > 0 && nickname.length > 0 && password.length > 6)
      value = true;
    setButtonActive(value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    enrollmentValidation();
  };

  <Container>
    <Image></Image>
    <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
    <Form>
      <Input placeholder="휴대폰 번호 또는 이메일 주소" value={email} name={email} onChange={onChangeHandler}></Input>
      <Input placeholder="성명" value={name} name={name} onChange={onChangeHandler}></Input>
      <Input placeholder="사용자 이름" value={nickname} name={nickname} onChange={onChangeHandler}></Input>
      <Input placeholder="비밀번호" value={password} name={password} onChange={onChangeHandler}></Input>
    </Form>
    <Button type={'submit'} disabled={buttonActive}>
      가입
    </Button>

    <h3>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</h3>
  </Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.image`
  width: 175px;
  height: 51px;
`;

const Form = styled.form``;

const Input = styled.input`
  height: 38px;
  width: 270px;
`;

type ButtonType = {
  disabled?: boolean;
}

const Button = styled.button<ButtonType>`
  height: 38px;
  width: 270px;
  color: ${({ disabled }) => disabled ? ' rgba(16, 16, 16, 1)' : 'rgba(16, 16, 16, 0.3)'}
`;

export default Enrollment;