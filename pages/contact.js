import { useState } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import { motion } from 'motion/react';
import { getSocials } from '../lib/socials';
import { styles as copyStyles } from '../components/CopyIconButton';
import { BubbleButton } from '../components/Button/BubbleButton';

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
    z-index: 10;

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
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 1.15);
    position: absolute;
    left: 104%;
    bottom: 0px;
    width: max-content;
    font-weight: 600;
    line-height: 1.5;
    z-index: 2;
    pointer-events: none;
    overflow: visible;
  `,
  copy: css`
    ${copyStyles.copiedIcon}
    position: absolute;
    left: 111%;
    right: -50px;
    z-index: 10;
    font-size: 19px;
    background: transparent;
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
    transform: 'translate3d(-125px, 50px, 100px) scale(0.25, 1)',
  },
  visible: {
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px) scale(1, 1)',
    transition: {
      opacity: {
        duration: 0.25,
        ease: 'easeInOut',
        delay: 0.05,
      },
      transform: {
        type: 'spring',
        bounce: 0.4,
        visualDuration: 0.14,
        delay: 0.1,
      },
    },
  },
  reveal: {
    transition: {
      mask: {
        duration: 0.87,
        times: [0, 0.36, 0.6, 0.9, 1],
        ease: [
          [0.65, 0, 0.8, 0.7],
          [0.65, 0, 0.8, 0.7],
          [0.65, 0, 0.8, 0.7],
          [0.65, 0, 0.8, 0.7],
          [0.65, 0, 0.8, 0.7],
        ],
        delay: 0,
      },
    },
  },
};

const copyVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: [1, 0],
    y: -12,
    transition: { duration: 1, ease: 'circOut' },
  },
};

export async function getStaticProps() {
  return { props: { links: getSocials().filter((item) => !item.disabled) } };
}

// TODO: See more button with Last.fm, Letterboxd, Whatpulse
// TODO: Add Are.na link

function Contact({ links }) {
  const [currentLink, setCurrentLink] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <section>
      <Head>
        <title>Contact ▪ Aaron Agarunov</title>
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
                animate={['visible', 'reveal']}
                variants={listItemDescriptionVariants}
                css={styles.description}
              >
                <BubbleButton>
                  {isCopied ? 'copied!' : description}
                </BubbleButton>
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
                ✅
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
