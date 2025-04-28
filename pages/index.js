import Head from 'next/head';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getProjects } from '../lib/projects';
import { NavLink } from '../components/Nav';
import Canvas from '../components/Canvas';

const styles = {
  header: css`
    padding-top: calc(var(--spacing) * 20);
    margin-bottom: calc(var(--spacing) * 8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      min-width: 40px;
    }
    @media (max-width: 560px) {
      padding-top: calc(var(--spacing) * 10);
      margin-bottom: calc(var(--spacing) * 5);
    }
  `,
  themeSwitch: css`
    @media (max-width: 560px) {
      position: absolute;
      top: calc(var(--spacing) * 3);
      right: 0;
    }
  `,
  heading: css`
    font-size: calc(var(--font-size-scale) * 56px);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--font-letter-spacing-tight);
    line-height: 0.95;
  `,
  subheading: css`
    max-width: 900px;
    font-size: calc(var(--font-size-scale) * 36px);
    line-height: 1.33;
  `,
  description: css`
    font-size: calc(var(--font-size-scale) * 28px);
    line-height: 1.5;
    color: var(--colors-text-secondary);
  `,
  footer: css`
    margin-top: calc(var(--spacing) * 2);
    margin-bottom: calc(var(--spacing) * 5);
    display: flex;
    justify-content: flex-start;
  `,
  grid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
};

export async function getStaticProps() {
  const projects = getProjects();
  return { props: { projects } };
}

function Home({ projects }) {
  /**
   * using `will-change` appears to help `transform` performance
   * here for `x` & `y` transitions.
   * "it is a good practice to switch will-change on and off using
   * script code before and after the change occurs."
   * -> https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
   */
  const [hintStyle, setHintStyle] = useState({ willChange: 'transform' });
  useEffect(() => {
    const timeout = setTimeout(() => setHintStyle({}), 5000);
    return () => clearTimeout(timeout);
  }, []);

  /**
   * with Next.js 15, React 18, and `motion`, I found a delay of 0
   * would cause the first two animations to appear together.
   * adding a `baseDelay` to ensure the animations are separate.
   */
  const baseDelay = 0.4;
  const topMotionProps = {
    style: hintStyle,
    initial: { opacity: 0, y: 'calc(var(--spacing) * -0.5)' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: baseDelay },
  };

  const middleMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: baseDelay + 0.3 },
  };

  const bottomMotionProps = {
    style: hintStyle,
    initial: { opacity: 0, y: 'var(--spacing)' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: baseDelay + 0.6 },
  };

  return (
    <>
      <Head>
        <title>Aaron Agarunov</title>
      </Head>
      <motion.header css={styles.header} {...topMotionProps}>
        <h1 css={styles.heading}>Aaron Agarunov</h1>
      </motion.header>
      <main role="main">
        <motion.p css={styles.subheading} {...middleMotionProps}>
          Hi! I&#39;m Aaron, a software developer from New York.
        </motion.p>
        <motion.div {...bottomMotionProps}>
          <p css={styles.description}>
            I build engaging user interfaces focused on all the details.
            <br />
            Read more <NavLink href="/about">about me</NavLink>, my{' '}
            <NavLink href="/projects">work</NavLink>, or{' '}
            <NavLink href="/contact">reach out</NavLink>.
          </p>
        </motion.div>
      </main>
      <motion.footer {...bottomMotionProps} css={styles.footer}>
        <Canvas projects={projects} />
      </motion.footer>
    </>
  );
}

export default Home;
