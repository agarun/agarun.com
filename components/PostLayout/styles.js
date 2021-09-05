import { css } from '@emotion/react';

export const article = css`
  padding: calc(var(--spacing) * 4);
  min-height: calc(100vh - 40px);
  background: linear-gradient(
    to top,
    var(--colors-background-gradient) calc(var(--spacing) * 50),
    transparent
  );

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

export const avatar = css`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: var(--shape-border-radius);
  overflow: hidden;

  img {
    transform: scale(1.5);
  }
`;
