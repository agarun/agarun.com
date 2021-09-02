import Head from 'next/head';
import { css } from '@emotion/react';
import Link from '../components/Link';
import Monogram from '../components/Monogram';
import ThemeSwitch from '../components/ThemeSwitch';
import Subtitle from '../components/Subtitle';
import { NavLink } from '../components/Nav';

const styles = {
  header: css`
    margin-top: calc(var(--spacing) * 20);
    margin-bottom: calc(var(--spacing) * 10);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  heading: css`
    font-size: calc(var(--font-size-scale) * 56px);
    font-weight: var(--font-weight-bold);
    color: var(--colors-text-primary);
  `,
  subheading: css`
    max-width: 800px;
    font-size: calc(var(--font-size-scale) * 36px);
    line-height: 1.33;
    color: var(--colors-text-primary);
  `,
  description: css`
    font-size: calc(var(--font-size-scale) * 28px);
    line-height: 1.5;
    color: var(--colors-text-secondary);
  `,
  footer: css`
    margin: var(--spacing);
    display: flex;
    justify-content: center;
  `,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaron Agarunov</title>
      </Head>
      <header css={styles.header}>
        <h1 css={styles.heading}>Aaron Agarunov</h1>
        <ThemeSwitch />
      </header>
      <main role="main">
        <p css={styles.subheading}>
          Software developer based in Brooklyn, NY. Building web experiences at{' '}
          <Link href="https://mskcc.org">MSKCC</Link>.
        </p>
        <p css={styles.description}>
          I&apos;m interested in user interfaces, data visualization, and
          interaction design. <NavLink href="/about">Read more</NavLink>, see my{' '}
          <NavLink href="/projects">projects</NavLink>,{' '}
          <NavLink href="/posts">posts</NavLink>, or{' '}
          <NavLink href="/contact">contact info</NavLink>.
        </p>
        <Subtitle>Projects</Subtitle>
      </main>
      <footer css={styles.footer}>
        <Monogram width={30} height={30} />
      </footer>
    </>
  );
}
