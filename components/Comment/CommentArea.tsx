import { User } from 'types/index';
import CommentThumbnail from 'components/Comment/CommentThumbnail';
import styled from '@emotion/styled';

export type CommentAreaProps = {
  author: User;
};

const CommentArea = (props: CommentAreaProps) => {
  const { author } = props;

  return (
    <StyledCommentArea>
      <CommentThumbnail author={author} />
      <InlineDiv>
        <StyledForm>
          <StyledTextArea placeholder="댓글 달기..." />
          <StyledSubmitButton>게시</StyledSubmitButton>
        </StyledForm>
      </InlineDiv>
    </StyledCommentArea>
  );
};

const InlineDiv = styled.div`
  display: inline-block;
`;

const StyledTextArea = styled.textarea`
  background-color: transparent;
  padding: 0;
  height: 18px;
  border: 0;
  color: rgba(142, 142, 142, 1);
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 30px;
  margin-right: 16px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(219, 219, 219, 1);
`;

const StyledCommentArea = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(239, 239, 239, 1);
  border-top: 1px solid rgba(219, 219, 219, 1);
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  padding: 8px 0;
`;

const StyledSubmitButton = styled.button`
  height: 18px;
  background-color: transparent;
  border: 0;
  color: rgba(0, 149, 246, 0.3);
  font-size: 14px;
`;

export default CommentArea;
