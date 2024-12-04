import React, { useState, useEffect } from 'react';
import Grid from './Grid';

const RainAnimation = ({ rows, cols }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prevDrops) => {
        const newDrops = prevDrops
          .filter((drop) => drop < rows * cols - cols)
          .map((drop) => drop + cols);

        // Add new random drops at the top
        for (let i = 0; i < cols; i++) {
          if (Math.random() < 0.3) {
            newDrops.push(i);
          }
        }

        return newDrops;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [rows, cols]);

  return <Grid rows={rows} cols={cols} drops={drops} />;
};

export default RainAnimation;
