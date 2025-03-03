import { useState, useEffect } from 'react';
import { getTimeWithOffset } from '@/utils/timeUtils';

interface UseTimeProps {
  timezone: number;
}

export const useTime = ({ timezone }: UseTimeProps) => {
  const [time, setTime] = useState<Date>(() => getTimeWithOffset(new Date(), timezone));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(new Date(), timezone));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  return time;
};
