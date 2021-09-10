import { css } from '@emotion/react';
import { link as linkStyle } from '../Link/styles';

export const article = css`
  margin: 0 auto;
  padding: calc(var(--spacing) * 6);
  min-height: calc(100vh - 40px);
  width: 850px;
  background: linear-gradient(
    to top,
    var(--colors-background-gradient) calc(var(--spacing) * 100),
    transparent
  );
  border-bottom-left-radius: var(--shape-border-radius);
  border-bottom-right-radius: var(--shape-border-radius);

  @media (max-width: 840px) {
    padding: 0;
  }
`;

export const title = css`
  margin-top: calc(var(--spacing) * 10);
  font-size: calc(var(--font-size-scale) * 70px);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
`;

export const prose = css`
  margin-top: calc(var(--spacing) * 10);
  margin-bottom: calc(var(--spacing) * 2);
  margin-left: auto;
  margin-right: auto;
  font-size: calc(var(--font-size-scale) * 18px);
  line-height: 1.56;

  a {
    ${linkStyle}
    line-height: 1.5;
  }
  h1 {
    margin-top: calc(var(--spacing) * 8);
  }
  h2 {
    margin-top: calc(var(--spacing) * 6);
    margin-bottom: calc(var(--spacing) * 2);
    color: var(--colors-accent);
  }
  ol,
  ul {
    padding-left: calc(var(--spacing) * 5);
    list-style-type: '〰';
    line-height: 2;
  }
  li {
    padding-left: calc(var(--spacing) * 3);
    list-style-type: inherit;
    &::marker {
      color: var(--colors-link);
    }
  }
`;

export const global = css`
  html {
    scroll-behavior: smooth;
  }

  .autolink {
    position: absolute;
    left: calc(var(--spacing) * 9);
    color: var(--colors-text-secondary);
    opacity: 0;
  }
  .autolink::before {
    position: relative;
    content: '#';
  }
  h1:hover .autolink,
  h2:hover .autolink,
  h3:hover .autolink,
  h4:hover .autolink {
    opacity: 0.33;
  }
`;
