import React from 'react';
import type { ReactElement } from 'react';
import styled from '@emotion/styled';
import UserAvatar from 'components/UserAvatar';
import type { FeedAuthor } from 'types/index';
import Icon from 'components/Icon';

export type FeedHeaderProps = {
  author: FeedAuthor;
};

function FeedHeader({ author: { profileImageUrl, displayId } }: FeedHeaderProps): ReactElement {
  return (
    <Header>
      <UserAvatar profileImageUrl={profileImageUrl} />
      <DisplayIdContainer>{displayId}</DisplayIdContainer>
      <Icon name="menu" />
    </Header>
  );
}

export default FeedHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  box-sizing: border-box;
`;

const DisplayIdContainer = styled.span`
  margin-left: 12px;
  font-weight: bold;
  flex: 1;
`;
