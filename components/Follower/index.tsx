import React from 'react';
import UserAvatar from 'components/UserAvatar';
import styled from '@emotion/styled';
import { User } from 'types/index';

export type FollowerType = {
  user: User;
  onClickRemove: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Follower({ user: { displayId, nickName, thumbnail }, onClickRemove }: FollowerType): React.ReactElement {
  return (
    <Container>
      <UserAvatar thumbnail={thumbnail} />
      <UserInfo>
        <UserId>{displayId}</UserId>
        {nickName && <UserName>{nickName}</UserName>}
      </UserInfo>
      <div>
        <Button onClick={onClickRemove}>삭제</Button>
      </div>
    </Container>
  );
}

export default Follower;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const UserInfo = styled.div`
  margin: 0 13px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserId = styled.span`
  font-weight: bold;
`;

const UserName = styled.span`
  color: rgba(142, 142, 142, 1);
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid rgba(219, 219, 219, 1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px 9px;
  color: rgba(38, 38, 38, 1);
`;
