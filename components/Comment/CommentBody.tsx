import React, { useState } from 'react';
import CreatedBottom from 'components/Comment/CommentBottom';

import { Member } from 'types/index';
import styled from '@emotion/styled';
import CommentThumbnail from 'components/Comment/CommentThumbnail';
import Icon from 'components/Icon/svg';

export type CommentBodyProps = {
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  created: number;
};

function CommentBody({ content, author, isLike, likeLength, created }: CommentBodyProps) {
  const [like, setLike] = useState(isLike);
  const [heartColor, setHeartColor] = useState('');

  if (isLike) {
    setHeartColor('#FD1D1D');
  } else {
    setHeartColor('#FFFFFF');
  }

  function pressLike() {
    if (like) {
      setLike(false);
      setHeartColor('#FFFFFF');
    } else {
      setLike(true);
      setHeartColor('#FD1D1D');
    }
  }

  function commentMenu() {
    // Modal
    // if is my comment : 신고, 삭제, 취
    // else : 신고(red, bold) 취소(black)
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
      <StyledButton type="button" onClick={commentMenu}>
        <Icon name="menu" size="big" />
      </StyledButton>
      <StyledButton type="button" onClick={pressLike}>
        <HeartImg>
          <Icon name="favorite" color={heartColor} size="small" />
        </HeartImg>
      </StyledButton>
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

const HeartImg = styled.div`
  float: right;
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
`;

export default CommentBody;
