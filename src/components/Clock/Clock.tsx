import React from 'react';
import { IClock } from '../../types/clock.types';
import { useTime } from '../../hooks/useTime';
import { AnalogClock } from './AnalogClock';
import { DigitalClock } from './DigitalClock';
import '../../styles/components/Clock.css';

interface ClockProps {
  clock: IClock;
  onRemove: (id: string) => void;
}

export const Clock: React.FC<ClockProps> = ({ clock, onRemove }) => {
  const time = useTime({ timezone: clock.timezone });

  return (
    <div className="clock-container">
      <div className="clock-header">
        <h3>{clock.name}</h3>
        <span className="timezone-info">
          (UTC{clock.timezone >= 0 ? `+${clock.timezone}` : clock.timezone})
        </span>
        <button
          className="remove-button"
          onClick={() => onRemove(clock.id)}
          aria-label="Удалить часы"
        >
          ✕
        </button>
      </div>

      <div className="clock-display">
        <AnalogClock time={time} />
        <DigitalClock time={time} />
      </div>
    </div>
  );
};
