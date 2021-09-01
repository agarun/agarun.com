import { css } from '@emotion/react';

export const links = css`
  display: flex;
  align-items: center;
  font-size: calc(var(--font-size-scale) * 24px);

  & li:not(:last-of-type) {
    margin-right: calc(var(--spacing) * 5);
  }
`;

export const link = css`
  color: var(--colors-text-primary);
  cursor: pointer;
  &:hover {
    color: var(--colors-grey-500);
  }
`;

export const active = css`
  color: var(--colors-grey-500);
`;
