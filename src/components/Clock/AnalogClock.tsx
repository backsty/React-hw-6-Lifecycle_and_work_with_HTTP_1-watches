import React from 'react';
import { calculateHandAngles } from '../../utils/timeUtils';

interface AnalogClockProps {
  time: Date;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
  const { hourAngle, minuteAngle, secondAngle } = calculateHandAngles(time);

  return (
    <div className="analog-clock">
      <div className="clock-face">
        {/* Циферблат */}
        {[...Array(12)].map((_, index) => {
          const angle = index * 30 * (Math.PI / 180);
          const x = 50 + 40 * Math.sin(angle);
          const y = 50 - 40 * Math.cos(angle);

          return (
            <div
              key={index}
              className="hour-marker"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {index === 0 ? 12 : index}
            </div>
          );
        })}

        {/* Стрелки  часов*/}
        <div className="hour-hand" style={{ transform: `rotate(${hourAngle}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minuteAngle}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${secondAngle}deg)` }}></div>
        <div className="clock-center"></div>
      </div>
    </div>
  );
};
