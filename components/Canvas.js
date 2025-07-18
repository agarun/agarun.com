import { css } from '@emotion/react';
import { motion } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useMediaQuery from '../lib/hooks/useMediaQuery';

const size = 30;
const h = (size * Math.sqrt(3)) / 2;
const mobileQuery = '(max-width: 500px)';
const mobileWidth = 313;
const mobileLeft = h * 0.84 * 3;
const desktopWidth = 417;
const desktopLeft = h * 1.51 * 3;
const height = 240;

const styles = {
  container: css`
    position: relative;
    margin-top: var(--spacing) * 0.5;
    width: ${desktopWidth}px;
    height: ${height}px;
    border: 1px solid rgba(200, 200, 200, 0.25);
    border-radius: 8px;

    & polygon {
      transition: all ease 100ms;
    }

    @media (${mobileQuery}) {
      width: ${mobileWidth}px;
    }
  `,
  listItem: css`
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: -0.4px;
    & strong {
      color: hsl(250deg, 79%, 63%, 0.75);
    }
    & em {
      opacity: 0.75;
    }
    & span {
      color: var(--colors-text-secondary);
      letter-spacing: -0.2px;
      font-size: 16px;
      white-space: nowrap;

      @media (${mobileQuery}) {
        font-size: 15px;
      }
    }
  `,
  canvasLink: css`
    text-decoration: none;
    cursor: alias;
    padding: 12px 16px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.38);
    border-radius: 8px;
  `,
  canvasLinkHeading: css`
    font-size: 11.5px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0.9;
    color: transparent;
    background: linear-gradient(
      to top,
      var(--colors-grey-400) 0%,
      var(--colors-text-secondary) 100%
    );
    background-clip: text;
  `,
  canvasRectangle: css`
    position: absolute;
    display: flex;
    justify-content: center;
    padding-top: 3px;
    align-items: center;
    font-size: 11.5px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.45);
    opacity: 0.5;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    text-transform: uppercase;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `,
  canvasRectangleBackground: css`
    position: absolute;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.4);
    opacity: 0.2;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    filter: drop-shadow(-4px 3px 10px rgba(0, 0, 0, 0.4));
  `,
};

const TOP = 0;
const BOTTOM = 1;
const RIGHT = 2;

function line(row1, col1, pos1, row2, col2, pos2) {
  const point1 = getPointCoordinates(row1, col1, pos1);
  const point2 = getPointCoordinates(row2, col2, pos2);
  return (
    <line
      key={`line-${row1}-${col1}-${pos1}-${row2}-${col2}-${pos2}`}
      x1={point1.x}
      y1={point1.y}
      x2={point2.x}
      y2={point2.y}
      stroke="rgba(0, 100, 200, 0.1)"
      strokeWidth="2"
    />
  );
}

function shape(row1, col1, pos1, row2, col2, pos2) {
  const point1 = getPointCoordinates(row1, col1, pos1);
  const point2 = getPointCoordinates(row2, col2, pos2);
  return (
    <polygon
      key={`shape-${row1}-${col1}-${pos1}-${row2}-${col2}-${pos2}`}
      points={`${point1.x},${point1.y} ${point2.x},${point2.y}`}
      stroke="rgba(0, 100, 200, 0.1)"
      strokeWidth="2"
    />
  );
}

function getPointCoordinates(row, col, pos) {
  const offsetY = row * (size / 2);
  const rowIsEven = row % 2 === 0;
  const offsetX = col * h;
  const isPointingRight = (col % 2 === 0) === rowIsEven;

  let x, y;

  if (isPointingRight) {
    // Triangle pointing right
    switch (pos) {
      case TOP: // Left-top vertex
        x = offsetX;
        y = offsetY;
        break;
      case BOTTOM: // Left-bottom vertex
        x = offsetX;
        y = offsetY + size;
        break;
      case RIGHT: // Right vertex
        x = offsetX + h;
        y = offsetY + size / 2;
        break;
      default:
        throw new Error('Position must be 0, 1, or 2');
    }
  } else {
    // Triangle pointing left
    switch (pos) {
      case TOP: // Right-top vertex
        x = offsetX + h;
        y = offsetY;
        break;
      case BOTTOM: // Right-bottom vertex
        x = offsetX + h;
        y = offsetY + size;
        break;
      case RIGHT: // Left vertex
        x = offsetX;
        y = offsetY + size / 2;
        break;
      default:
        throw new Error('Position must be 0, 1, or 2');
    }
  }

  return { x, y };
}

function points(row, col) {
  const offsetY = row * (size / 2);
  const rowIsEven = row % 2 === 0;
  const offsetX = col * h;
  const isPointingRight = (col % 2 === 0) === rowIsEven;

  let points;

  if (isPointingRight) {
    points = `${offsetX},${offsetY} ${offsetX},${offsetY + size} ${offsetX + h},${offsetY + size / 2}`;
  } else {
    points = `${offsetX + h},${offsetY} ${offsetX + h},${offsetY + size} ${offsetX},${offsetY + size / 2}`;
  }

  return points;
}

