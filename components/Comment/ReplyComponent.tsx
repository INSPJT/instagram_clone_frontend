import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { Reply } from 'types/index';

export type CommentItemProps = {
  replySize: number;
  commentId: number;
};

function ReplyComponent({ replySize, commentId }: CommentItemProps) {
  const [show, setShow] = useState(false);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyLength, setReplyLength] = useState(replySize);
  // Todo : api 구현
  const getReplyList = () => {};
  const openReply = useCallback(() => {
    setShow(true);
    getReplyList();
  }, []);
  const closeReply = useCallback(() => {
    setShow(false);
  }, []);

  const showReply = (show && replyLength > 0) || !show;
  return (
    <ul>
      {showReply ? ( // 답글 보기 이미 눌림, 남은 답글 있음
        <StyledReply onClick={openReply}>
          <StyledLine />
          <StyledCommentReply>답글 보기({replyLength}개)</StyledCommentReply>
        </StyledReply>
      ) : (
        // 답글 보기 이미 눌림, 남은 답글 없음
        <StyledReply onClick={closeReply}>
          <StyledLine />
          <StyledCommentReply>답글 숨기기</StyledCommentReply>
        </StyledReply>
      )}
      {replies}
    </ul>
  );
}

const StyledReply = styled.button`
  margin-top: 16px;
  margin-left: 28px;
  border: none;
  background-color: transparent;
`;

const StyledLine = styled.div`
  border-bottom: 1px solid rgb(142, 142, 142);
  display: inline-block;
  height: 0;
  margin-right: 16px;
  vertical-align: middle;
  width: 24px;
`;

const StyledCommentReply = styled.span`
  color: rgb(142, 142, 142);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

export default ReplyComponent;
