import * as styles from './styles';

function Card({ children }) {
  return <article css={styles.card}>{children}</article>;
}

export default Card;
