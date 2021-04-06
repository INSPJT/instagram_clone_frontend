import axios from 'axios';
import React, { useState } from 'react';
import CommentItem from 'components/Comment/CommentItem';

export const APIdomain = 'http://yurivon.ml';
const COMMENT_API = 'comment';
const REPLY_API = 'reply';

const getComments = async (apiType, id) => {
  const postId = id;
  const commentId = id;
  const [commentList, setCommentList] = useState(null);
  let method;

  if (apiType === COMMENT_API) {
    method = `${APIdomain}/posts/${postId}/comments`;
  } else if (apiType === REPLY_API) {
    method = `${APIdomain}/comments/${commentId}/replies`;
  }

  try {
    await axios.get(method).then((response) => {
      if (response.status === 200) {
        setCommentList(response.data);
      } else {
        setCommentList(null);
      }
    });
  } catch (e) {
    console.log('get comments failed');
  }

  const returnComments = commentList.id.map((comment) => {
    const tempComment = {
      id: comment.id,
      content: comment.content,
      author: {
        displayId: comment.displayId,
        nickname: comment.nickname,
        profileImageUrl: comment.profileImageUrl,
      },
      isLike: comment.isLike,
      likeLength: comment.likeLength,
      replyLength: comment.replyLength,
      created: comment.created,
    };
    return (
      <CommentItem
        replyLength={tempComment.replyLength}
        author={tempComment.author}
        likeLength={tempComment.likeLength}
        content={tempComment.content}
        isLike={tempComment.isLike}
        created={tempComment.created}
        postId={tempComment.id}
      />
    );
  });
  return returnComments;
};

export default getComments;
