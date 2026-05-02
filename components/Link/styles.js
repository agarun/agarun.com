import { css } from '@emotion/react';

export const link = css`
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: var(--colors-link-underline);
  text-shadow: var(--text-shadow);
  color: var(--colors-text-primary);
  background: linear-gradient(
    20deg,
    var(--colors-link-gradient-stop1) 0%,
    var(--colors-link-gradient-stop2) 100%
  );
  background-repeat: repeat-x;
  background-position: 0px 92%;
  background-size: 100% 6px;
  transition: all 100ms ease-out;
  cursor: pointer;

  body.dark & {
    text-decoration-color: var(--colors-accent);
  }

  &:hover {
    color: var(--colors-link-hover);
    text-decoration: none;
    background-position: 0px 60%;
    background-size: 100% 50%;
    transform: translateY(-2px) scaleX(0.98) scaleY(0.98);
  }
`;
