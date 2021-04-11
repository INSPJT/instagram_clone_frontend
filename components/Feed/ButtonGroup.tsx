import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import styled from '@emotion/styled';

export type ButtonGroupProps = {
  isLike: boolean;
};

function ButtonGroup({ isLike }: ButtonGroupProps): ReactElement {
  return (
    <Container>
      <IconButton>
        <Icon name={isLike ? 'likeFilled' : 'like'} size="big" />
      </IconButton>
      <IconButton>
        <Icon name="comment" size="big" />
      </IconButton>
      <IconButton>
        <Icon name="share" size="big" />
      </IconButton>
      <FlexGap />
      <IconButton>
        <Icon name="bookmark" size="big" />
      </IconButton>
    </Container>
  );
}

export default ButtonGroup;

const IconButton = styled.button`
  all: unset;
  height: 40px;
  width: 40px;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Container = styled.section`
  height: 40px;
  width: 100%;
  margin-top: -40px;
  display: flex;
  align-items: center;
  ${IconButton}:first-child {
    margin-left: -8px;
  }
  ${IconButton}:last-child {
    margin-right: -8px;
  }
`;

const FlexGap = styled.div`
  flex-grow: 1;
`;
