import React from 'react';
import { FeedAuthor, Member } from 'types/index';
import CommentBody from 'components/Comment/CommentBody';
import ReplyComponent from 'components/Comment/ReplyComponent';
import styled from '@emotion/styled';

export type CommentItemProps = {
  feedAuthor: FeedAuthor;
  id: number;
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  replyLength: number;
  created: string;
};

function CommentItem({ feedAuthor, id, content, author, isLike, likeLength, replyLength, created }: CommentItemProps) {
  return (
    <Styledli>
      <CommentBody
        feedAuthor={feedAuthor}
        commentId={id}
        created={created}
        isLike={isLike}
        author={author}
        likeLength={likeLength}
        content={content}
      />
      {replyLength > 0 && <ReplyComponent replySize={replyLength} commentId={id} />}
    </Styledli>
  );
}

const Styledli = styled.li`
  list-style: none;
`;

export default CommentItem;
