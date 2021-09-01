/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as styles from './styles';

const links = [
  { title: 'Work', href: '/projects' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/posts' },
];

export function NavLink({ href, ...props }) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === props.as;
  return (
    <NextLink href={href}>
      <a css={[styles.link, isActive && styles.active]} {...props} />
    </NextLink>
  );
}

function Nav() {
  return (
    <ul css={styles.links}>
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.href}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Nav;