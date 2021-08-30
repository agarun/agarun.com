# agarun.com

My personal website where I host my portfolio, contact information, and blog posts. It's always a work in progress, but feel free to look around.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview 🚀

To build the static site:

```bash
yarn export
```

Then, to serve the build (`./out`) locally:

```bash
serve ./out
# or `python -m http.server --directory ./out`, etc.
```

## Technologies 🧰

Hosted with [Netlify](https://www.netlify.com/). Built with React and [Next.js](https://nextjs.org/).

### Tooling

- [ESLint](https://eslint.org/)
  - The ESLint config (`.eslintrc.json`) extends the `create-react-app` config, Next.js config, and includes a Prettier plugin
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
  - Pre-commit hooks that run tools like ESLint & Prettier on modified files (via `lint-staged`)
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) to collect performance metrics about webpages

### Styling

- Color modes and theming tokens are implemented with CSS variables (custom properties)
  - [Josh Comeau's dark mode guide](https://www.joshwcomeau.com/react/dark-mode/), [Theme UI](https://theme-ui.com/), [useDarkMode](https://github.com/donavon/use-dark-mode) were really useful resources to avoid FOUC.
- [Emotion](https://github.com/emotion-js/emotion) for writing style modules with JavaScript

### Misc.

This is the third iteration of `agarun.com`. The first one was made with [Jekyll](https://jekyllrb.com/), and the second with [Gatsby](https://www.gatsbyjs.com/).
