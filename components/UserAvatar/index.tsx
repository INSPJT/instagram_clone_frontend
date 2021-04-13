import React from 'react';
import styled from '@emotion/styled';

export type UserAvatarType = {
  thumbnail?: null | string;
  size?: 'small' | 'big';
};

const DEFAULT_THUMBNAIL = '/img/default_avatar.jpg';

const defaultProps = {
  thumbnail: DEFAULT_THUMBNAIL,
  size: 'small',
};

function UserAvatar({ size, thumbnail }: UserAvatarType) {
  return (
    <Container size={size}>
      <Img src={thumbnail || DEFAULT_THUMBNAIL} alt="유저 이미지" />
    </Container>
  );
}

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;

type ContainerType = {
  size?: 'small' | 'big';
};

const Container = styled.div<ContainerType>`
  height: ${({ size }) => (size === 'big' ? '77px' : '32px')};
  width: ${({ size }) => (size === 'big' ? '77px' : '32px')};
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;
