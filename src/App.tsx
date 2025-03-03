import React, { useState } from 'react';
import { AddClockForm } from './components/AddClockForm';
import { ClockList } from './components/ClockList';
import { IClock } from './types/clock.types';
import './styles/App.css';

const App: React.FC = () => {
  const [clocks, setClocks] = useState<IClock[]>([]);

  const handleAddClock = (name: string, timezone: number) => {
    const newClock: IClock = {
      id: Date.now().toString(),
      name,
      timezone,
      createdAt: new Date(),
    };
    setClocks((prev) => [...prev, newClock]);
  };

  const handleRemoveClock = (id: string) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Мировые часы</h1>
        <p>Добавляйте и отслеживайте время в разных городах мира</p>
      </header>

      <main className="app-content">
        <section className="form-section">
          <h2>Добавить новые часы</h2>
          <AddClockForm onAdd={handleAddClock} />
        </section>

        <section className="clocks-section">
          <h2>Ваши часы</h2>
          <ClockList clocks={clocks} onRemove={handleRemoveClock} />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Мировые часы</p>
      </footer>
    </div>
  );
};

export default App;
