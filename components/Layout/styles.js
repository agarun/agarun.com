import { css } from '@emotion/react';

export const container = css`
  position: relative;
  margin: 0 auto;
  width: 960px;
  max-width: var(--layout-width);
`;

export const title = css`
  font-size: calc(var(--font-size-scale) * 26px);
`;

export const header = css`
  padding-top: calc(var(--spacing) * 10);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const main = css``;

export const icon = css`
  position: absolute;
  right: calc(var(--spacing) * -10);
  width: 40px;
  height: 40px;
`;

export const monogram = css`
  padding: var(--spacing);
  background: var(--colors-grey-200);
  border-radius: var(--shape-border-radius);
`;

export const themeSwitch = css`
  top: calc(var(--spacing) * 11.25);
`;
