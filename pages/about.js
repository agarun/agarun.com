import Head from 'next/head';
import NextLink from 'next/link';
import { motion } from 'motion/react';
import { css } from '@emotion/react';
import Link from '../components/Link';
import Highlights from '../components/Highlights';

const styles = {
  container: css`
    position: relative;
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    color: var(--colors-text-primary);
  `,
  section: css`
    margin: 48px 0;
    width: 840px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 867px) {
      width: 100%;
    }
  `,
  intro: css`
    margin-top: 24px;
    margin-bottom: 64px;
    width: 540px;
    font-size: calc(var(--font-size-scale) * 21px);

    @media (max-width: 867px) {
      width: 100%;
      p {
        margin-bottom: 36px;
      }
    }
  `,
  subtitle: css`
    margin-bottom: 28px;
    color: var(--colors-accent);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.7px;
    border: 1px solid #b7a8ff;
    border-radius: 24px;
    padding: 0 8px;
  `,
  paragraph: css`
    margin: 0;
    margin-bottom: 21px;
    width: 100%;
    font-size: calc(var(--font-size-scale) * 21px);
    line-height: 1.6;
  `,
  keyline: css`
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(222, 222, 222, 0) 25%,
      #dedede 75%
    );
    @media (max-width: 867px) {
      background: 0;
    }
  `,
  outro: css`
    border: 1px solid #dedede;
    border-top: none;
    min-height: 128px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    @media (max-width: 867px) {
      border: 0;
    }
  `,
  link: css`
    text-decoration: none;
    font-size: calc(var(--font-size-scale) * 14px);
    color: var(--colors-text-secondary);
    align-self: flex-end;
    &:hover {
      color: var(--colors-grey-500);
    }
  `,
};

function About() {
  return (
    <section>
      <Head>
        <title>About ▪ Aaron Agarunov</title>
      </Head>

      <div css={styles.container}>
        <div css={styles.intro}>
          <p
            css={css`
              font-weight: 500;
              color: var(--colors-grey-900);
            `}
          >
            {`Hi! I'm Aaron, a software developer from Brooklyn. Welcome to my
            personal site, where I showcase recent work and tinker with projects
            endlessly.`}
          </p>
          <p>
            {`I think a lot about how to make web experiences inclusive, fast,
            engaging, and pretty. Throughout my career, I've worked in senior
            engineering positions where I focused on crafting user interfaces
            and data visualizations with diligent attention to detail.`}
          </p>
          <p>
            {`I'm obsessed with creative work and continuously chase inspiration,
            refine my skills, and study great design. When I'm not
            glued to a monitor, I'm trying out new restaurants, levitating to
            albums, or pursuing street photography.`}
          </p>
        </div>

        <div css={styles.keyline} style={{ left: 0 }} aria-hidden />
        <div css={styles.keyline} style={{ right: 0 }} aria-hidden />

        <motion.section
          css={styles.section}
          initial={{
            translateY: 10,
            opacity: 0,
            filter: 'blur(3px)',
          }}
          animate={{
            translateY: 0,
            opacity: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
        >
          <h3 css={styles.subtitle}>Highlights</h3>
          <Highlights />
          <NextLink href="/projects" css={styles.link}>
            {'See all projects ->'}
          </NextLink>
        </motion.section>
        <section css={styles.section}>
          <h3 css={styles.subtitle}>Recently</h3>
          <p css={styles.paragraph}>
            I've been enjoying playing around with{' '}
            <Link href="https://instagram.com/ronivonu">generative art</Link>{' '}
            projects and my{' '}
            <Link href="https://photos.agarun.com/">photography</Link>. I also{' '}
            <em>really</em> love music (religiously listen to weekly releases
            from my faves), cooking (addicted to food YouTube vids and blogs),
            and esports (mostly FPS games).
          </p>
        </section>
        <section css={styles.section}>
          <h3 css={styles.subtitle}>Previously</h3>
          <p css={styles.paragraph}>
            I studied Chemistry and Bioinformatics at{' '}
            <Link href="https://macaulay.cuny.edu/">
              Macaulay Honors College
            </Link>{' '}
            until graduating in May 2017. That summer, I enrolled into{' '}
            <Link href="http://appacademy.io/">App Academy</Link> to give web
            development another shot. It unlocked memories from 2008-2012 when I
            was making Freewebs sites, MySpace layouts, Tumblr themes, forums,
            and blogs. Turns out I love writing modern software, and I'm
            grateful to be doing it professionally!
          </p>
        </section>
        <section css={styles.section}>
          <h3 css={styles.subtitle}>Colophon</h3>
          <p css={styles.paragraph}>
            This site is set in <Link href="https://rsms.me/inter/">Inter</Link>{' '}
            for sans-serif and{' '}
            <Link href="https://fonts.google.com/specimen/Cousine">
              Cousine
            </Link>{' '}
            for monospace. It's built with React and Next.js, and hosted on
            Netlify. The code is available on{' '}
            <Link href="https://github.com/agarun/agarun.com">GitHub</Link>.
          </p>
        </section>
      </div>
      <section css={styles.outro} />
    </section>
  );
}

export default About;
