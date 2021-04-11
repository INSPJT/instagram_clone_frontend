import React, { ReactElement } from 'react';
import { FeedAuthor } from 'types/index';
import Anchor from 'components/Feed/Anchor';
import styled from '@emotion/styled';

export type AuthorBodyProps = {
  body: string;
  author: FeedAuthor;
};

function ContentBody({ body, author: { displayId } }: AuthorBodyProps): ReactElement {
  return (
    <Container>
      <Anchor href={`/${displayId}`}>{displayId}</Anchor>
      &nbsp;{body}
    </Container>
  );
}

export default ContentBody;

const Container = styled.div`
  margin-bottom: 4px;
`;
