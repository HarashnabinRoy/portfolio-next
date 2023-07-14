import React, { createContext, useContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [defaultColor, setDefaultColor] = useState('#2bbc8a');
  const [color, setColor] = useState(defaultColor);

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  const updateDefaultColor = (newdefaultColor) => {
    setDefaultColor(newdefaultColor);
  }

  return (
    <ColorContext.Provider value={{ color, updateColor, defaultColor, updateDefaultColor }}>
      {children}
    </ColorContext.Provider>
  );
};