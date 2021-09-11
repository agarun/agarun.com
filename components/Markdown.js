import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import Link from './Link';

export function Markdown({ html, ...props }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export function MDX({ source, components, ...props }) {
  return (
    <div {...props}>
      <MDXRemote
        {...source}
        components={{
          a: Link,
          img: Image,
          ...components,
        }}
      />
    </div>
  );
}
