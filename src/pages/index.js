import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <ul>
        <li>
          <Link to="content/posts/post-1">content/posts/post-1</Link>
        </li>
        <li>
          <Link to="content/projects/project-1">
            content/projects/project-1
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
