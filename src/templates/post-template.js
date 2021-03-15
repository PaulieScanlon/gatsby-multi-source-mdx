import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const PostTemplate = ({
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

export default PostTemplate;
