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

  if (convertedYear >= 1) {
    return `${convertedYear}년`;
  }
  if (convertedMonth >= 1) {
    return `${convertedMonth}월`;
  }
  if (convertedWeek >= 1) {
    return `${convertedWeek}주`;
  }
  if (convertedDay >= 1) {
    return `${convertedDay}일`;
  }
  if (convertedHour >= 1) {
    return `${convertedHour}시간`;
  }
  if (convertedMinute >= 1) {
    return `${convertedMinute}분`;
  }
  if (convertedSecond >= 1) {
    return `${convertedSecond}초`;
  }
  return '지금';
};