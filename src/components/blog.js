'use strict';

import React from 'react';

const Blog = () => {
  const description = 'Here you will find articles about technologies I try, small projects I work on, ' +
    'my code experiments, etc.';
  return (
    <div className="container-fluid blog-background">
      <div className="container">
        <section id="blog" className="section py-4 justify-content-center">
          <h1 className="section-heading pt-4">Blog</h1>
          <p className="section-description">{description}</p>
          <div className="row justify-content-center">
            <div className="card-deck">
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">My 1st article</h4>
                  <p className="card-text">In progress...</p>
                  <a href="#" className="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
