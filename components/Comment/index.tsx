import React, { useState } from 'react';
import getComments from 'components/Comment/GetComments';
import Icon from 'components/Icon/svg';

export type CommentsProps = {
  commentLength: number;
  postId: number; // post id
};

function Comment({ commentLength, postId }: CommentsProps) {
  const [comments, setComments] = useState(getComments('comment', postId));

  if (commentLength < 1) {
    return null;
  }

  function loadComment() {
    if (commentLength < 3) {
      commentLength = 0;
    } else {
      commentLength -= 3;
    }
    setComments(comments.concat(getComments('comment', postId)));
  }

  return (
    <>
      {commentLength > 0 ? ( // 남은 댓글 있음
        <>
          <ul>comments</ul>
          <button type="button" onClick={loadComment}>
            <Icon name="plus" size="big" />
          </button>
        </>
      ) : (
        <ul>comments</ul>
      )}
    </>
  );
}

export default Comment;
