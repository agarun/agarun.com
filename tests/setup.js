import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  Object.defineProperty(navigator, 'clipboard', {
    writable: true,
    value: {
      writeText: jest.fn(),
    },
  });
});
