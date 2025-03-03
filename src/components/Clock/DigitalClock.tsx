import React from 'react';
import { formatTime } from '../../utils/timeUtils';

interface DigitalClockProps {
  time: Date;
}

export const DigitalClock: React.FC<DigitalClockProps> = ({ time }) => {
  return <div className="digital-clock">{formatTime(time)}</div>;
};
