import GlobalContext from '../context/GlobalContext';
import React, { useEffect, useState } from 'react';

export default function GlobalProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
  
  const states = { theme };
  const setters = { setTheme };
  const data = { states, setters };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}