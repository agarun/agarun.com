import path from 'path';
import { getPostIds, getPostById, getPosts, getPostsByTag } from './posts';

const projectsDirectory = path.join(process.cwd(), 'projects');
const defaultOptions = { directory: projectsDirectory };

export function getProjectIds() {
  return getPostIds(defaultOptions);
}

export async function getProjectById(id) {
  return getPostById(id, defaultOptions);
}

export function getProjects() {
  return getPosts(defaultOptions);
}

export async function getProjectsByTag(tag) {
  return getPostsByTag(defaultOptions);
}
