import { css } from '@emotion/react';
import { formatDate } from '../../../lib/dates';

const styles = {
  container: css`
    margin-top: var(--spacing);
    display: flex;
    align-items: baseline;
    gap: calc(var(--spacing) * 1);
  `,
  date: css`
    font-size: calc(var(--font-size-scale) * 16px);
    font-weight: var(--font-weight-body);
    letter-spacing: normal;
    color: var(--colors-accent);
    opacity: 0.92;
  `,
};

function Date({ date, children, ...props }) {
  return (
    <div css={styles.container} {...props}>
      <time css={styles.date} dateTime={date}>
        {formatDate(date || children)}
      </time>
    </div>
  );
}

export default Date;
