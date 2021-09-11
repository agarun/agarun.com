// Jest 27 has experimental support for ESM:
// https://jestjs.io/docs/ecmascript-modules,
// but we'll just specify the ESM modules for now.
const nodeModulesToTransform = [
  // most of these are in the dependency tree for `unified`
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

module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/tests/stylesMock.js',

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/filesMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/tests/cypress',
  ],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${nodeModulesToTransform.join('|')})`,
  ],
};
