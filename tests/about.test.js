import { describe, it, expect } from 'vitest';
import About from '../pages/about';
import { render, screen, waitFor } from '@testing-library/react';

describe('about page', () => {
  it.skip('clipboard icon button copies email address on about page', async () => {
    const { getAllByRole } = render(<About />);

    getAllByRole('img')[0].click();

    await waitFor(() => screen.findByText('copied'));

    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toBeCalledWith(
      'agarunovaaron@gmail.com'
    );
  });
});
