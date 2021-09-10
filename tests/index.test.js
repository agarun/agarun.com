import Index from '../pages/index';
import { render, screen } from './utils';

describe('index page', () => {
  it('renders a heading', () => {
    render(<Index recentProjects={[]} />);

    const heading = screen.getByRole('heading', {
      name: /aaron agarunov/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
