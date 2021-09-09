import { css } from '@emotion/react';

export const card = css`
  width: 100%;
  max-height: 200px;
  background-color: var(--colors-background-light);
  border-radius: var(--shape-border-radius);
  border: 2px solid transparent;
  transition: box-shadow 300ms ease;
  overflow: hidden;

  &:hover {
    p,
    a {
      color: var(--colors-text-primary);
    }

    border: 2px solid var(--colors-grey-300);
    box-shadow: 0 0 0px 3px var(--colors-grey-200),
      0 0 5px var(--colors-grey-100);
  }

  @media (max-width: 800px) {
    max-height: 120px;
  }
`;

export const title = css`
  margin: 0;
`;

export const description = css`
  color: var(--colors-text-secondary);
  line-height: 1.56;
`;
