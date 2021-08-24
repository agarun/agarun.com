import { createContext, useCallback, useEffect, useState } from 'react';
import {
  initialColorMode,
  setColorModeIntoStyles,
  setColorModeIntoStorage,
  COLOR_MODES,
  LIGHT_MODE,
  DARK_MODE,
} from '../lib/color-modes';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [colorMode, setColorMode] = useState(null);

  const setAndPersistColorMode = useCallback((mode) => {
    setColorModeIntoStyles(mode);
    setColorModeIntoStorage(mode);
    setColorMode(mode);
  }, []);

  // NOTE(agarun): `useLayoutEffect` caveat https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  useEffect(() => {
    const mode = initialColorMode();
    setAndPersistColorMode(mode);
  }, [setAndPersistColorMode]);

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        colorModes: COLOR_MODES,
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
