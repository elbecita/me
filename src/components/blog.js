'use strict';

import React from 'react';
import Projects from './projects';

const Blog = () => {
  const description = 'Here you will find personal projects I work on, articles about technologies I try, ' +
    'my coding experiments, etc.';
  return (
    <div className="container-fluid blog-background">
      <div className="container">
        <section id="my-projects" className="section py-4 justify-content-center">
          <h1 className="section-heading pt-4">My projects</h1>
          <p className="section-description">{description}</p>
          <div className="row justify-content-center">
            <Projects />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
