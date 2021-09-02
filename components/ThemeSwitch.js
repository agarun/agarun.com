import { css } from '@emotion/react';
import { DARK_MODE } from '../lib/color-modes';
import useColorMode from '../lib/hooks/useColorMode';
import DropletIcon from './DropletIcon';

const styles = {
  dropletIcon: ({ colorMode }) => css`
    fill: ${colorMode === DARK_MODE
      ? 'var(--colors-grey-500)'
      : 'var(--colors-grey-200)'};
    stroke: var(--colors-text-secondary);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding: var(--spacing);
    background: var(--colors-grey-200);
    border-radius: var(--shape-border-radius);
    transition: fill 100ms ease-in;
    &:hover {
      fill: ${colorMode === DARK_MODE
        ? 'var(--colors-grey-100)'
        : 'var(--colors-grey-400)'};
    }
  `,
};

function ThemeSwitch(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <button onClick={toggleColorMode} {...props}>
      <DropletIcon css={styles.dropletIcon({ colorMode })} />
    </button>
  );
}

export default ThemeSwitch;
