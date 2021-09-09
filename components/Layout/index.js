import { useRouter } from 'next/router';
import Nav, { NavLink } from '../Nav';
import ThemeSwitch from '../ThemeSwitch';
import Footer from '../Footer';
import * as styles from './styles';
import * as sharedStyles from '../../styles/shared';

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
          <h1 css={styles.title}>Aaron Agarunov</h1>
        </NavLink>
        <Nav />
        <ThemeSwitch css={[sharedStyles.icon, styles.themeSwitch]} />
      </header>
      <main role="main" css={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
