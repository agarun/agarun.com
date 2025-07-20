import { Fragment } from 'react';
import { css } from '@emotion/react';
import { NavLink } from '../../components/Nav';
import Date from '../../components/PostLayout/components/Date';
import { getPosts } from '../../lib/posts';
import AnimateArrowRight from '../../components/AnimateArrowRight';
import { useState } from 'react';

const styles = {
  wrapper: css`
    margin: 0 calc(var(--spacing) * -6);
    padding-bottom: 200px;
    min-height: 720px;
    height: 100%;
    position: relative;
    width: calc(100% + calc(var(--spacing) * 12));
    @media (max-width: 767px) {
      margin: 0;
      padding-bottom: 80px;
      width: 100%;
    }
  `,
  container: css`
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  title: css`
    margin-top: calc(var(--spacing) * 24);
    margin-bottom: calc(var(--spacing) * 12);
    padding: 0 calc(var(--spacing) * 6);
    font-size: calc(var(--font-size-scale) * 62px);
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 1.33;
    flex-basis: 50%;
    @media (max-width: 767px) {
      margin-bottom: calc(var(--spacing) * 2);
      padding: 0;
    }
  `,
  subtitle: css`
    margin-top: calc(var(--spacing) * 24);
    margin-bottom: 28px; /* default */
    padding: calc(var(--spacing) * 6) calc(var(--spacing) * 4.5);
    position: relative;
    font-size: calc(var(--font-size-scale) * 28px);
    color: var(--colors-text-secondary);
    font-weight: 400;
    z-index: 1;
    flex-basis: 50%;
    line-height: 1.33;
    @media (max-width: 767px) {
      margin-top: 0;
      padding: 0;
    }
  `,
  list: css`
    padding: 0 calc(var(--spacing) * 6);
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
      padding: 0;
    }
  `,
  listItem: css`
    margin: calc(var(--spacing) * 3) 0;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    font-size: calc(var(--font-size-scale) * 24px);
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.5px;
  `,
  listItemHeading: css`
    display: flex;
    flex-direction: column;
  `,
  listItemBackground: css`
    position: absolute;
    top: 0px;
    margin: calc(var(--spacing) * -3) calc(var(--spacing) * -6);
    width: calc(100% + var(--spacing) * 12);
    height: calc(100% + var(--spacing) * 6);
    pointer-events: none;
    @media (max-width: 767px) {
      margin: calc(var(--spacing) * -1) calc(var(--spacing) * -1);
      width: calc(100% + var(--spacing) * 0.5);
      height: calc(100% + var(--spacing) * 2);
    }
    & > div {
      margin: var(--spacing);
      width: calc(100% - var(--spacing) * 2);
      height: calc(100% - var(--spacing) * 2);
      border-radius: 12px;
      border: 1px dashed rgb(218, 218, 218);
      body.dark & {
        border-color: var(--colors-border);
      }
      @media (max-width: 767px) {
        margin: 0;
        padding: var(--spacing) * 4;
        width: 100%;
        height: 100%;
      }
    }
  `,
  keylineVertical: css`
    position: absolute;
    margin: calc(var(--spacing) * -6) 0;
    width: 1px;
    height: 100%;
    background: rgba(222, 222, 222);
    &[data-fade='true'] {
      background: linear-gradient(
        to top,
        rgba(222, 222, 222, 0) 0%,
        var(--colors-border) 33%
      );
    }
  `,
  keylineHorizontal: css`
    margin: 0 calc(var(--spacing) * -6);
    width: calc(100% + calc(var(--spacing) * 12));
    height: 1px;
    background: rgba(222, 222, 222);
    &[data-fade='true'] {
      background: linear-gradient(
        to right,
        rgba(222, 222, 222, 0) 0%,
        var(--colors-border) 33%
      );
    }

    body.dark & {
      background: var(--colors-border);
    }
  `,
  keylineMobile: css`
    @media (max-width: 767px) {
      display: none;
    }
  `,
};
export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: { posts },
  };
}

function Keyline({
  orientation = 'horizontal',
  fade = false,
  hideOnMobile = true,
  ...props
}) {
  return (
    <div
      css={[
        styles.base,
        orientation === 'vertical' && styles.keylineVertical,
        orientation === 'horizontal' && styles.keylineHorizontal,
        hideOnMobile && styles.keylineMobile,
      ]}
      data-fade={fade}
      aria-hidden
      {...props}
    />
  );
}

function Posts({ posts }) {
  return (
    <section css={styles.wrapper}>
      <Keyline
        orientation="horizontal"
        css={styles.horizontalKeyline}
        aria-hidden
      />
      <Keyline orientation="vertical" fade style={{ left: 0 }} />
      <Keyline orientation="vertical" fade style={{ right: 0 }} />
      <Keyline
        orientation="vertical"
        fade
        style={{
          left: '50%',
          height: 444,
          margin: 0,
          zIndex: 0,
        }}
      />

      <>
        <div css={styles.container}>
          <h1 css={styles.title}>Writing</h1>
          <div css={styles.subtitle}>
            <Keyline
              orientation="horizontal"
              fade
              style={{
                margin: 0,
                width: '150%',
                position: 'absolute',
                right: '0',
              }}
            />
            <div style={{ paddingTop: 24, marginBottom: 48 }}>
              Personal and technical notes, posts, and essays
            </div>
          </div>
        </div>

        <ul css={styles.list}>
          {posts.map(({ id, date, title }, index) => {
            const [isHovering, setIsHovering] = useState(false);

            return (
              <Fragment key={id}>
                <li css={styles.listItem}>
                  <div css={styles.listItemHeading}>
                    <NavLink
                      href={`/posts/${id}`}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {title}
                    </NavLink>
                    <Date style={isHovering ? { opacity: 0.75 } : {}}>
                      {date}
                    </Date>
                  </div>
                  {isHovering && <AnimateArrowRight isHovering={isHovering} />}
                  {index % 2 !== 0 && (
                    <div css={styles.listItemBackground} aria-hidden>
                      <div />
                    </div>
                  )}
                </li>
                {index !== posts.length - 1 && (
                  <Keyline orientation="horizontal" />
                )}
              </Fragment>
            );
          })}
        </ul>
        <Keyline orientation="horizontal" />
      </>
    </section>
  );
}

export default Posts;
