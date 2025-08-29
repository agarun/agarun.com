// We can use `animation-timeline` `scroll()` instead but
// it doesn't have full browser support yet
//  - https://x.com/jh3yy/status/1758284287189958973
//  - https://x.com/jh3yy/status/1758284287189958973

import { css } from '@emotion/react';

const fade = ({ top, bottom }) => css`
  --fade-height: 8rem;
  --fade-blur: 16px;
  --fade-opacity: 1;
  --fade-background: var(--colors-background);

  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99999;

  background: ${top
      ? `linear-gradient(to bottom, var(--fade-background), transparent 55%) top / 100% var(--fade-height) no-repeat${bottom ? ',' : ''}`
      : ''}
    ${bottom
      ? `linear-gradient(to top, var(--fade-background), transparent 55%) bottom / 100% var(--fade-height) no-repeat`
      : ''};

  -webkit-backdrop-filter: blur(var(--fade-blur));
  backdrop-filter: blur(var(--fade-blur));

  mask-image: ${top
      ? `linear-gradient(to bottom, black, transparent 75%)${bottom ? ',' : ''}`
      : ''}
    ${bottom ? `linear-gradient(to top, black, transparent 75%)` : ''};
  mask-size: ${top ? `100% var(--fade-height)${bottom ? ',' : ''}` : ''}
    ${bottom ? `100% var(--fade-height)` : ''};
  mask-position: ${top ? 'top' : ''}${top && bottom ? ',' : ''}
    ${bottom ? 'bottom' : ''};
  mask-repeat: no-repeat;
  ${top && bottom ? 'mask-composite: add;' : ''}

  -webkit-mask-image:
    ${top
    ? `linear-gradient(to bottom, black, transparent 75%)${bottom ? ',' : ''}`
    : ''}
    ${bottom ? `linear-gradient(to top, black, transparent 75%)` : ''};
  -webkit-mask-size: ${top ? `100% var(--fade-height)${bottom ? ',' : ''}` : ''}
    ${bottom ? `100% var(--fade-height)` : ''};
  -webkit-mask-position: ${top ? 'top' : ''}${top && bottom ? ',' : ''}
    ${bottom ? 'bottom' : ''};
  -webkit-mask-repeat: no-repeat;
  ${top && bottom ? '-webkit-mask-composite: source-over;' : ''}

  @supports not (backdrop-filter: blur(1px)) {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    mask: none;
    -webkit-mask: none;
  }
`;

function ScrollFade({ top = false, bottom = false }) {
  if (!top && !bottom) return null;
  return <div css={fade({ top, bottom })} />;
}

export default ScrollFade;
