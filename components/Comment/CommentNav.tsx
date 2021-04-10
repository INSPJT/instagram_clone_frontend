import styled from '@emotion/styled';
import React from 'react';
import Icon from 'components/Icon';

function CommentNav() {
  // Todo: 뒤로가기 구현
  // Todo: DM 으로 이동 구현
  return (
    <StyledNav>
      <StyledDiv>
        <a href="/">
          <StyledIcon>
            <Icon name="back" size="big" color="#000000" />
          </StyledIcon>
        </a>
      </StyledDiv>
      <StyledDiv>
        <StyledH1>댓글</StyledH1>
      </StyledDiv>
      <StyledDiv>
        <StyledButton type="button">
          <Icon name="share" size="big" color="#000000" />
        </StyledButton>
      </StyledDiv>
    </StyledNav>
  );
}

const StyledIcon = styled.div`
  transform: rotate(-90deg);
`;

const StyledH1 = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
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
