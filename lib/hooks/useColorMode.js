import { useContext } from 'react';
import { ThemeContext } from '../../components/ThemeProvider';

const useColorMode = () => {
  const { colorMode, toggleColorMode, ...themeContext } =
    useContext(ThemeContext);
  return { colorMode, toggleColorMode, ...themeContext };
};

export default useColorMode;
