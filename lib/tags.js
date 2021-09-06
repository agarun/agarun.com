import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { getFiles } from './markdown';

const root = process.cwd();

export function formatTag(tag) {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export async function getTags(type) {
  const tagToCount = {};

  const files = await getFiles(type);
  files.forEach((file) => {
    const fileContents = fs.readFileSync(
      path.join(root, 'data', type, file),
      'utf8'
    );
    const { data } = matter(fileContents);

    if (data.tags && !data.draft) {
      for (const tag of data.tags) {
        const formattedTag = formatTag(tag);
        if (formattedTag in tagToCount) {
          tagToCount[formattedTag] += 1;
        } else {
          tagToCount[formattedTag] = 1;
        }
      }
    }
  });

  return tagToCount;
}
