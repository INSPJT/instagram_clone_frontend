import React from 'react';
import type { ReactElement } from 'react';
import type { Feed as FeedType } from 'types/index';
import Carousel from 'components/Carousel';
import FeedBody from 'components/Feed/FeedBody';
import FeedHeader from './FeedHeader';

export type FeedProps = FeedType;

function Feed({
  author,
  body,
  commentLength,
  commentPreview,
  createdAt,
  images,
  isLike,
  likeLength,
  likeUser,
}: FeedProps): ReactElement {
  return (
    <div>
      <FeedHeader author={author} />
      <Carousel images={images} showDots />
      <FeedBody
        isLike={isLike}
        likeUser={likeUser}
        likeLength={likeLength}
        body={body}
        commentLength={commentLength}
        commentPreview={commentPreview}
        createdAt={createdAt}
        author={author}
      />
    </div>
  );
}

export default Feed;
