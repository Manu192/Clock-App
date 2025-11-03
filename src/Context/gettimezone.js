import moment from 'moment-timezone';

export const getTimeByTimezone = (timezone) => {
  const now = moment().tz(timezone);
  return {
    hours: now.hours(),
    minutes: now.minutes(),
    seconds: now.seconds(),
    formatted: now.format('hh:mm:ss A'),
  };
};