import Image from 'next/image';
import { css } from '@emotion/react';
import profilePhoto from '../../../public/images/me.webp';

const styles = {
  author: css`
    margin-top: calc(var(--spacing) * 6);
    margin-bottom: calc(var(--spacing) * 8);
    padding-top: calc(var(--spacing) * 2);
    display: flex;
    align-items: center;
    border-top: var(--border-style);

    address {
      position: relative;
      top: 1px;
      margin: calc(var(--spacing) * 2);
      font-style: normal;

      @media (max-width: 360px) {
        margin: var(--spacing);
      }
    }
    address a {
      color: var(--colors-text-primary);
      font-weight: var(--font-weight-bold);
      text-decoration: none;
    }
    address p {
      margin: 0;
      line-height: 1.5;
      color: var(--colors-text-secondary);
    }
  `,
  avatar: css`
    position: relative;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;

    img {
      position: relative;
      width: 100%;
      height: 100%;
      filter: brightness(1.1) saturate(0.9);
    }
  `,
};

export function Avatar() {
  return (
    <div css={styles.avatar}>
      <Image
        src={profilePhoto}
        objectFit="cover"
        placeholder="blur"
        alt="Photo of the author Aaron"
      />
    </div>
  );
}

function Author() {
  return (
    <div css={styles.author}>
      <Avatar />
      <address>
        <a
          rel="author noopener noreferrer"
          target="_blank"
          href="https://twitter.com/agarune"
        >
          Aaron Agarunov
        </a>
        <p>tinkerer, artist, web person</p>
      </address>
    </div>
  );
}

export default Author;
