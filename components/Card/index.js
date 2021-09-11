import * as styles from './styles';

export function CardTitle({ children }) {
  return <h2 css={styles.title}>{children}</h2>;
}

export function CardDescription({ children }) {
  return <p css={styles.description}>{children}</p>;
}

function Card({ title, description, children, ...props }) {
  return (
    <article css={styles.card} {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {children}
    </article>
  );
}

export default Card;
