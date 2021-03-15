import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const Mdx = ({
  data: {
    mdx: {
      frontmatter: { id, title, variant, tags },
      body
    }
  }
}) => {
  return (
    <main>
      <h1>{`title - ${title}`}</h1>
      <h2>{`id - ${id}`}</h2>
      <h3>{`variant - ${variant}`}</h3>
      <ul>
        tags
        {tags
          ? tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })
          : null}
      </ul>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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
        tags
      }
      body
    }
  }
`;

export default Mdx;
