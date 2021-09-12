import { css } from '@emotion/react';
import * as postStyles from '../PostLayout/styles';

export const nav = css`
  margin-top: calc(var(--spacing) * 4);
  margin-bottom: calc(var(--spacing) * 6);
  display: flex;
`;

export const navCard = css`
  width: auto;
`;

export const navLink = css`
  padding: calc(var(--spacing) * 2);
  display: inline-block;
  font-size: calc(var(--font-size-scale) * 14px);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--font-letter-spacing-wide);
  color: var(--colors-link);
  span {
    margin-right: var(--spacing);
  }
`;

export const article = css``;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const title = css`
  font-size: calc(var(--font-size-scale) * 64px);
`;

export const hero = css`
  width: 100%;
  height: 200px;
  background-color: var(--colors-background-light);
  border-radius: var(--shape-border-radius);
`;

export const date = css`
  color: var(--colors-text-secondary);
`;

export const links = css`
  font-size: calc(var(--font-size-scale) * 64px);

  a:not(:last-of-type) {
    margin-right: calc(var(--spacing) * 4);
  }
`;

export const prose = css`
  ${postStyles.prose};
`;
