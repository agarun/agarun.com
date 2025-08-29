import { css } from '@emotion/react';

export const links = css`
  position: relative;
  display: flex;
  align-items: center;
  font-size: calc(var(--font-size-scale) * 24px);
  gap: calc(var(--spacing) * 5);

  @media (max-width: 430px) {
    font-size: calc(var(--font-size-scale) * 20px);
    gap: calc(var(--spacing) * 3);
  }
`;

export const link = css`
  color: var(--colors-text-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color ease 200ms;
  &:hover {
    transition: color ease 67ms;
    color: var(--colors-grey-500);
  }
`;

export const active = css`
  color: var(--colors-grey-500);
`;

export const nav = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const headerNavLink = css`
  text-decoration: underline;
  text-decoration-color: var(--colors-grey-200);
`;

export const clipPathContainer = css`
  position: absolute;
  z-index: 10;
  width: 100%;
  overflow: hidden;
  transition: clip-path 0.25s ease;
  clip-path: inset(100%);
`;

export const clipPathLinks = css`
  a,
  a:hover {
    color: var(--colors-grey-500);
  }
`;
