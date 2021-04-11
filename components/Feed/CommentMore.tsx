import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

export type CommentMoreProps = {
  commentLength: number;
};

function CommentMore({ commentLength }: CommentMoreProps): ReactElement {
  return <Container>댓글 {commentLength}개 모두 보기</Container>;
}

export default CommentMore;

const Container = styled.div`
  margin-bottom: 4px;
`;
