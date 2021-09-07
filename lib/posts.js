import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markdown';

function dateSortDesc(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory, 'utf8');
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostById(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const html = await markdownToHtml(matterResult);

  return {
    id,
    html,
    ...matterResult.data,
  };
}

export function getPosts() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory, 'utf8');
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => dateSortDesc(a, b));
}

export async function getPostsByTag(tag) {
  const posts = getPosts();

  return posts
    .filter((post) => post.tags.includes(tag))
    .sort(({ date: a }, { date: b }) => dateSortDesc(a, b));
}
