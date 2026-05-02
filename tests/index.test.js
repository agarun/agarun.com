import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { getProjects } from '../lib/projects';
import Index from '../pages/index';
import { render, screen } from './utils';

afterEach(cleanup);

describe('index page', () => {
  it('renders a heading', () => {
    render(<Index projects={[]} />);

    const heading = screen.getByRole('heading', {
      name: /aaron agarunov/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('displays featured projects', () => {
    const projects = getProjects();

    const { getByRole } = render(<Index projects={projects} />);

    const featuredProjects = projects.filter((project) =>
      Boolean(project.blurb)
    );

    const footer = getByRole('contentinfo', {
      name: /recent work/i,
      hidden: false,
    });

    for (const project of featuredProjects) {
      expect(footer).toHaveTextContent(project.short_title || project.title);
    }
  });
});
