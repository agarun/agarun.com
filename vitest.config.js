import { defineConfig } from 'vitest/config';

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

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['tests/setup.js'],
    exclude: ['node_modules', '.next', 'tests/cypress'],
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
