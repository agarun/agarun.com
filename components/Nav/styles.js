import { css } from '@emotion/react';

export const links = css`
  display: flex;
  align-items: center;
  font-size: calc(var(--font-size-scale) * 24px);

  & li:not(:last-of-type) {
    margin-right: calc(var(--spacing) * 5);
  }

  @media (max-width: 430px) {
    font-size: calc(var(--font-size-scale) * 20px);
    & li:not(:last-of-type) {
      margin-right: calc(var(--spacing) * 3);
    }
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
