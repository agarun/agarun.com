import { css } from '@emotion/react';

export const footer = css`
  margin-bottom: calc(var(--spacing) * 2);
  color: var(--colors-grey-400);
  font-size: calc(var(--font-size-scale) * 13px);
`;

export const content = css`
  padding: calc(var(--spacing) * 2) 0;
  position: absolute;
  left: 0;
  bottom: -2px;
  display: grid;
  grid-gap: var(--spacing);
  grid-auto-flow: column dense;
  path {
    fill: currentColor;
  }
  path:hover {
    fill: var(--colors-grey-600);
  }
`;

export const link = css`
  color: var(--colors-grey-400);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  &:hover {
    color: var(--colors-grey-600);
  }
`;

export const icon = css`
  position: absolute;
  right: calc(var(--spacing) * -10);
  width: 40px;
  height: 40px;

  @media (max-width: 950px) {
    top: auto;
    bottom: calc(var(--spacing) * -8);
  }
`;

export const monogram = css`
  padding: var(--spacing);
  bottom: 0;
  background: var(--colors-grey-200);
  border-radius: var(--shape-border-radius);

  @media (max-width: 950px) {
    right: calc(var(--spacing) * 8);
  }
`;
