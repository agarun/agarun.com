import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/contact';
import { getSocials } from '../lib/socials';

describe('contact page', () => {
  it('email button copies email address on contact page', async () => {
    const links = getSocials();

    const { getByRole } = render(<Contact links={links} />);

    const emailLink = getByRole('link', { name: /email/i });

    fireEvent.mouseOver(emailLink);
    const hoverText = screen.getByText(/right click/i);
    expect(hoverText).toBeInTheDocument();

    fireEvent.contextMenu(emailLink);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toBeCalledWith(
      'agarunov.aaron@gmail.com'
    );
  });
});
