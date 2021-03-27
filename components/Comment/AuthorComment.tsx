import React from 'react';
import { User } from 'types/index';
import styled from '@emotion/styled';
import CreatedItem from 'components/Comment/CreatedItem';
import CommentThumbnail from 'components/Comment/CommentThumbnail';

export type AuthorCommentProps = {
  content: string;
  author: User;
  created: number;
};

const AuthorComment = (props: AuthorCommentProps) => {
  const { content, author, created } = props;

  return (
    <VerticalMiddleDiv>
      <CommentThumbnail author={author} />
      <InlineDiv>
        <div>
          <InlineH3>{author.nickName}</InlineH3>
          <StyledSpan>{content}</StyledSpan>
        </div>
        <CreatedItem currentTime={created} />
      </InlineDiv>
    </VerticalMiddleDiv>
  );
};

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
