import styled from '@emotion/styled';
import React from 'react';
import { User } from 'types/index';

export type CommentThumbnailProps = {
  author: User;
};

const CommentThumbnail = (props: CommentThumbnailProps) => {
  const { author } = props;
  return (
    <StyledCommentThumbnail>
      <a href={author.link}>
        <img src={author.thumbnail} alt={`${author.nickName} 님의 프로필 사진`} />
      </a>
    </StyledCommentThumbnail>
  );
};

const StyledCommentThumbnail = styled.div`
  display: inline-block;
  border-radius: 70%;
  overflow: hidden;
  height: 42px;
  width: 42px;
  margin: 0 16px;
`;

export default CommentThumbnail;
