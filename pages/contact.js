import { useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getSocials } from '../lib/socials';

export async function getStaticProps() {
  return { props: { links: getSocials().filter((item) => !item.disabled) } };
}

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
    a {
      text-decoration: none;
      font-weight: 700;
      color: ${isCurrentLink || !linkColor
        ? 'var(--colors-text-primary)'
        : linkColor};
      transition: color 200ms ease-out;
    }
  `,
  listCover: css`
    position: absolute;
    top: 0;
    left: calc(-100% - var(--spacing) * 15);
    display: block;
    width: 100%;
    height: 100%;
    background: var(--colors-background);
    content: '';
    pointer-events: none;
    z-index: 1;
  `,
  description: css`
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: all 500ms ease-out;
    pointer-events: none;
    transform: translateY(-50%) rotate(-20deg) scale(1.05);
  `,
};

function Contact({ links }) {
  const [currentLink, setCurrentLink] = useState(null);

  const listVariants = {
    hidden: {
      x: '-25%',
      opacity: 0.8,
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

  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
        css={styles.list}
      >
        {links.map(({ title, href, color }) => (
          <motion.li
            key={title}
            variants={listItemVariants}
            css={styles.listItem({
              linkColor: currentLink?.color,
              isCurrentLink: currentLink?.title === title,
            })}
            onMouseEnter={() => setCurrentLink({ title, color })}
            onMouseLeave={() => setCurrentLink(null)}
          >
            <Link href={href}>{title}</Link>
          </motion.li>
        ))}
      </motion.ul>
      <div css={styles.listCover} />
    </>
  );
}

export default Contact;
