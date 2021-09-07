import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import remarkRehype from 'remark-rehype';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkSlug)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown.content);
  return result.toString();
}
