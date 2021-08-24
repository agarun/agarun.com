/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';

function Link({ href, ...props }) {
  const isExternal = !href.startsWith('/');

  if (isExternal) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
    );
  }

  return (
    <NextLink href={href}>
      <a {...props} />
    </NextLink>
  );
}

export default Link;
