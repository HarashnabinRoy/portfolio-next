import React, { createContext, useContext, useState, useEffect } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  // const [defaultColor, setDefaultColor] = useState();
  const [color, setColor] = useState('#2bbc8a');

  useEffect(() => {
    const storedStateValue = localStorage.getItem('color');
    if (storedStateValue) {
      setColor(storedStateValue);
    }
  }, []);


  const updateColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem('color', newColor);
  };

  return (
    <ColorContext.Provider value={{ color, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};