import { css } from '@emotion/react';

const styles = {
  container: css`
    margin-top: calc(var(--spacing) * 12);
  `,
  title: css`
    margin-bottom: 0;
    color: var(--colors-text-secondary);
    font-family: var(--font-family-monospace);
    font-size: calc(var(--font-size-scale) * 64px);
  `,
  paragraph: css`
    margin-top: var(--spacing);
    margin-right: calc(var(--spacing) * 2);
    font-size: calc(var(--font-size-scale) * 24px);
    font-weight: 500;
  `,
};

function NotFound() {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>404</h1>
      <p css={styles.paragraph}>
        The page you are looking for doesn't exist or has been moved.
      </p>
    </section>
  );
}

export default NotFound;
