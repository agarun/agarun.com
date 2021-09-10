# [agarun.com](agarun.com)

My personal website where I host my portfolio, contact information, and blog posts. It's always a work in progress, but feel free to look around.

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Preview 🚀

To build the site:

```bash
yarn build
```

Then, to serve it locally:

```bash
yarn start
```

## Technologies 🧰

Hosted with [Netlify](https://www.netlify.com/). Built with React and [Next.js](https://nextjs.org/).

### Tooling

- [ESLint](https://eslint.org/)
  - The ESLint config (`.eslintrc.json`) extends the `create-react-app` config, Next.js config, and includes a few plugins
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
  - Pre-commit hooks that run tools like ESLint & Prettier on modified files via `lint-staged`
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) to collect performance metrics about webpages

### Styling

- Color modes and theming tokens are implemented with CSS variables (custom properties)
  - [Josh Comeau's dark mode guide](https://www.joshwcomeau.com/react/dark-mode/), [Theme UI](https://theme-ui.com/), [useDarkMode](https://github.com/donavon/use-dark-mode) were really useful resources to avoid FOUC.
- [Emotion](https://github.com/emotion-js/emotion) for writing style modules with JavaScript
- [Framer Motion](https://www.framer.com/motion/) for animations

### Writing

- [https://github.com/unifiedjs/unified](Unified) libraries including remark & rehype to process HTML and markdown
- [MDX](https://mdxjs.com/) to use React components like `next/image` in Markdown files
- [Prism](https://github.com/PrismJS/prism) to theme code snippets (with `prism-theme-vars`!)
  - [Custom theme](https://github.com/agarun/agarun.com/blob/main/styles/prism.css) based on [Night Owl by Sarah Drasner](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)

### Testing

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests
- [Cypress](https://www.cypress.io/) for integration and end-to-end tests

### Misc.

This is the third iteration of `agarun.com`. The first one was made with [Jekyll](https://jekyllrb.com/), and the second with [Gatsby](https://www.gatsbyjs.com/).
