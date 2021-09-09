import { css } from '@emotion/react';
import { NavLink } from '../../Nav';
import Subtitle from '../../Subtitle';

const styles = {
  prevNext: css`
    display: flex;
    border-top: var(--border-style);
    border-bottom: var(--border-style);
  `,
  prevNextItem: css`
    padding: calc(var(--spacing) * 2);
    display: flex;
    align-content: center;
    flex-basis: 50%;
    min-height: 100px;

    &:first-of-type {
      padding-left: 0;
      border-right: var(--border-style);
    }
    &:last-of-type {
      padding-right: 0;
      text-align: right;
    }
  `,
  prevNextItemLink: css`
    padding: calc(var(--spacing) * 2);
    display: block;
    width: 100%;
    font-weight: var(--font-weight-bold);
    background-color: var(--colors-link-900);
    border-radius: var(--shape-border-radius);
    filter: brightness(0.85);
  `,
  prevNextItemSubtitle: css`
    margin-top: 0;
    color: var(--colors-text-secondary);
    border: none;
  `,
  prevNextItemTitle: css`
    font-weight: 400;
  `,
};

function PrevNext({ prev, next }) {
  return (
    <section css={styles.prevNext} aria-label="other blog posts">
      <article css={styles.prevNextItem}>
        {prev && (
          <NavLink css={styles.prevNextItemLink} href={`/posts/${prev.id}`}>
            <Subtitle css={styles.prevNextItemSubtitle}>
              &larr; Previous
            </Subtitle>
            <div css={styles.prevNextItemTitle}>{prev.title}</div>
          </NavLink>
        )}
      </article>
      <article css={styles.prevNextItem}>
        {next && (
          <NavLink css={styles.prevNextItemLink} href={`/posts/${next.id}`}>
            <Subtitle css={styles.prevNextItemSubtitle}>Next &rarr;</Subtitle>
            <div css={styles.prevNextItemTitle}>{next.title}</div>
          </NavLink>
        )}
      </article>
    </section>
  );
}

export default PrevNext;
