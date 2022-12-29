import { useState } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { getSocials } from '../lib/socials';
import { styles as copyStyles } from '../components/CopyIconButton';

const styles = {
  list: css`
    margin: calc(var(--spacing) * 8) 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  `,
  listItem: ({ isCurrentLink, linkColor }) => css`
    position: relative;
    font-size: calc(var(--font-size-scale) * 64px);
    line-height: 1.2;
    z-index: 1;

    a {
      text-decoration: none;
      font-weight: 700;
      color: ${isCurrentLink || !linkColor
        ? 'var(--colors-text-primary)'
        : linkColor};
      transition: color 200ms ease-out;
    }
    @media (max-width: 430px) {
      font-size: calc(var(--font-size-scale) * 56px);
    }
  `,
  listCover: css`
    position: absolute;
    top: 0;
    left: calc(-100% - var(--spacing) * 15);
    display: block;
    width: 100%;
    height: 100vh;
    background: var(--colors-background);
    pointer-events: none;
    z-index: 2;
    transition: background 300ms ease;
  `,
  description: css`
    padding: calc(var(--spacing) * 0.75) calc(var(--spacing) * 1.15);
    position: absolute;
    right: -75%;
    bottom: -10%;
    font-size: calc(var(--font-size-scale) * 20px);
    font-weight: 600;
    line-height: 1;
    color: var(--colors-background);
    background-color: var(--colors-text-primary);
    border-radius: var(--shape-border-radius);
    z-index: 2;
    pointer-events: none;
  `,
  copy: css`
    ${copyStyles.copiedIcon}
    position: absolute;
    left: auto;
    right: -50px;
  `,
};

const listVariants = {
  hidden: {
    x: '-27%',
    opacity: 0.75,
  },
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 850 / 1000,
      staggerChildren: 85 / 1000,
      ease: 'easeInOut',
      delay: 100 / 1000,
    },
  },
};

const listItemVariants = {
  hidden: {
    x: '-20%',
  },
  visible: {
    x: '0%',
    transition: { duration: 550 / 1000, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const listItemDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: '-50%',
    rotate: '2deg',
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    rotate: '-12deg',
    scale: 1,
    transition: { duration: 700 / 1000, ease: [0.19, 1, 0.22, 1] },
  },
};

const copyVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: [0, 1, 0],
    y: -30,
    transition: { duration: 2, ease: 'easeOut' },
  },
};

export async function getStaticProps() {
  return { props: { links: getSocials().filter((item) => !item.disabled) } };
}

function Contact({ links }) {
  const [currentLink, setCurrentLink] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <section>
      <Head>
        <title>Contact — Aaron Agarunov</title>
      </Head>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
        css={styles.list}
      >
        {links.map(({ title, href, color, description, copy }) => (
          <motion.li
            key={title}
            variants={listItemVariants}
            css={styles.listItem({
              linkColor: currentLink?.color,
              isCurrentLink: currentLink?.title === title,
            })}
            onMouseEnter={() => setCurrentLink({ title, color, description })}
            onMouseLeave={() => setCurrentLink(null)}
            onContextMenu={(event) => {
              if (copy) {
                event.preventDefault();
                navigator.clipboard.writeText(href.slice(7));
                setIsCopied(1);
              }
            }}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>

            {description && currentLink?.description === description ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={listItemDescriptionVariants}
                css={styles.description}
              >
                {description}
              </motion.div>
            ) : null}
            {copy ? (
              <motion.div
                variants={copyVariants}
                initial={false}
                animate={isCopied ? 'visible' : 'hidden'}
                onAnimationComplete={() => setIsCopied(false)}
                css={styles.copy}
              >
                copied
              </motion.div>
            ) : null}
          </motion.li>
        ))}
      </motion.ul>
      <div css={styles.listCover} aria-hidden="true" />
    </section>
  );
}

export default Contact;
