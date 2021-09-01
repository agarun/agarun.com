import { css } from '@emotion/react';

const styles = {
  subtitle: css`
    display: inline-block;
    text-transform: uppercase;
    font-size: calc(var(--font-size-scale) * 12px);
    letter-spacing: 0.5px;
    font-weight: var(--font-weight-bold);
    color: var(--colors-text-primary);
    border-bottom: 2px solid var(--colors-grey-200);
  `,
};

function Subtitle({ children }) {
  return <p css={styles.subtitle}>{children}</p>;
}

export default Subtitle;
