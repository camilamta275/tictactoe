import React, { useState } from "react";
import './style.css';

export default function App()
{
  const [grid, setGrid] = useState([
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"
  ]);

  const handleClick = (index) =>
  {
    setGrid((prev) =>
      prev.map((item, i) => (i === index ? "X" : item))
    );
  };

  return (
    <div className="container">
      <h1 className="title">Clique para trocar por "X"</h1>
      <div className="grid">
        {grid.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="cell"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}