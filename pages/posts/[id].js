/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { getPostById, getPostIds, getPosts } from '../../lib/posts';
import PostLayout from '../../components/PostLayout';
import 'prism-theme-vars/base.css';

export async function getStaticPaths() {
  const postIds = getPostIds();
  return {
    paths: postIds,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const post = await getPostById(id);
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.id === id);
  const prev = posts[index + 1] || null;
  const next = posts[index - 1] || null;
  return {
    props: { post, prev, next },
  };
}

function Post({ post, prev, next }) {
  return (
    <>
      <Head>
        <title>{post.title} — Aaron Agarunov</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cousine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostLayout {...post} prev={prev} next={next} />
    </>
  );
}

export default Post;
