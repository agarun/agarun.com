import { css } from '@emotion/react';

export const container = css`
  position: relative;
  margin: 0 auto;
  width: 960px;
  max-width: var(--layout-width);

  @media (max-width: 1190px) {
    width: 800px;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const header = css`
  padding-top: calc(var(--spacing) * 10);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const title = css`
  font-size: calc(var(--font-size-scale) * 26px);
`;

export const main = css`
  padding-bottom: calc(var(--spacing) * 10);
`;

export const themeSwitch = css`
  top: calc(var(--spacing) * 11.25);

  @media (max-width: 950px) {
    right: 0;
  }
`;
