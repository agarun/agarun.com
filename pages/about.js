import Head from 'next/head';
import { css, keyframes } from '@emotion/react';
import Link from '../components/Link';
import Subtitle from '../components/Subtitle';
import CopyIconButton from '../components/CopyIconButton';

const animation = keyframes`
    0% { background-position: 0% 30% }
    50% { background-position: 100% 70% }
    100% { background-position: 0% 30% }
`;

const styles = {
  blurb: css`
    position: relative;
    font-size: calc(var(--font-size-scale) * 70px);
    font-weight: 500;
    line-height: 1.1;
    z-index: 1;
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      width: 54%;
      height: 100%;
      content: '';
      background: linear-gradient(
        40deg,
        var(--colors-link-700),
        var(--colors-link-gradient),
        var(--colors-accent),
        var(--colors-link-700)
      );
      background-size: 400% 400%;
      border-radius: var(--shape-border-radius);
      opacity: 0.25;
      pointer-events: none;
      z-index: -1;
      animation: ${animation} 10s ease-in-out infinite;
    }
    @media (max-width: 500px) {
      font-size: calc(var(--font-size-scale) * 54px);
    }
  `,
  paragraph: css`
    font-size: calc(var(--font-size-scale) * 22px);
    line-height: 1.5;
  `,
};

function About() {
  return (
    <section>
      <Head>
        <title>About — Aaron Agarunov</title>
      </Head>
      <p css={styles.blurb}>
        Hey! I&apos;m Aaron.
        <br />
        I&apos;m a software developer based in New York.
      </p>
      <p css={styles.paragraph}>
        I&apos;m really passionate about delivering clean and friendly
        experiences on the web. I enjoy working on front-end development with a
        focus on research, design, and data.
      </p>
      <p css={styles.paragraph}>
        I think a lot about how to enhance and share user interfaces and data
        visualizations to make my work inclusive, fast, engaging, and pretty.
      </p>

      <section>
        <Subtitle>Currently</Subtitle>
        <p css={styles.paragraph}>
          I work in Pathology at <Link href="https://www.mskcc.org">MSKCC</Link>{' '}
          where I collaborate with physicians, biologists, and engineers to
          build portals, tools, and{' '}
          <Link href="https://www.mskcc.org/msk-impact">tests</Link> in clinical
          bioinformatics.
        </p>
        <p css={styles.paragraph}>
          I spend a lot of time working on generative art and design. I&apos;m
          also into esports, peripherals, and music. I&apos;m trying to{' '}
          <Link href="/posts">write more</Link> and explore creative projects.
        </p>
        <p css={styles.paragraph}>
          I&apos;m open to new opportunities! Feel free to{' '}
          <Link href="mailto:agarunovaaron@gmail.com">email</Link>
          <CopyIconButton text="agarunovaaron@gmail.com" /> me or check out my{' '}
          <Link href="/contact">socials</Link> or{' '}
          <Link href="https://agarun.com/aaron-agarunov-resume.pdf">
            résumé
          </Link>
          .
        </p>
      </section>

      <section>
        <Subtitle>Previously</Subtitle>
        <p css={styles.paragraph}>
          I studied Chemistry at{' '}
          <Link href="https://macaulay.cuny.edu/">Macaulay @ CUNY Hunter</Link>{' '}
          until May 2017. After graduating, I went to{' '}
          <Link href="https://www.appacademy.io/">App Academy</Link> to learn
          development. I loved it and I&apos;ve been navigating software ever
          since. I guess messing with HTML and CSS on 2007-era Myspace and
          Tumblr was just the start.
        </p>
      </section>

      <section>
        <Subtitle>Colophon</Subtitle>
        <p css={styles.paragraph}>
          This is the 3rd iteration of my personal site. This one is built with
          React and Next.js, and hosted on Netlify. It&apos;s set in{' '}
          <Link href="https://rsms.me/inter/">Inter</Link> for sans serif and{' '}
          <Link href="https://fonts.google.com/specimen/Cousine">Cousine</Link>{' '}
          for monospace. The code is available on{' '}
          <Link href="https://github.com/agarun/agarun.com">GitHub</Link>.
        </p>
        <p css={styles.paragraph}>Thanks for reading!</p>
      </section>
    </section>
  );
}

export default About;
