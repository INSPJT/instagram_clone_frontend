import React from 'react';
import { map } from 'rxjs/operators';

export type CommentProps = {
  comments: React.ReactNode;
};

function Comment({ comments }: CommentProps) {
  const comment = document.getElementById('global_comment');
  if (!comment) {
    return null;
  }
}

export default Comment;
