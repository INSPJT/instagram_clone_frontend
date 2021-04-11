import React from 'react';
import styled from '@emotion/styled';

export type UserAvatarType = {
  profileImageUrl?: null | string;
  size: keyof typeof sizes;
};

const DEFAULT_THUMBNAIL = '/img/defaultAvatar.jpg';

const defaultProps = {
  profileImageUrl: DEFAULT_THUMBNAIL,
  size: 'default',
};

function UserAvatar({ size, profileImageUrl }: UserAvatarType) {
  return (
    <Container size={size}>
      <Img src={profileImageUrl || DEFAULT_THUMBNAIL} alt="유저 이미지" />
    </Container>
  );
}

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;

const sizes = {
  small: '20px',
  default: '32px',
  big: '77px',
};

type ContainerType = {
  size: keyof typeof sizes;
};

const Container = styled.div<ContainerType>`
  height: ${({ size }) => sizes[size]};
  width: ${({ size }) => sizes[size]};
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;
