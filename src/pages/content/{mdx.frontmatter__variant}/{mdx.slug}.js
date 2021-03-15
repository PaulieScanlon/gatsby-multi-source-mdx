import React from 'react';
import { graphql } from 'gatsby';

import PostTemplate from '../../../templates/post-template';
import ProjectTemplate from '../../../templates/project-template';

const Mdx = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant }
    }
  }
}) => {
  if (variant === 'post') {
    return <PostTemplate data={data} />;
  }
  if (variant === 'project') {
    return <ProjectTemplate data={data} />;
  }

  return null;
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        id
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
