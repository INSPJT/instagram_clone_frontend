import styled from '@emotion/styled';
import React from 'react';

export type CommentItemProps = {
  replyLength: number;
};

const CommentReply = (props: CommentItemProps) => {
  const { replyLength } = props;

  if (replyLength < 1) {
    return null;
  }

  return (
    <StyledReply>
      <StyledLine />
      <StyledCommentReply>답글 보기({replyLength}개)</StyledCommentReply>
    </StyledReply>
  );
};

const StyledReply = styled.button`
  margin-top: 16px;
  margin-left: 60px;
  border: none;
  background-color: transparent;
`;

const StyledLine = styled.div`
  border-bottom: 1px solid rgba(142, 142, 142, 1);
  display: inline-block;
  height: 0;
  margin-right: 16px;
  vertical-align: middle;
  width: 24px;
`;

const StyledCommentReply = styled.span`
  color: rgba(142, 142, 142, 1);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

export default CommentReply;
