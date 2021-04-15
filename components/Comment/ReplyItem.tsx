import React from 'react';
import { Reply } from 'types/index';
import styled from '@emotion/styled';
import Body from 'components/Comment/Body';

export type ReplyItemProps = {
  reply: Reply;
};

function ReplyItem({
  reply: { feedAuthorDisplayId, author, content, created, id, isLike, likeLength },
}: ReplyItemProps) {
  return (
    <Styledli>
      <Body
        feedAuthorDisplayId={feedAuthorDisplayId}
        id={id}
        content={content}
        author={author}
        isLike={isLike}
        likeLength={likeLength}
        created={created}
      />
    </Styledli>
  );
}

const Styledli = styled.li`
  list-style: none;
`;

export default ReplyItem;
