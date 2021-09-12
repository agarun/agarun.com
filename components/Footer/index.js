import Monogram from '../Monogram';
import { getSocials } from '../../lib/socials';
import { GitHubIcon, LinkedInIcon, TwitterIcon, ArrowTopIcon } from '../Icon';
import * as styles from './styles';
import * as sharedStyles from '../../styles/shared';

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
};

const links = getSocials().filter((link) => link.isFooterIcon);

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
          <ArrowTopIcon width={14} height={14} />
        </a>
      </div>
      <Monogram css={[sharedStyles.icon, styles.monogram]} />
    </footer>
  );
}

export default Footer;
