import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getProjects } from '../lib/projects';
import Link from '../components/Link';
import Monogram from '../components/Monogram';
import ThemeSwitch from '../components/ThemeSwitch';
import Subtitle from '../components/Subtitle';
import Recent from '../components/Recent';
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
  `,
  subheading: css`
    max-width: 800px;
    font-size: calc(var(--font-size-scale) * 36px);
    line-height: 1.33;
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

export async function getStaticProps() {
  const projects = getProjects();
  const recentProjects = projects.slice(0, 2);
  return { props: { recentProjects } };
}

function Home({ recentProjects }) {
  /**
   * using `will-change` appears to help `transform` performance
   * here for `x` & `y` transitions.
   * "it is a good practice to switch will-change on and off using
   * script code before and after the change occurs."
   * -- https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
   */
  const [hintStyle, setHintStyle] = useState({ willChange: 'transform' });
  useEffect(() => {
    const timeout = setTimeout(() => setHintStyle({}), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const topMotionProps = {
    style: hintStyle,
    initial: { opacity: 0, y: 'calc(var(--spacing) * -0.5)' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const middleMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 },
  };

  const bottomMotionProps = {
    style: hintStyle,
    initial: { opacity: 0, y: 'var(--spacing)' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.6 },
  };

  return (
    <>
      <Head>
        <title>Aaron Agarunov</title>
      </Head>
      <motion.header css={styles.header} {...topMotionProps}>
        <h1 css={styles.heading}>Aaron Agarunov</h1>
        <ThemeSwitch />
      </motion.header>
      <main role="main">
        <motion.p css={styles.subheading} {...middleMotionProps}>
          Software developer based in Brooklyn, NY. Building web experiences at{' '}
          <Link href="https://mskcc.org">MSKCC</Link>.
        </motion.p>
        <motion.div {...bottomMotionProps}>
          <p css={styles.description}>
            I work on user interfaces and data visualizations. I focus on the
            details to make apps simple. tODO-Change
            <NavLink href="/about">Read more</NavLink>, see my{' '}
            <NavLink href="/projects">projects</NavLink>,{' '}
            <NavLink href="/posts">posts</NavLink>, or{' '}
            <NavLink href="/contact">contact info</NavLink>.
          </p>
          <Subtitle>Projects</Subtitle>
          <Recent projects={recentProjects} />
        </motion.div>
      </main>
      <motion.footer {...bottomMotionProps} css={styles.footer}>
        <Monogram width={30} height={30} />
      </motion.footer>
    </>
  );
}

export default Home;
