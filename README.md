# [agarun.com](agarun.com)

My personal website where I host my portfolio, contact info, and writing. It's always a work in progress, but feel free to look around.

## Getting Started

First, setup [pnpm](https://pnpm.io/) and [Node](https://nodejs.org/en/download) >= 20.

Next, install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Preview Build

Build the site:

```bash
pnpm build
```

Then, serve it locally:

```bash
pnpm start
```

## Tech Stack

### Codebase

This project uses [React](https://react.dev/) and [Next.js](https://nextjs.org/)

```bash
.
├── components
│   ├── …
│   ├── Icon
│   ├── Link
│   ├── Nav
│   ├── Layout
│   ├── PostLayout
│   └── ProjectLayout
├── pages
│   ├── …
│   ├── posts
│   └── projects
├── lib
├── posts
├── projects
├── public
├── styles
└── tests
    ├── …
    └── e2e
        └── …
```

### Hosting

- [Netlify](https://www.netlify.com/)

### Tooling

- [ESLint](https://eslint.org/): linting
- [Prettier](https://prettier.io/): formatting
- [Husky](https://github.com/typicode/husky): pre-commit hooks that run on modified files using `lint-staged`
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) to collect performance metrics

> You can use Lighthouse locally and [on Netlify](https://www.netlify.com/blog/2021/03/26/netlify-build-plugin-of-the-week-lighthouse/), in addition to PageSpeed ([web.dev/measure](https://web.dev/measure/)).

### Styling

- **Theming**: color mode support and theming tokens are implemented with CSS variables
- **CSS**: [Emotion](https://github.com/emotion-js/emotion) CSS prop in addition to regular stylesheets
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Shaders**: [Paper](https://github.com/paper-design/shaders)

> Josh Comeau's [dark mode guide](https://www.joshwcomeau.com/react/dark-mode/), [Theme UI](https://theme-ui.com/), [Tailwind](https://github.com/tailwindlabs/tailwindcss/blob/c45616ff915c4bddb551f92f4c651ca76c4448ea/packages/tailwindcss/src/compat/dark-mode.ts#L4), and [useDarkMode](https://github.com/donavon/use-dark-mode) were really useful resources to avoid flash of unstyled content (FOUC).

### Writing

- [unified](https://github.com/unifiedjs/unified): libraries to process HTML and markdown content, including remark & rehype plugins
- [MDX](https://mdxjs.com/): use React components in Markdown files, using `next-mdx-remote` over `mdx-bundler`
- [Prism](https://github.com/PrismJS/prism): code syntax highlighting themes, using `prism-theme-vars`

> I use a [custom](https://github.com/agarun/agarun.com/blob/main/styles/prism.css) syntax highlighting theme based on the lovely [Night Owl by Sarah Drasner](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl) theme.

### Testing

- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests
- [Playwright](https://playwright.dev/) for end-to-end tests

### Colophon

- [Inter](https://rsms.me/inter/): sans-serif (website)
- [TASA Orbiter](https://uncut.wtf/sans-serif/tasa-orbiter/): sans-serif (resume)
- [Cousine](https://fonts.google.com/specimen/Cousine): monospace

## History

This is the third iteration of `agarun.com`. The first one was made with [Jekyll](https://jekyllrb.com/), and the second with [Gatsby](https://www.gatsbyjs.com/).
