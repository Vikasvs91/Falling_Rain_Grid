import React from 'react';
import '../styles/Grid.css';

const Grid = ({ rows, cols, drops }) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          className={`grid-cell ${drops.includes(index) ? 'rain-drop' : ''}`}
        />
      ))}
    </div>
  );
};

export default Grid;
