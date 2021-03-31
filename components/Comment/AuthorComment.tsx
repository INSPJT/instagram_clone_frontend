import React from 'react';
import { Member } from 'types/index';
import styled from '@emotion/styled';
import CreatedItem from 'components/Comment/CreatedItem';
import CommentThumbnail from 'components/Comment/CommentThumbnail';

export type AuthorCommentProps = {
  content: string;
  author: Member;
  created: number;
};

function AuthorComment({ content, author, created }: AuthorCommentProps) {
  return (
    <VerticalMiddleDiv>
      <CommentThumbnail author={author} />
      <InlineDiv>
        <div>
          <InlineH3>{author.displayId}</InlineH3>
          <StyledSpan>{content}</StyledSpan>
        </div>
        <CreatedItem currentTime={created} />
      </InlineDiv>
    </VerticalMiddleDiv>
  );
}

const VerticalMiddleDiv = styled.div`
  border-bottom: 1px solid rgba(239, 239, 239, 1);
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

const InlineDiv = styled.div`
  display: inline-block;
`;

export default AuthorComment;
