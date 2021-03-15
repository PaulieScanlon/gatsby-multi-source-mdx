import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import PostsTemplate from '../../../templates/posts-template';
import ProjectsTemplate from '../../../templates/projects-template';

const Mdx = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant }
    }
  }
}) => {
  const templates = {
    posts: <PostsTemplate data={data} />,
    projects: <ProjectsTemplate data={data} />
  };

  return (
    <Fragment>
      <Link to="/">Back</Link>
      {templates[variant] ? templates[variant] : null}
    </Fragment>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        variant
        tags
        client
      }
      body
    }
  }
`;

export default Mdx;
