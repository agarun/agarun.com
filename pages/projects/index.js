import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { getProjects } from '../../lib/projects';
import {
  MSKIcon,
  AppleIcon,
  ArrowUpRightIcon,
  Q3PIcon,
} from '../../components/Icon';
import ScrollFade from '../../components/ScrollFade';
import useColorMode from '../../lib/hooks/useColorMode';

function Link({ href, children, ...props }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ display: 'flex', overflow: 'hidden' }}
      layout
      {...props}
    >
      {children}
      <motion.span
        style={{ display: 'inline-block', height: 0 }}
        variants={{
          hidden: {
            opacity: 0,
            translateX: -24,
            translateY: 24,
            width: 0,
          },
          visible: {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            width: 20,
            transition: {
              duration: 0.24,
            },
          },
        }}
        initial="hidden"
        animate={isHovering ? 'visible' : 'hidden'}
      >
        <ArrowUpRightIcon
          style={{ position: 'relative', left: 3, bottom: 3 }}
        />
      </motion.span>
    </motion.a>
  );
}

const titleIcon = {
  Apple: AppleIcon,
  MSK: MSKIcon,
  Q3P: Q3PIcon,
};

const styles = {
  cards: css`
    margin: calc(var(--spacing) * 8) calc(var(--spacing) * -6);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
    gap: calc(var(--spacing) * 4);
    width: calc(100% + calc(var(--spacing) * 12));

    @media (max-width: 960px) {
      margin-left: -10px;
      margin-right: -10px;
      width: calc(100% + 20px);
      grid-auto-rows: auto;
    }
  `,
  cardBackground: css`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    transition: background-color ease 150ms;
    background: var(--colors-white);

    &:hover {
      background-color: #fcfbff;
    }

    body.dark &:hover {
      background-color: #100f13;
    }
  `,
  card: css`
    padding: 36px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 24px;
    background-size: 100% 100%;
    transition: border-color ease 100ms;
    border: #f2f2f2 solid 10px;

    &:hover {
      border-color: #f2f2f3;
    }

    body.dark & {
      border-color: hsl(0, 0%, 5%);
      &:hover {
        border-color: hsl(240, 4%, 5%);
      }
    }
  `,
  title: css`
    margin: 0;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: -1.2px;
  `,
  fullTitle: css`
    font-size: 40px;
    font-weight: 400;
    color: var(--colors-grey-400);
    letter-spacing: -1.4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    body.dark & {
      color: var(--colors-grey-700);
    }

    @media (max-width: 960px) {
      display: none;
    }
  `,
  iconContainer: css`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: radial-gradient(circle, #0a0511, #3d3c3e);
    box-shadow:
      0 0 0 1.5px #f0f0f0,
      0 3px 7px rgba(0, 0, 0, 0.11);
    backdrop-filter: blur(10px);
    border: 2px solid var(--colors-static-white);
  `,
  icon: css`
    width: 44px;
    height: 44px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: #f7f7f7;
      border-radius: 12px;
      path {
        box-shadow:
          inset -5px -5px 10px rgba(0, 0, 0, 0.3),
          inset 5px 5px 10px rgba(255, 255, 255, 0.2);
      }
    }
  `,
  header: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  link: css`
    text-decoration: none;
    margin: 6px 0;
    padding: 12px 24px;
    border-radius: 32px;
    background: var(--colors-grey-50);
    box-shadow: 0 0 0 2px rgba(242, 242, 242, 0.67);
    transition: all ease 200ms;
    font-weight: 500;
    color: var(--colors-grey-600);
    z-index: 100;

    &:hover {
      background: var(--colors-white);
      box-shadow:
        0 0 10px 2px rgba(255, 255, 255, 0.08),
        0 0 20px 6px rgba(255, 255, 255, 0.08),
        0 0 30px 12px rgba(255, 255, 255, 0.14),
        0 0 50px 20px rgba(255, 255, 255, 0.18);
      color: var(--colors-accent);
      opacity: 0.98;
    }

    body.dark & {
      background: var(--colors-background);
      color: var(--colors-grey-800);
      box-shadow: 0 0 0 1px rgba(200, 200, 200, 0.15);

      &:hover {
        color: var(--colors-link);
      }
    }
  `,
  links: css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  `,
  summary: css`
    font-size: 22px;
    color: var(--colors-text-secondary-light);
    height: 66px;
    line-height: 1.5;

    body.dark & {
      color: var(--colors-text-secondary);
      text-shadow: 0px 1px 1px rgb(0, 0, 0, 0.9);
    }

    @media (max-width: 960px) {
      height: auto;
    }
  `,
  images: css`
    position: absolute;
    bottom: 10px;
    right: 36px;
    width: 100%;
    height: 100%;
    padding-left: 16px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;

    @media (max-width: 960px) {
      display: none;
    }
  `,
  image: css`
    position: relative;
    max-height: 400px;
    border: 5px solid #ffffff;
    border-radius: 12px;
    object-fit: contain;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: box-shadow 0.3s ease;
  `,
};

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: { projects },
  };
}

const mainProjectsAnimation = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.22, duration: 0.33 },
  }),
};

const restProjectsAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.22,
      duration: 0.33,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};

function ProjectImages({ project, projectIndex }) {
  const images = project.images;
  if (!images) return null;

  const summary = project.summary;
  const imageCoversSummary = summary.length > 30;
  const dy = imageCoversSummary ? -50 : 0;

  const maxWidth = project.links.length === 1 ? 720 : 600;
  const imageWidth = maxWidth / images.length;

  const rotateMultiplier = projectIndex % 2 === 0 ? 1 : -1;

  return (
    <div css={styles.images}>
      {images.map((image, index) => {
        if (images.length === 2 || images.length === 3) {
          return (
            <motion.div
              key={index}
              initial={{
                y: 40,
                rotate: rotateMultiplier * (index % 2 === 0 ? -1.5 : 1.5),
                zIndex: 1,
              }}
              whileHover={{
                y: imageCoversSummary ? -50 : -20,
                rotate: rotateMultiplier * (index % 2 === 0 ? -4 : 4),
                transition: { type: 'spring', stiffness: 300, damping: 20 },
                zIndex: 9,
              }}
              style={{
                display: 'inline-block',
              }}
            >
              <Image
                src={image.path}
                alt={image.alt}
                width={imageWidth}
                height={imageWidth}
                unoptimized
                css={styles.image}
                style={{
                  bottom: dy + (index % 2 === 0 ? -100 : -80),
                  left: index > 0 ? -40 : 0,
                  marginRight: images.length === 3 ? -20 : 0,
                }}
              />
            </motion.div>
          );
        }

        // 1 or 4+ images
        return (
          <motion.div
            key={index}
            initial={{
              y: 40,
              zIndex: 10 - index,
            }}
            whileHover={{
              y: -60,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
              zIndex: 20 - index,
            }}
            style={{
              marginRight: 8,
              position: 'absolute',
              display: 'inline-block',
              right: index * 32,
              width: 640,
              bottom: dy,
            }}
          >
            <Image
              src={image.path}
              alt={image.alt}
              css={styles.image}
              width={640}
              height={360}
              unoptimized
              style={{
                objectFit: 'cover',
                position: 'absolute',
                bottom: dy + -90 - index,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function Projects({ projects }) {
  const sectionRef = useRef(null);
  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    const x = Math.round((e.nativeEvent.offsetX / section.clientWidth) * 100);
    const y = Math.round((e.nativeEvent.offsetY / section.clientHeight) * 100);
    section.style.setProperty('--x', `${x}%`);
    section.style.setProperty('--y', `${y}%`);
  };

  const { colorMode } = useColorMode();

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove} css={styles.cards}>
      <Head>
        <title>Work ▪ Aaron Agarunov</title>
      </Head>

      {projects.map((project, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        const [isHovering, setIsHovering] = useState(false);
        const Icon = titleIcon[project.title];
        const variants =
          index < 4 ? mainProjectsAnimation : restProjectsAnimation;
        return (
          <motion.article
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            ref={ref}
            variants={variants}
            custom={index}
            key={project.title}
            css={styles.cardBackground}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              css={styles.card}
              whileHover={{
                background:
                  colorMode === 'dark'
                    ? 'radial-gradient(circle at bottom center, rgba(20, 88, 205, 0.42) 5%, rgba(20, 88, 2051, 0.17)25%, rgba(20, 88, 2051, 0.06) 50%, rgba(0, 0, 17, 0.04) 70%)'
                    : 'radial-gradient(circle at bottom center, rgba(183, 168, 255, .6) 5%, rgba(183, 168, 255, .3) 15%, rgba(183, 168, 255, .15) 30%, rgba(183, 168, 255, .05) 50%, rgba(183, 168, 255, .01) 70%)',
                backgroundSize: '100% 300%',
                backgroundPosition: 'center 80%',
                transition: {
                  duration: 0.35,
                  ease: 'easeOut',
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 50,
                exit: {
                  duration: 2,
                  ease: 'easeOut',
                },
              }}
            >
              <header css={styles.header}>
                {Icon && (
                  <div css={styles.iconContainer}>
                    <div css={styles.icon}>
                      <Icon width={30} height={30} />
                    </div>
                  </div>
                )}
                <h2 css={styles.title}>{project.title}</h2>
                <AnimatePresence>
                  {project.full_title && isHovering && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      css={styles.fullTitle}
                    >
                      {project.full_title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </header>
              <p css={styles.summary}>{project.summary}</p>
              <div css={styles.links}>
                {project.links?.map((link) => (
                  <Link key={link.url} href={link.url} css={styles.link}>
                    {link.title}
                  </Link>
                ))}
              </div>
              <ProjectImages project={project} projectIndex={index} />
            </motion.div>
          </motion.article>
        );
      })}

      <ScrollFade top bottom />
    </section>
  );
}

export default Projects;
