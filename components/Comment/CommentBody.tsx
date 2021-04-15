import React, { useCallback, useState } from 'react';
import CreatedBottom from 'components/Comment/CommentBottom';

import { FeedAuthor, Member } from 'types/index';
import styled from '@emotion/styled';
import Icon from 'components/Icon';
import UserAvatar from 'components/UserAvatar';
import Link from 'next/link';

export type CommentBodyProps = {
  feedAuthor: FeedAuthor;
  commentId: number;
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  created: string;
};

function CommentBody({
  feedAuthor,
  commentId,
  content,
  author: { displayId, profileImageUrl },
  isLike,
  likeLength,
  created,
}: CommentBodyProps) {
  const [like, setLike] = useState(isLike);
  // Todo: api 구현
  const toggleLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  // Todo: 조건별 모달 구현
  return (
    <StyledDiv>
      <VerticalMiddleDiv>
        <ThumbnailDiv>
          <UserAvatar thumbnail={profileImageUrl} />
        </ThumbnailDiv>
        <InlineDiv>
          <InlineH3>
            <Link href={`${displayId}`}>
              <StyledAnchor>{displayId}</StyledAnchor>
            </Link>
          </InlineH3>
          <StyledSpan>{content}</StyledSpan>
          <CreatedBottom likeLength={likeLength} created={created} />
        </InlineDiv>
      </VerticalMiddleDiv>
      <StyledButton type="button" onClick={toggleLike}>
        <Icon name="favorite" color={like ? '#FD1D1D' : '#FFFFFF'} size="small" />
      </StyledButton>
    </StyledDiv>
  );
}

const InlineDiv = styled.div`
  display: inline-block;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ThumbnailDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 16px;
`;

const VerticalMiddleDiv = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const StyledSpan = styled.span`
  display: inline-block;
  font-size: 14px;
`;

const InlineH3 = styled.h3`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export default CommentBody;
