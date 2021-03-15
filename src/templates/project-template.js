import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { id, title, variant, client },
      body
    }
  }
}) => {
  return (
    <main>
      <h1>{`title - ${title}`}</h1>
      <h2>{`client - ${client}`}</h2>
      <h3>{`id - ${id}`}</h3>
      <h4>{`variant - ${variant}`}</h4>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </main>
  );
};

export default ProjectTemplate;
