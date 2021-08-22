# agarun.com

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

### Tooling

- ESLint
  - The ESLint config (`.eslintrc.json`) extends the `create-react-app` config, Next.js config, and includes a Prettier plugin
- Prettier
- Husky
  - Pre-commit hooks that run tools like ESLint & Prettier on modified files (via `lint-staged`)
