import { useRouter } from 'next/router';
import { motion } from 'motion/react';
import Nav, { NavLink } from '../Nav';
import Footer from '../Footer';
import * as styles from './styles';

function HoverTitle({ children, delay = 0 }) {
  const transition = {
    ease: 'easeOut',
    duration: 0.47,
    delay,
  };
  return (
    <motion.div
      style={{
        height: '125%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        variants={{
          initial: {
            translateY: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          hover: {
            translateY: '-145%',
            opacity: 0.2,
            filter: 'blur(2.5px)',
          },
        }}
        transition={transition}
      >
        {children}
      </motion.div>
      <motion.div
        style={{ position: 'absolute', top: 0 }}
        variants={{
          initial: {
            filter: 'blur(5px)',
            opacity: 0,
            translateY: '145%',
          },
          hover: {
            filter: 'blur(0px)',
            opacity: 1,
            translateY: 0,
          },
        }}
        aria-hidden
        transition={transition}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Layout({ children }) {
  const router = useRouter();

  const isRootPage = router.pathname.length <= 1;
  if (isRootPage) {
    return <div css={styles.container}>{children}</div>;
  }

  return (
    <div css={styles.container}>
      <header id="top" css={styles.header}>
        <NavLink href="/">
          <motion.h1
            css={styles.title}
            whileHover="hover"
            initial="initial"
            animate="initial"
          >
            <HoverTitle>Aaron</HoverTitle>{' '}
            <HoverTitle delay={0.04}>Agarunov</HoverTitle>
          </motion.h1>
        </NavLink>
        <Nav />
      </header>
      <main role="main" css={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
