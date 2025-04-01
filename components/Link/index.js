import NextLink from 'next/link';
import * as styles from './styles';

function Link({ href, ...props }) {
  const isFragment = href.startsWith('#');

  if (isFragment) {
    return <NextLink href={href} {...props} />;
  }

  const isExternal = !href.startsWith('/');

  if (isExternal) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        css={styles.link}
        {...props}
      />
    );
  }

  return <NextLink href={href} css={styles.link} {...props} />;
}

export default Link;
