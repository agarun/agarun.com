import Monogram from '../Monogram';
import { getSocials } from '../../lib/socials';
import GitHubIcon from '../GitHubIcon';
import LinkedInIcon from '../LinkedInIcon';
import TwitterIcon from '../TwitterIcon';
import * as styles from './styles';

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
};

const links = getSocials().filter((link) => link.footer);

function Footer({ ...props }) {
  return (
    <footer css={styles.footer} {...props}>
      <div css={styles.content}>
        <span>© Aaron Agarunov</span>
        {links.map((link) => {
          const Icon = icons[link.title];

          return (
            <a
              key={link.title}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              css={styles.link}
            >
              <Icon width={14} height={14} />
            </a>
          );
        })}
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
