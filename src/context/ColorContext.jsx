import { createContext, useState } from 'react';

export const ColorContext = createContext();

function ColorProvider({ children }) {
  const [color, setColor] = useState('#ffd54f');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;