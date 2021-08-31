/**
 * @module mixins - Ports of scss mixins or common
 *                  styling helper fns
 */

/**
 * Creates `rem` sizing relative to root html font
 * size (when set to 16px)
 * with a fallback for `px` sizing
 *
 * @param {number} sizeValue - pixel size
 * @returns {string} `rem` style and `px` style fallback
 */
const fontSize = (sizeValue) => `
 font-size: ${sizeValue}px;
 font-size: ${sizeValue / 16}rem;
 `;

// adapted from https://stackoverflow.com/a/6444043
const lighten = (color, percent) => {
  const hexCode = color.slice(1);
  const r = parseInt(hexCode.substr(0, 2), 16);
  const g = parseInt(hexCode.substr(2, 2), 16);
  const b = parseInt(hexCode.substr(4, 2), 16);

  return (
    '#' +
    (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
  );
};

export { fontSize, lighten };
