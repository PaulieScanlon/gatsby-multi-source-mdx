import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const {
    allMdx: { edges }
  } = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>Index Page</h1>
      <ul>
        allMdx
        {edges.map((item, index) => {
          const {
            slug,
            frontmatter: { title }
          } = item.node;

          return (
            <li key={index}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default IndexPage;
