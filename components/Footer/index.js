import { useMemo } from 'react';
import Monogram from '../Monogram';
import { getSocials } from '../../lib/socials';
import * as styles from './styles';

function Footer({ ...props }) {
  const links = useMemo(() => getSocials().filter((link) => link.footer), []);

  return (
    <footer css={styles.footer} {...props}>
      <div css={styles.content}>
        <span>© Aaron Agarunov</span>
        {links.map((link) => (
          <a
            key={link.title}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            css={styles.link}
          >
            <link.icon width={14} height={14} />
          </a>
        ))}
        <a href="#top" css={styles.link}>
          <span role="img" aria-label="arrow pointing to top of page">
            ↑
          </span>
        </a>
      </div>
      <Monogram css={[styles.icon, styles.monogram]} />
    </footer>
  );
}

export default Footer;
