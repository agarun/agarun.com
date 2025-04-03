import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import ThemeProvider from '../components/ThemeProvider';
import { useRouter } from 'next/router';

// Mock useRouter for Next.js
export function createMockRouter(overrides) {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(undefined),
    beforePopState: vi.fn(),
    isFallback: false,
    ...overrides,
  };
}

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

const Provider = ({ children }) => {
  useRouter.mockReturnValue(createMockRouter({}));
  return (
    <RouterContext.Provider value={createMockRouter({})}>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
