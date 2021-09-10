import { css } from '@emotion/react';
import Head from 'next/head';
import { getProjects } from '../../lib/projects';
import Card, { CardTitle, CardDescription } from '../../components/Card';
import Link from '../../components/Link';
import { NavLink } from '../../components/Nav';

const styles = {
  cards: css`
    margin: calc(var(--spacing) * 8) calc(var(--spacing) * -4);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: calc(var(--spacing) * 4);

    @media (max-width: 960px) {
      margin-left: calc(var(--spacing) * 1);
      margin-right: calc(var(--spacing) * 1);
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  `,
  navLink: css`
    padding: calc(var(--spacing) * 3);
    padding-bottom: 0;
    display: block;
  `,
  meta: css`
    color: var(--colors-grey-600);
    font-size: calc(var(--font-size-scale) * 12px);
    text-transform: uppercase;
  `,
  links: css`
    padding: 0 calc(var(--spacing) * 3);
    margin-bottom: calc(var(--spacing) * 3);
    display: flex;
    align-items: flex-start;
  `,
  link: css`
    margin-right: var(--spacing);
    background-position: 0px 76%;
    font-size: calc(var(--font-size-scale) * 14px);
    font-weight: 600;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    line-height: 1.56;
  `,
};

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: { projects },
  };
}

function Projects({ projects }) {
  return (
    <section css={styles.cards}>
      <Head>
        <title>Work — Aaron Agarunov</title>
      </Head>
      {projects.map(({ id, title, summary, live, code, date, tags }) => (
        <Card key={id}>
          <NavLink href={`/projects/${id}`} css={styles.navLink}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{summary}</CardDescription>
            <p css={styles.meta}>
              {new Date(date).getFullYear()} — {tags[0]}
            </p>{' '}
          </NavLink>
          <div css={styles.links}>
            {live && (
              <Link href={live} css={styles.link}>
                Live
              </Link>
            )}{' '}
            {code && (
              <Link href={code} css={styles.link}>
                Code
              </Link>
            )}
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Projects;
