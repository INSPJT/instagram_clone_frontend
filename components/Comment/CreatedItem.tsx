import styled from '@emotion/styled';
import React from 'react';

export type CreatedItemProps = {
  currentTime: number;
};

const CreatedItem = (props: CreatedItemProps) => {
  const { currentTime } = props;
  // @ts-ignore
  const convertedHour = Math.floor((Date.now() - currentTime) / (1000 * 60 * 60));
  const convertedDay = Math.floor(convertedHour / 24);
  const convertedWeek = Math.floor(convertedDay / 7);
  const convertedMonth = Math.floor(convertedDay / 30);
  const convertedYear = Math.floor(convertedDay / 365);

  let created;

  if (convertedYear >= 1) {
    created = `${convertedYear}년`;
  } else if (convertedMonth >= 1) {
    created = `${convertedMonth}월`;
  } else if (convertedWeek >= 1) {
    created = `${convertedWeek}주`;
  } else if (convertedDay >= 1) {
    created = `${convertedDay}일`;
  } else {
    created = `${convertedHour}시간`;
  }
  return <StyledCreatedItem>{created}</StyledCreatedItem>;
};

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

export default CreatedItem;
