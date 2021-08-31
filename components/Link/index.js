/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';
import * as styles from './styles';

function Link({ href, ...props }) {
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

  return (
    <NextLink href={href}>
      <a css={styles.link} {...props} />
    </NextLink>
  );
}

export default Link;
