import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import styled from '@emotion/styled';
import { STATE } from 'components/Input/StateIcon';
import { signup } from 'utils/api/auth';

type SignupFormProps = {
  next: (value: string) => void;
};

function SignupForm({ next }: SignupFormProps): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [emailState, setEmailState] = useState<keyof typeof STATE>('default');
  const handleChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setEmail(value);
  }, []);
  const handleBlurEmail = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    // TODO: validation가 추가
    if (!email) {
      setEmailState('default');
      return;
    }
    setEmailState('accepted');
  }, [email]);
  const [nickname, setNickname] = useState<string>('');
  const [nicknameState, setNicknameState] = useState<keyof typeof STATE>('default');
  const handleChangeNickname = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setNickname(value);
  }, []);
  const handleBlurNickname = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    // TODO: validation 추가
    if (!nickname) {
      setNicknameState('default');
      return;
    }
    setNicknameState('accepted');
  }, [nickname]);
  const [displayId, setDisplayId] = useState<string>('');
  const [displayIdState, setDisplayIdState] = useState<keyof typeof STATE>('default');
  const handleChangeDisplayId = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setDisplayId(value);
  }, []);
  const handleBlurDisplayId = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    // TODO: validation 추가
    if (!displayId) {
      setDisplayIdState('default');
      return;
    }
    setDisplayIdState('accepted');
  }, [displayId]);
  const [password, setPassword] = useState<string>('');
  const [passwordState, setPasswordState] = useState<keyof typeof STATE>('default');
  const handleChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setPassword(value);
  }, []);
  const handleBlurPassword = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    // TODO: validation 추가
    if (!password) {
      setPasswordState('default');
      return;
    }
    setPasswordState('accepted');
  }, [password]);
  const disabled = useMemo(() => {
    return [emailState, displayIdState, nicknameState, passwordState].some((item) => item !== 'accepted');
  }, [emailState, displayIdState, nicknameState, passwordState]);
  const handleSubmit = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      e.preventDefault();
      const data = await signup({ email, nickname, displayId, password });
      next(displayId);
    },
    [email, nickname, displayId, password, next],
  );
  return (
    <Form>
      <Header>친구들의 사진과 동영상을 보려면 가입하세요.</Header>
      <InputContainer>
        <Input
          label="이메일 주소"
          value={email}
          onChange={handleChangeEmail}
          state={emailState}
          onBlur={handleBlurEmail}
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="성명"
          value={nickname}
          onChange={handleChangeNickname}
          state={nicknameState}
          onBlur={handleBlurNickname}
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="사용자 이름"
          value={displayId}
          onChange={handleChangeDisplayId}
          state={displayIdState}
          onBlur={handleBlurDisplayId}
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="비밀번호"
          value={password}
          onChange={handleChangePassword}
          state={passwordState}
          onBlur={handleBlurPassword}
          type="password"
        />
      </InputContainer>
      <ButtonContainer>
        <Button theme="blue" full disabled={disabled} onClick={handleSubmit}>
          가입
        </Button>
      </ButtonContainer>
      <Paragraph>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책 에 동의하게 됩니다.</Paragraph>
    </Form>
  );
}

export default SignupForm;

const Form = styled.form`
  max-width: 350px;
`;

const Header = styled.h2`
  color: rgb(142, 142, 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;

const InputContainer = styled.div`
  margin: 0 40px 10px;
`;

const ButtonContainer = styled.div`
  margin: 8px 40px;
`;

const Paragraph = styled.p`
  color: rgb(142, 142, 142);
  font-size: 12px;
  line-height: 16px;
  margin: 10px 40px;
  text-align: center;
`;
