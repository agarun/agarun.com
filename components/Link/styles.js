import { css } from '@emotion/react';

export const link = css`
  display: inline-block;
  text-decoration: none;
  color: var(--colors-grey-800);
  background: linear-gradient(
    20deg,
    var(--colors-link-hover) 0%,
    var(--colors-link-gradient) 100%
  );
  background-repeat: repeat-x;
  background-position: 0px 85%;
  background-size: 100% 40%;
  border-bottom: 2px solid transparent;
  transition: all 100ms ease-out;

  &:hover {
    color: var(--colors-link);
    background-position: 0px 100%;
    background-size: 100% 3px;
    transform: translateY(-2px) scaleX(0.98) scaleY(0.98);
  }
`;
