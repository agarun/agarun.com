import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkRehype from 'remark-rehype';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import { serialize } from 'next-mdx-remote/serialize';

export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkSlug)
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings, { properties: { className: ['autolink'] } })
    .use(rehypePrism)
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown.content);
  return result.toString();
}

export async function mdxToHtml(mdx, scope = {}) {
  const result = await serialize(mdx, {
    scope,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [
        [rehypeAutolinkHeadings, { properties: { className: ['autolink'] } }],
        rehypePrism,
        rehypeExternalLinks,
      ],
    },
  });
  return result;
}
