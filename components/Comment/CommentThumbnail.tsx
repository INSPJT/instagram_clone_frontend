import styled from '@emotion/styled';
import { Member } from 'types/index';
import React from 'react';

export type CommentThumbnailProps = {
  author: Member;
};

function CommentThumbnail({ author }: CommentThumbnailProps) {
  return (
    <StyledCommentThumbnail>
      <a href={`instagram.com/${author.displayId}`}>
        <StyledImg src={author.profileImageUrl} alt={`${author.displayId} 님의 프로필 사진`} />
      </a>
    </StyledCommentThumbnail>
  );
}

const StyledImg = styled.img`
  width: 42px;
  height: 42px;
`;

const StyledCommentThumbnail = styled.div`
  display: inline-block;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  height: 42px;
  width: 42px;
  margin: 0 16px;
`;

export default CommentThumbnail;
