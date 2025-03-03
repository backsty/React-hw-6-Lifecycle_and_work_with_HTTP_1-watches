export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const getTimeWithOffset = (date: Date, offset: number): Date => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * offset);
};

export const calculateHandAngles = (date: Date) => {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourAngle = (360 / 12) * hours + (360 / 12 / 60) * minutes;
  const minuteAngle = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  const secondAngle = (360 / 60) * seconds;

  return {
    hourAngle,
    minuteAngle,
    secondAngle,
  };
};
