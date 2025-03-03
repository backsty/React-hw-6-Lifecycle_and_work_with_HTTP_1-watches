import React, { useState, FormEvent } from 'react';
import '../../styles/components/AddClockForm.css';

interface AddClockFormProps {
  onAdd: (name: string, timezone: number) => void;
}

export const AddClockForm: React.FC<AddClockFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Валидация
    if (!name.trim()) {
      setError('Пожалуйста, введите название');
      return;
    }

    const parsedTimezone = parseFloat(timezone);
    if (isNaN(parsedTimezone)) {
      setError('Пожалуйста, введите корректное значение временной зоны');
      return;
    }

    if (parsedTimezone < -12 || parsedTimezone > 14) {
      setError('Временная зона должна быть в диапазоне от -12 до +14');
      return;
    }

    // Отправка данных
    onAdd(name.trim(), parsedTimezone);

    // Сброс формы
    setName('');
    setTimezone('');
    setError('');
  };

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Разрешаем только цифры, минус в начале и одну точку
    if (/^-?\d*\.?\d*$/.test(value) || value === '') {
      setTimezone(value);
      setError('');
    }
  };

  return (
    <form className="add-clock-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="clock-name">Название:</label>
        <input
          type="text"
          id="clock-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          placeholder="Например: Москва, Лондон, Нью-Йорк"
        />
      </div>

      <div className="form-group">
        <label htmlFor="timezone">Временная зона (UTC):</label>
        <div className="timezone-input-container">
          <input
            type="text"
            id="timezone"
            value={timezone}
            onChange={handleTimeZoneChange}
            placeholder="Например: 3, -5, 5.5"
          />
          <div className="timezone-examples">
            <span>Примеры: Москва: +3, Лондон: 0, Нью-Йорк: -5</span>
          </div>
        </div>
      </div>

      {error && <div className="form-error">{error}</div>}

      <button type="submit" className="add-button">
        Добавить
      </button>

      <div className="popular-timezones">
        <h4>Популярные временные зоны:</h4>
        <div className="popular-buttons">
          <button
            type="button"
            onClick={() => {
              setName('Москва');
              setTimezone('3');
            }}
          >
            Москва (UTC+3)
          </button>
          <button
            type="button"
            onClick={() => {
              setName('Лондон');
              setTimezone('0');
            }}
          >
            Лондон (UTC+0)
          </button>
          <button
            type="button"
            onClick={() => {
              setName('Нью-Йорк');
              setTimezone('-5');
            }}
          >
            Нью-Йорк (UTC-5)
          </button>
          <button
            type="button"
            onClick={() => {
              setName('Токио');
              setTimezone('9');
            }}
          >
            Токио (UTC+9)
          </button>
        </div>
      </div>
    </form>
  );
};
