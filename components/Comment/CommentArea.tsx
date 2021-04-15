import { Member } from 'types/index';
import styled from '@emotion/styled';
import React from 'react';
import UserAvatar from 'components/UserAvatar';

export type CommentAreaProps = {
  author: Member;
};

function CommentArea({ author: { profileImageUrl } }: CommentAreaProps) {
  // Todo : onKeyPressed - enter, onClick 함수구현
  return (
    <StyledCommentArea>
      <InlineDiv>
        <UserAvatar thumbnail={profileImageUrl} />
      </InlineDiv>
      <StyledForm>
        <StyledTextArea placeholder="댓글 달기..." />
        <StyledSubmitButton>게시</StyledSubmitButton>
      </StyledForm>
    </StyledCommentArea>
  );
}

const InlineDiv = styled.div`
  display: inline-block;
  margin: 0 16px;
`;

const StyledTextArea = styled.textarea`
  display: flex;
  flex-grow: 1;
  background-color: transparent;
  padding: 0;
  height: 18px;
  border: 0;
  color: rgb(142, 142, 142);
`;

const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  align-items: center;
  border-radius: 30px;
  margin-right: 16px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
`;

const StyledCommentArea = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(239, 239, 239);
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 8px 0;
`;

const StyledSubmitButton = styled.button`
  display: flex;
  justify-content: flex-end;
  height: 18px;
  background-color: transparent;
  border: 0;
  color: rgba(0, 149, 246, 0.3);
  font-size: 14px;
`;

export default CommentArea;
