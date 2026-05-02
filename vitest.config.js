import { defineConfig } from 'vitest/config';
import { transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react-swc';

const nodeModulesToTransform = [
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'unist-*',
  'mdast-*',
  'hast-*',
  'micromark-*',
  'remark-.*',
  'rehype-.*',
  'parse-entities',
  'character-entities',
  'is-absolute-url',
  'html-void-elements',
  'stringify-entities',
  'ccount',
];

// https://github.com/vitejs/vite/discussions/3448#discussioncomment-10118853
const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.match(/.*\.js$/)) {
      return null;
    }

    return await transformWithEsbuild(code, id, {
      loader: 'jsx',
      jsx: 'automatic',
      jsxDev: true,
    });
  },
});

export default defineConfig({
  plugins: [react(), transformJsxInJs()],
  test: {
    environment: 'jsdom',
    setupFiles: ['tests/setup.js'],
    exclude: ['node_modules', '.next', 'tests/e2e'],
    coverage: {
      include: ['**/*.{js,jsx,ts,tsx}'],
      exclude: ['**/*.d.ts', '**/node_modules/**'],
    },
    transformMode: {
      web: [
        new RegExp(`node_modules/(?!(${nodeModulesToTransform.join('|')}))`),
      ],
    },
    alias: {
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': 'tests/stylesMock.js',
      // Handle image imports
      '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'tests/filesMock.js',
    },
  },
});
