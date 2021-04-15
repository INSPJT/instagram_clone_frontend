import React from 'react';
import { Comment } from 'types/index';
import Body from 'components/Comment/Body';
import ReplyComponent from 'components/Comment/ReplyComponent';
import styled from '@emotion/styled';

export type CommentItemProps = {
  comment: Comment;
};

function CommentItem({ comment }: CommentItemProps) {
  const { replyLength, id, feedAuthorDisplayId, likeLength, isLike, created, content, author } = comment;
  return (
    <Styledli>
      <Body
        feedAuthorDisplayId={feedAuthorDisplayId}
        author={author}
        content={content}
        created={created}
        id={id}
        isLike={isLike}
        likeLength={likeLength}
      />
      {replyLength > 0 && <ReplyComponent replySize={replyLength} commentId={id} />}
    </Styledli>
  );
}

const Styledli = styled.li`
  list-style: none;
`;

export default CommentItem;
