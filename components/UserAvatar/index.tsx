import React from 'react';
import styled from '@emotion/styled';

export type UserAvatarType = {
  thumbnail?: string;
  size?: 'small' | 'big';
};

function UserAvatar({ size, thumbnail }: UserAvatarType) {
  return (
    <Container size={size}>
      <Img src={thumbnail} alt="유저 이미지" />
    </Container>
  );
}

UserAvatar.defaultProps = {
  thumbnail:
    'https://scontent-mxp1-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mxp1-2.cdninstagram.com&_nc_ohc=q2X-4RcAgecAX-QGx5q&oh=911ea87522a15a1d1657ee9b1070086b&oe=606FB88F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
  size: 'small',
};

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
