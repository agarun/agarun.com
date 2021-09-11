import { useEffect, useState } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Link from '../components/Link';
import Subtitle from '../components/Subtitle';
import { motion } from 'framer-motion';

const styles = {
  blurb: css`
    font-size: calc(var(--font-size-scale) * 70px);
    font-weight: 500;
    line-height: 1.1;
  `,
  paragraph: css`
    font-size: calc(var(--font-size-scale) * 22px);
    line-height: 1.5;
  `,
  copyIcon: css`
    position: relative;
    font-weight: 600;
    color: var(--colors-text-secondary);
    transition: opacity 200ms ease-out;
    &:hover {
      opacity: 0.8;
    }
  `,
  copiedIcon: css`
    padding: calc(var(--spacing) * 0.25) calc(var(--spacing) * 0.5);
    position: absolute;
    left: -12px;
    bottom: 28px;
    font-size: calc(var(--font-size-scale) * 13px);
    color: var(--colors-grey-100);
    background-color: var(--colors-grey-800);
    border-radius: var(--shape-border-radius);
  `,
};

function CopyIconButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    }
  };

  return (
    <button onClick={() => handleCopyText(text)}>
      <span
        css={styles.copyIcon}
        role="img"
        aria-label="copy email address to clipboard"
      >
        📋
        {isCopied && (
          <motion.span
            initial={{ opacity: 0, y: '25%' }}
            animate={{ opacity: 1, y: 0 }}
            css={styles.copiedIcon}
          >
            copied
          </motion.span>
        )}
      </span>
    </button>
  );
}

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
        I&apos;m really passionate about delivering clean, friendly, and
        practical experiences on the web. I enjoy working in front-end web
        development with the occasional dive into research, design, or data.
      </p>
      <p css={styles.paragraph}>
        I think a lot about how to enhance and align user interfaces or data
        visualizations to make my work inclusive, fast, detailed, and pretty.
      </p>

      <section>
        <Subtitle>Currently</Subtitle>
        <p css={styles.paragraph}>
          I work in Pathology at <Link href="https://www.mskcc.org">MSKCC</Link>{' '}
          where I collaborate with physicians, biologists, and engineers to
          build portals, systems, and{' '}
          <Link href="https://www.mskcc.org/msk-impact">tests</Link> in clinical
          bioinformatics.
        </p>
        <p css={styles.paragraph}>
          Feel free to <Link href="mailto:agarunovaaron@gmail.com">email</Link>
          <CopyIconButton text="agarunovaaron@gmail.com" /> me or check out my{' '}
          <Link href="/contact">socials</Link> or{' '}
          <Link href="https://agarun.com/aaron-agarunov-resume.pdf">
            résumé
          </Link>
          .
        </p>
        <p css={styles.paragraph}>
          I spend a lot of time working on generative art and design. I&apos;m
          also into esports, computer peripherals, and music discovery. I&apos;m
          trying to write more and learn more about all of them!
        </p>
      </section>

      <section>
        <Subtitle>Previously</Subtitle>
        <p css={styles.paragraph}>
          I studied Chemistry at{' '}
          <Link href="https://macaulay.cuny.edu/">Macaulay @ CUNY Hunter</Link>{' '}
          until May 2017. After graduating, I went to{' '}
          <Link href="https://www.appacademy.io/">App Academy</Link> and loved
          it. I didn&apos;t expect messing with HTML and CSS in 2007 to become
          so relevant again.
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
        <p css={styles.paragraph}>Thanks for reading.</p>
      </section>
    </section>
  );
}

export default About;
