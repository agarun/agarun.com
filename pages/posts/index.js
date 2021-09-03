import { css } from '@emotion/react';
import { NavLink } from '../../components/Nav';
import Date from '../../components/PostLayout/components/Date';
import { getPosts } from '../../lib/posts';

const styles = {
  title: css`
    margin: calc(var(--spacing) * 8) 0;
    font-size: calc(var(--font-size-scale) * 36px);
    font-weight: 400;
    line-height: 1.33;
  `,
  list: css`
    margin: calc(var(--spacing) * 8) 0;
    display: flex;
    flex-direction: column;
  `,
  listItem: css`
    margin: calc(var(--spacing) * 2) 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    font-size: calc(var(--font-size-scale) * 24px);
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.5px;
    border-bottom: 2px solid var(--colors-grey-300);
  `,
};

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: { posts },
  };
}

function Posts({ posts }) {
  return (
    <section>
      <h1 css={styles.title}>
        A home for personal and technical notes, posts, and essays.
      </h1>
      <ul css={styles.list}>
        {posts.map(({ id, date, title }) => (
          <li key={id} css={styles.listItem}>
            <NavLink href={`/posts/${id}`}>{title}</NavLink>
            <Date>{date}</Date>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Posts;
