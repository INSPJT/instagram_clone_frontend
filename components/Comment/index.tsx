import React, { useState } from 'react';
import Icon from 'components/Icon';
import { Comment, Feed } from 'types/index';
import CommentNav from 'components/Comment/CommentNav';
import AuthorComment from 'components/Comment/AuthorComment';

export type CommentsProps = {
  feed: Feed;
  commentSize: number;
  postId: number; // post id
};

function CommentComponent({ feed, commentSize }: CommentsProps) {
  const [feedAuthor, postId, createdAt] = feed;
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentLength, setCommentLength] = useState(commentSize);
  // Todo: api 구현 map <CommentItem> []
  // Todo: context Api로 me 변수 만들기
  const getCommentList = () => {};
  return (
    <>
      <CommentNav />
      {/* CommentArea author = {me} */}
      <AuthorComment content="가지마 내 20대~!" author={feedAuthor} created={createdAt} />
      {commentLength > 0 ? ( // 남은 댓글 있음
        <>
          <ul> {comments} </ul>
          <button type="button" onClick={getCommentList}>
            <Icon name="plus" size="big" />
          </button>
        </>
      ) : (
        <ul>{comments}</ul>
      )}
    </>
  );
}

export default CommentComponent;
