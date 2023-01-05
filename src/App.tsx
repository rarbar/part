import React, { FC, useState } from 'react';
import './App.css';

export const App: FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Start{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        X
      </button>
    </div>
  );
};
