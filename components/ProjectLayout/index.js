import Card from '../Card';
import { MDX } from '../Markdown';
import { NavLink } from '../Nav';
import Link from '../Link';
import * as styles from './styles';

const formatDate = (date) =>
  new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });

function Project({ title, description, date, html, live, code }) {
  return (
    <>
      <nav css={styles.nav}>
        <Card css={styles.navCard}>
          <NavLink href="/projects" css={styles.navLink}>
            <span role="img" aria-label="arrow pointing back">
              ↖
            </span>
            All Projects
          </NavLink>
        </Card>
      </nav>
      <article css={styles.article}>
        <header css={styles.header}>
          <h1 css={styles.title}>{title}</h1>
          <div css={styles.links}>
            {live && <Link href={live}>Site</Link>}
            {code && <Link href={code}>Code</Link>}
          </div>
        </header>

        <section css={styles.hero}></section>

        <section css={styles.prose}>
          <p css={styles.date}>{formatDate(date)}</p>
          <p>{description}</p>
          <hr />
        </section>

        <MDX css={styles.prose} source={html} />
      </article>
    </>
  );
}

export default Project;
