import styled from '@emotion/styled';
import React from 'react';

export type CreatedItemProps = {
  currentTime: string;
};

function Created({ currentTime }: CreatedItemProps) {
  // 지금, 초, 분, 시, 일, 주, 달, 년
  const createdTime = new Date(currentTime);
  const now = new Date(Date.now());
  // @ts-ignore
  const millisecond = now - createdTime;
  const convertedSecond = Math.floor(millisecond / 1000);
  const convertedMinute = Math.floor(convertedSecond / 60);
  const convertedHour = Math.floor(convertedMinute / 60);
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
  } else if (convertedHour >= 1) {
    created = `${convertedHour}시간`;
  } else if (convertedMinute >= 1) {
    created = `${convertedMinute}분`;
  } else if (convertedSecond >= 1) {
    created = `${convertedSecond}초`;
  } else {
    created = '지금';
  }

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
