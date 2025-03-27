import { css } from '@emotion/react';

export const footer = css`
  display: flex;
  justify-content: center;
  padding-bottom: calc(var(--spacing) * 15);
  color: var(--colors-grey-400);
  font-size: calc(var(--font-size-scale) * 13px);

  @media (max-width: 950px) {
    padding-bottom: calc(var(--spacing) * 20);
  }
`;

export const content = css`
  padding: calc(var(--spacing) * 2) 0;
  position: absolute;
  left: 0;
  bottom: -2px;
  display: grid;
  grid-gap: calc(var(--spacing) * 0.75);
  grid-auto-flow: column dense;
  path {
    fill: currentColor;
  }
  path:hover {
    fill: var(--colors-grey-800);
  }
`;

export const link = css`
  color: var(--colors-grey-500);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  &:hover {
    color: var(--colors-grey-800);
  }
  svg {
    fill: currentColor;
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
