import styled from '@emotion/styled';
import React from 'react';
import { getTimeDiff } from 'utils/api/time';

export type CreatedItemProps = {
  currentTime: string;
};

function Created({ currentTime }: CreatedItemProps) {
  const created = getTimeDiff(currentTime);
  return <StyledCreatedItem>{created}</StyledCreatedItem>;
}

const StyledCreatedItem = styled.div`
  display: inline-block;
  color: rgba(142, 142, 142, 1);
  margin-right: 12px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: none;
  background-color: transparent;
`;

export default Created;
