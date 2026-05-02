import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as styles from './styles';
import { forwardRef } from 'react';

export const NavLink = forwardRef(function NavLink({ href, ...props }, ref) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === props.as;

  return (
    <NextLink
      href={href}
      css={[styles.link, isActive && styles.active]}
      aria-current={isActive ? 'page' : null}
      ref={ref}
      {...props}
    />
  );
});
