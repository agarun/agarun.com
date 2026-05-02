import { useEffect, useMemo, useRef } from 'react';
import { NavLink } from './NavLink';
import { useRouter } from 'next/router';
import * as styles from './styles';

const links = [
  { title: 'About', href: '/about' },
  { title: 'Work', href: '/projects' },
  { title: 'Contact', href: '/contact' },
  { title: 'Posts', href: '/posts' },
];

function HeaderNavLink({ href, containerRef, ...props }) {
  const { asPath } = useRouter();
  const isActive = useMemo(
    () => asPath === href || asPath === props.as,
    [asPath, href, props.as]
  );

  const activeRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef && containerRef.current;

    if (isActive && containerEl) {
      const activeEl = activeRef.current;

      if (activeEl) {
        const { offsetLeft, offsetWidth } = activeEl;
        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        containerEl.style.clipPath = `inset(0 ${Math.floor(
          100 - (clipRight / containerEl.offsetWidth) * 100
        ).toFixed()}% 0 ${Math.floor(
          (clipLeft / containerEl.offsetWidth) * 100
        ).toFixed()}%)`;
      }
    }
  }, [isActive, activeRef, containerRef]);

  return (
    <NavLink
      ref={isActive ? activeRef : null}
      href={href}
      css={styles.headerNavLink}
      {...props}
    />
  );
}
function Nav(props) {
  const containerRef = useRef(null);

  return (
    <nav css={styles.nav}>
      <ul css={styles.links} {...props}>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>

      {/* `clip-path` transition between active links */}
      <div aria-hidden ref={containerRef} css={styles.clipPathContainer}>
        <ul css={[styles.links, styles.clipPathLinks]} {...props}>
          {links.map((link) => (
            <li key={`hidden-${link.title}`}>
              <HeaderNavLink href={link.href} containerRef={containerRef}>
                {link.title}
              </HeaderNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export { NavLink };
export default Nav;
