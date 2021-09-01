import { useRouter } from 'next/router';
import { NavLink } from '../Nav';
import Nav from '../Nav';
import * as styles from './styles';

function Layout({ children }) {
  const router = useRouter();
  const isRootPage = router.pathname.length <= 1;

  if (isRootPage) {
    return <div css={styles.container}>{children}</div>;
  }

  return (
    <div css={styles.container}>
      <header css={styles.header}>
        <NavLink href="/">
          <h1 css={styles.title}>Aaron Agarunov</h1>
        </NavLink>
        <Nav />
      </header>
      <main role="main" css={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
