import styled from '@emotion/styled';
import UserAvatar from 'components/UserAvatar';
import React, { ReactElement } from 'react';
import { Member } from 'types/index';
import Button from 'components/Button';

export type UserItemProps = {
  user: Member;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonChildren: React.ReactNode;
  buttonTheme?: 'default' | 'blue';
  loading?: boolean;
};

const defaultProps = {
  buttonTheme: 'default',
  loading: false,
};

function UserItem({
  user: { profileImageUrl, displayId, nickname },
  onClick,
  buttonChildren,
  buttonTheme,
  loading,
}: UserItemProps & typeof defaultProps): ReactElement {
  return (
    <Container>
      <UserAvatar thumbnail={profileImageUrl} />
      <UserInfo>
        <UserId>{displayId}</UserId>
        {nickname && <UserName>{nickname}</UserName>}
      </UserInfo>
      <div>
        <Button theme={buttonTheme} loading={loading} onClick={onClick}>
          {buttonChildren}
        </Button>
      </div>
    </Container>
  );
}

UserItem.defaultProps = defaultProps;

export default UserItem;

const Container = styled.li`
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
