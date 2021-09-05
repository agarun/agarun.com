import Image from 'next/image';
import profilePhoto from '../../public/images/me.jpg';
import PrevNext from './components/PrevNext';
import Date from './components/Date';
import * as styles from './styles';

function Post({ title, date, html, prev, next }) {
  return (
    <article css={styles.article}>
      <h1 css={styles.title}>{title}</h1>
      <h2>
        <Date>{date}</Date>
      </h2>
      <div css={styles.avatar}>
        <Image
          src={profilePhoto}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="Photo of the author Aaron"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} css={styles.prose} />
      <PrevNext prev={prev} next={next} />
    </article>
  );
}

export default Post;
