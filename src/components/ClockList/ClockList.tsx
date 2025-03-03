import React from 'react';
import { Clock } from '../Clock';
import { IClock } from '../../types/clock.types';
import '../../styles/components/ClockList.css';

interface ClockKistProps {
  clocks: IClock[];
  onRemove: (id: string) => void;
}

export const ClockList: React.FC<ClockKistProps> = ({ clocks, onRemove }) => {
  if (clocks.length === 0) {
    return (
      <div className="empty-clock-list">
        <p>Нет добавленных часов. Добавьте часы с помощью формы выше.</p>
      </div>
    );
  }

  return (
    <div className="clock-list">
      {clocks.map((clock) => (
        <Clock key={clock.id} clock={clock} onRemove={onRemove} />
      ))}
    </div>
  );
};
