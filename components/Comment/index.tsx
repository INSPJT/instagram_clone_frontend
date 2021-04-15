import React, { useState } from 'react';
import Icon from 'components/Icon';
import { Comment, Feed } from 'types/index';
import CommentNav from 'components/Comment/CommentNav';
import AuthorComment from 'components/Comment/AuthorComment';

export type CommentsProps = {
  feed: Feed;
};

function CommentComponent({ feed }: CommentsProps) {
  const { author, id, createdAt, body, commentLength: defaultCommentLength } = feed;
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentLength, setCommentLength] = useState(defaultCommentLength);
  // Todo: api 구현 map <CommentItem> []
  // Todo: context Api로 me 변수 만들기
  const getCommentList = () => {};
  const moreComment = commentLength > 0;
  return (
    <>
      <CommentNav />
      {/* CommentArea author = {me} */}
      <AuthorComment content={body} author={author} created={createdAt} />
      <ul> {comments} </ul>
      {moreComment && ( // 남은 댓글 있음
        <button type="button" onClick={getCommentList}>
          <Icon name="plus" size="big" />
        </button>
      )}
    </>
  );
}

export default CommentComponent;
