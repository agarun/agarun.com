import { useRouter } from 'next/router';
import { getSocials } from '../../lib/socials';
import useColorMode from '../../lib/hooks/useColorMode';
import {
  GitHubIcon,
  TwitterIcon,
  ArrowTopIcon,
  InstagramIcon,
  PaletteIcon,
} from '../Icon';
import * as styles from './styles';

const icons = {
  GitHub: GitHubIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Top: ArrowTopIcon,
  Theme: PaletteIcon,
};

const links = getSocials().filter((link) => link.isFooterIcon);

const IconGrid = ({
  cellSize = 16,
  lineExtension = 5,
  lineColor = '#000000',
  lineWidth = 1,
  icons = [],
}) => {
  const columns = icons.length;
  const gridWidth = columns * cellSize;
  const totalWidth = gridWidth + lineExtension * 2;
  const totalHeight = cellSize + lineExtension * 2;

  const verticalLines = [];
  for (let i = 0; i <= columns; i++) {
    const isFullHeight = !(i === 0 || i === columns);
    const x = lineExtension + i * cellSize;
    verticalLines.push(
      <line
        key={`vline-${i}`}
        x1={x}
        y1={isFullHeight ? lineExtension : 0}
        x2={x}
        y2={isFullHeight ? totalHeight - lineExtension : totalHeight}
        stroke={lineColor}
        strokeWidth={i === 0 || i === columns ? lineWidth * 1 : lineWidth}
      />
    );
  }

  const cells = [];
  for (let i = 0; i < columns; i++) {
    const x = lineExtension + i * cellSize;
    cells.push(
      <foreignObject
        key={`cell-${i}`}
        width="100%"
        height="100%"
        transform={`translate(${x + 1}, ${lineExtension + 1})`}
      >
        {icons[i]}
      </foreignObject>
    );
  }

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={0}
        y1={lineExtension}
        x2={totalWidth}
        y2={lineExtension}
        stroke={lineColor}
        strokeWidth={lineWidth * 1}
      />
      <line
        x1={0}
        y1={lineExtension + cellSize}
        x2={totalWidth}
        y2={lineExtension + cellSize}
        stroke={lineColor}
        strokeWidth={lineWidth * 1}
      />

      {verticalLines}

      {cells}
    </svg>
  );
};

const newTabProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

function Footer({ ...props }) {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  const isBlogPage = router.pathname.includes('posts/');
  const iconsLinks = [
    ...links,
    {
      title: 'Theme',
      onClick: toggleColorMode,
    },
    isBlogPage && {
      title: 'Top',
      href: '#top',
    },
  ].filter(Boolean);

  return (
    <footer css={styles.footer} {...props}>
      <IconGrid
        cellSize={25}
        lineExtension={6}
        lineColor="#aaaaaa"
        lineWidth={0.25}
        icons={iconsLinks.map((link) => {
          const Icon = icons[link.title];

          if (link.onClick) {
            return (
              <button key={link.title} css={styles.link} onClick={link.onClick}>
                <Icon width={15} height={15} />
              </button>
            );
          }

          return (
            <a
              key={link.title}
              {...(link.href?.startsWith('#') ? {} : newTabProps)}
              href={link.href}
              css={styles.link}
            >
              <Icon width={15} height={15} />
            </a>
          );
        })}
      />
    </footer>
  );
}

export default Footer;
