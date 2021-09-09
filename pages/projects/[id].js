import { getProjectIds, getProjectById } from '../../lib/projects';

export async function getStaticPaths() {
  const projectIds = getProjectIds();
  return {
    paths: projectIds,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const project = await getProjectById(id);
  return {
    props: { project },
  };
}

function Project({ project }) {
  return null;
}

export default Project;
