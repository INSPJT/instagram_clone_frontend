import axios from 'axios';

export const APIdomain = 'http://117.17.196.61';
const COMMENT_API = 'comment';
const REPLY_API = 'reply';

export type commentsControllerProps = {
  apiType: 'comment' | 'reply';
  id: number;
};

export async function commentsController({ apiType, id }: commentsControllerProps) {
  const postId = id;
  const commentId = id;
  let commentList;
  let method;

  if (apiType === COMMENT_API) {
    method = `${APIdomain}/posts/${postId}/comments`;
  } else if (apiType === REPLY_API) {
    method = `${APIdomain}/comments/${commentId}/replies`;
  }

  try {
    await axios.get(method).then((response) => {
      if (response.status === 200) {
        commentList = response.data;
      } else {
        commentList = null;
      }
      return commentList;
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
    return tempComment;
  });
  return returnComments;
}
