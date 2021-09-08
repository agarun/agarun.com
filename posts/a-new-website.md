---
title: 'A New Website'
date: '2021-09-01'
tags: ['code']
draft: false
---

I first built [agarun.com](https://agarun.com) in late 2017, just a few weeks before attending a coding bootcamp. I was looking for last-minute projects to better prepare myself for the months ahead, had some time on my hands, and figured I'd need a portfolio website to land a job. I had previously used templates and site generators in the Freewebs & GeoCities era, so I really wanted to try something new. That's kind of where it all started.

# Choosing a Stack

My [old site](https://github.com/agarun/agarun.github.io) used Jekyll (a Ruby-based static site generator), Sass, and some vanilla JavaScript. These were easy to pick up for someone pretty new to programming and worked well.

Over the last few years, I've watched the [Gatsby](https://www.gatsbyjs.com/) and [Next](https://nextjs.org/) React frameworks grow a ton. I've experimented and built personal sites with both, but ultimately chose Next.js because I liked the flexibility, developer experience, and was already working on another project with it.

That brings us here. This version of agarun.com uses:

- **Next.js**, a frontend framework
- **Emotion**, a CSS-in-JS library
- **Framer Motion**, an animation library
- **Prettier** & **ESLint** for formatting & linting, ran pre-commit by **Husky** & **lint-staged**
- **Unified** libraries like remark and rehype, for processing HTML and markdown
- **Prism** to theme this blog's code snippets
- **Jest** and **Cypress** for testing utilities and pages
- plus some more, check out the [code](https://github.com/agarun/agarun.com)!

I expect the stack to change a bit as I'm still looking over alternatives like `linaria`, `react-spring`, `MDX`, and others, so the `README` might be more up-to-date.

# Next.js Ecosystem

When working on my first Gatsby project, I was really impressed by the rich plugin community. It seems like Next is catching up here and offers lots of examples with most common plugins.

I learned a lot from open-source templates like [Next.js Commerce](https://github.com/vercel/commerce), [Tailwind Next.js Starter](https://github.com/timlrx/tailwind-nextjs-starter-blog/), and [superplate](https://github.com/pankod/superplate).

# Tooling

The time that tools like Prettier and ESLint save is insurmountable. They're a must-have for teams working with JavaScript, and I usually pair them with git hooks to ensure the configs aren't ever broken.

I try to use plugins that integrate with other tools in the codebase, and I extend the [create-react-app](https://www.npmjs.com/package/eslint-config-react-app) config for its sensible rule set and accessibility plugins.

# Styling

My goal was to use CSS [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (variables) with a CSS-in-JS solution. CSS variables store our theming tokens and help avoid flash of unstyled content (FOUC) when determining the user's color mode, and CSS-in-JS has slowly become my preference over (S)CSS Modules in JavaScript web apps.

I picked [Emotion](https://emotion.sh/docs/introduction) here for its speed, `css` prop API, and SSR integration with Next. We use it in a similar way to CSS Modules:

```jsx
// Layout/styles.js;
export const container = css`
  max-width: var(--layout-width);
`;

// Layout/index.js;
import * as styles from './styles';

function Layout({ children }) {
  return <section css={styles.container}>{children}</section>;
}
```

## Color Modes

I took heavy inspiration from [Theme UI](https://theme-ui.com/) and [Josh Comeau](https://www.joshwcomeau.com/react/dark-mode/) to support multiple color modes.

An inline script is injected on each page as an IIFE. It checks for the user's system color mode and any existing settings, and then updates the DOM to apply the relevant styles. Each color mode is a CSS class name on the document body with a bunch of CSS variables defined, and can be switched around in the `body`'s class list after checking for preferences.

Once the React app is hydrated, a [theming provider](https://github.com/agarun/agarun.com/blob/main/components/ThemeProvider.js) uses the same helper functions to capture the color mode and render a switch button.

I keep all the properties in a `variables.css` file imported by a custom Next.js `_app.js`, but they could also live in JavaScript and be applied through the `document.documentElement.style.setProperty()` API.

## Animations

[Framer Motion](framer-motion) is the successor to Popmotion's Pose library. I had previously worked on some Pose animations I never ended up using, so I ported them to Framer Motion (check out the [contact](https://agarun.com/contact) page).
