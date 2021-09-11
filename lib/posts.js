import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToHtml, mdxToHtml, readingTime } from './markdown';

function sortDesc(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}

const postsDirectory = path.join(process.cwd(), 'posts');
const defaultOptions = { directory: postsDirectory };

export function getPostIds(options = defaultOptions) {
  const fileNames = fs.readdirSync(options.directory, 'utf8');
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostById(id, options = defaultOptions) {
  const fullPath = path.join(options.directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use `gray-matter` to parse the post metadata section
  const matterResult = matter(fileContents);
  const { content, data } = matterResult;

  let html = await markdownToHtml(matterResult);
  const timeToRead = readingTime(html);

  html = await mdxToHtml(content, { scope: data });

  return {
    id,
    html,
    timeToRead,
    ...data,
  };
}

export function getPosts(options = defaultOptions) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(options.directory, 'utf8');
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(options.directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => sortDesc(a, b));
}

export async function getPostsByTag(tag, options = defaultOptions) {
  const posts = getPosts(options);

  return posts
    .filter((post) => post.tags.includes(tag))
    .sort(({ date: a }, { date: b }) => sortDesc(a, b));
}
