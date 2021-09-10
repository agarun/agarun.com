import React from 'react';
import { render } from '@testing-library/react';
import { createRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import ThemeProvider from '../components/ThemeProvider';

// https://github.com/vercel/next.js/discussions/23034
export function createMockRouter(route = '/', query = {}) {
  window.__NEXT_DATA__ = {};
  const router = createRouter(route, query, '', {
    initialProps: {},
    pageLoader: jest.fn(),
    App: jest.fn(),
    Component: jest.fn(),
  });

  router.push = jest.fn((href) => {
    window.location.href = href;
    return Promise.resolve();
  });
  router.replace = jest.fn(() => Promise.resolve());
  router.prefetch = () => Promise.resolve();

  return router;
}

const Provider = ({ children }) => {
  return (
    <RouterContext.Provider value={createMockRouter('/', {})}>
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
