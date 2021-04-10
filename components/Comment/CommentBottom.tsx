import styled from '@emotion/styled';
import Created from 'components/Comment/Created';

export type CommentBottomProps = {
  likeLength: number;
  created: string;
};

function CommentBottom({ likeLength, created }: CommentBottomProps) {
  return (
    <>
      <Created currentTime={created} />
      <StyledLikeItem>좋아요 {likeLength}개</StyledLikeItem>
      <StyledReplyItem>답글 달기</StyledReplyItem>
    </>
  );
}

const StyledLikeItem = styled.button`
  color: rgba(142, 142, 142, 1);
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
  color: rgba(142, 142, 142, 1);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border: none;
  background-color: transparent;
  align-items: flex-start;
  box-sizing: border-box;
`;

export default CommentBottom;
