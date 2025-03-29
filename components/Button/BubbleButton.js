import { css } from '@emotion/react';
import { motion } from 'motion/react';

const styles = {
  container: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    font-size: 22px;
    letter-spacing: -0.3px;
    font-weight: 400;
    color: var(--colors-grey-800);
    height: 60px;
    border-radius: 48px;
    border: 0.5px solid rgb(194, 194, 194, 0.74);
  `,
  outside: css`
    padding: 2px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(230, 230, 230, 0.3) 0%,
      rgb(207, 203, 199, 0.8) 33%,
      rgb(212, 208, 205, 0.8) 67%,
      rgba(230, 230, 230, 0.3) 100%
    );
    border-top: 0.5px solid rgb(242, 242, 242);
    border-bottom: 0.5px solid rgb(242, 242, 242);
    box-shadow:
      rgb(255, 255, 255, 0.91) 0px -2px 0px 0px inset,
      rgba(65, 32, 0, 0.02) 0px 2.5px 2.2px 0px,
      rgba(65, 32, 0, 0.03) 0px 6px 5px 0px,
      rgba(65, 32, 0, 0.04) 0px 12.5px 10px 0px,
      rgba(65, 32, 0, 0.05) 0px 22px 18px 0px,
      rgba(65, 32, 0, 0.06) 0px 42px 33px 0px,
      rgba(65, 32, 0, 0.077) 0px 100px 80px 0px,
      rgba(0, 0, 0, 0.01) 0px 0px 30px 0px inset;
    border-radius: 48px;
  `,
  inside: css`
    padding: 0 32px;
    padding-top: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      179.962deg,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    border-top: 0.5px solid rgb(242, 242, 242);
    border-bottom: 0.5px solid rgb(242, 242, 242);
    box-shadow: rgb(255, 255, 255, 0.87) 0px -2px 0px 0px;
    border-radius: 44px;
    z-index: 10;

    &:before {
      transition: all 0.3s ease-in;
      z-index: 80;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 1.5em;
      box-shadow:
        inset 0px 1px 1px hsla(260, 70%, 60%, 0.04),
        inset 0px 0px 12px hsla(260, 70%, 60%, 0.04),
        inset 0px -0.5em 14px hsla(265, 5%, 37%, 0.18);
    }

    &:after {
      mix-blend-mode: color-dodge;
      content: '';
      position: absolute;
      top: 0;
      border-radius: 188px 188px 44px 44px;
      width: 96%;
      height: 32px;
      overflow: hidden;
      background: linear-gradient(
        rgba(255, 255, 255, 0.74),
        rgba(255, 255, 255, 0.24)
      );
      filter: blur(3px);
      opacity: 0.88;
      overflow: hidden;
      z-index: 10;
      pointer-events: none;
    }
  `,
};

export function BubbleButton({ children }) {
  return (
    <motion.button layout css={styles.container}>
      <div css={styles.outside}>
        <div css={styles.inside}>{children}</div>
      </div>
    </motion.button>
  );
}
