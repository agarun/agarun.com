import { css } from '@emotion/react';

const styles = {
  subtitle: css`
    display: inline-block;
    text-transform: uppercase;
    font-size: calc(var(--font-size-scale) * 12px);
    letter-spacing: 0.7px;
    font-weight: var(--font-weight-bold);
    color: var(--colors-text-primary);
  `,
  border: css`
    border-bottom: 2px solid var(--colors-grey-200);
  `,
};

function Subtitle({ children, border = true, ...props }) {
  return (
    <p css={[styles.subtitle, border && styles.border]} {...props}>
      {children}
    </p>
  );
}

export default Subtitle;
