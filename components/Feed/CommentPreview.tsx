import React, { ReactElement } from 'react';
import { PreviewComment } from 'types/index';
import Anchor from 'components/Feed/Anchor';
import styled from '@emotion/styled';

function CommentPreview({ author: { displayId }, content }: PreviewComment): ReactElement {
  return (
    <Container>
      <Anchor href={`/${displayId}`}>{displayId}</Anchor>
      &nbsp;{content}
    </Container>
  );
}

export default CommentPreview;

const Container = styled.div`
  margin-bottom: 4px;
`;
