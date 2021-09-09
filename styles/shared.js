import { css } from '@emotion/react';

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
