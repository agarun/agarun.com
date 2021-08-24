import { createContext, useCallback, useState } from 'react';
import {
  initialColorMode,
  setColorModeIntoStyles,
  setColorModeIntoStorage,
  LIGHT_MODE,
  DARK_MODE,
} from '../lib/color-modes';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [colorMode, setColorMode] = useState(initialColorMode());

  const setAndPersistColorMode = useCallback((mode) => {
    setColorModeIntoStyles(mode);
    setColorModeIntoStorage(mode);
    setColorMode(mode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        colorModes: [LIGHT_MODE, DARK_MODE],
        setColorMode: setAndPersistColorMode,
        setLightMode: () => setAndPersistColorMode(LIGHT_MODE),
        setDarkMode: () => setAndPersistColorMode(DARK_MODE),
        toggleColorMode: () =>
          setAndPersistColorMode(
            colorMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
          ),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
