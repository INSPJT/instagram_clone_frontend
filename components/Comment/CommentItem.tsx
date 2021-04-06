import React from 'react';
import { Member } from 'types/index';
import CommentBody from 'components/Comment/CommentBody';
import CommentReply from 'components/Comment/CommentReply';

export type CommentItemProps = {
  id: number;
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  replyLength: number;
  created: number;
};

function CommentItem({ content, author, isLike, likeLength, replyLength, created, id }: CommentItemProps) {
  return (
    <li>
      <CommentBody created={created} isLike={isLike} author={author} likeLength={likeLength} content={content} />
      {replyLength > 0 && <CommentReply replyLength={replyLength} commentId={id} />}
    </li>
  );
}

export default CommentItem;
