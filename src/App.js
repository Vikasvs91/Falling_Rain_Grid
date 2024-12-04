import React, { useState } from 'react';
import RainAnimation from './components/RainAnimation';
import './styles/App.css';

const App = () => {
  const [gridSize, setGridSize] = useState({ rows: 15, cols: 20 });

  return (
    <div className="app-container">
      <h1 className="title">Falling Rain Grid</h1>
      <div className="controls">
        <button onClick={() => setGridSize({ rows: 10, cols: 15 })}>Smaller Grid</button>
        <button onClick={() => setGridSize({ rows: 20, cols: 25 })}>Larger Grid</button>
      </div>
      <RainAnimation rows={gridSize.rows} cols={gridSize.cols} />
    </div>
  );
};

export default App;
