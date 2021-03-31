import styled from '@emotion/styled';
import React from 'react';

function CommentNav() {
  return (
    <StyledNav>
      <StyledDiv>
        <a href="/">
          <span>
            <StyledImg src="https://img.icons8.com/ios/452/back--v1.png" alt="뒤로가기" />
          </span>
        </a>
      </StyledDiv>
      <StyledDiv>
        <StyledH1>댓글</StyledH1>
      </StyledDiv>
      <StyledDiv>
        <StyledButton type="button">
          <StyledImg src="https://cdn141.picsart.com/328472243107211.png" alt="DM" />
        </StyledButton>
      </StyledDiv>
    </StyledNav>
  );
}

const StyledH1 = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
`;

const StyledImg = styled.img`
  height: 24px;
  width: 24px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
`;

const StyledDiv = styled.div`
  position: relative;
  display: block;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 60px;
`;

export default CommentNav;
