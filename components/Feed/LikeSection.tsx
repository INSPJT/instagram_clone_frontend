import React, { ReactElement, useMemo } from 'react';
import { FeedAuthor } from 'types/index';
import styled from '@emotion/styled';
import UserAvatar from 'components/UserAvatar';
import Anchor from 'components/Feed/Anchor';

export type LikeSectionProps = {
  likeUser: FeedAuthor;
  likeLength: number;
};

function LikeSection({ likeUser: { profileImageUrl, displayId }, likeLength }: LikeSectionProps): ReactElement {
  const count = useMemo(() => likeLength - 1, [likeLength]);
  return (
    <Container>
      <Paragraph>
        <UserAvatar profileImageUrl={profileImageUrl} size="small" />
        &nbsp;
        <Anchor href={`/${displayId}`}>{displayId}</Anchor>님{count > 0 && <Anchor href="/"> 외 {count}명</Anchor>}이
        좋아합니다.
      </Paragraph>
    </Container>
  );
}

export default LikeSection;

const Container = styled.section`
  margin-bottom: 8px;
  height: 20px;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;
