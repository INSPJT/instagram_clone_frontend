import React from 'react';
import { User } from 'types/index';
import CommentBody from 'components/Comment/CommentBody';
import CommentReply from 'components/Comment/CommentReply';

export type CommentItemProps = {
  content: string;
  author: User;
  isLike: Boolean;
  likeLength: number;
  replyLength: number;
  created: number;
};

const CommentItem = (props: CommentItemProps) => {
  const { content, author, isLike, likeLength, replyLength, created } = props;

  if (replyLength) {
    return (
      <>
        <CommentBody
          thumbnail={author.thumbnail}
          created={created}
          isLike={isLike}
          author={author}
          likeLength={likeLength}
          content={content}
        />
        <CommentReply replyLength={replyLength} />
      </>
    );
  }

  return (
    <CommentBody
      thumbnail={author.thumbnail}
      created={created}
      isLike={isLike}
      author={author}
      likeLength={likeLength}
      content={content}
    />
  );
};

export default CommentItem;
