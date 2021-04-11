import React, { useCallback, useState } from 'react';
import CreatedBottom from 'components/Comment/CommentBottom';

import { FeedAuthor, Member } from 'types/index';
import styled from '@emotion/styled';
import CommentThumbnail from 'components/Comment/CommentThumbnail';
import Icon from 'components/Icon';

export type CommentBodyProps = {
  feedAuthor: FeedAuthor;
  commentId: number;
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  created: string;
};

function CommentBody({ feedAuthor, commentId, content, author, isLike, likeLength, created }: CommentBodyProps) {
  const [like, setLike] = useState(isLike);
  // Todo: api 구현
  const toggleLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  // Todo: 조건별 모달 구현
  return (
    <>
      <VerticalMiddleDiv>
        <InlineDiv>
          <div>
            <CommentThumbnail author={author} />
            <InlineDiv>
              <div>
                <InlineH3>{author.displayId}</InlineH3>
                <StyledSpan>{content}</StyledSpan>
              </div>
              <CreatedBottom likeLength={likeLength} created={created} />
            </InlineDiv>
          </div>
        </InlineDiv>
        <StyledButton type="button" onClick={toggleLike}>
          <HeartImg>
            <Icon name="favorite" color={like ? '#FD1D1D' : '#FFFFFF'} size="small" />
          </HeartImg>
        </StyledButton>
      </VerticalMiddleDiv>
    </>
  );
}

const VerticalMiddleDiv = styled.div`
  display: flex;
  justify-content: space-between;
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

const InlineDiv = styled.div`
  display: inline-block;
`;

const HeartImg = styled.div`
  float: right;
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
`;

export default CommentBody;
