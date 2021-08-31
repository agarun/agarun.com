import * as styles from './styles';

function Layout({ children }) {
  return (
    <main role="main" css={styles.main}>
      {children}
    </main>
  );
}

export default Layout;
