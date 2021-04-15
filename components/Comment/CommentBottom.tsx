import styled from '@emotion/styled';
import { getTimeDiff } from 'utils/api/time';
import React from 'react';

export type CommentBottomProps = {
  likeLength: number;
  created: string;
};

function CommentBottom({ likeLength, created }: CommentBottomProps) {
  return (
    <StyledDiv>
      <StyledCreatedItem>{getTimeDiff(created)}</StyledCreatedItem>
      <StyledLikeItem>좋아요 {likeLength}개</StyledLikeItem>
      <StyledReplyItem>답글 달기</StyledReplyItem>
    </StyledDiv>
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

const StyledDiv = styled.div`
  display: flex;
`;

const StyledLikeItem = styled.button`
  color: rgb(142, 142, 142);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border: none;
  background-color: transparent;
  align-items: flex-start;
  box-sizing: border-box;
  width: auto;
  -webkit-text-size-adjust: 100%;
`;

const StyledReplyItem = styled.button`
  color: rgb(142, 142, 142);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border: none;
  background-color: transparent;
  align-items: flex-start;
  box-sizing: border-box;
`;

export default CommentBottom;
