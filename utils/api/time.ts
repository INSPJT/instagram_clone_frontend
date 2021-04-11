import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

export const getTimeDiff = (currentTime: string) => {
  // 지금, 초, 분, 시, 일, 주, 달, 년
  const createdTime = new Date(currentTime);
  const now = new Date(Date.now());
  const convertedSecond = differenceInSeconds(createdTime, now);
  const convertedMinute = differenceInMinutes(createdTime, now);
  const convertedHour = differenceInHours(createdTime, now);
  const convertedDay = differenceInDays(createdTime, now);
  const convertedWeek = differenceInWeeks(createdTime, now);
  const convertedMonth = differenceInMonths(createdTime, now);
  const convertedYear = differenceInYears(createdTime, now);

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

  return created;
};