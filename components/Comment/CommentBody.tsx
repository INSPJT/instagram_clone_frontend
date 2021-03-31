import React from 'react';
import CreatedBottom from 'components/Comment/CommentBottom';

import { Member } from 'types/index';
import styled from '@emotion/styled';
import CommentThumbnail from 'components/Comment/CommentThumbnail';

export type CommentBodyProps = {
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  created: number;
};

function CommentBody({ content, author, isLike, likeLength, created }: CommentBodyProps) {
  let heartUrl = '';
  if (isLike) {
    heartUrl = 'https://www.pinclipart.com/picdir/middle/87-877828_save-the-heart-by-ofirma85-instagram-like-icon.png';
  } else {
    heartUrl =
      'https://png.pngitem.com/pimgs/s/63-630682_transparent-heart-doodle-png-transparent-instagram-heart-icon.png';
  }

  return (
    <VerticalMiddleDiv>
      <InlineDiv>
        <div>
          <CommentThumbnail author={author} />
          <InlineDiv>
            <div>
              <InlineH3>{author.displayId}</InlineH3>
              <StyledSpan>{content}</StyledSpan>
            </div>
            <CreatedBottom likeLength={likeLength} created={created} />
          </InlineDiv>
        </div>
      </InlineDiv>
      <StyledHeart type="button">
        <HeartImg src={heartUrl} alt="heart" />
      </StyledHeart>
    </VerticalMiddleDiv>
  );
}

const VerticalMiddleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;

const InlineH3 = styled.h3`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

const HeartImg = styled.img`
  width: 12px;
  height: 12px;
  float: right;
`;

const StyledHeart = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
`;

export default CommentBody;
