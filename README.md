# agarun.com

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview

To build the static site:

```bash
yarn export
```

Then, to serve the build (`.out`) locally:

```bash
serve .out
# or `python -m http.server --directory .out`, etc.
```

## Technologies 🧰

### Tooling

- ESLint
  - The ESLint config (`.eslintrc.json`) extends the `create-react-app` config, Next.js config, and includes a Prettier plugin
- Prettier
- Husky
  - Pre-commit hooks that run tools like ESLint & Prettier on modified files (via `lint-staged`)

### Theming

- Color modes and theming tokens are implemented with CSS variables (custom properties)
  - [Josh Comeau's dark mode guide](https://www.joshwcomeau.com/react/dark-mode/), [Theme UI](https://theme-ui.com/), [useDarkMode](https://github.com/donavon/use-dark-mode) were really useful resources to avoid FOUC.
