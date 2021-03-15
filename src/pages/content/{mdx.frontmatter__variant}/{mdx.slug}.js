import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

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
  const templates = {
    post: <PostTemplate data={data} />,
    project: <ProjectTemplate data={data} />
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
