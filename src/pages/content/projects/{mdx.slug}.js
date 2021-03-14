import React from 'react';
import { graphql } from 'gatsby';

const Mdx = ({
  data: {
    mdx: {
      frontmatter: { id, title, variant }
    }
  }
}) => {
  return (
    <main>
      <h1>{title}</h1>
      <h2>{id}</h2>
      <h3>{variant}</h3>
    </main>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        id
        title
        variant
      }
    }
  }
`;

export default Mdx;
