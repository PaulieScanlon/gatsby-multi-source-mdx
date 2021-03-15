import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, variant, client },
      body
    }
  }
}) => {
  return (
    <main>
      <h1>{`title - ${title}`}</h1>
      <h2>{`variant - ${variant}`}</h2>
      <h3>{`client - ${client}`}</h3>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </main>
  );
};

export default ProjectTemplate;
