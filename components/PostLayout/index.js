import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import Link from '../../components/Link';
import PrevNext from './components/PrevNext';
import Date from './components/Date';
import Author from './components/Author';
import * as styles from './styles';

export function Markdown({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} css={styles.prose} />;
}

export function MDX({ source }) {
  return (
    <div css={styles.prose}>
      <MDXRemote
        {...source}
        components={{
          a: Link,
          img: Image,
        }}
      />
    </div>
  );
}

function Post({ title, date, html, prev, next }) {
  return (
    <article css={styles.article}>
      <h1 css={styles.title}>{title}</h1>
      <h2>
        <Date>{date}</Date>
      </h2>
      <MDX source={html} />
      <Author />
      <PrevNext prev={prev} next={next} />
    </article>
  );
}

export default Post;
