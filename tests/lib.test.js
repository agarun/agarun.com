import {
  COLOR_MODE_KEY,
  LIGHT_MODE,
  setColorModeOnLoadFunctionString,
  initialColorMode,
} from '../lib/color-modes';
import { formatTag } from '../lib/tags';

beforeEach(() => {
  localStorage.clear();
});

describe('injected color modes script', () => {
  it('gets users initial color mode with no preferences', () => {
    // eslint-disable-next-line no-eval
    eval(`(${setColorModeOnLoadFunctionString()})()`);
    expect(localStorage.getItem(COLOR_MODE_KEY)).toEqual(LIGHT_MODE);
  });
});

describe('initialColorMode', () => {
  it('gets users initial color mode with no preferences', () => {
    initialColorMode();
    expect(localStorage.getItem(COLOR_MODE_KEY)).toEqual(LIGHT_MODE);
  });
});

describe('formatTag', () => {
  it('converts tag to kebab case', () => {
    expect(formatTag('data viz')).toEqual('data-viz');
    expect(formatTag('D3')).toEqual('d3');
    expect(formatTag('Generative   Art')).toEqual('generative-art');
  });
});