const MotionLink = motion.create(Link);

function Canvas({ projects = [] }) {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const hasDimensions = dimensions.width && dimensions.height;
  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [hoverId, setHoverId] = useState(null);

  const createTriangleGrid = () => {
    const cols = Math.ceil(dimensions.width / h) + 1;
    const rows = Math.ceil(dimensions.height / (size / 2)) + 1;

    const cells = [];
    const lines = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const id = `triangle-${row}-${col}`;

        const hoverStyle =
          hoverId === id
            ? {
                fill: 'rgba(0, 0, 0, 0.01)',
                stroke: 'rgba(0, 0, 0, 0.14)',
              }
            : {};

        cells.push(
          <polygon
            key={id}
            points={points(row, col)}
            fill="transparent"
            stroke="rgba(200, 200, 200, 0.1)"
            onMouseEnter={() => setHoverId(id)}
            onMouseLeave={() => setHoverId(null)}
            data-row={row}
            data-col={col}
            {...hoverStyle}
          />
        );
      }
    }

    for (let col = 0; col <= cols; col++) {
      lines.push(
        <line
          key={`vertical-${col}`}
          x1={col * h}
          y1="0"
          x2={col * h}
          y2={dimensions.height}
          stroke="rgba(200, 200, 200, 0.14)"
          strokeWidth="1"
        />
      );
    }

    return { lines, cells };
  };

  const { lines, cells } = hasDimensions
    ? createTriangleGrid()
    : { lines: [], cells: [] };

  const SELECTED_WORK = ['Apple', 'MSK'].map((title) =>
    projects.find((project) => title === project.title)
  );
  const SELECTED_PROJECTS = [
    'CELL-E 2',
    'ronivonu',
    'Photography Portfolio',
  ].map((title) => projects.find((project) => title === project.title));

  // TODO: Trigger whileTap entire animation with a single tap
  const isMobile = useMediaQuery(mobileQuery);

  return (
    <div ref={ref} css={styles.container}>
      <motion.div
        whileHover="hover"
        whileTap="hover"
        initial="initial"
        animate="initial"
        style={{ position: 'relative' }}
      >
        <motion.div
          initial={{ translateY: 7, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 1, ease: 'easeOut', duration: 0.36 }}
        >
          <motion.div
            variants={{
              initial: {
                top: size * 1.04 * 3,
                left: isMobile ? mobileLeft : desktopLeft,
                transform: 'rotate(330deg) skewX(30deg) skewY(0deg)',
                width: size * 6,
                height: h * 2,
                borderRadius: 1,
              },
              hover: {
                top: 0,
                left: 0,
                transform: 'rotate(360deg) skewX(0deg) skewY(0deg)',
                width: isMobile ? mobileWidth : desktopWidth,
                height,
                borderRadius: 8,
                transition: {
                  duration: 0.32,
                },
              },
            }}
            css={styles.canvasRectangle}
          >
            Recent Work
          </motion.div>
          <motion.div
            variants={{
              initial: {
                top: size * 1.13 * 3,
                left: isMobile ? mobileLeft : desktopLeft,
                transform: 'rotate(330deg) skewX(30deg) skewY(0deg)',
                width: size * 6,
                height: h * 2,
                borderRadius: 1,
              },
              hover: {
                top: 0,
                left: 0,
                transform: 'rotate(360deg) skewX(0deg) skewY(0deg)',
                width: isMobile ? mobileWidth : desktopWidth,
                height,
                borderRadius: 8,
                transition: {
                  duration: 0.36,
                },
              },
            }}
            css={styles.canvasRectangleBackground}
          ></motion.div>
        </motion.div>
        <MotionLink
          href="/projects"
          variants={{
            initial: {
              translateY: 4,
              filter: 'blur(1px)',
              opacity: 0,
            },
            hover: {
              translateY: 0,
              filter: 'blur(0px)',
              opacity: 1,
              transition: {
                delay: 0.47,
                ease: 'easeOut',
              },
            },
          }}
          css={styles.canvasLink}
          style={{
            width: isMobile ? mobileWidth : desktopWidth,
            height,
          }}
        >
          <div>
            <p style={{ marginTop: 5 }} css={styles.canvasLinkHeading}>
              Clients
            </p>
            <ul>
              {SELECTED_WORK.map((item) => (
                <li key={item.title} css={styles.listItem}>
                  <strong>{item.title}</strong>
                  <span>
                    {' '}
                    <em>▪</em> {item.blurb}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p css={styles.canvasLinkHeading}>Projects</p>
            <ul>
              {SELECTED_PROJECTS.map((item) => (
                <li key={item.title} css={styles.listItem}>
                  <strong>{item.short_title || item.title}</strong>
                  <span>
                    {' '}
                    <em>▪</em> {item.blurb}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </MotionLink>
      </motion.div>

      {hasDimensions && (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <g>{lines}</g>
          <g>{cells}</g>
        </svg>
      )}
    </div>
  );
}

export default Canvas;
