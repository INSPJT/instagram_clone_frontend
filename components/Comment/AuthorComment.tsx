import React from 'react';
import { FeedAuthor } from 'types/index';
import styled from '@emotion/styled';
import Created from 'components/Comment/Created';
import Link from 'next/link';
import UserAvatar from 'components/UserAvatar';

export type AuthorCommentProps = {
  content: string;
  author: FeedAuthor;
  created: string;
};

function AuthorComment({ content, author: { displayId, profileImageUrl }, created }: AuthorCommentProps) {
  return (
    <VerticalMiddleDiv>
      {/*-- Todo: UserAvatar에 링크달기 */ }
      <ThumbnailDiv>
        <UserAvatar thumbnail={profileImageUrl} />
      </ThumbnailDiv>
      <InlineDiv>
        <div>
          <InlineH3>
            <Link href={`${displayId}`}>
              <StyledAnchor> {displayId}</StyledAnchor>
            </Link>
          </InlineH3>
          <StyledSpan>{content}</StyledSpan>
        </div>
        <Created currentTime={created} />
      </InlineDiv>
    </VerticalMiddleDiv>
  );
}

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const VerticalMiddleDiv = styled.div`
  border-bottom: 1px solid rgb(239, 239, 239);
  margin-bottom: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;

const InlineH3 = styled.h3`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
`;

const ThumbnailDiv = styled.div`
  display: inline-block;
  margin: 0 16px;
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

export default AuthorComment;
