import React from 'react';
import { FeedAuthor } from 'types/index';
import styled from '@emotion/styled';
import UserAvatar from 'components/UserAvatar';
import { getTimeDiff } from 'utils/api/time';

export type AuthorCommentProps = {
  content: string;
  author: FeedAuthor;
  created: string;
};

function AuthorComment({ content, author: { displayId, profileImageUrl }, created }: AuthorCommentProps) {
  return (
    <VerticalMiddleDiv>
      {/* Todo: UserAvatar에 링크달기 */}
      <ThumbnailDiv>
        <UserAvatar thumbnail={profileImageUrl} />
      </ThumbnailDiv>
      <div>
        <div>
          <InlineH3>
            {/* Todo: displayId에 링크 달기 <Link href={}> */}
            <StyledAnchor> {displayId}</StyledAnchor>
          </InlineH3>
          <StyledSpan>{content}</StyledSpan>
        </div>
        <StyledCreatedItem>{getTimeDiff(created)}</StyledCreatedItem>
      </div>
    </VerticalMiddleDiv>
  );
}

const StyledCreatedItem = styled.div`
  display: inline-block;
  justify-content: space-between;
  color: rgb(142, 142, 142);
  margin-right: 12px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: none;
  background-color: transparent;
`;

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

export default AuthorComment;
