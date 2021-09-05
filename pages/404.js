import { css } from '@emotion/react';

const styles = {
  container: css`
    margin-top: calc(var(--spacing) * 8) 0;
  `,
  title: css`
    margin-bottom: 0;
    color: var(--colors-text-secondary);
    font-size: calc(var(--font-size-scale) * 64px);
  `,
  paragraph: css`
    margin-top: var(--spacing);
    font-size: calc(var(--font-size-scale) * 32px);
    font-weight: 500;
  `,
};

function NotFound() {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>404</h1>
      <p css={styles.paragraph}>
        This page could not be found.{' '}
        <span role="img" aria-label="Disappointed face">
          😞
        </span>
      </p>
    </section>
  );
}

export default NotFound;
