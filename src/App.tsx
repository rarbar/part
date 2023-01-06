import React, { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [counter, setCounter] = useState(0);

  const timer = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    setTimeout(timer, 1000);
    return () => {
      clearTimeout(timer as any);
    };
  }, [counter]);

  return (
    <div>
      <h1>Start{counter}</h1>
    </div>
  );
};
