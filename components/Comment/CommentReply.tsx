import styled from '@emotion/styled';
import React, { useState } from 'react';
import getComments from 'components/Comment/GetComments';
import { use } from 'ast-types';

export type CommentItemProps = {
  replyLength: number;
  commentId: number;
};

function CommentReply({ replyLength, commentId }: CommentItemProps) {
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState([]);

  if (replyLength < 1) {
    return null;
  }

  function LoadReply() {
    if (replyLength < 3) {
      replyLength = 0;
    } else {
      replyLength -= 3;
    }
    setReply(reply.concat(getComments('reply', commentId)));
  }

  return (
    <>
      {(show && replyLength > 0) || !show ? ( // 답글 보기 이미 눌림, 남은 답글 있음
        <>
          <StyledReply
            onClick={() => {
              setShow(true);
              LoadReply();
            }}
          >
            <StyledLine />
            <StyledCommentReply>답글 보기({replyLength}개)</StyledCommentReply>
          </StyledReply>
        </>
      ) : (
        // 답글 보기 이미 눌림, 남은 답글 없음
        <>
          <StyledReply onClick={() => setShow(false)}>
            <StyledLine />
            <StyledCommentReply>답글 숨기기</StyledCommentReply>
          </StyledReply>
        </>
      )}
    </>
  );
}

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
